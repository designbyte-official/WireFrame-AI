-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updatedAt = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create projects table
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  "slugId" TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  "userId" UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Add trigger for projects
CREATE TRIGGER update_projects_modtime
BEFORE UPDATE ON projects
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

-- Enable RLS for projects
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own projects" ON projects FOR SELECT USING (auth.uid() = "userId");
CREATE POLICY "Users can insert their own projects" ON projects FOR INSERT WITH CHECK (auth.uid() = "userId");
CREATE POLICY "Users can update their own projects" ON projects FOR UPDATE USING (auth.uid() = "userId");
CREATE POLICY "Users can delete their own projects" ON projects FOR DELETE USING (auth.uid() = "userId");

-- Create pages table
CREATE TABLE pages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  "projectId" UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  "rootStyles" TEXT NOT NULL,
  "htmlContent" TEXT NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Add trigger for pages
CREATE TRIGGER update_pages_modtime
BEFORE UPDATE ON pages
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

-- Enable RLS for pages
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view pages of their projects" ON pages FOR SELECT USING (
  EXISTS (SELECT 1 FROM projects WHERE projects.id = pages."projectId" AND projects."userId" = auth.uid())
);
CREATE POLICY "Users can insert pages to their projects" ON pages FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM projects WHERE projects.id = pages."projectId" AND projects."userId" = auth.uid())
);
CREATE POLICY "Users can update pages of their projects" ON pages FOR UPDATE USING (
  EXISTS (SELECT 1 FROM projects WHERE projects.id = pages."projectId" AND projects."userId" = auth.uid())
);
CREATE POLICY "Users can delete pages of their projects" ON pages FOR DELETE USING (
  EXISTS (SELECT 1 FROM projects WHERE projects.id = pages."projectId" AND projects."userId" = auth.uid())
);

-- Create messages table
CREATE TABLE messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  "projectId" UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  parts JSONB NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS for messages
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view messages of their projects" ON messages FOR SELECT USING (
  EXISTS (SELECT 1 FROM projects WHERE projects.id = messages."projectId" AND projects."userId" = auth.uid())
);
CREATE POLICY "Users can insert messages to their projects" ON messages FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM projects WHERE projects.id = messages."projectId" AND projects."userId" = auth.uid())
);
CREATE POLICY "Users can delete messages of their projects" ON messages FOR DELETE USING (
  EXISTS (SELECT 1 FROM projects WHERE projects.id = messages."projectId" AND projects."userId" = auth.uid())
);

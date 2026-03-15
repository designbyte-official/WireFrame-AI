import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';

export const ProjectGrid = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await fetch(`/api/project`);
      if (!res.ok) return [];
      return res.json() as Promise<{
        id: string;
        title: string;
        slugId: string;
        createdAt: string
      }[]>;
    }
  });

  if (isLoading) return <ProjectGridSkeleton />;
  if (!projects || projects.length === 0) {
    return null;
  }
  
  return (
    <div className="w-full mx-auto px-4 md:px-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground tracking-tight">
          Recent Projects
        </h3>
        <div className="h-px flex-1 bg-border/50 mx-4" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {projects?.map((project) => (
          <Link key={project.id} href={`/project/${project.slugId}`}
            className="group flex flex-col gap-3 transition-all">
            <div className="aspect-4/3 rounded-2xl bg-muted/20 overflow-hidden relative border border-dashed border-border/60 group-hover:border-solid group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.15)] transition-all duration-300">

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,21,255,0.4),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(252,66,255,0.4),transparent_60%)] mix-blend-screen" />
              </div>

              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity z-10" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-muted-foreground/40 group-hover:text-primary/40 group-hover:scale-110 transition-all duration-300">
                  {project.title.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
            <h4 className="text-sm font-medium truncate px-1 text-foreground/80 group-hover:text-foreground transition-colors">
              {project.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const ProjectGridSkeleton = () => (
  <div className="w-full mx-auto px-4 md:px-8 animate-pulse">
    <div className="h-6 w-40 bg-muted/60 rounded-md mb-6" />
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex flex-col gap-3">
          <div className="aspect-4/3 rounded-2xl bg-muted/20 border border-dashed border-border/50" />
          <div className="h-4 w-24 bg-muted/40 rounded-sm mx-1" />
        </div>
      ))}
    </div>
  </div>
);

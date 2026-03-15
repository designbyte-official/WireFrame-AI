import { ChatStatus } from 'ai';
import { motion } from "motion/react"
import { PromptInputMessage } from '../ai-elements/prompt-input';
import ChatInput from './chat-input';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Grainient = dynamic(() => import('../Grainient'), { ssr: false });
const MagicRings = dynamic(() => import('../MagicRings'), { ssr: false });
const ColorBends = dynamic(() => import('../ColorBends'), { ssr: false });

type PropsType = {
  input: string;
  isLoading: boolean;
  status: ChatStatus;
  setInput: (input: string) => void;
  onStop: () => void;
  onSubmit: (message: PromptInputMessage, options?: any) => void;
}

const NewProjectChat = ({
  input,
  isLoading,
  status,
  setInput,
  onStop,
  onSubmit
}: PropsType) => {

  const suggestions = [
    {
      label: "Modern HR SaaS Landing Page",
      value: "A clean, high-conversion B2B SaaS landing page for an HR and Payroll platform. The color palette features a vibrant royal blue primary color, bright yellow accent for CTA buttons, and alternating solid blue and ultra-light gray background sections. The hero section must have a solid blue background with a faint grid mesh, centered bold typography, and a massive overlapping 'bento-style' composition of floating white UI dashboard cards showing mock payroll data and SVG charts. Include a 3-column bento grid for features with mini UI elements, a 2-column section with a stylized SVG globe, a horizontal timeline-based pricing section on a blue background, a 3-column testimonials grid, and a massive bright yellow rounded CTA banner nested just above a clean footer."
    },
    {
      label: "AI SaaS Landing Page",
      value: "A cutting-edge landing page for an autonomous AI workflow platform. Deep space dark mode with vibrant indigo radial light-leaks, floating glassmorphic navbar, hero with glowing gradient text, bento grid showcasing features, and sleek pricing section."
    },
    {
      label: "B2B SaaS Landing",
      value: "A serious B2B SaaS marketing site with structured hero, client logos strip (Vercel, Linear, Notion, Stripe), feature sections with diagrams, data visualization preview, pricing tiers, FAQ accordion, and enterprise call-to-action. Clear hierarchy and strong spacing rhythm."
    },
    {
      label: "Sales Landing",
      value: "A high-contrast, modern B2B SaaS Sales landing page. The theme uses a crisp white background, deep navy/purple-black for inverted containers, and a vibrant Lime Green primary accent. The Hero features a bold H1 with an inline circular icon, next to a floating composition of white and lime-green UI dashboard cards with SVG bar charts. Below the hero is a massive, dark navy rounded-3xl container housing a 2x2 features grid with pill-shaped badges. Follow this with a complex 3-row white bento grid showcasing UI mockups (SVG maps, bar charts, and an overlapping dark stat card). Include a 'How it Works' section with a vertical numbered timeline alongside overlapping login UI mockups. Finish with a dark navy 3-column pricing container and a bright lime-green rounded CTA banner just above a clean, light footer."
    },
    {
      label: "FinTech Landing",
      value: "A Dribbble-quality landing page for a modern global payments app. The theme alternates between a deep, dark forest/emerald green and pristine white. The primary accent color is a vibrant neon Emerald Green. The Hero section is dark mode with an emerald radial light-leak, featuring a centered massive H1, a floating UI card representing a mobile banking interface, and smaller glassmorphic pill badges floating around it (e.g., 'Total Balance'). Follow this with a pristine white section containing a muted partner logo cloud, a 6-card bento grid for features with green icons, and two 2-column split sections matching text/checklists against large floating white UI cards. Include a dark-mode pricing section with 3 glassmorphic cards and emerald accents, a white testimonials grid, and a massive dark-green rounded CTA card with an inner radial glow placed just above a sleek, dark-mode footer."
    },
    {
      label: "Crypto Exchange",
      value: "A futuristic trading interface for a crypto exchange called 'Apex'. Deep midnight background with electric blue glows. Central trading chart with candlesticks, left order book panel, right trade history, top navbar with BTC $67,432 ETH $3,241 live prices, and glowing buy/sell buttons."
    },
    {
      label: "Payment Platform",
      value: "A high-conversion landing page for a payment link product. Strong hero with 'Accept Payments Instantly' headline, live payment preview mockup on the right, trust badges, feature grid explaining no-code checkout, use-case sections (Creators, SaaS, Freelancers), pricing comparison, and a bold CTA. Clean fintech-grade design."
    },
    {
      label: "Neobank Website",
      value: "A modern neobank marketing website. Confident hero with app preview, trust metrics row showing '2M+ users', '$4.2B processed', debit card showcase section, feature breakdown grid, comparison table vs traditional banks, testimonials, and strong sign-up CTA."
    },
  ];

  const handleSuggestionClick = (value: string) => {
    setInput(value);
  };

  return (
    <div className="w-full relative min-h-screen bg-background overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none -z-10 opacity-60 dark:opacity-40">
        <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-background to-transparent z-10" />
        <Grainient
          timeSpeed={0.15}
          color1="#3b15ff"
          color2="#fc42ff"
          color3="#000000"
          zoom={1.5}
          className="w-full h-full"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center px-4 pt-24 pb-12">

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center space-y-4 text-center mb-12 w-full pt-8 pb-4"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] sm:w-[150%] max-w-[1200px] h-[300%] pointer-events-none -z-10 opacity-60 mix-blend-screen">
              <MagicRings
                color="#fc42ff"
                colorTwo="#42fcff"
                ringCount={6}
                speed={1}
                attenuation={10}
                lineThickness={2}
                baseRadius={0.35}
                radiusStep={0.1}
                scaleRate={0.1}
                opacity={1}
                blur={0}
                noiseAmount={0.1}
                rotation={0}
                ringGap={1.5}
                fadeIn={0.7}
                fadeOut={0.5}
                followMouse={false}
                mouseInfluence={0.2}
                hoverScale={1.2}
                parallax={0.05}
                clickBurst={false}
              />
            </div>

            <div className="inline-flex items-center rounded-full border border-dashed border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4 shadow-[0_0_20px_rgba(var(--primary),0.15)] backdrop-blur-md">
              ✨ Design anything with AI
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-foreground via-foreground/90 to-muted-foreground max-w-4xl mx-auto leading-[1.1] pb-2">
              What are we building today?
            </h1>

            <p className="max-w-xl text-lg sm:text-xl text-muted-foreground mt-4 font-medium">
              Describe your vision, and watch <span className="text-foreground font-semibold">Wireframe.ai</span> generate production-ready code in seconds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="relative w-full max-w-3xl mb-16"
          >
            <div className="shadow-[0_0_50px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_0_50px_-15px_rgba(255,255,255,0.05)] rounded-2xl bg-background/80 backdrop-blur-xl border border-dashed border-border/50 transition-all hover:border-solid hover:border-border/80 group">
              <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <ChatInput
                input={input}
                isLoading={isLoading}
                status={status}
                setInput={setInput}
                onStop={onStop}
                onSubmit={onSubmit}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-full max-w-[1200px]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 px-4">
              {suggestions.slice(0, 4).map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (index * 0.05) }}
                  className="h-full"
                >
                  <button
                    type="button"
                    onClick={() => handleSuggestionClick(item.value)}
                    className="w-full h-full flex flex-col items-start justify-start p-6 text-left transition-all duration-300 border border-dashed border-border/60 bg-card/20 hover:bg-linear-to-br hover:from-primary/10 hover:to-transparent hover:border-solid hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] hover:-translate-y-1 rounded-2xl cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="flex items-center justify-between w-full mb-3">
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.label}</span>
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                        →
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground line-clamp-3 leading-relaxed font-medium">
                      {item.value}
                    </span>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="w-full max-w-[1200px] mt-12 mb-8"
          >
            <ProjectGrid />
          </motion.div>

        </div>
      </div>
    </div>
  )
}

const ProjectGrid = () => {
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
      }[]>
    }
  })

  console.log(projects)

  if (isLoading) return <ProjectGridSkeleton />
  if (!projects || projects.length === 0) {
    return null
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

              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                {/* @ts-expect-error ColorBends is untyped JSX and TS infers colors as never[] */}
                <ColorBends
                  colors={['#3b15ff', '#fc42ff', '#000000']}
                  speed={0.5}
                  frequency={2}
                  autoRotate={10}
                  className="w-full h-full"
                />
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
  )
}

const ProjectGridSkeleton = () => (
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

export default NewProjectChat

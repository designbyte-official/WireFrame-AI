import { ChatStatus } from 'ai';
import { motion } from "motion/react"
import { PromptInputMessage } from '../ai-elements/prompt-input';
import ChatInput from './chat-input';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { PROJECT_SUGGESTIONS } from '@/lib/constants/suggestions';
import { ProjectGrid } from './project-grid';

const MagicRings = dynamic(() => import('../MagicRings'), { ssr: false });

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



  const handleSuggestionClick = (value: string) => {
    setInput(value);
  };

  return (
    <div className="w-full relative min-h-screen bg-background overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none -z-10 opacity-60 dark:opacity-40">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/25 via-background to-background blur-3xl opacity-80" />
      </div>

      <div style={{ width: '100vw', height: '100vh', position: 'absolute' }}>
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


      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center px-4 pt-12 pb-8 relative z-10">

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center space-y-4 text-center mb-12 w-full pt-4 pb-0"
          >

            <Link href="https://studio.designbyte.dev?utm_source=wireframe&utm_medium=referral&utm_campaign=wireframe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-dashed border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-2 shadow-[0_0_20px_rgba(var(--primary),0.15)] backdrop-blur-md">
              ✨ Powered By DesignByte
            </Link>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.1] pb-2 text-transparent bg-clip-text bg-linear-to-r from-[#4927f6] via-[#f77bf9] to-[#7255ff] bg-size-[200%_auto] font-sans animate-[text-gradient_3s_linear_infinite]">
              Ship Brilliant interfaces, instantly.
            </h1>

            <p className="max-w-xl text-lg sm:text-xl text-muted-foreground mt-4 font-medium drop-shadow-md">
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
              {PROJECT_SUGGESTIONS.slice(0, 4).map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (index * 0.08), ease: "easeOut" }}
                  className="h-full relative group"
                >
                  <button
                    type="button"
                    onClick={() => handleSuggestionClick(item.value)}
                    className="w-full h-full flex flex-col items-start justify-start p-6 text-left transition-all duration-300 bg-background/60 backdrop-blur-xl border border-dashed border-border/80 group-hover:border-solid group-hover:border-[#fc42ff]/50 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-white/[0.02] to-transparent pointer-events-none" />

                    <div className="flex items-center justify-between w-full mb-4 relative z-10">
                      <span className="font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-[#fc42ff] transition-all duration-300">
                        {item.label}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 -translate-x-2 group-hover:translate-x-0 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                        →
                      </div>
                    </div>

                    <span className="text-sm text-muted-foreground/80 line-clamp-3 leading-relaxed font-medium group-hover:text-muted-foreground transition-colors relative z-10">
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

export default NewProjectChat

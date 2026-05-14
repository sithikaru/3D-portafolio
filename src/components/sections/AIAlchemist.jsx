import React from 'react';
import { motion } from 'framer-motion';
import { FadeInWhenVisible } from '../ui/ScrollAnimations';
import { Cpu, Palette, Sparkles } from 'lucide-react';

const AIAlchemistSection = () => {
  return (
    <section className="relative min-h-screen py-24 px-6 md:px-20 bg-paper-light border-y border-ink/5 overflow-hidden">

      {/* Decorative abstract elements simulating 'Alchemical AI' */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full border border-accent/20 blur-sm pointer-events-none animate-[spin_60s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] rounded-full border border-ink/5 blur-sm pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <FadeInWhenVisible>
              <p className="font-mono text-accent text-sm tracking-widest uppercase mb-4 flex items-center">
                <Sparkles size={16} className="mr-2" />
                The AI Alchemist
              </p>
              <h2 className="text-4xl md:text-6xl font-serif text-gradient tracking-tighter mb-6">
                Intersection of Art & Code.
              </h2>
              <p className="text-ink-dark font-light text-lg mb-8">
                Leveraging artificial intelligence to push the boundaries of UI/UX design. Working from a MacBook Air M3, I build custom UIs for prompt generation and render ultra-realistic assets.
              </p>
            </FadeInWhenVisible>

            <div className="space-y-6">
              {[
                { name: "Google AI Studio", desc: "Custom UIs for advanced prompt engineering", icon: Cpu },
                { name: "ComfyUI & Stitch", desc: "Rendering ultra-realistic portraits and next-gen assets", icon: Palette }
              ].map((tool, idx) => (
                <FadeInWhenVisible key={idx} delay={0.2 + (idx * 0.2)} className="flex items-start p-4 border border-ink/10 bg-paper rounded-sm">
                  <div className="w-10 h-10 rounded-full bg-paper-light border border-ink/20 flex items-center justify-center mr-4 shrink-0 text-accent">
                    <tool.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-ink text-lg">{tool.name}</h4>
                    <p className="font-mono text-xs text-ink-dark mt-1">{tool.desc}</p>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] w-full border border-ink/10 bg-paper overflow-hidden flex items-center justify-center group">
            {/* Simulated UI Mockup/AI Output Area */}
            <div className="absolute inset-0 bg-gradient-to-br from-paper to-paper-light z-0"></div>

            {/* Grid background */}
            <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(rgba(226, 226, 226, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 226, 226, 0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <FadeInWhenVisible delay={0.6} className="relative z-10 w-3/4 h-3/4 border border-ink/20 bg-paper-light shadow-2xl flex flex-col">
              {/* Fake Window Header */}
              <div className="h-8 border-b border-ink/20 flex items-center px-3 space-x-2">
                <div className="w-2 h-2 rounded-full bg-ink/20"></div>
                <div className="w-2 h-2 rounded-full bg-ink/20"></div>
                <div className="w-2 h-2 rounded-full bg-ink/20"></div>
                <div className="flex-1 text-center font-mono text-[10px] text-ink-dark">comfy_render_v2.node</div>
              </div>
              {/* Fake Content */}
              <div className="flex-1 p-4 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-accent/5 mix-blend-overlay"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="text-center">
                  <Sparkles size={32} className="mx-auto mb-4 text-accent/50" />
                  <p className="font-mono text-xs text-ink-dark uppercase tracking-widest">Generating Assets...</p>
                  <div className="w-32 h-1 bg-paper border border-ink/20 mt-4 mx-auto overflow-hidden">
                    <motion.div
                      className="h-full bg-accent"
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIAlchemistSection;
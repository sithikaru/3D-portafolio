import React from 'react';
import { motion } from 'framer-motion';
import { FadeInWhenVisible } from '../ui/ScrollAnimations';
import { Monitor, Smartphone, Terminal, ArrowRight } from 'lucide-react';

const TheSetupSection = () => {
  return (
    <section className="relative min-h-screen py-24 px-6 md:px-20 bg-paper overflow-hidden flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full relative z-10">

        <FadeInWhenVisible>
          <div className="flex items-center gap-4 mb-8">
            <Terminal className="text-accent" size={24} />
            <h2 className="text-3xl md:text-5xl font-mono text-ink tracking-tight uppercase">
              The Setup & The Future
            </h2>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Daily Drivers */}
          <FadeInWhenVisible delay={0.2} className="relative group">
            <div className="absolute inset-0 bg-accent/5 translate-x-4 translate-y-4 border border-ink/10 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
            <div className="border border-ink/20 bg-paper-light p-8 h-full">
              <p className="font-mono text-xs uppercase text-ink/50 mb-6 tracking-widest">// Current Payload</p>

              <div className="flex items-start gap-6 mb-8">
                <Monitor className="text-ink-dark mt-1" size={32} />
                <div>
                  <h3 className="text-xl font-serif text-ink mb-1">MacBook Air M3</h3>
                  <p className="font-mono text-sm text-ink-dark">The primary engine for code architecture, full-stack deployment, and aesthetic design.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Smartphone className="text-ink-dark mt-1" size={32} />
                <div>
                  <h3 className="text-xl font-serif text-ink mb-1">Current Mobile</h3>
                  <p className="font-mono text-sm text-ink-dark">Navigating the daily grid, testing responsiveness, and staying connected on the move.</p>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Hardware Acquisition Target */}
          <FadeInWhenVisible delay={0.4} className="relative group">
            <div className="border border-accent/30 bg-ink text-paper p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <p className="font-mono text-xs uppercase text-accent tracking-widest">Target Acquisition</p>
                  <span className="animate-pulse w-2 h-2 bg-accent rounded-full"></span>
                </div>

                <h3 className="text-2xl font-serif mb-4 text-paper-light">Flagship Upgrade Protocol</h3>
                <p className="font-mono text-sm text-paper/70 mb-8 leading-relaxed">
                  Solo freelancing demands top-tier hardware for seamless testing and uninterrupted workflow. Next milestone: A flagship mobile device to complete the ecosystem.
                </p>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-paper/50 mb-2">
                  <span>Current State</span>
                  <span className="text-accent">S24 Target</span>
                </div>
                <div className="w-full h-2 bg-paper/10 rounded-none overflow-hidden border border-paper/20">
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "65%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                  />
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-paper/40">
                  <ArrowRight size={14} className="text-accent"/>
                  <span>Saving trajectory on schedule.</span>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>

      </div>
    </section>
  );
};

export default TheSetupSection;
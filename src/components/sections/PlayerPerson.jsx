import React from 'react';
import { motion } from 'framer-motion';
import { FadeInWhenVisible } from '../ui/ScrollAnimations';
import { Gamepad2, Heart, Swords } from 'lucide-react';

const PlayerPersonSection = () => {
  return (
    <section className="relative min-h-screen py-24 px-6 md:px-20 bg-paper border-t border-ink/5">
      <div className="max-w-6xl mx-auto">
        <FadeInWhenVisible>
          <h2 className="text-4xl md:text-6xl font-serif text-gradient tracking-tighter mb-16 text-center">
            The Player & The Person
          </h2>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Gaming Stats / RPG Screen */}
          <FadeInWhenVisible delay={0.2} className="border border-ink/10 p-8 bg-paper-light relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>

            <div className="flex items-center mb-8">
              <Gamepad2 size={24} className="text-accent mr-4" />
              <h3 className="text-2xl font-mono uppercase tracking-widest text-ink">Player Stats</h3>
            </div>

            <div className="space-y-6 font-mono">
              <div>
                <div className="flex justify-between text-xs text-ink-dark mb-2 uppercase">
                  <span>Mobile Legends: Bang Bang</span>
                  <span className="text-accent">Legend V</span>
                </div>
                <div className="h-1 w-full bg-paper border border-ink/20">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-ink/20 to-accent"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-ink-dark mb-2 uppercase">
                  <span>Genshin Impact</span>
                  <span className="text-accent">Active</span>
                </div>
                <div className="h-1 w-full bg-paper border border-ink/20">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '60%' }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                    className="h-full bg-gradient-to-r from-ink/20 to-accent"
                  />
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-ink/10">
                 <div className="flex items-center text-xs text-ink-dark">
                    <Swords size={14} className="mr-2 text-ink" />
                    Highly competitive, strategic mindset applies to both code and combat.
                 </div>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* The Person */}
          <FadeInWhenVisible delay={0.4} className="border border-ink/10 p-8 bg-paper-light relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-br-full pointer-events-none transition-transform group-hover:scale-110"></div>

             <div className="flex items-center mb-8">
              <Heart size={24} className="text-accent mr-4" />
              <h3 className="text-2xl font-mono uppercase tracking-widest text-ink">The Heart</h3>
            </div>

            <div className="space-y-6">
              <p className="text-ink-dark font-light leading-relaxed">
                Grounded by the people around me. The machine is nothing without the human element.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="border border-ink/10 p-4 bg-paper flex flex-col items-center justify-center text-center hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-ink/5 flex items-center justify-center mb-3">
                    <Heart size={16} className="text-accent" />
                  </div>
                  <span className="font-mono text-xs text-ink-dark uppercase">Video calls & smiles<br/>with my girlfriend</span>
                </div>
                <div className="border border-ink/10 p-4 bg-paper flex flex-col items-center justify-center text-center hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-ink/5 flex items-center justify-center mb-3">
                    <span className="font-serif italic text-accent">G</span>
                  </div>
                  <span className="font-mono text-xs text-ink-dark uppercase">Living life alongside<br/>the Gajawasala crew</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-ink/10 text-center">
                <p className="font-serif italic text-sm text-ink/50">"All individuals are part of one unified being."</p>
              </div>
            </div>
          </FadeInWhenVisible>

        </div>
      </div>
    </section>
  );
};

export default PlayerPersonSection;
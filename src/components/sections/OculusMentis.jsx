import React from 'react';
import { motion } from 'framer-motion';
import { FadeInWhenVisible, ParallaxText } from '../ui/ScrollAnimations';

const OculusMentisSection = () => {
  return (
    <section className="relative min-h-screen py-32 overflow-hidden bg-paper flex flex-col justify-center items-center text-center">

      {/* Background Parallax Typography */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-5 z-0">
        <ParallaxText baseVelocity={2} className="text-[150px] font-serif font-bold text-ink mb-10">
          THESIS ANTITHESIS SYNTHESIS
        </ParallaxText>
        <ParallaxText baseVelocity={-2} className="text-[150px] font-serif font-bold text-ink">
          MARXIST DIALECTICS
        </ParallaxText>
      </div>

      <div className="relative z-10 max-w-4xl px-6">
        <FadeInWhenVisible>
          <div className="mb-8 relative inline-block group">
            {/* 3D Illusion esoteric symbol/tattoo concept */}
            <motion.div
              className="w-48 h-48 md:w-64 md:h-64 mx-auto border border-accent/40 rounded-full flex items-center justify-center relative shadow-[0_0_50px_rgba(162,28,175,0.1)]"
              animate={{ rotateY: [0, 360], rotateX: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-4 border border-ink/20 rounded-full" style={{ transform: 'translateZ(20px)' }}></div>
              <div className="absolute inset-8 border border-ink/40 rounded-full" style={{ transform: 'translateZ(-20px)' }}></div>
              <div className="absolute w-full h-[1px] bg-accent/50" style={{ transform: 'rotate(45deg)' }}></div>
              <div className="absolute w-full h-[1px] bg-accent/50" style={{ transform: 'rotate(-45deg)' }}></div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center" style={{ transform: 'translateZ(40px) translate(-50%, -50%)' }}>
                <span className="font-serif text-accent block text-2xl tracking-widest">👁</span>
              </div>
            </motion.div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <h2 className="text-5xl md:text-7xl font-serif text-gradient tracking-tighter mb-4">
            Oculus Mentis
          </h2>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-12">
            The Eye of the Mind // Zijja
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.4}>
          <p className="text-xl md:text-2xl font-serif font-light text-ink-dark max-w-2xl mx-auto leading-relaxed">
            "Understanding the complexities beyond the basic thesis-antithesis-synthesis triad. All individuals are part of one unified being."
          </p>
          <p className="mt-8 font-mono text-sm text-ink/50 max-w-xl mx-auto">
            This philosophical depth bleeds into my personal style, soon to be anchored by a 3D illusion forearm tattoo. A constant reminder of human connection and metaphysical truths.
          </p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default OculusMentisSection;
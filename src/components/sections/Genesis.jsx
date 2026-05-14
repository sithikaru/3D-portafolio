import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { FadeInWhenVisible } from '../ui/ScrollAnimations';

const GenesisSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse tracking logic for 3D crosshair tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), { stiffness: 150, damping: 20 });
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-32 pb-16 overflow-hidden">
      {/* Background Graphic elements with 3D/Parallax effect tracking cursor */}
      <motion.div
        style={{ y: scrollY, opacity }}
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-20 flex items-center justify-center"
      >
        <motion.div
          style={{ rotateX, rotateY, x: translateX, y: translateY, transformStyle: "preserve-3d" }}
          className="w-full h-full flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-ink fill-transparent" style={{ transform: "translateZ(50px)" }}>
            <circle cx="50" cy="50" r="40" strokeWidth="0.5" strokeDasharray="2 4" />
            <path d="M10 50 L90 50" strokeWidth="0.5" />
            <path d="M50 10 L50 90" strokeWidth="0.5" />
          </svg>
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-4xl">
        <FadeInWhenVisible>
          <p className="font-mono text-accent text-sm md:text-base tracking-widest uppercase mb-4">
            <span className="inline-block w-8 h-[1px] bg-accent align-middle mr-4"></span>
            Genesis & Hustle
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-none tracking-tighter mb-8">
            <span className="text-gradient">Sithija Lakshan<br/>Karunasena</span>
          </h1>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.4} className="space-y-6 max-w-2xl text-ink-dark text-lg md:text-xl font-light">
          <p>
            A blend of cutting-edge technology and deep metaphysical philosophy.
            Based in Colombo, navigating the city by bike and the digital world through code.
          </p>
          <p>
            Stepping into my final year of university, I chose the bold path: leaving a comfortable internship to build my own solo freelancing company. It's a bet on myself, fueled by ambition and pragmatic drive.
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.6} className="mt-12">
          <div className="p-4 border border-ink/10 bg-paper-light/50 backdrop-blur-sm max-w-md inline-block">
            <p className="font-mono text-xs uppercase text-ink-dark mb-2">Current Objective:</p>
            <p className="font-mono text-sm text-ink">Tracking daily savings for tech upgrades.</p>
            <div className="mt-3 flex items-center justify-between font-mono text-xs text-accent">
              <span>S23 Ultra</span>
              <span className="mx-2 flex-1 h-[1px] bg-ink/20"></span>
              <span>S24</span>
            </div>
            <p className="font-mono text-[10px] text-ink/50 mt-1 text-center">Hardware reliability audit in progress...</p>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default GenesisSection;
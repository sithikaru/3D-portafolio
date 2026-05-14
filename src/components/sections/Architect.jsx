import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FadeInWhenVisible } from '../ui/ScrollAnimations';
import MagneticButton from '../ui/MagneticButton';
import { Code2, Database, Layout } from 'lucide-react';

const ProjectCard = ({ title, desc, icon: Icon, delay }) => {
  const ref = useRef(null);

  // 3D Tilt logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <FadeInWhenVisible delay={delay}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="border border-ink/10 p-6 md:p-8 bg-paper-light hover:border-accent/30 transition-colors group relative overflow-hidden interactive"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity" style={{ transform: "translateZ(30px)" }}>
          <Icon size={120} strokeWidth={1} />
        </div>
        <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
          <div className="w-12 h-12 rounded-full border border-ink/20 flex items-center justify-center mb-6 group-hover:border-accent group-hover:text-accent transition-colors">
            <Icon size={20} />
          </div>
          <h3 className="text-2xl font-serif mb-3 text-ink">{title}</h3>
          <p className="text-ink-dark font-light text-sm md:text-base leading-relaxed">
            {desc}
          </p>
          <div className="mt-8">
            <MagneticButton className="!text-xs !py-2 !px-6 border-ink/30 text-ink-dark group-hover:text-ink">
              View Details
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </FadeInWhenVisible>
  );
};

const ArchitectSection = () => {
  return (
    <section className="relative min-h-screen py-24 px-6 md:px-20 bg-paper">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <FadeInWhenVisible>
            <p className="font-mono text-accent text-sm tracking-widest uppercase mb-4">
              <span className="inline-block w-8 h-[1px] bg-accent align-middle mr-4"></span>
              The Architect
            </p>
            <h2 className="text-4xl md:text-6xl font-serif text-gradient tracking-tighter">
              Reconstructing Code.
            </h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <p className="mt-6 text-ink-dark max-w-xl font-light">
              I don't just write code; I audit, architect, and reconstruct full-stack ecosystems.
              Every line serves a structural purpose.
            </p>
          </FadeInWhenVisible>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="XpensTrack"
            desc="Granular state-management analysis and auditing of a complex codebase built with Flutter and NestJS."
            icon={Database}
            delay={0.1}
          />
          <ProjectCard
            title="Venture Greens"
            desc="A complete redesign and recreation of both frontend and backend assets, optimizing for performance and scale."
            icon={Layout}
            delay={0.3}
          />
          <ProjectCard
            title="Community Tech"
            desc="Building fun, custom tech solutions for 'Gajawasala', my tight-knit boarding house friend group."
            icon={Code2}
            delay={0.5}
          />
        </div>

        {/* Wireframe to Code decorative element */}
        <FadeInWhenVisible delay={0.4} className="mt-20 border border-ink/10 h-32 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full bg-repeating-linear-gradient-to-r from-transparent to-transparent border-r border-ink/10" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgba(226, 226, 226, 0.05) 0, rgba(226, 226, 226, 0.05) 1px, transparent 1px, transparent 10px)'}}></div>
                <div className="w-1/2 h-full flex items-center px-8 font-mono text-xs text-accent">
                    <span className="opacity-50">{"<Code rendered={true} status='stable' />"}</span>
                </div>
            </div>
            <div className="z-10 bg-paper px-4 font-serif italic text-ink-dark">
                Structure meets execution
            </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default ArchitectSection;
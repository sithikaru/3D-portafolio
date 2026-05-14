import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

const AudioContext = createContext(null);

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true); // Default muted to comply with browser auto-play policies
  const audioCtxRef = useRef(null);

  useEffect(() => {
    // Initialize Web Audio API on first interaction
    const initAudio = () => {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      setIsMuted(false);
      window.removeEventListener('click', initAudio);
    };

    window.addEventListener('click', initAudio);
    return () => window.removeEventListener('click', initAudio);
  }, []);

  const playHoverSound = () => {
    if (isMuted || !audioCtxRef.current) return;

    const ctx = audioCtxRef.current;
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  };

  const playClickSound = () => {
    if (isMuted || !audioCtxRef.current) return;

    const ctx = audioCtxRef.current;
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  };

  const playAmbientDrone = () => {
     // A low, evolving drone for the philosophical aesthetic
     if (isMuted || !audioCtxRef.current) return;
     // This is just a placeholder for complex ambient logic if needed.
     // For a true ambient loop, it's often better to use an HTMLAudioElement with a royalty-free track,
     // but procedural is fine for simple interactions.
  };

  return (
    <AudioContext.Provider value={{ isMuted, setIsMuted, playHoverSound, playClickSound }}>
      {children}
    </AudioContext.Provider>
  );
};

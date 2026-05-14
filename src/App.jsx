import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AudioProvider } from './context/AudioContext';
import CustomCursor from './components/ui/CustomCursor';

// Sections
import GenesisSection from './components/sections/Genesis';
import ArchitectSection from './components/sections/Architect';
import AIAlchemistSection from './components/sections/AIAlchemist';
import OculusMentisSection from './components/sections/OculusMentis';
import TheSetupSection from './components/sections/TheSetup';
import InteractiveFooter from './components/ui/InteractiveFooter';

const App = () => {
  return (
    <AudioProvider>
      <BrowserRouter>
        <div className="relative min-h-screen bg-paper text-ink overflow-hidden selection:bg-accent/30 selection:text-white font-sans">
          <div className="noise-overlay"></div>
          <CustomCursor />

          <main className="relative z-10 w-full flex flex-col">
            <GenesisSection />
            <ArchitectSection />
            <AIAlchemistSection />
            <TheSetupSection />
            <OculusMentisSection />

            <InteractiveFooter />
          </main>

        </div>
      </BrowserRouter>
    </AudioProvider>
  );
};

export default App;
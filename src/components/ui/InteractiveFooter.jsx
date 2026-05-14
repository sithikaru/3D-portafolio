import React, { useState, useRef, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';

const InteractiveFooter = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'SITHIJA.OS v1.0.0' },
    { type: 'system', text: 'Freelance module loaded. Ready for input.' },
    { type: 'system', text: 'Type a message to initiate contact for full-stack, UI/UX, or prompt engineering work, or type "help" for commands.' }
  ]);
  const inputRef = useRef(null);
  const { playClickSound } = useAudio();
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    // Add user input to history
    const newHistory = [...history, { type: 'user', text: `> ${trimmedCmd}` }];

    // Simple command parsing
    if (trimmedCmd.toLowerCase() === 'help') {
      newHistory.push({ type: 'system', text: 'Available commands:' });
      newHistory.push({ type: 'system', text: '  - "contact [message]" : Send a message directly.' });
      newHistory.push({ type: 'system', text: '  - "clear" : Clear terminal history.' });
      newHistory.push({ type: 'system', text: '  - "services" : List freelance services.' });
    } else if (trimmedCmd.toLowerCase() === 'clear') {
      setHistory([{ type: 'system', text: 'Terminal cleared.' }]);
      return;
    } else if (trimmedCmd.toLowerCase() === 'services') {
      newHistory.push({ type: 'system', text: 'Freelance Services:' });
      newHistory.push({ type: 'system', text: '  [1] Full-Stack Development (React, Node, etc.)' });
      newHistory.push({ type: 'system', text: '  [2] UI/UX Design & Auditing' });
      newHistory.push({ type: 'system', text: '  [3] Prompt Engineering & AI Integration' });
    } else {
      // Treat as a direct message if it doesn't match specific commands,
      // or if it starts with 'contact '
      let msg = trimmedCmd;
      if (trimmedCmd.toLowerCase().startsWith('contact ')) {
        msg = trimmedCmd.substring(8);
      }

      newHistory.push({ type: 'system', text: `Initiating connection...` });
      newHistory.push({ type: 'system', text: `Message queued: "${msg}"` });
      newHistory.push({ type: 'system', text: `[!] Currently in local mode. In a live environment, this would open a mailto link or trigger an API call.` });

      // Fallback action for demo purposes
      setTimeout(() => {
        window.location.href = `mailto:sithija@example.com?subject=Freelance%20Inquiry&body=${encodeURIComponent(msg)}`;
      }, 1000);
    }

    setHistory(newHistory);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (playClickSound) playClickSound();
      handleCommand(input);
      setInput('');
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <footer className="w-full border-t border-ink/20 bg-paper-dark py-12 px-6 md:px-20 text-left font-mono text-xs">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">

        {/* Terminal Area */}
        <div
          className="flex-1 border border-ink/20 bg-[#1a1a1a] p-4 text-green-500 rounded-sm shadow-inner min-h-[250px] max-h-[300px] overflow-y-auto cursor-text flex flex-col"
          onClick={focusInput}
        >
          <div className="flex items-center gap-2 mb-4 border-b border-green-900/50 pb-2 text-green-700">
            <Terminal size={14} />
            <span>initiate_project.exe</span>
          </div>

          <div className="flex-1 flex flex-col gap-1 mb-2">
            {history.map((line, i) => (
              <div key={i} className={`${line.type === 'user' ? 'text-green-300' : 'text-green-600'} break-words`}>
                {line.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="flex items-center gap-2 mt-auto">
            <span className="text-green-400">root@sithija:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-green-400 focus:ring-0 p-0 m-0"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </div>

        {/* Footer Meta */}
        <div className="md:w-64 flex flex-col justify-between text-ink/50 uppercase tracking-widest leading-loose">
          <div>
            <p className="mb-4 text-ink-dark">Status: Available for Freelance</p>
            <ul className="space-y-2 mb-8">
              <li className="hover:text-accent transition-colors cursor-pointer">[ Github ]</li>
              <li className="hover:text-accent transition-colors cursor-pointer">[ LinkedIn ]</li>
              <li className="hover:text-accent transition-colors cursor-pointer">[ Twitter ]</li>
            </ul>
          </div>
          <div>
            <p>Designed by AI.</p>
            <p>Architected by Sithija.</p>
            <p className="mt-4 text-accent/30 font-serif lowercase tracking-normal">oculus mentis</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default InteractiveFooter;
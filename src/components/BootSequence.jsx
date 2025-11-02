import React, { useEffect, useState } from 'react';

const BootSequence = ({ onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [progress, setProgress] = useState(0);
  const fullText = 'INITIALIZING NEURAL MATRIX 2.0...';

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i += 1;
      if (i >= fullText.length) clearInterval(typeInterval);
    }, 50);

    const start = Date.now();
    const duration = 3000; // 3 seconds
    const raf = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);
      if (elapsed < duration) {
        requestAnimationFrame(raf);
      } else {
        setTimeout(() => onComplete?.(), 250);
      }
    };
    requestAnimationFrame(raf);

    return () => {
      clearInterval(typeInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-[#E0E0E0] flex items-center justify-center z-[100]">
      <div className="absolute inset-0 pointer-events-none" style={{
        opacity: 0.3,
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 24px)'
      }} />
      <div className="w-full max-w-xl px-6 relative z-10">
        <div className="text-center">
          <p className="font-mono text-sm tracking-widest mb-4" style={{ color: '#FFC000', textShadow: '0 0 6px rgba(255,192,0,0.6), 0 0 10px rgba(0,255,255,0.4)'}}>
            {displayText}
          </p>
        </div>
        <div className="w-full h-1.5 bg-neutral-800 rounded overflow-hidden shadow-[0_0_20px_rgba(0,255,255,0.25)]">
          <div
            className="h-full transition-all duration-75"
            style={{ width: `${progress}%`, backgroundColor: '#FFC000' }}
          />
        </div>
        <div className="mt-3 text-[10px] font-mono flex justify-between" style={{ color: '#FFC000' }}>
          <span>BOOT.SEQ</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default BootSequence;

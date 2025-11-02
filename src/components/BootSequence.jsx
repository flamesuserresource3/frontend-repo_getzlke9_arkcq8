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
      <div className="w-full max-w-xl px-6">
        <div className="text-center">
          <p className="font-mono text-sm tracking-widest text-cyan-300 mb-4">
            {displayText}
          </p>
        </div>
        <div className="w-full h-1.5 bg-neutral-800 rounded overflow-hidden">
          <div
            className="h-full bg-cyan-400 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 text-[10px] font-mono text-neutral-400 flex justify-between">
          <span>BOOT.SEQ</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default BootSequence;

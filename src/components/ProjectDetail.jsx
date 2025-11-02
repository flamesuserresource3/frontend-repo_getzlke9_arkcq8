import React, { useEffect, useRef, useState } from 'react';

const Metric = ({ label, value }) => (
  <div className="p-4 border border-neutral-800/80 rounded bg-black/40 shadow-[0_0_24px_rgba(0,255,255,0.25)]">
    <div className="text-xs font-mono text-neutral-400">{label}</div>
    <div className="text-lg font-mono" style={{ color: '#FFC000', textShadow: '0 0 6px rgba(255,192,0,0.6), 0 0 10px rgba(0,255,255,0.4)'}}>{value}</div>
  </div>
);

const FlowDiagram = () => {
  const pathRef = useRef(null);
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    const start = performance.now();
    const duration = 1400;
    const animate = (t) => {
      const p = Math.min(1, (t - start) / duration);
      path.style.strokeDashoffset = String(length * (1 - p));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <svg viewBox="0 0 400 140" className="w-full h-36">
      <defs>
        <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#00FFFF" />
          <stop offset="100%" stopColor="#FFC000" />
        </linearGradient>
      </defs>
      <circle cx="30" cy="70" r="14" className="fill-black" stroke="#00FFFF" strokeWidth="1" />
      <circle cx="200" cy="70" r="14" className="fill-black" stroke="#00FFFF" strokeWidth="1" />
      <circle cx="370" cy="70" r="14" className="fill-black" stroke="#00FFFF" strokeWidth="1" />
      <path ref={pathRef} d="M44 70 C 100 10, 140 130, 186 70 S 260 10, 356 70" stroke="url(#grad)" strokeWidth="2" fill="none" />
    </svg>
  );
};

const MiniChart = () => (
  <svg viewBox="0 0 240 60" className="w-full h-20">
    <rect x="0" y="0" width="240" height="60" fill="black" />
    {[0,1,2,3,4,5,6,7,8,9].map((i) => (
      <line key={i} x1={i * 24} y1="0" x2={i * 24} y2="60" stroke="rgba(255,255,255,0.06)" />
    ))}
    <polyline
      points="0,50 24,48 48,45 72,44 96,40 120,30 144,26 168,20 192,16 216,12 240,10"
      fill="none"
      stroke="#00FFFF"
      strokeWidth="2"
    />
  </svg>
);

const ProjectDetail = () => {
  const [showFailures, setShowFailures] = useState(false);

  return (
    <div className="space-y-12">
      <header>
        <h2 className="font-mono text-xl md:text-2xl" style={{ color: '#FFC000', textShadow: '0 0 8px rgba(255,192,0,0.7), 0 0 14px rgba(0,255,255,0.5)'}}>[001] &gt; DATA LOG: QUANTUM_LEAP_MODEL.25</h2>
        <p className="font-mono text-neutral-300 text-xs mt-1">Quantum Leap Model 25: AI Autonomy Framework</p>
      </header>

      <section className="space-y-4">
        <h3 className="font-mono tracking-wide" style={{ color: '#FFC000', textShadow: '0 0 6px rgba(255,192,0,0.6), 0 0 10px rgba(0,255,255,0.4)'}}>INITIALIZING PARAMETERS // Starting State</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Metric label="RETENTION" value="-63%" />
          <Metric label="LATENCY" value="310ms" />
          <Metric label="CAC" value="$740" />
          <Metric label="UPTIME" value="97.2%" />
        </div>
        <button
          onClick={() => setShowFailures((s) => !s)}
          className="font-mono text-xs px-3 py-2 rounded text-black"
          style={{ backgroundColor: '#FFC000', boxShadow: '0 0 24px rgba(0,255,255,0.35)', textShadow: '0 0 6px rgba(0,0,0,0.25)'}}
        >
          [Show Failure Metrics]
        </button>
        {showFailures && (
          <div className="p-4 rounded bg-black/60 border" style={{ borderColor: 'rgba(255,192,0,0.4)', boxShadow: '0 0 24px rgba(0,255,255,0.25)'}}>
            <ul className="list-disc list-inside text-xs font-mono space-y-1" style={{ color: '#FFC000' }}>
              <li>Drift in RL policy after 18 hours</li>
              <li>Feedback loop saturation at 62% load</li>
              <li>Fragmented telemetry across shards</li>
            </ul>
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h3 className="font-mono tracking-wide" style={{ color: '#FFC000', textShadow: '0 0 6px rgba(255,192,0,0.6), 0 0 10px rgba(0,255,255,0.4)'}}>ALGORITHM / STRATEGY // Process</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="p-3 border border-neutral-800/80 rounded bg-black/40 shadow-[0_0_24px_rgba(0,255,255,0.25)]">
              <p className="font-mono text-xs text-neutral-300">1. Multi-agent orchestration with guardrailed policy distillation</p>
            </div>
            <div className="p-3 border border-neutral-800/80 rounded bg-black/40 shadow-[0_0_24px_rgba(0,255,255,0.25)]">
              <p className="font-mono text-xs text-neutral-300">2. Telemetry unification via event-sourced stream (idempotent)</p>
            </div>
            <div className="p-3 border border-neutral-800/80 rounded bg-black/40 shadow-[0_0_24px_rgba(0,255,255,0.25)]">
              <p className="font-mono text-xs text-neutral-300">3. Latency shaving through speculative decoding + cache priming</p>
            </div>
          </div>
          <div className="border border-neutral-800/80 rounded bg-black/40 p-2 shadow-[0_0_24px_rgba(0,255,255,0.25)]">
            <FlowDiagram />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-mono tracking-wide" style={{ color: '#FFC000', textShadow: '0 0 6px rgba(255,192,0,0.6), 0 0 10px rgba(0,255,255,0.4)'}}>OUTPUT & IMPACT // Results</h3>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="p-4 border border-neutral-800/80 rounded bg-black/40 shadow-[0_0_24px_rgba(0,255,255,0.25)]">
            <div className="text-2xl md:text-3xl font-mono" style={{ color: '#FFC000', textShadow: '0 0 10px rgba(255,192,0,0.75), 0 0 18px rgba(0,255,255,0.5)'}}>+250%</div>
            <div className="text-xs font-mono text-neutral-400">RETENTION</div>
          </div>
          <div className="p-4 border border-neutral-800/80 rounded bg-black/40 shadow-[0_0_24px_rgba(0,255,255,0.25)]">
            <div className="text-2xl md:text-3xl font-mono" style={{ color: '#FFC000', textShadow: '0 0 10px rgba(255,192,0,0.75), 0 0 18px rgba(0,255,255,0.5)'}}>$5M</div>
            <div className="text-xs font-mono text-neutral-400">CAPITALIZED</div>
          </div>
          <div className="p-4 border border-neutral-800/80 rounded bg-black/40 shadow-[0_0_24px_rgba(0,255,255,0.25)]">
            <div className="text-2xl md:text-3xl font-mono" style={{ color: '#FFC000', textShadow: '0 0 10px rgba(255,192,0,0.75), 0 0 18px rgba(0,255,255,0.5)'}}>85ms</div>
            <div className="text-xs font-mono text-neutral-400">LATENCY REDUCTION</div>
          </div>
        </div>
        <div className="border border-neutral-800/80 rounded bg-black/40 p-2 shadow-[0_0_24px_rgba(0,255,255,0.25)]">
          <MiniChart />
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="font-mono tracking-wide" style={{ color: '#FFC000', textShadow: '0 0 6px rgba(255,192,0,0.6), 0 0 10px rgba(0,255,255,0.4)'}}>ARTIFACTS</h3>
        <div className="aspect-video border border-neutral-800/80 rounded overflow-hidden relative bg-gradient-to-br from-neutral-900 to-black shadow-[0_0_24px_rgba(0,255,255,0.25)]">
          <div className="absolute inset-0" style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(0,255,255,0.25) 0.5px, transparent 0.5px), linear-gradient(0deg, rgba(255,192,0,0.25) 0.5px, transparent 0.5px)',
            backgroundSize: '22px 22px'
          }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-neutral-300 text-xs">EMBEDDED PROTOTYPE FEED // SIMULATED</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;

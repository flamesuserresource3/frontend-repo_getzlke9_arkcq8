import React from 'react';
import Spline from '@splinetool/react-spline';

const CoreInterface = ({ onExecute }) => {
  return (
    <section className="relative min-h-screen w-full bg-black text-[#E0E0E0] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,255,255,0.06), rgba(0,255,255,0.06) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, rgba(255,0,255,0.05), rgba(255,0,255,0.05) 1px, transparent 1px, transparent 32px)'
        }}
      />

      <div className="absolute inset-0 pointer-events-none" style={{
        background:
          'radial-gradient(60% 40% at 50% 20%, rgba(0,255,255,0.15) 0%, rgba(0,0,0,0) 60%), radial-gradient(40% 30% at 80% 70%, rgba(255,0,255,0.12) 0%, rgba(0,0,0,0) 60%)'
      }} />

      <div className="relative z-10 min-h-screen w-full flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <div className="mb-2">
            <span className="font-mono text-xs tracking-widest text-cyan-300">NEURAL MATRIX OS // v2.0</span>
          </div>
          <h1 className="font-mono text-4xl md:text-6xl font-semibold tracking-tight">
            <span className="align-middle">&gt;&gt; ACCESS GRANTED.</span>
          </h1>
          <p className="mt-4 font-mono text-sm md:text-base text-neutral-300">
            QUERY: HIGH-VALUE PROBLEM SOLVING PROTOCOLS. // RUN 'LS -L' TO VIEW INDEX.
          </p>
          <div className="mt-8">
            <button
              onClick={onExecute}
              className="font-mono text-sm px-6 py-3 rounded border border-cyan-400/60 text-cyan-300 hover:text-black hover:bg-cyan-400/90 hover:border-cyan-300 transition-colors duration-200 shadow-[0_0_20px_rgba(0,255,255,0.15)]"
            >
              [EXECUTE PROTOCOL]
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreInterface;

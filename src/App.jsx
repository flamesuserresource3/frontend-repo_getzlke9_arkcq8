import React, { useState } from 'react';
import BootSequence from './components/BootSequence.jsx';
import CoreInterface from './components/CoreInterface.jsx';
import TerminalCLI from './components/TerminalCLI.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';

function App() {
  const [phase, setPhase] = useState('boot'); // boot -> core -> terminal

  return (
    <div className="min-h-screen bg-black text-[#E0E0E0] relative">
      {/* Global scanline overlay */}
      <div aria-hidden className="fixed inset-0 pointer-events-none" style={{
        opacity: 0.12,
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.7) 0 1px, transparent 1px 3px)'
      }} />

      {/* Persistent path */}
      <div className="fixed top-3 left-4 z-30 font-mono text-xs" style={{ color: '#FFC000', textShadow: '0 0 6px rgba(255,192,0,0.6), 0 0 10px rgba(0,255,255,0.4)'}}>
        C:\\USER\\$CYPHER-007&gt;
      </div>

      {phase === 'boot' && (
        <BootSequence onComplete={() => setPhase('core')} />
      )}

      {phase === 'core' && (
        <CoreInterface onExecute={() => setPhase('terminal')} />
      )}

      {phase === 'terminal' && (
        <TerminalCLI DetailComponent={ProjectDetail} />
      )}
    </div>
  );
}

export default App;

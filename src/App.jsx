import React, { useState } from 'react';
import BootSequence from './components/BootSequence.jsx';
import CoreInterface from './components/CoreInterface.jsx';
import TerminalCLI from './components/TerminalCLI.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';

function App() {
  const [phase, setPhase] = useState('boot'); // boot -> core -> terminal

  return (
    <div className="min-h-screen bg-black text-[#E0E0E0]">
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

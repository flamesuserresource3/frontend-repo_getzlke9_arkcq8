import React, { useEffect, useState } from 'react';

const Divider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent my-4" />
);

const ProjectIndex = ({ onOpen }) => (
  <div className="space-y-2">
    <div className="font-mono text-cyan-300">ls -l // PROJECT INDEX</div>
    <ul className="font-mono text-sm space-y-2">
      <li className="cursor-pointer text-cyan-300/90 hover:text-cyan-300" onClick={() => onOpen('001')}>
        [001] &gt; DATA LOG: QUANTUM_LEAP_MODEL.25 // Status: DEPLOYED
      </li>
      <li className="text-cyan-300/70">[002] &gt; DATA LOG: PROJECT_MINDSHARE // Status: ARCHIVED</li>
      <li className="text-cyan-300/70">[003] &gt; DATA LOG: SYNAPTIC_BEAMFORMER // Status: INTEGRATION</li>
      <li className="text-cyan-300/70">[004] &gt; DATA LOG: HYPERLOOP_AUDIT // Status: ARCHIVED</li>
    </ul>
  </div>
);

const ProfileView = () => (
  <div className="space-y-2">
    <div className="font-mono text-cyan-300">cat /profile.txt</div>
    <p className="font-mono text-sm text-neutral-300">
      Technical Profile: Full-Stack systems engineer with specialization in LLM integration and UX strategy.
      Designs autonomous product workflows, orchestrates multi-agent reasoning layers, and builds human-in-the-loop
      control surfaces with functional minimalism. Tooling focus: TypeScript/React, Python/FastAPI, vector search,
      prompt engineering, and data-informed product loops.
    </p>
  </div>
);

const ContactView = () => {
  const [sent, setSent] = useState(false);
  const [target, setTarget] = useState('TARGET_COMPANY');

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="space-y-3">
      <div className="font-mono text-cyan-300">ping [{target}]</div>
      {!sent ? (
        <form onSubmit={submit} className="space-y-3">
          <div className="grid md:grid-cols-3 gap-3">
            <input value={target} onChange={(e) => setTarget(e.target.value)} className="bg-black/40 border border-neutral-800/80 rounded px-3 py-2 font-mono text-xs text-neutral-200 outline-none focus:border-cyan-400/60" />
            <input placeholder="email@domain.com" className="bg-black/40 border border-neutral-800/80 rounded px-3 py-2 font-mono text-xs text-neutral-200 outline-none focus:border-cyan-400/60" />
            <button className="font-mono text-xs px-3 py-2 border border-cyan-400/70 rounded text-cyan-300 hover:bg-cyan-500/10 transition">[TRANSMIT]</button>
          </div>
          <textarea placeholder="Message payload" rows={3} className="w-full bg-black/40 border border-neutral-800/80 rounded px-3 py-2 font-mono text-xs text-neutral-200 outline-none focus:border-cyan-400/60" />
        </form>
      ) : (
        <div className="font-mono text-xs text-pink-300">
          Reply: 85ms latency acknowledged. Signal locked. Expect response channel within 1 business cycle.
        </div>
      )}
    </div>
  );
};

const TerminalCLI = ({ DetailComponent }) => {
  const [view, setView] = useState('home'); // home | index | profile | contact | detail
  const [log, setLog] = useState([]);
  const handle = 'CYPHER-007';

  const runCommand = (cmd, nextView) => {
    setLog((l) => [...l, `> ${cmd}`]);
    setView('loading');
    setTimeout(() => {
      setLog((l) => [...l, `executing: ${cmd} ... ok`]);
      setView(nextView);
    }, 350);
  };

  useEffect(() => {
    setLog([`C:\\USER\\$[${handle}]>`]);
  }, []);

  return (
    <section className="min-h-screen bg-black text-[#E0E0E0] relative">
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 22px), repeating-linear-gradient(90deg, #fff 0 1px, transparent 1px 22px)'
      }} />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10">
        <div className="font-mono text-xs text-neutral-400 mb-4">C:\\USER\\$[{handle}]&gt;</div>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1 space-y-2">
            <div className="font-mono text-sm text-neutral-300">Commands</div>
            <button onClick={() => runCommand('ls -l', 'index')} className="block w-full text-left font-mono text-xs px-3 py-2 border border-neutral-800/80 rounded hover:border-cyan-400/60 hover:text-cyan-300 transition">ls -l</button>
            <button onClick={() => runCommand('cat /profile.txt', 'profile')} className="block w-full text-left font-mono text-xs px-3 py-2 border border-neutral-800/80 rounded hover:border-cyan-400/60 hover:text-cyan-300 transition">cat /profile.txt</button>
            <button onClick={() => runCommand('ping [TARGET_COMPANY]', 'contact')} className="block w-full text-left font-mono text-xs px-3 py-2 border border-neutral-800/80 rounded hover:border-cyan-400/60 hover:text-cyan-300 transition">ping [TARGET_COMPANY]</button>
          </div>
          <div className="md:col-span-2">
            <div className="p-4 border border-neutral-800/80 rounded bg-black/40 min-h-[320px]">
              {view === 'home' && (
                <div className="font-mono text-sm text-neutral-400">Select a command to begin.</div>
              )}
              {view === 'loading' && (
                <div className="font-mono text-sm text-cyan-300 animate-pulse">processing...</div>
              )}
              {view === 'index' && (
                <ProjectIndex onOpen={() => setView('detail')} />
              )}
              {view === 'profile' && <ProfileView />}
              {view === 'contact' && <ContactView />}
              {view === 'detail' && (
                <div className="space-y-4">
                  <DetailComponent />
                </div>
              )}
            </div>
            <Divider />
            <div className="font-mono text-[10px] text-neutral-500 space-y-0.5">
              {log.map((l, i) => (
                <div key={i}>{l}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalCLI;

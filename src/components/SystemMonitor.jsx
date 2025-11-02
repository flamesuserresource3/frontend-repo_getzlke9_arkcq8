import React from 'react';

const cpuSize = 180;
const stroke = 14;
const radius = (cpuSize - stroke) / 2;
const circumference = 2 * Math.PI * radius;
const percent = 98;
const dash = (percent / 100) * circumference;

const TaskLog = () => {
  const entries = [
    '[T+00:15:21] BOOTSTRAP KERNEL OK',
    '[T+00:15:32] INIT_VECTOR_PULSE SUCCESS',
    '[T+00:15:35] KERNEL_FORK_EXECUTION',
    '[T+00:15:41] DMA_CHANNEL SYNCED',
    '[T+00:15:48] L2 CACHE WARM 87%',
    '[T+00:15:55] STREAM_MERGE STABLE',
    '[T+00:16:03] POLICY_DISTILL PASS',
    '[T+00:16:11] TELEMETRY BUS OK',
    '[T+00:16:19] CIRCUIT_BREAKER ARMED',
    '[T+00:16:27] GUARDRAIL GREEN',
  ];
  return (
    <div className="h-48 overflow-y-auto pr-2 space-y-2">
      {entries.map((e, i) => (
        <div key={i} className="font-mono text-[11px] text-neutral-200/90">{e}</div>
      ))}
    </div>
  );
};

const LatencyBars = () => {
  const values = [42, 86, 54, 98, 65];
  return (
    <div className="flex items-end gap-3 h-40">
      {values.map((v, i) => (
        <div key={i} className="flex-1 bg-cyan-400/15 border border-cyan-400/30 rounded-t relative shadow-[0_0_24px_rgba(0,255,255,0.25)]">
          <div style={{ height: `${v}%` }} className="absolute bottom-0 left-0 right-0 bg-cyan-400/80" />
        </div>
      ))}
    </div>
  );
};

const CpuGauge = () => (
  <svg width={cpuSize} height={cpuSize} viewBox={`0 0 ${cpuSize} ${cpuSize}`}>
    <defs>
      <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <circle cx={cpuSize/2} cy={cpuSize/2} r={radius} stroke="#333" strokeWidth={stroke} fill="none" />
    <circle
      cx={cpuSize/2}
      cy={cpuSize/2}
      r={radius}
      stroke="#FFC000"
      strokeWidth={stroke}
      fill="none"
      strokeLinecap="round"
      strokeDasharray={`${dash} ${circumference}`}
      transform={`rotate(-90 ${cpuSize/2} ${cpuSize/2})`}
      filter="url(#softGlow)"
    />
    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-[#FFC000] font-mono" style={{ fontSize: 24, textShadow: '0 0 8px rgba(255,192,0,0.6), 0 0 16px rgba(0,255,255,0.35)'}}>
      {percent}%
    </text>
    <text x="50%" y={cpuSize - 16} textAnchor="middle" className="fill-neutral-300 font-mono" style={{ fontSize: 10 }}>CPU LOAD</text>
  </svg>
);

const Card = ({ title, children }) => (
  <div className="rounded border border-neutral-800/80 bg-black/50 p-4 shadow-[0_0_24px_rgba(0,255,255,0.25)]">
    <div className="font-mono text-xs mb-3" style={{ color: '#FFC000', textShadow: '0 0 6px rgba(255,192,0,0.5), 0 0 10px rgba(0,255,255,0.35)'}}>{title}</div>
    {children}
  </div>
);

const SystemMonitor = () => {
  return (
    <div id="system-monitor-view" className="space-y-4">
      <h3 className="font-mono text-xl" style={{ color: '#FFC000', textShadow: '0 0 8px rgba(255,192,0,0.7), 0 0 14px rgba(0,255,255,0.5)'}}>
        SYSTEM MONITOR // STATUS -DIAG
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <Card title="CPU LOAD">
          <CpuGauge />
        </Card>
        <Card title="DATA FLOW LATENCY">
          <LatencyBars />
        </Card>
        <Card title="TASK LOG">
          <TaskLog />
        </Card>
      </div>
    </div>
  );
};

export default SystemMonitor;

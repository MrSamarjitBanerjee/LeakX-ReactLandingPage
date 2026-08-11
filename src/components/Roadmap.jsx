import './Roadmap.css';

const PHASES = [
  {
    phase: 'Phase 1',
    status: 'shipped',
    title: 'Core CLI scanner',
    items: ['Recursive & glob-based scanning', '5 regex detectors', 'Masked terminal output', '.gitignore support'],
  },
  {
    phase: 'Phase 2',
    status: 'planned',
    title: 'Structured reports',
    items: ['JSON output for CI pipelines', 'HTML summary reports','Allowlist / inline ignore comments',  'Severity scoring' ,'Config file for custom rules'],
  },
];

export default function Roadmap() {
  return (
    <section className="roadmap" id="roadmap">
      <div className="container">
        <span className="eyebrow">what&rsquo;s next</span>
        <h2 className="section-heading">Phase 1 is live. Here&rsquo;s the plan from here.</h2>
        <p className="section-sub">
          LeakX ships in small, usable phases. This page reflects Phase 1 &mdash; the rest
          is scoped, not built yet.
        </p>

        <div className="roadmap__track">
          {PHASES.map((p) => (
            <div className={`roadmap-phase roadmap-phase--${p.status}`} key={p.phase}>
              <div className="roadmap-phase__head">
                <span className="roadmap-phase__num">{p.phase}</span>
                <span className={`roadmap-phase__badge roadmap-phase__badge--${p.status}`}>
                  {p.status === 'shipped' ? 'Shipped' : p.status === 'planned' ? 'Planned' : 'Idea'}
                </span>
              </div>
              <h3>{p.title}</h3>
              <ul>
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

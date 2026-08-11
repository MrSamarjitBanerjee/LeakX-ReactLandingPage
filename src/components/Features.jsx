import './Features.css';

const FEATURES = [
  {
    title: 'Recursive scanning',
    desc: 'Point LeakX at a directory, a single file, or several paths at once — it walks the whole tree for you.',
    icon: (
      <path d="M4 4h6l2 3h10v13H4V4z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Glob pattern support',
    desc: 'Target exactly what you need with familiar glob syntax, like ./src/**/*.ts.',
    icon: (
      <path d="M12 3v18M5 8l14 8M19 8L5 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    ),
  },
  {
    title: 'Smart ignore rules',
    desc: 'node_modules, .git, dist, and build are skipped automatically, and your .gitignore is always respected.',
    icon: (
      <path d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm3.5-3.5 9 9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    ),
  },
  {
    title: 'Five built-in detectors',
    desc: 'GitHub tokens, AWS keys, OpenAI keys, generic API keys, and hardcoded passwords — out of the box.',
    icon: (
      <path d="M9 12a5 5 0 1 1 4.9 6H14l-2 2H9v2H6v-2H4v-3l4.1-4.1A5 5 0 0 1 9 12Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Secrets always masked',
    desc: 'Findings show enough context to act on, never the full secret — safe to paste into a Slack message.',
    icon: (
      <path d="M5 11V8a7 7 0 0 1 14 0v3M4 11h16v10H4V11Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Never crashes mid-scan',
    desc: 'Unreadable or binary files are skipped with a clear warning, so one bad file never kills the run.',
    icon: (
      <path d="M12 4 3 20h18L12 4Zm0 6v5m0 3h.01" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <span className="eyebrow">what it does</span>
        <h2 className="section-heading">Everything you need for a first pass, nothing you don&rsquo;t.</h2>
        <p className="section-sub">
          LeakX keeps to one job — finding hardcoded secrets fast — and does it with a
          predictable, regex-based approach you can read and extend yourself.
        </p>

        <div className="features__grid">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.title}>
              <svg className="feature-card__icon" width="26" height="26" viewBox="0 0 24 24">
                {f.icon}
              </svg>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

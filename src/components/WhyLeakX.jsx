import './WhyLeakX.css';

const POINTS = [
  {
    title: 'No account, no config',
    body: 'Install it and run it. There is no sign-up, no dashboard, and no rule file to write before your first scan.',
  },
  {
    title: 'Readable by design',
    body: 'Every detector is a single regex in its own file. If you want to know exactly why something was flagged, you can read it in under a minute.',
  },
  {
    title: 'Built to sit in your workflow',
    body: 'A non-zero exit code when secrets are found means LeakX drops straight into a pre-commit hook or CI step.',
  },
];

export default function WhyLeakX() {
  return (
    <section className="why" id="why">
      <div className="container why__inner">
        <div className="why__copy">
          <span className="eyebrow">why leakx</span>
          <h2 className="section-heading">A scanner you can actually read.</h2>
          <p className="section-sub">
            Most secret scanners hide their logic behind config files and scoring
            systems. LeakX stays small on purpose &mdash; a fresher-friendly codebase
            that does one job clearly.
          </p>
        </div>

        <div className="why__list">
          {POINTS.map((point, i) => (
            <div className="why__item" key={point.title}>
              <span className="why__index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

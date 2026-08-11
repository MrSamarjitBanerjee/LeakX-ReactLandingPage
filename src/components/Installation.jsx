import { useState } from 'react';
import './Installation.css';

const STEPS = [
  { label: 'Clone', command: 'git clone https://github.com/your-username/leakx.git\ncd leakx' },
  { label: 'Install', command: 'npm install' },
  { label: 'Build', command: 'npm run build' },
  { label: 'Run', command: 'leakx scan .' },
];

export default function Installation() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1600);
    } catch {
      setCopiedIndex(null);
    }
  };

  return (
    <section className="install" id="install">
      <div className="container">
        <span className="eyebrow">get started</span>
        <h2 className="section-heading">Up and running in four steps.</h2>
        <p className="section-sub">
          LeakX is published on npm — install it globally or run it with
        </p>

        <div className="install__steps">
          {STEPS.map((step, i) => (
            <div className="install-step" key={step.label}>
              <div className="install-step__num">{i + 1}</div>
              <div className="install-step__content">
                <span className="install-step__label">{step.label}</span>
                <button
                  className="install-step__code"
                  onClick={() => copy(step.command, i)}
                  type="button"
                >
                  <pre>{step.command}</pre>
                  <span className="install-step__copy">
                    {copiedIndex === i ? 'copied' : 'copy'}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="install__note">
          Prefer a global command? Run <code>npm link</code> after building, and{' '}
          <code>leakx</code> will be available anywhere on your machine.
        </p>
      </div>
    </section>
  );
}

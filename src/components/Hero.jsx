import { useState } from 'react';
import './Hero.css';

const FINDINGS = [
  { type: 'GitHub Token', file: 'src/config.js:12', secret: 'ghp_...8B4a', tone: 'danger' },
  { type: 'AWS Access Key', file: '.env.local:3', secret: 'AKIA...MPLE', tone: 'danger' },
  { type: 'Hardcoded Password', file: 'db/seed.js:44', secret: 'Supe...t123', tone: 'warn' },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyInstall = async () => {
    try {
      await navigator.clipboard.writeText('npm install -g leakx');
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          {/* <span className="eyebrow">open source · npm cli</span> */}
          <h1 className="hero__title">
            Catch secrets
            <br />
            before they <span className="hero__title-leak">leak</span>.
          </h1>
          <p className="hero__sub">
            LeakX scans your codebase for hardcoded API keys, tokens, and passwords in
            seconds &mdash; right from your terminal, before they ever reach a commit.
          </p>

          <div className="hero__actions">
            <a href="https://www.npmjs.com/package/leakx" className="btn btn-primary">
              Download CLI
            </a>
            <a
              className="btn btn-secondary"
              href="https://github.com/MrSamarjitBanerjee/LeakX"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
              View on GitHub
            </a>
          </div>

          <button className="hero__install" onClick={copyInstall} type="button">
            <span className="hero__install-prompt">$</span>
            <span>npm install -g leakx</span>
            <span className="hero__install-copy">{copied ? 'copied' : 'copy'}</span>
          </button>

          <div className="hero__stats">
            <div>
              <strong>5</strong>
              <span>secret types detected</span>
            </div>
            <div>
              <strong>0</strong>
              <span>config files required</span>
            </div>
            <div>
              <strong>MIT</strong>
              <span>licensed &amp; free</span>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__stack">
            {FINDINGS.map((finding, i) => (
              <div className={`finding-card finding-card--${finding.tone}`} key={finding.type} style={{ '--i': i }}>
                <div className="finding-card__head">
                  <span className="finding-card__dot" />
                  {finding.type}
                </div>
                <div className="finding-card__row">
                  <span>File</span>
                  <span>{finding.file}</span>
                </div>
                <div className="finding-card__row">
                  <span>Secret</span>
                  <span className="finding-card__secret">{finding.secret}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

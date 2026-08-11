import { useEffect, useState, useRef } from 'react';
import './TerminalPreview.css';

const COMMAND = 'leakx scan ./src';

const OUTPUT_LINES = [
  { text: '🔍 LeakX — scanning for secrets...', tone: 'muted' },
  { text: '', tone: 'muted' },
  { text: '✖ GitHub Token', tone: 'danger' },
  { text: '  File: src/config.js', tone: 'muted' },
  { text: '  Line: 12', tone: 'muted' },
  { text: '  Secret: ghp_...8B4a', tone: 'warn' },
  { text: '', tone: 'muted' },
  { text: '✖ AWS Access Key', tone: 'danger' },
  { text: '  File: src/aws/client.js', tone: 'muted' },
  { text: '  Line: 5', tone: 'muted' },
  { text: '  Secret: AKIA...MPLE', tone: 'warn' },
  { text: '', tone: 'muted' },
  { text: 'Scan Summary', tone: 'bold' },
  { text: '  Files Scanned : 47', tone: 'muted' },
  { text: '  Secrets Found : 2', tone: 'danger' },
  { text: '  Scan Duration : 0.09s', tone: 'muted' },
];

const TYPE_SPEED = 55;
const LINE_DELAY = 160;
const HOLD_AFTER = 3200;
const RESTART_PAUSE = 900;

export default function TerminalPreview() {
  const [typed, setTyped] = useState('');
  const [lineCount, setLineCount] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    let charIndex = 0;
    let revealed = 0;

    const typeNextChar = () => {
      charIndex += 1;
      setTyped(COMMAND.slice(0, charIndex));

      if (charIndex < COMMAND.length) {
        timeoutRef.current = setTimeout(typeNextChar, TYPE_SPEED);
      } else {
        timeoutRef.current = setTimeout(revealNextLine, 400);
      }
    };

    const revealNextLine = () => {
      revealed += 1;
      setLineCount(revealed);

      if (revealed < OUTPUT_LINES.length) {
        timeoutRef.current = setTimeout(revealNextLine, LINE_DELAY);
      } else {
        timeoutRef.current = setTimeout(restart, HOLD_AFTER);
      }
    };

    const restart = () => {
      setTyped('');
      setLineCount(0);
      charIndex = 0;
      revealed = 0;
      timeoutRef.current = setTimeout(typeNextChar, RESTART_PAUSE);
    };

    timeoutRef.current = setTimeout(typeNextChar, TYPE_SPEED);

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <section className="terminal-section" id="terminal">
      <div className="container">
        <span className="eyebrow">see it run</span>
        <h2 className="section-heading">One command. A full readout.</h2>
        <p className="section-sub">
          LeakX prints exactly what it found and where &mdash; type, file, line, and a masked
          value you can act on without ever seeing the real secret.
        </p>

        <div className="terminal-window">
          <div className="terminal-window__bar">
            <span className="terminal-window__dot terminal-window__dot--danger" />
            <span className="terminal-window__dot terminal-window__dot--warn" />
            <span className="terminal-window__dot terminal-window__dot--safe" />
            <span className="terminal-window__title">leakx &mdash; zsh</span>
          </div>
          <div className="terminal-window__body">
            <div className="terminal-line">
              <span className="terminal-prompt">$</span> {typed}
              <span className="terminal-cursor" />
            </div>
            {OUTPUT_LINES.slice(0, lineCount).map((line, i) => (
              <div key={i} className={`terminal-line terminal-line--${line.tone}`}>
                {line.text || '\u00A0'}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

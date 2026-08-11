import { useEffect, useState } from 'react';
import './Navbar.css';

const LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#terminal', label: 'Terminal' },
  { href: '#install', label: 'Install' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#about', label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__brand-mark">$</span>
          LeakX
        </a>

        <nav className="nav__links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn-secondary nav__gh"
            href="https://github.com/MrSamarjitBanerjee/LeakX"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
           <a
            className="btn btn-secondary nav__gh"
            href="https://www.npmjs.com/package/leakx"
            target="_blank"
            rel="noreferrer"
          >
            npm
          </a>
          <a href="#install" className="btn btn-primary">
            Download CLI
          </a>
        </div>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/your-username/leakx"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            GitHub
          </a>
          <a href="#install" className="btn btn-primary" onClick={() => setOpen(false)}>
            Download CLI
          </a>
        </div>
      )}
    </header>
  );
}

import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark">$</span>
          LeakX
          <span className="footer__tag">catch secrets before they leak</span>
        </div>

        <nav className="footer__links">
          <a href="#features">Features</a>
          <a href="#terminal">Terminal</a>
          <a href="#install">Install</a>
          <a href="#roadmap">Roadmap</a>
          <a href="https://github.com/MrSamarjitBanerjee/LeakX" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>

        <p className="footer__meta">
          MIT Licensed &middot; Built by Samarjit Banerjee &middot; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

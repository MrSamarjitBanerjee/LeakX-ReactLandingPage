import './AboutDeveloper.css';

const SKILLS = ['Node.js', 'TypeScript', 'Express.js', 'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'LangChain'];

export default function AboutDeveloper() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__avatar" aria-hidden="true">
          SB
        </div>

        <div className="about__content">
          <span className="eyebrow">about the developer</span>
          <h2 className="section-heading">Built by Samarjit Banerjee.</h2>
          <p className="about__bio">
            I&rsquo;m a MERN software engineer working across Node.js, Express,
            and TypeScript, with a growing focus on GenAI. 
            LeakX started as a way to sharpen my Typescript CLI and tooling skills while
            solving a problem &mdash; secrets slipping 
            into commits during fast-moving projects.
            Currently looking for Backend / MERN / Software developer roles.
          </p>

          <div className="about__skills">
            {SKILLS.map((skill) => (
              <span key={skill} className="about__skill">
                {skill}
              </span>
            ))}
          </div>

          <div className="about__links">
            <a href="https://github.com/MrSamarjitBanerjee" target="_blank" rel="noreferrer" className="btn btn-secondary">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/samarjitbanerjee/" target="_blank" rel="noreferrer" className="btn btn-secondary">
              LinkedIn
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=banerjeesamarjit9@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

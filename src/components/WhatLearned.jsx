import './WhatLearned.css';

const LESSONS = [
    {
        title: 'Building a real CLI',
        body: 'I learned how Node.js command-line applications work, from argument parsing and command design to exit codes and executable package binaries.',
    },
    {
        title: 'Designing for security',
        body: 'Building LeakX taught me that secret detection is not just about matching patterns. False positives, masking sensitive output, and safe handling of scanned files are equally important.',
    },
    {
        title: 'Writing maintainable detectors',
        body: 'I learned to keep each detector isolated and focused on one type of secret, making the scanner easier to understand, test, and extend.',
    },
    {
        title: 'Working with the npm ecosystem',
        body: 'I learned how to package a TypeScript project, configure the npm bin entry, control published files, manage semantic versions, and publish a real package to npm.',
    },
    {
        title: 'Thinking about developer workflows',
        body: 'Designing LeakX around exit codes and simple commands showed me how a small tool can integrate into pre-commit hooks, CI pipelines, and everyday development workflows.',
    },
];

export default function WhatILearned() {
    return (
        <section className="learned">
            <div className="learned__inner">

                <div className="learned__copy">
                    <span className="learned__eyebrow">
                        what i learned
                    </span>

                    <h2>
                        More than just
                        <br />
                        writing a scanner.
                    </h2>

                    <p>
                        Building LeakX gave me practical experience with
                        Node.js, TypeScript, security-focused development,
                        testing, CLI design, and the npm ecosystem.
                    </p>
                </div>

                <div className="learned__list">
                    {LESSONS.map((lesson, i) => (
                        <div className="learned__item" key={lesson.title}>
                            <span className="learned__index">
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            <div>
                                <h3>{lesson.title}</h3>
                                <p>{lesson.body}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
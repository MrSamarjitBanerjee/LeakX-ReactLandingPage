import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__content">
        <div className="not-found__code">404</div>

        <div className="not-found__terminal">
          <span className="not-found__prompt">$</span>
          <span>cd {window.location.pathname}</span>
        </div>

        <h1>Page not found</h1>

        <p>
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="not-found__actions">
          <a href="/" className="btn btn-primary">
            Back to Home
          </a>

          <button
            className="btn btn-secondary"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}

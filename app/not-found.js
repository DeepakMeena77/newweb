import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container quote-panel">
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist in this static build.</p>
        <Link className="button button-primary" href="/">
          Return home
        </Link>
      </div>
    </section>
  );
}

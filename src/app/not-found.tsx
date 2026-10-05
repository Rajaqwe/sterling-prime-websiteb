import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bridge-page">
      <div className="bridge-panel">
        <p className="section-kicker">404 / Not found</p>
        <h1>That page moved.</h1>
        <p>Use the new editorial navigation to continue exploring Sterling Prime.</p>
        <Link className="button button--dark" href="/">Back home <span>↗</span></Link>
      </div>
    </main>
  );
}

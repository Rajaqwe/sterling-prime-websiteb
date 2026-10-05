import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/site";

const images = {
  hero: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=2200&q=86",
  statement: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1700&q=84",
  workA: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&w=1600&q=84",
  workB: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1500&q=84",
  workC: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1500&q=84"
};

const moments = [
  ["01", "Employee welcome", "/employee-gifting", "Make day one feel considered."],
  ["02", "Leadership & clients", "/corporate-gifts", "Quietly premium, easy to approve."],
  ["03", "Festive programmes", "/gift-collections", "Scale the volume without the generic feel."],
  ["04", "Events & conferences", "/event-gifts", "Useful pieces people keep after the event."]
];

export function EditorialHome() {
  return (
    <div className="editorial-page">
      <section className="hero" id="top">
        <Image src={images.hero} alt="" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <Reveal><p className="eyebrow hero-eyebrow">Sterling Prime / Corporate Gifting</p></Reveal>
          <Reveal delay={120}><h1>Corporate gifting, <em>composed</em> with intent.</h1></Reveal>
          <Reveal delay={220}><p className="hero-copy">Thoughtful products, considered branding and dependable delivery—built for teams, clients and moments that matter.</p></Reveal>
          <Reveal delay={320}>
            <div className="hero-actions">
              <Link className="button button--light" href="/products">Explore the catalogue <span>↘</span></Link>
              <Link className="text-link text-link--light" href="/request-a-quote">Tell us what you need <span>↗</span></Link>
            </div>
          </Reveal>
        </div>
        <div className="hero-footer"><span>01 — Curated</span><span>02 — Branded</span><span>03 — Delivered</span></div>
      </section>

      <section className="statement" id="about">
        <div className="section-index">01 / The Sterling point of view</div>
        <div>
          <Reveal><p className="section-kicker">A different kind of gifting partner</p><h2>Less catalogue. More point of view.</h2></Reveal>
          <Reveal delay={100}><p className="lead">A more focused route from occasion to shortlist: fewer distractions, stronger curation and a smoother path from idea to delivery.</p></Reveal>
        </div>
        <Reveal delay={180}>
          <div className="statement-note">
            <span>For procurement teams</span>
            <strong>Clear decisions. Custom branding. Reliable fulfilment.</strong>
            <Link className="text-link" href="/about">Read our approach <span>↗</span></Link>
          </div>
        </Reveal>
      </section>

      <section className="image-statement">
        <div className="image-statement-media"><Image src={images.statement} alt="" fill sizes="(max-width: 900px) 100vw, 60vw" /></div>
        <div className="image-statement-copy"><p className="section-kicker">Designed around the moment</p><h2>Start with the reason for the gift—not the SKU.</h2><p>Choose by audience, occasion, budget and deadline. The catalogue comes second.</p><Link className="text-link" href="/gift-finder">Find the right direction <span>↗</span></Link></div>
      </section>

      <section className="collections" id="collections">
        <div className="section-head">
          <div><div className="section-index">02 / Collections</div><Reveal><h2>Made for the moment, not the menu.</h2></Reveal></div>
          <Reveal delay={100}><Link className="text-link" href="/gift-collections">See all collections <span>↗</span></Link></Reveal>
        </div>
        <div className="moment-list">
          {moments.map(([num, title, href, copy], index) => (
            <Reveal key={num} delay={index * 70}>
              <Link className="moment-row" href={href}>
                <span>{num}</span><div><h3>{title}</h3><p>{copy}</p></div><strong>↗</strong>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="section-index">03 / Approach</div>
        <div className="approach-grid">
          <Reveal><h2>From brief to beautifully done.</h2></Reveal>
          <div className="steps">
            {[["01","Start with the moment","Occasion, audience, budget and timeline."],["02","Shape the shortlist","We narrow the field to choices that make sense."],["03","Brand with restraint","Logo, packaging and presentation without visual noise."],["04","Deliver with confidence","Coordinated dispatch, tracking and aftercare."]].map(([num,title,copy], index) => (
              <Reveal key={num} delay={index * 70}><article className="step"><span>{num}</span><h3>{title}</h3><p>{copy}</p></article></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="section-head">
          <div><div className="section-index">04 / A few good options</div><Reveal><h2>The shortlist starts here.</h2></Reveal></div>
          <Reveal delay={100}><Link className="text-link" href="/products">Open the catalogue <span>↗</span></Link></Reveal>
        </div>
        <div className="feature-product-grid">
          {products.slice(0, 4).map((product, index) => (
            <Reveal key={product.slug} delay={index * 50}>
              <Link className="feature-product" href={"/products/" + product.slug}>
                <div className="feature-product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 760px) 50vw, 25vw" /></div>
                <div className="feature-product-meta"><h3>{product.name}</h3><span>{product.category}</span><strong>{product.price}</strong></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-head"><div><div className="section-index">05 / Selected work</div><Reveal><h2>Proof, not promises.</h2></Reveal></div><Reveal delay={100}><Link className="text-link" href="/project-gallery">View the gallery <span>↗</span></Link></Reveal></div>
        <div className="work-grid">
          <Reveal className="work-large"><Image src={images.workA} alt="Corporate gifting project" fill sizes="(max-width: 900px) 100vw, 58vw" /><div><span>Branding / Executive</span><strong>Leadership gifting with a quieter finish.</strong></div></Reveal>
          <div className="work-side">
            <Reveal delay={100} className="work-small"><Image src={images.workB} alt="Gift packaging project" fill sizes="(max-width: 900px) 100vw, 42vw" /><div><span>Employee / Kits</span><strong>Welcome kits designed to feel considered.</strong></div></Reveal>
            <Reveal delay={180} className="work-small"><Image src={images.workC} alt="Premium corporate gift project" fill sizes="(max-width: 900px) 100vw, 42vw" /><div><span>Festive / Bulk</span><strong>Scale without losing the human touch.</strong></div></Reveal>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-index">06 / Let's talk</div>
        <div className="contact-layout">
          <Reveal><p className="section-kicker">Have a gifting brief?</p><h2>Bring us the occasion.<br /><em>We’ll shape the rest.</em></h2></Reveal>
          <Reveal delay={120}><div className="contact-action"><p>Tell us what you are planning, how many people are involved and when it needs to land.</p><Link className="button button--dark" href="/request-a-quote">Start a conversation <span>↗</span></Link></div></Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">STERLING <span>PRIME</span></div>
        <div className="footer-links"><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/request-a-quote">Quote</Link><Link href="/products">Catalogue</Link></div>
        <div className="footer-meta"><span>Corporate gifting, India</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </div>
  );
}

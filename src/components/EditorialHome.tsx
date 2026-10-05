import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const images = {
  hero: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=2200&q=85",
  collection: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=85",
  workA: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&w=1500&q=85",
  workB: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1400&q=85",
  workC: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1400&q=85"
};

export function EditorialHome() {
  return (
    <div className="editorial-page">
      <section className="hero">
        <Image src={images.hero} alt="" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <Reveal><p className="eyebrow hero-eyebrow">Sterling Prime / Corporate Gifting</p></Reveal>
          <Reveal delay={120}><h1>Corporate gifting, <em>composed</em> with intent.</h1></Reveal>
          <Reveal delay={220}><p className="hero-copy">Thoughtful products, considered branding and dependable delivery—built for teams, clients and moments that matter.</p></Reveal>
          <Reveal delay={320}>
            <div className="hero-actions">
              <a className="button button--light" href="#collections">Explore collections <span>↘</span></a>
              <a className="text-link text-link--light" href="#contact">Tell us what you need <span>↗</span></a>
            </div>
          </Reveal>
        </div>
        <div className="hero-footer"><span>01 — Curated</span><span>02 — Branded</span><span>03 — Delivered</span></div>
      </section>

      <section className="statement" id="about">
        <div className="section-index">01 / Sterling</div>
        <div>
          <Reveal>
            <p className="section-kicker">A different kind of gifting partner</p>
            <h2>Less catalogue. More point of view.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lead">Sterling Prime is moving beyond the typical gift-shop experience: fewer distractions, stronger curation and a smoother path from idea to delivery.</p>
          </Reveal>
        </div>
        <Reveal delay={180}>
          <div className="statement-note"><span>For procurement teams</span><strong>Clear decisions. Custom branding. Reliable fulfilment.</strong></div>
        </Reveal>
      </section>

      <section className="collections" id="collections">
        <div className="section-head">
          <div><div className="section-index">02 / Collections</div><Reveal><h2>Made for the moment, not the menu.</h2></Reveal></div>
          <Reveal delay={100}><a className="text-link" href="#contact">Build a gifting brief <span>↗</span></a></Reveal>
        </div>
        <div className="collection-grid">
          <Reveal className="collection-feature">
            <a href="#contact" className="image-card">
              <Image src={images.collection} alt="Premium packaged gifts" fill sizes="(max-width: 900px) 100vw, 62vw" />
              <span className="image-card-meta">Executive / Onboarding / Milestones</span>
              <span className="image-card-title">The considered collection <b>↗</b></span>
            </a>
          </Reveal>
          <div className="collection-list">
            {[
              ["01", "Employee welcome kits", "A first impression worth keeping."],
              ["02", "Client & leadership gifts", "Quietly premium. Easy to approve."],
              ["03", "Festive & seasonal drops", "High volume without the generic feel."]
            ].map(([num, title, copy], index) => (
              <Reveal key={num} delay={index * 80}>
                <a className="collection-row" href="#contact">
                  <span>{num}</span><div><h3>{title}</h3><p>{copy}</p></div><span className="row-arrow">↗</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="section-index">03 / Approach</div>
        <div className="approach-grid">
          <Reveal><h2>From brief to beautifully done.</h2></Reveal>
          <div className="steps">
            {[
              ["01", "Start with the moment", "Occasion, audience, budget and timeline."],
              ["02", "Shape the shortlist", "We narrow the catalogue to choices that make sense."],
              ["03", "Brand with restraint", "Logo, packaging and presentation without visual noise."],
              ["04", "Deliver with confidence", "Coordinated dispatch, tracking and aftercare."]
            ].map(([num, title, copy], index) => (
              <Reveal key={num} delay={index * 70}>
                <article className="step"><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-head">
          <div><div className="section-index">04 / Selected work</div><Reveal><h2>Proof, not promises.</h2></Reveal></div>
          <Reveal delay={100}><a className="text-link" href="#contact">View case studies <span>↗</span></a></Reveal>
        </div>
        <div className="work-grid">
          <Reveal className="work-large">
            <Image src={images.workA} alt="Corporate gift project" fill sizes="(max-width: 900px) 100vw, 58vw" />
            <div><span>Branding / Executive</span><strong>Leadership gifting with a quieter finish.</strong></div>
          </Reveal>
          <div className="work-side">
            <Reveal delay={100} className="work-small"><Image src={images.workB} alt="Gift packaging" fill sizes="(max-width: 900px) 100vw, 42vw" /><div><span>Employee / Kits</span><strong>Welcome kits designed to feel considered.</strong></div></Reveal>
            <Reveal delay={180} className="work-small"><Image src={images.workC} alt="Premium lifestyle gift" fill sizes="(max-width: 900px) 100vw, 42vw" /><div><span>Festive / Bulk</span><strong>Scale without losing the human touch.</strong></div></Reveal>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-index">05 / Let's talk</div>
        <div className="contact-layout">
          <Reveal><p className="section-kicker">Have a gifting brief?</p><h2>Bring us the occasion.<br /><em>We’ll shape the rest.</em></h2></Reveal>
          <Reveal delay={120}>
            <div className="contact-action"><p>Tell us what you are planning, how many people are involved and when it needs to land.</p><a className="button button--dark" href="#contact">Start a conversation <span>↗</span></a><small>Quote flow will be connected in Phase 2.</small></div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">STERLING <span>PRIME</span></div>
        <div className="footer-meta"><span>Corporate gifting, India</span><span>Phase 1 editorial redesign</span></div>
      </footer>
    </div>
  );
}

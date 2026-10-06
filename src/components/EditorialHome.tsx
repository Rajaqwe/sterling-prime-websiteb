"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const visual = {
  hero: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=2200&q=88",
  print: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1600&q=88",
  packaging: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1600&q=88",
  notebook: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1600&q=88",
};

const services = [
  ["01", "Corporate print", "Offset, digital and specialty print built for repeatable quality at scale."],
  ["02", "Branded gifting", "Useful, premium gifts with branding that feels considered rather than loud."],
  ["03", "Packaging", "Boxes, sleeves, inserts and finishing that turn a product into a complete experience."],
  ["04", "Campaign kits", "One coordinated system across print, merchandise, dispatch and delivery."],
];

const products = [
  ["01", "Executive kits", "Premium stationery, notebooks and desk essentials."],
  ["02", "Pharma campaigns", "Branded collateral for launches, conferences and field teams."],
  ["03", "Festive gifting", "High-volume gifting with a premium presentation."],
];

export function EditorialHome() {
  return (
    <div className="prime-home">
      <section className="prime-hero" id="top">
        <div className="prime-hero-bg" />
        <div className="prime-hero-glow prime-hero-glow-a" />
        <div className="prime-hero-glow prime-hero-glow-b" />
        <div className="prime-hero-inner">
          <Reveal><p className="prime-eyebrow">STERLING PRIME / PRINT × GIFT × BRAND</p></Reveal>
          <Reveal delay={100}><h1>Make the <i>ordinary</i><br />worth keeping.</h1></Reveal>
          <Reveal delay={180}><p className="prime-hero-copy">Premium printing, corporate gifting and branded experiences for companies that care how their work lands.</p></Reveal>
          <Reveal delay={260}>
            <div className="prime-actions">
              <Link href="/products" className="prime-button">Explore Sterling Prime <span>↗</span></Link>
              <Link href="/request-a-quote" className="prime-text-link">Start a project <span>↗</span></Link>
            </div>
          </Reveal>
        </div>
        <div className="prime-hero-object">
          <div className="prime-card prime-card-back"><span>OFFSET</span><b>Precision<br/>on paper.</b></div>
          <div className="prime-card prime-card-main">
            <div className="prime-card-top"><span>STERLING</span><span>01 / 04</span></div>
            <div className="prime-card-image"><img src={visual.hero} alt="" /></div>
            <div className="prime-card-bottom"><b>Made to be noticed.</b><span>PRINT / GIFT / BRAND</span></div>
          </div>
          <div className="prime-card prime-card-front"><span>PRIME</span><strong>Details<br/>matter.</strong></div>
        </div>
        <div className="prime-scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <div className="prime-marquee" aria-hidden="true">
        <div>PRINT WITH PURPOSE&nbsp;&nbsp; · &nbsp;&nbsp;GIFT WITH INTENT&nbsp;&nbsp; · &nbsp;&nbsp;BRAND WITH CHARACTER&nbsp;&nbsp; · &nbsp;&nbsp;PRINT WITH PURPOSE&nbsp;&nbsp; · &nbsp;&nbsp;GIFT WITH INTENT&nbsp;&nbsp; · &nbsp;&nbsp;</div>
      </div>

      <section className="prime-intro">
        <div className="prime-index">01 / THE IDEA</div>
        <div>
          <Reveal><p className="prime-kicker">A print partner with a point of view</p><h2>We turn a brief into something people can <i>feel.</i></h2></Reveal>
          <Reveal delay={120}><p className="prime-lead">Sterling Prime brings print production, corporate gifting, packaging and brand execution under one roof—so the finished piece feels like one idea, not five vendors.</p></Reveal>
        </div>
      </section>

      <section className="prime-split">
        <div className="prime-split-image"><img src={visual.print} alt="Premium printed material" /></div>
        <div className="prime-split-copy">
          <span className="prime-kicker">Built for serious volume</span>
          <h2>Beautiful at 10.<br/><i>Reliable at 10,000.</i></h2>
          <p>From pharmaceutical collateral to company-wide gifting, every job is engineered around finish, consistency, timelines and practical procurement.</p>
          <Link href="/about" className="prime-text-link prime-dark">See how we work <span>↗</span></Link>
        </div>
      </section>

      <section className="prime-services" id="services">
        <div className="prime-section-head">
          <div><div className="prime-index">02 / WHAT WE DO</div><Reveal><h2>One partner.<br/><i>Many touchpoints.</i></h2></Reveal></div>
          <p>From the first artwork file to the final dispatch.</p>
        </div>
        <div className="prime-service-list">
          {services.map(([num,title,copy], i) => (
            <Reveal key={num} delay={i * 60}>
              <Link href="/products" className="prime-service-row">
                <span>{num}</span><div><h3>{title}</h3><p>{copy}</p></div><b>↗</b>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="prime-showcase">
        <div className="prime-showcase-image"><img src={visual.packaging} alt="Branded packaging" /></div>
        <div className="prime-showcase-copy">
          <span className="prime-kicker">THE PRIME STANDARD</span>
          <h2>Good design gets attention.<br/><i>Good execution earns trust.</i></h2>
          <div className="prime-metrics"><div><strong>01</strong><span>CONSISTENT</span></div><div><strong>02</strong><span>SCALABLE</span></div><div><strong>03</strong><span>ON-TIME</span></div></div>
        </div>
      </section>

      <section className="prime-products" id="collections">
        <div className="prime-section-head">
          <div><div className="prime-index">03 / SIGNATURES</div><Reveal><h2>A few things<br/><i>we do very well.</i></h2></Reveal></div>
          <Link href="/products" className="prime-text-link prime-dark">Open catalogue <span>↗</span></Link>
        </div>
        <div className="prime-product-grid">
          {products.map(([num,title,copy], i) => (
            <Reveal key={num} delay={i * 80}>
              <Link href="/products" className="prime-product">
                <div className="prime-product-art"><img src={[visual.notebook, visual.print, visual.packaging][i]} alt="" /><span>{num}</span></div>
                <div className="prime-product-meta"><h3>{title}</h3><p>{copy}</p><b>Explore ↗</b></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="prime-dark-section">
        <div className="prime-index">04 / THE PROCESS</div>
        <div className="prime-process">
          <Reveal><h2>Brief.<br/>Shape.<br/><i>Make.</i></h2></Reveal>
          <div className="prime-process-list">
            {["Understand the brief","Curate the right solution","Prototype and approve","Produce at scale","Pack, dispatch and deliver"].map((item,i) => (
              <div className="prime-process-row" key={item}><span>0{i+1}</span><strong>{item}</strong><b>↗</b></div>
            ))}
          </div>
        </div>
      </section>

      <section className="prime-cta" id="contact">
        <div className="prime-index">05 / START SOMETHING</div>
        <Reveal><h2>Have a brief?<br/><i>Let's make it Prime.</i></h2></Reveal>
        <p>Tell us what you need, how many, and when you need it. We’ll take it from there.</p>
        <Link href="/request-a-quote" className="prime-button prime-button-dark">Start a conversation <span>↗</span></Link>
      </section>

      <footer className="prime-footer">
        <div><strong>STERLING <i>PRIME</i></strong><span>PRINT / GIFT / BRAND</span></div>
        <nav><Link href="/products">Catalogue</Link><Link href="/about">About</Link><Link href="/project-gallery">Work</Link><Link href="/request-a-quote">Contact</Link></nav>
        <span>© 2026 Sterling Prime</span>
      </footer>
    </div>
  );
}

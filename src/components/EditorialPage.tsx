import Image from "next/image";
import Link from "next/link";
import { pageCopy, collections, PRODUCTION_URL } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Catalog } from "@/components/Catalog";
import { ContactForm } from "@/components/ContactForm";
import { FaqList, GiftFinder } from "@/components/InteractiveContent";

const contentImages = [
  "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1800&q=82",
  "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1500&q=82",
  "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&w=1500&q=82"
];

export function EditorialPage({ slug }: { slug: string }) {
  const copy = pageCopy[slug] ?? {
    eyebrow: "Sterling Prime",
    title: "Corporate gifting, composed with intent.",
    intro: "A more editorial way to discover, shortlist and organise gifting.",
    cta: "Talk to Sterling"
  };

  if (slug === "products") return <CatalogPage />;
  if (slug === "gift-finder") return <FinderPage copy={copy} />;
  if (slug === "faq") return <FaqPage copy={copy} />;
  if (slug === "contact" || slug === "request-a-quote" || slug === "request-a-sample") return <BriefPage slug={slug} copy={copy} />;
  if (slug === "corporate-gifts" || slug === "employee-gifting" || slug === "gift-collections" || slug === "event-gifts") return <CollectionPage slug={slug} copy={copy} />;

  return (
    <div className="inner-page">
      <section className="page-hero">
        <div className="page-hero-copy">
          <Reveal><p className="section-kicker">{copy.eyebrow}</p></Reveal>
          <Reveal delay={100}><h1>{copy.title}</h1></Reveal>
          <Reveal delay={180}><p className="page-intro">{copy.intro}</p></Reveal>
          {copy.cta && <Reveal delay={260}><a className="button button--dark" href="#page-action">{copy.cta} <span>↘</span></a></Reveal>}
        </div>
        <Reveal className="page-hero-image" delay={120}>
          <Image src={contentImages[slug.length % contentImages.length]} alt="" fill sizes="(max-width: 900px) 100vw, 48vw" />
        </Reveal>
      </section>

      <section className="editorial-content" id="page-action">
        <div className="section-index">01 / The point</div>
        <Reveal><h2>{slug === "about" ? "Curate more. Complicate less." : "Useful, considered and built for the brief."}</h2></Reveal>
        <div className="editorial-columns">
          <Reveal><p>Our redesign keeps the commercial core practical while changing the way the story is presented: more breathing room, stronger imagery, clearer hierarchy and motion that earns its place.</p></Reveal>
          <Reveal delay={100}><p>That means a website that feels closer to a premium editorial brand than a conventional B2B catalogue, while still guiding procurement teams toward an actionable next step.</p></Reveal>
        </div>
      </section>

      <section className="editorial-feature">
        <Image src={contentImages[(slug.length + 1) % contentImages.length]} alt="" fill sizes="100vw" />
        <div><span>02 / Why it works</span><h2>Less UI. More signal.</h2></div>
      </section>

      <section className="principles">
        {["Curate by occasion","Brand without noise","Deliver with confidence"].map((item,index)=>
          <Reveal key={item} delay={index*70}><div><span>0{index+1}</span><h3>{item}</h3><p>One clear decision at a time.</p></div></Reveal>
        )}
      </section>

      <section className="page-cta">
        <div><p className="section-kicker">Ready when you are</p><h2>{copy.cta ?? "Talk to Sterling"}</h2></div>
        <a className="button button--dark" href={PRODUCTION_URL + (slug === "request-a-quote" ? "/request-a-quote" : "/contact")}>Continue to Sterling <span>↗</span></a>
      </section>
    </div>
  );
}

function CatalogPage() {
  return (
    <div className="inner-page">
      <section className="page-hero page-hero--compact">
        <div className="page-hero-copy">
          <Reveal><p className="section-kicker">Catalogue</p></Reveal>
          <Reveal delay={100}><h1>A better way to browse corporate gifting.</h1></Reveal>
          <Reveal delay={180}><p className="page-intro">Filter the field, keep the visual story and open the product that fits the brief.</p></Reveal>
        </div>
      </section>
      <Catalog />
    </div>
  );
}

function CollectionPage({ slug, copy }: { slug: string; copy: { eyebrow:string; title:string; intro:string; cta?:string } }) {
  const featured = collections.find((c) => c.href === "/" + slug) ?? collections[0];
  return (
    <div className="inner-page">
      <section className="page-hero">
        <div className="page-hero-copy">
          <Reveal><p className="section-kicker">{copy.eyebrow}</p></Reveal>
          <Reveal delay={100}><h1>{copy.title}</h1></Reveal>
          <Reveal delay={180}><p className="page-intro">{copy.intro}</p></Reveal>
          <Reveal delay={260}><Link className="button button--dark" href="/products">Browse the catalogue <span>↗</span></Link></Reveal>
        </div>
        <Reveal className="page-hero-image" delay={120}><Image src={featured.image} alt={featured.title} fill sizes="(max-width: 900px) 100vw, 48vw" /></Reveal>
      </section>
      <section className="collection-editorial">
        {collections.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <Link href={item.href} className="collection-editorial-row"><span>0{index + 1}</span><div><h2>{item.title}</h2><p>{item.copy}</p></div><strong>↗</strong></Link>
          </Reveal>
        ))}
      </section>
    </div>
  );
}

function BriefPage({ slug, copy }: { slug: string; copy: { eyebrow:string; title:string; intro:string; cta?:string } }) {
  return (
    <div className="inner-page">
      <section className="brief-intro">
        <Reveal><p className="section-kicker">{copy.eyebrow}</p></Reveal>
        <Reveal delay={100}><h1>{copy.title}</h1></Reveal>
        <Reveal delay={180}><p className="page-intro">{copy.intro}</p></Reveal>
      </section>
      <section className="brief-layout">
        <div><div className="section-index">01 / Your brief</div><h2>Give us enough to make the first shortlist useful.</h2><p>Start with the context. This preview captures the visual experience, then hands secure submission to the production application.</p></div>
        <ContactForm productionPath={slug === "contact" ? "/contact" : slug === "request-a-sample" ? "/request-a-sample" : "/request-a-quote"} />
      </section>
    </div>
  );
}

function FinderPage({ copy }: { copy: { eyebrow:string; title:string; intro:string; cta?:string } }) {
  return <div className="inner-page"><section className="brief-intro"><Reveal><p className="section-kicker">{copy.eyebrow}</p></Reveal><Reveal delay={100}><h1>{copy.title}</h1></Reveal><Reveal delay={180}><p className="page-intro">{copy.intro}</p></Reveal></section><section className="brief-layout"><div><div className="section-index">01 / Gift direction</div><h2>A small set of questions. A shorter path to a shortlist.</h2><p>This interactive preview is intentionally lightweight so the motion stays smooth on mobile.</p></div><GiftFinder /></section></div>;
}

function FaqPage({ copy }: { copy: { eyebrow:string; title:string; intro:string } }) {
  return <div className="inner-page"><section className="brief-intro"><Reveal><p className="section-kicker">{copy.eyebrow}</p></Reveal><Reveal delay={100}><h1>{copy.title}</h1></Reveal><Reveal delay={180}><p className="page-intro">{copy.intro}</p></Reveal></section><section className="faq-layout"><div><div className="section-index">01 / Answers</div><h2>Practical questions, answered without the wall of cards.</h2></div><FaqList /></section></div>;
}

export function FunctionalBridge({ area }: { area: string }) {
  const path = area === "admin" ? "/admin" : "/" + area;
  return <div className="bridge-page"><div className="bridge-panel"><p className="section-kicker">Functional area</p><h1>{area.charAt(0).toUpperCase() + area.slice(1)}</h1><p>This isolated redesign focuses on the public visual system. Production authentication, dashboard and admin workflows remain protected in the main application.</p><a className="button button--dark" href={PRODUCTION_URL + path}>Open production {area} <span>↗</span></a></div></div>;
}

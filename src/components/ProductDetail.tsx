import Image from "next/image";
import Link from "next/link";
import { products, PRODUCTION_URL } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function ProductDetail({ slug }: { slug: string }) {
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    return (
      <div className="bridge-page"><div className="bridge-panel"><p className="section-kicker">Catalogue</p><h1>Product not found.</h1><Link className="button button--dark" href="/products">Back to catalogue</Link></div></div>
    );
  }

  return (
    <div className="product-detail">
      <section className="product-detail-grid">
        <Reveal className="product-detail-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 900px) 100vw, 58vw" /></Reveal>
        <div className="product-detail-copy">
          <Reveal><p className="section-kicker">{product.category}</p></Reveal>
          <Reveal delay={100}><h1>{product.name}</h1></Reveal>
          <Reveal delay={160}><p className="product-price">{product.price}</p></Reveal>
          <Reveal delay={220}><p className="product-summary">{product.summary}</p></Reveal>
          <Reveal delay={280}><div className="product-actions"><a className="button button--dark" href={PRODUCTION_URL + "/products/" + product.slug}>Open live product <span>↗</span></a><Link className="text-link" href="/request-a-quote">Build a quote <span>↗</span></Link></div></Reveal>
        </div>
      </section>
      <section className="product-detail-notes"><div className="section-index">01 / Specification</div><div><h2>Designed to be selected, branded and delivered.</h2><p>In the production site, this view connects to product availability, pricing, variants, reviews and the quote/cart flow. This isolated redesign keeps that system outside the visual prototype until final integration.</p></div></section>
    </div>
  );
}

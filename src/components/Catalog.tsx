"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

const filters = ["All", "Executive", "Employee", "Client Gifts", "Festive", "Technology", "Wellness", "Travel", "Events", "Merchandise", "Onboarding"];

export function Catalog() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => products.filter((p) =>
    (filter === "All" || p.category === filter || (filter === "Employee" && p.category === "Onboarding")) &&
    p.name.toLowerCase().includes(query.toLowerCase())
  ), [filter, query]);

  return (
    <section className="catalog-shell">
      <div className="catalog-toolbar">
        <div className="filter-strip" aria-label="Catalogue filters">
          {filters.map((item) => (
            <button key={item} className={filter === item ? "filter filter--active" : "filter"} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        <label className="catalog-search">
          <span className="sr-only">Search products</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search the catalogue" />
        </label>
      </div>
      <div className="catalog-count">{visible.length} curated {visible.length === 1 ? "option" : "options"}</div>
      <div className="catalog-grid">
        {visible.map((product, index) => (
          <Reveal key={product.slug} delay={Math.min(index * 35, 280)}>
            <Link href={"/products/" + product.slug} className="catalog-card">
              <div className="catalog-image">
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                <span>{product.category}</span>
              </div>
              <div className="catalog-meta">
                <div><h3>{product.name}</h3><p>{product.summary}</p></div>
                <strong>{product.price}</strong>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

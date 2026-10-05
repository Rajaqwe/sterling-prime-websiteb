"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  ["Collections", "/gift-collections"],
  ["Catalogue", "/products"],
  ["Our approach", "/about"],
  ["Work", "/project-gallery"],
];

export function EditorialNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"site-nav " + (scrolled ? "site-nav--scrolled" : "")}>
      <div className="nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Sterling Prime home">
          <img
            src="https://sterling-website-corporate-gifting-p1hjogzpn-sterling17.vercel.app/logos/sterling-logo-full.svg"
            alt="Sterling Prime"
            className="brand-logo"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        </nav>
        <Link className="nav-cta" href="/request-a-quote">Start a brief <span>↗</span></Link>
        <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div className={"mobile-panel " + (open ? "mobile-panel--open" : "")}>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} style={{ transitionDelay: (index * 70) + "ms" }}>
              <span>0{index + 1}</span>{label}
            </Link>
          ))}
          <Link href="/request-a-quote" onClick={() => setOpen(false)} className="mobile-panel-cta">Start a brief <span>↗</span></Link>
        </nav>
      </div>
    </header>
  );
}

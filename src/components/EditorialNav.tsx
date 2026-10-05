"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  ["Collections", "#collections"],
  ["Approach", "#approach"],
  ["Work", "#work"],
  ["About", "#about"],
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
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Sterling Prime home">
          <img
            src="https://sterling-website-corporate-gifting-p1hjogzpn-sterling17.vercel.app/logos/sterling-logo-full.svg"
            alt="Sterling Prime"
            className="brand-logo"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">Start a project <span>↗</span></a>

        <button
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div className={`mobile-panel ${open ? "mobile-panel--open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <a key={label} href={href} onClick={() => setOpen(false)} style={{ transitionDelay: `${index * 70}ms` }}>
              <span>0{index + 1}</span>{label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mobile-panel-cta">Start a project <span>↗</span></a>
        </nav>
      </div>
    </header>
  );
}

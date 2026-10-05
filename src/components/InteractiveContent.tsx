"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/site";

const faqs = [
  ["What can Sterling source?", "The production catalogue spans executive gifts, employee kits, festive programmes, event merchandise and custom branded options."],
  ["Can products be branded?", "Yes. Branding can be considered across product, packaging, inserts and presentation depending on the selected programme."],
  ["Can you handle bulk programmes?", "Yes. Bulk quantity, recipient counts, delivery windows and multi-location requirements are part of the brief."],
  ["How do I start?", "Start with the occasion, audience, rough quantity, budget and deadline. Sterling can then shape the first shortlist."]
];

export function FaqList() {
  const [open, setOpen] = useState(0);
  return <div className="faq-list">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span>0{i+1}</span><strong>{q}</strong><b>{open===i?"−":"+"}</b></button>{open===i&&<p>{a}</p>}</div>)}</div>;
}

export function GiftFinder() {
  const [category, setCategory] = useState("Employee");
  const [budget, setBudget] = useState("mid");
  const [step, setStep] = useState(0);

  const picks = products.filter((p) => {
    const categoryMatch =
      category === "Employee" ? ["Onboarding","Wellness","Merchandise"].includes(p.category) :
      category === "Leadership" ? p.category === "Executive" :
      category === "Client" ? ["Client Gifts","Technology","Travel"].includes(p.category) :
      p.category === "Events";
    const budgetMatch = budget === "high" ? p.price.includes("2,") : budget === "entry" ? !p.price.includes("2,") : true;
    return categoryMatch && budgetMatch;
  }).slice(0,3);

  return <div className="finder">
    <div className="finder-progress"><span className={step>=0?"active":""}>01</span><span className={step>=1?"active":""}>02</span><span className={step>=2?"active":""}>03</span></div>
    {step===0&&<div className="finder-step"><p className="section-kicker">Who is this for?</p><h2>Start with the recipient.</h2><div className="finder-options">{["Employee","Leadership","Client","Events"].map(item=><button key={item} className={category===item?"selected":""} onClick={()=>setCategory(item)}>{item}<span>↗</span></button>)}</div><button className="button button--dark" onClick={()=>setStep(1)}>Next <span>↘</span></button></div>}
    {step===1&&<div className="finder-step"><p className="section-kicker">What is the comfort zone?</p><h2>Choose a working budget.</h2><div className="finder-options">{[["entry","Under ₹1,000"],["mid","₹1,000–₹2,000"],["high","₹2,000+"]].map(([value,label])=><button key={value} className={budget===value?"selected":""} onClick={()=>setBudget(value)}>{label}<span>↗</span></button>)}</div><div className="finder-inline-actions"><button className="text-link" onClick={()=>setStep(0)}>← Back</button><button className="button button--dark" onClick={()=>setStep(2)}>See directions <span>↘</span></button></div></div>}
    {step===2&&<div className="finder-step"><p className="section-kicker">A first direction</p><h2>Three places to start.</h2><div className="finder-results">{picks.length?picks.map(p=><Link href={"/products/"+p.slug} key={p.slug}><strong>{p.name}</strong><span>{p.category} · {p.price}</span><b>↗</b></Link>):<p>No exact match in this preview. Open the catalogue for the full range.</p>}</div><div className="finder-inline-actions"><button className="text-link" onClick={()=>setStep(1)}>← Refine</button><Link className="button button--dark" href="/request-a-quote">Build the brief <span>↗</span></Link></div></div>}
  </div>;
}

"use client";

import { FormEvent, useState } from "react";
import { PRODUCTION_URL } from "@/lib/site";

export function ContactForm({ productionPath = "/request-a-quote" }: { productionPath?: string }) {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form className="brief-form" onSubmit={submit}>
      <div className="form-row">
        <label>Company<input name="company" required placeholder="Company name" /></label>
        <label>Work email<input name="email" type="email" required placeholder="name@company.com" /></label>
      </div>
      <div className="form-row">
        <label>People count<input name="people" inputMode="numeric" placeholder="e.g. 250" /></label>
        <label>Target date<input name="date" type="date" /></label>
      </div>
      <label>What are you planning?<textarea name="brief" rows={5} placeholder="Occasion, audience, budget, branding, delivery..." /></label>
      {!sent ? (
        <button className="button button--dark" type="submit">Save the brief <span>↗</span></button>
      ) : (
        <div className="form-success">
          Brief captured in this redesign preview. Continue in the live production flow to submit it securely.
          <a href={PRODUCTION_URL + productionPath}>Open secure Sterling flow ↗</a>
        </div>
      )}
    </form>
  );
}

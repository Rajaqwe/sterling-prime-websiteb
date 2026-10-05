export const PRODUCTION_URL = "https://sterling-website-corporate-gifting-p1hjogzpn-sterling17.vercel.app";

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  image: string;
  summary: string;
};

export const products: Product[] = [
  { slug: "executive-tech-kit", name: "Executive Tech Kit", category: "Executive", price: "₹2,499", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82", summary: "A polished set of everyday work essentials for leaders and clients." },
  { slug: "leather-desk-set", name: "Leather Desk Set", category: "Executive", price: "₹1,899", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=82", summary: "Notebook, organiser and desk details presented with understated character." },
  { slug: "premium-bottle", name: "Insulated Bottle", category: "Wellness", price: "₹899", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=82", summary: "A dependable daily-use bottle designed for brand customisation." },
  { slug: "wireless-charger", name: "Wireless Charger", category: "Technology", price: "₹1,099", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=82", summary: "Clean desk technology with a compact footprint and premium finish." },
  { slug: "travel-organiser", name: "Travel Organiser", category: "Travel", price: "₹1,299", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=82", summary: "A practical travel companion for conferences, offsites and executive travel." },
  { slug: "employee-welcome-kit", name: "Employee Welcome Kit", category: "Onboarding", price: "From ₹1,799", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&q=82", summary: "A flexible branded starter experience for new team members." },
  { slug: "festive-hamper", name: "Festive Signature Hamper", category: "Festive", price: "From ₹1,499", image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1200&q=82", summary: "Curated seasonal gifting that scales without feeling generic." },
  { slug: "client-gifting-box", name: "Client Gifting Box", category: "Client Gifts", price: "From ₹2,199", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=82", summary: "A considered mix for relationships that deserve a stronger impression." },
  { slug: "wellness-box", name: "Wellness Box", category: "Wellness", price: "From ₹1,299", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=82", summary: "Thoughtful self-care gifting for employee programs and milestones." },
  { slug: "premium-tote", name: "Premium Utility Tote", category: "Merchandise", price: "From ₹599", image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?auto=format&fit=crop&w=1200&q=82", summary: "High-utility branded carry designed for events and everyday use." },
  { slug: "executive-pen-set", name: "Executive Pen Set", category: "Executive", price: "₹749", image: "https://images.unsplash.com/photo-1589208654542-44f0d7fbf7b3?auto=format&fit=crop&w=1200&q=82", summary: "A compact executive gesture with room for restrained branding." },
  { slug: "conference-kit", name: "Conference Kit", category: "Events", price: "From ₹899", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=82", summary: "Event-ready essentials built around audience, quantity and delivery timing." }
];

export const collections = [
  { title: "Corporate Gifts", href: "/corporate-gifts", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=82", copy: "A curated route through executive, employee and client gifting." },
  { title: "Employee Gifting", href: "/employee-gifting", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1400&q=82", copy: "Onboarding, milestones and moments across the employee journey." },
  { title: "Festive Collections", href: "/gift-collections", image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1400&q=82", copy: "Seasonal gifting with scale, presentation and consistency." },
  { title: "Custom Branding", href: "/custom-branding", image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&w=1400&q=82", copy: "Packaging, logo application and presentation shaped to the brief." }
];

export const publicRoutes = [
  "about","bulk-orders","careers","cart","checkout","contact","corporate-gifts","custom-branding",
  "employee-gifting","event-gifts","faq","gift-collections","gift-finder","personalised-gifts",
  "products","project-gallery","quote-shortlist","request-a-quote","request-a-sample","reviews",
  "sustainability","shipping-delivery","terms-and-conditions"
];

export const specialAreas = ["admin","dashboard","login","register","forgot-password","reset-password"];

export const pageCopy: Record<string, { eyebrow: string; title: string; intro: string; cta?: string }> = {
  about: { eyebrow: "About Sterling Prime", title: "A gifting partner built around the brief.", intro: "Sterling Prime combines product curation, branding and fulfilment into one considered corporate workflow.", cta: "Start a brief" },
  "bulk-orders": { eyebrow: "Bulk orders", title: "Scale the quantity. Keep the character.", intro: "High-volume programmes without losing presentation, consistency or delivery control.", cta: "Plan a bulk order" },
  careers: { eyebrow: "Careers", title: "Build work people remember.", intro: "A growing team bringing product, branding and operations together around meaningful business moments." },
  cart: { eyebrow: "Your shortlist", title: "Products worth a second look.", intro: "Review your selected ideas before taking the brief to the next step.", cta: "Continue to quote" },
  checkout: { eyebrow: "Checkout", title: "A clearer path to completion.", intro: "Your secure checkout flow remains connected to the production commerce experience.", cta: "Open secure checkout" },
  contact: { eyebrow: "Contact", title: "Bring us the occasion.", intro: "Tell us the audience, quantity, budget and timing. We will shape the shortlist.", cta: "Send your brief" },
  "corporate-gifts": { eyebrow: "Corporate gifting", title: "Curated gifts for the people who move the business forward.", intro: "Executive, employee and client gifting with a stronger point of view.", cta: "Explore the catalogue" },
  "custom-branding": { eyebrow: "Custom branding", title: "Make the packaging part of the experience.", intro: "From logo placement to presentation details, branding is handled with restraint.", cta: "Discuss branding" },
  "employee-gifting": { eyebrow: "Employee gifting", title: "Thoughtful at every stage of the employee journey.", intro: "Welcome kits, recognition moments and programmes designed for real teams.", cta: "Build an employee programme" },
  "event-gifts": { eyebrow: "Events & conferences", title: "Useful things. Better remembered.", intro: "Event kits and branded merchandise aligned to audience, quantities and deadlines.", cta: "Plan an event kit" },
  faq: { eyebrow: "Frequently asked", title: "The practical questions, without the visual noise.", intro: "A calmer reference for quantities, branding, timing, delivery and support." },
  "gift-collections": { eyebrow: "Collections", title: "Browse by moment, not by noise.", intro: "Start with the occasion, then narrow the shortlist." },
  "gift-finder": { eyebrow: "Gift finder", title: "Start with the recipient.", intro: "Answer a few practical questions and we will help shape a concise shortlist.", cta: "Begin the finder" },
  "personalised-gifts": { eyebrow: "Personalised gifting", title: "Small details. Stronger recognition.", intro: "Names, notes, packaging and brand details that make a corporate gift feel intentional.", cta: "Discuss personalisation" },
  products: { eyebrow: "Catalogue", title: "A better way to browse corporate gifting.", intro: "Use the filter to narrow the field, then open a product to shape the brief." },
  "project-gallery": { eyebrow: "Selected work", title: "Proof, not promises.", intro: "A visual look at the kinds of gifting programmes Sterling can produce and deliver." },
  "quote-shortlist": { eyebrow: "Quote shortlist", title: "Turn good ideas into a clear brief.", intro: "Your shortlist is the bridge between discovery and procurement.", cta: "Open quote flow" },
  "request-a-quote": { eyebrow: "Request a quote", title: "Tell us what needs to happen.", intro: "Share the occasion, people count, budget and timeline and we can take it from there.", cta: "Open quote form" },
  "request-a-sample": { eyebrow: "Request a sample", title: "See the idea before the volume.", intro: "A practical sample route for teams that need to review product or branding before a larger programme.", cta: "Request a sample" },
  reviews: { eyebrow: "Customer feedback", title: "The experience after delivery matters too.", intro: "See the kinds of outcomes teams look for when choosing a gifting partner." },
  sustainability: { eyebrow: "Sustainability", title: "Better choices, considered through the whole brief.", intro: "Product choice, packaging and fulfilment decisions can all be part of a more responsible programme." },
  "shipping-delivery": { eyebrow: "Shipping & delivery", title: "Delivery is part of the design.", intro: "Coordinated dispatch, tracking and programme support for corporate timelines." },
  "terms-and-conditions": { eyebrow: "Terms", title: "Clear rules make better business.", intro: "Review the commercial terms for the Sterling service." }
};

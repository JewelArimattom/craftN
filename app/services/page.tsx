import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore CraftN’s software development, practical AI, and product design services for businesses and people.",
  alternates: { canonical: "/services" },
  openGraph: { title: "CraftN Services — Software, AI & Product Design", description: "Software development, practical AI, and product design for real business needs.", url: "/services", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "CraftN — Software and AI studio" }] },
};

const offerings = [
  { id: "software", n: "01", title: "Software development", tag: "BUILD WHAT YOUR BUSINESS NEEDS", text: "From a first website to a custom business platform, we design and develop digital products that fit the way people actually work.", list: ["Websites and web applications", "Internal tools and business systems", "Product development and integrations"] },
  { id: "ai", n: "02", title: "AI solutions", tag: "MAKE AI PRACTICAL", text: "We help teams find useful ways to apply AI, then build focused solutions that fit into real workflows and are clear to use.", list: ["AI features and assistants", "Workflow automation", "Prototyping and AI integration"] },
  { id: "design", n: "03", title: "Product design", tag: "MAKE EVERY INTERACTION COUNT", text: "We shape the experience around the people using it, connecting clear visual design with straightforward journeys and useful content.", list: ["UX and interface design", "Product direction and prototyping", "Design systems and visual identity"] },
];

export default function ServicesPage() {
  return <main className="inner-page">
    <section className="inner-hero services-hero"><div className="services-hero-copy"><div className="eyebrow"><span className="pulse"/> WHAT WE DO</div><h1>From the first<br/>idea to <span>what’s next.</span></h1><p>Software, AI, and product design working together to move your business forward.</p><div className="inner-hero-foot"><span>THINK CLEARLY</span><span>BUILD THOUGHTFULLY</span><span>MAKE IT USEFUL</span></div></div><div className="services-hero-visual"><div className="capability-heading"><span>CRAFTN CAPABILITIES</span><span>01 — 03</span></div><div className="capability-flow"><div className="capability-node"><small>01</small><b>Understand</b><span>People &amp; problems</span></div><i className="capability-link">↘</i><div className="capability-node node-featured"><small>02</small><b>Build</b><span>Software &amp; products</span></div><i className="capability-link">↙</i><div className="capability-node"><small>03</small><b>Make it useful</b><span>AI &amp; better workflows</span></div></div><div className="capability-foot"><span>THOUGHTFUL FROM FIRST SKETCH TO LAUNCH</span><span>✳</span></div></div></section>
    <section className="offerings">{offerings.map(o=><article className="offering" id={o.id} key={o.id}><div className="offering-index">{o.n}<span> / 03</span></div><div className="offering-main"><span className="offering-tag">{o.tag}</span><h2>{o.title}</h2><p>{o.text}</p></div><ul>{o.list.map(item=><li key={item}>{item}<span>↗</span></li>)}</ul></article>)}</section>
    <section className="approach-strip"><span className="page-kicker">A GOOD PLACE TO START</span><p>Tell us what you’re trying to make better. We’ll help you work out a sensible next step.</p><Link className="underlined-link" href="/contact">Talk through a project <span className="arrow">↗</span></Link></section>
  </main>;
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore selected software, AI, and digital product projects built by CraftN.",
  alternates: { canonical: "/work" },
  openGraph: { title: "CraftN — Selected Work", description: "A collection of software and digital product projects made with curiosity and care.", url: "/work", type: "website", images: [{ url: "/opengraph-image.svg", width: 1200, height: 630, alt: "CraftN — Software and AI studio" }] },
};

const work = [
  { n: "01", name: "StockN", kind: "Business software", summary: "A digital experience for keeping stock and day-to-day operations in view.", url: "https://www.stockn.duckdns.org/", tone: "work-green", mark: "S" },
  { n: "02", name: "CLI CCC", kind: "Web application", summary: "A focused web project with a clear, approachable interface.", url: "https://cli-ccc.vercel.app/", tone: "work-dark", mark: "⌘" },
  { n: "03", name: "CraftN", kind: "Studio website", summary: "Our home online, built to bring our work and ideas together.", url: "https://craftn.duckdns.org/", tone: "work-lime", mark: "✳" },
  { n: "04", name: "Codex Bay", kind: "AI & product", summary: "A product exploration shaped around ideas, tools, and a thoughtful digital experience.", url: "https://codex-bay-delta.vercel.app/", tone: "work-lilac", mark: "✦" },
  { n: "05", name: "Jadoo", kind: "Web experience", summary: "A visual web concept with a distinct voice and clear direction.", url: "https://jadoo-cc.vercel.app/", tone: "work-peach", mark: "↗" },
];

export default function WorkPage() {
  return <main className="inner-page work-page">
    <section className="inner-hero work-hero"><div className="work-hero-copy"><div className="eyebrow"><span className="pulse"/> SELECTED WORK</div><h1>Good ideas,<br/><span>out in the world.</span></h1><p>A collection of digital projects made with curiosity, collaboration, and care.</p><div className="inner-hero-foot"><span>FIVE PROJECTS</span><span>ONE THING IN COMMON</span><span>BUILT TO BE USEFUL</span></div></div><div className="work-hero-visual"><div className="work-hero-backdrop"/><div className="work-mini-card mini-stock"><span className="mini-card-label">BUSINESS SOFTWARE</span><b>StockN</b><div className="mini-stock-bars"><i/><i/><i/><i/><i/><i/><i/></div><small>KEEP OPERATIONS IN VIEW <span>↗</span></small></div><div className="work-mini-card mini-codex"><span className="mini-codex-orb">✳</span><small>AI &amp; PRODUCT</small><b>Codex<br/>Bay</b></div><div className="work-mini-card mini-jadoo"><small>WEB EXPERIENCE</small><b>Jadoo<span>✳</span></b><i>DESIGNED TO INSPIRE</i></div><div className="work-hero-note">SELECTED PROJECTS <span>CRAFTN PORTFOLIO</span></div></div></section>
    <section className="work-list">{work.map(item=><a className="work-row" key={item.n} href={item.url} target="_blank" rel="noreferrer"><div className={`work-tile ${item.tone}`}><span>{item.mark}</span><small>CRAFTN / {item.n}</small></div><div className="work-row-copy"><div className="work-row-meta"><span>{item.n} / 05</span><span>{item.kind}</span></div><h2>{item.name}</h2><p>{item.summary}</p></div><span className="work-row-arrow">↗</span></a>)}</section>
    <section className="page-cta"><div><span className="page-kicker">YOUR PROJECT COULD BE NEXT</span><h2>Let’s build<br/><em>something useful.</em></h2></div><Link className="button button-dark" href="/contact">Start a conversation <span className="arrow">↗</span></Link></section>
  </main>;
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Meet CraftN, an independent software and AI studio turning thoughtful ideas into useful digital products for businesses and people.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About CraftN", description: "Meet the independent software and AI studio building thoughtful digital products.", url: "/about", type: "website", images: [{ url: "/opengraph-image.svg", width: 1200, height: 630, alt: "CraftN — Software and AI studio" }] },
};

export default function AboutPage() {
  return <main className="inner-page">
    <section className="inner-hero about-hero"><div className="about-hero-copy"><div className="eyebrow"><span className="pulse"/> ABOUT CRAFTN</div><h1>Technology works<br/>better when it’s<br/><span>built around people.</span></h1><p>We’re an independent software and AI studio turning good ideas into useful digital products for businesses and people.</p><div className="inner-hero-foot"><span>CURIOUS BY NATURE</span><span>THOUGHTFUL BY DESIGN</span><span>PRACTICAL BY DEFAULT</span></div></div><div className="about-hero-visual"><div className="about-visual-grid"/><div className="about-orbit about-orbit-one"/><div className="about-orbit about-orbit-two"/><div className="about-visual-core"><span className="brand-mark" aria-hidden="true"><i/><i/><i/><i/></span><b>craftN</b></div><div className="about-orbit-tag tag-people"><i/> PEOPLE FIRST</div><div className="about-orbit-tag tag-purpose"><i/> REAL PURPOSE</div><div className="about-orbit-tag tag-craft"><i/> MADE WITH CARE</div><div className="about-visual-caption">GOOD WORK STARTS<br/>WITH GOOD QUESTIONS.</div></div></section>
    <section className="story-section"><div className="page-kicker">OUR POINT OF VIEW <span>01 / 03</span></div><div className="story-grid"><h2>Make the<br/>complex feel<br/><em>clear.</em></h2><div><p className="story-lead">Good technology should feel less like a hurdle and more like a helpful part of the day.</p><p>That belief shapes how we work. We listen closely, ask better questions, and bring design, engineering, and AI together to solve the problem in front of us.</p><p>CraftN works with businesses and individuals to take ideas from an early sketch to a polished, working product—with care for the people who will use it.</p></div></div></section>
    <section className="values-section"><div className="page-kicker">HOW WE WORK <span>02 / 03</span></div><div className="values-grid"><article><span>01</span><h3>Start with people</h3><p>Understand the needs behind the request before deciding what to build.</p></article><article><span>02</span><h3>Keep it useful</h3><p>Choose the simplest approach that solves the real problem well.</p></article><article><span>03</span><h3>Care about the details</h3><p>Make the experience feel considered from the first interaction to the last.</p></article></div></section>
    <section className="page-cta"><div><span className="page-kicker">HAVE SOMETHING IN MIND?</span><h2>Let’s make it<br/><em>meaningful.</em></h2></div><Link className="button button-dark" href="/contact">Meet CraftN <span className="arrow">↗</span></Link></section>
  </main>;
}

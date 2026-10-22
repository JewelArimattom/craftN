import Link from "next/link";
import { ContactForm } from "../components/contact-form";

export const metadata = { title: "Contact", description: "Tell CraftN about your software, AI, or product design project and start a conversation.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <main className="inner-page contact-page">
    <section className="contact-page-hero"><div className="contact-page-copy"><div className="eyebrow"><span className="pulse"/> CONTACT CRAFTN</div><h1>Have a good<br/>one in <span>mind?</span></h1><p>Tell us what you’re hoping to make, improve, or figure out. We’d love to hear what you have in mind.</p><a className="button button-dark" href="#project-enquiry">Tell us about it <span className="arrow">↓</span></a></div><div className="contact-page-art"><div className="contact-orbit a"/><div className="contact-orbit b"/><div className="contact-orbit c"/><div className="contact-page-spark">✳</div><span>GOOD THINGS START<br/>WITH A CONVERSATION</span></div></section>
    <section className="contact-form-section" id="project-enquiry"><ContactForm/></section>
    <section className="contact-info"><div className="page-kicker">A FEW USEFUL DETAILS <span>01 / 02</span></div><div className="contact-info-grid"><div><h2>What are you<br/><em>working on?</em></h2><p>Share a little about your idea, the challenge you’re facing, or where you’d like a hand. You don’t need a finished brief to get started.</p></div><div className="contact-prompts"><span>01 <b>What would you like to build or improve?</b></span><span>02 <b>Who is it for?</b></span><span>03 <b>What would a good outcome look like?</b></span><Link href="/work" className="underlined-link">See what we make <span className="arrow">↗</span></Link></div></div></section>
    <section className="contact-bottom-note"><span className="page-kicker">NOT SURE WHERE TO START?</span><p>That’s fine. A simple description of the problem is plenty for a first conversation.</p><Link href="/services" className="button button-light">Explore our services <span className="arrow">→</span></Link></section>
  </main>;
}

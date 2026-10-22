"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "Not provided");
    const service = String(form.get("service") || "Not selected");
    const message = String(form.get("message") || "");
    const recipient = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    if (!recipient) {
      setStatus("The form is ready, but CraftN’s contact email hasn’t been configured yet. Please use the current CraftN website below.");
      return;
    }

    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nInterested in: ${service}\n\n${message}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the project details ready to send.");
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-heading"><div className="form-heading-copy"><span className="form-kicker"><i/> PROJECT ENQUIRY</span><h2>Let’s talk about your project.</h2><p>A few details will help us make the first conversation useful.</p></div><div className="form-heading-aside"><span>✳</span><small>NO OBLIGATION<br/>JUST A FIRST CHAT</small></div></div>
    <div className="form-fields">
      <label>Your name<input name="name" autoComplete="name" placeholder="Jane Smith" required/></label>
      <label>Email address<input name="email" type="email" autoComplete="email" placeholder="jane@company.com" required/></label>
      <label>Company <span className="optional">OPTIONAL</span><input name="company" autoComplete="organization" placeholder="Your company"/></label>
      <label>What can we help with?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Software development</option><option>AI solutions</option><option>Product design</option><option>Something else</option></select></label>
      <label className="form-message">A little about your project<textarea name="message" rows={5} placeholder="What are you hoping to build or improve?" required/></label>
    </div>
    <div className="form-submit-row"><button type="submit" className="button button-dark">Prepare my message <span className="arrow">↗</span></button><span className="form-privacy"><i>◇</i> Your details are used only to respond to this enquiry.</span></div>
    {status && <p className="form-status" role="status">{status}{!process.env.NEXT_PUBLIC_CONTACT_EMAIL && <> <a href="https://craftn.duckdns.org/" target="_blank" rel="noreferrer">Open CraftN’s current site ↗</a></>}</p>}
  </form>;
}

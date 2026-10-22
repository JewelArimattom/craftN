"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const targets = document.querySelectorAll<HTMLElement>([
      ".hero-copy", ".hero-art", ".section-top", ".project-card", ".services-intro",
      ".service-item", ".about-art", ".about-copy", ".contact-section > *",
      ".inner-hero > *", ".story-grid > *", ".values-grid article", ".offering",
      ".work-row", ".contact-page-copy", ".contact-page-art", ".contact-form",
      ".page-cta > *", ".contact-info-grid > *", ".contact-bottom-note > *",
      ".approach-strip > *", ".footer-main > *", ".footer-bottom > *",
    ].join(","));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    if (reducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("scroll-visible"));
      return () => window.removeEventListener("scroll", updateHeader);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -48px 0px" });

    targets.forEach((target, index) => {
      target.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 75}ms`);
      target.classList.add("scroll-reveal");
      observer.observe(target);
    });

    return () => {
      window.removeEventListener("scroll", updateHeader);
      observer.disconnect();
    };
  }, []);

  return null;
}

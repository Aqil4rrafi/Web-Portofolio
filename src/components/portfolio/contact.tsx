import { ArrowUpRight, Mail } from "lucide-react";
import { portfolio } from "@/src/data/portfolio";

export function Contact() {
  const { profile } = portfolio;

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <p className="hero-overline">Start a conversation</p>
      <h2 id="contact-heading">Let&apos;s connect.</h2>
      <p>For conversations about IoT, AI, web development, or collaborative technology projects, reach me by email or LinkedIn.</p>
      <a className="contact-email" href={"mailto:" + profile.email}>
        <Mail size={20} /> {profile.email} <ArrowUpRight size={18} />
      </a>
      <div className="contact-socials">
        {profile.socials.map((social) => (
          <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
            {social.label}<ArrowUpRight size={14} />
          </a>
        ))}
      </div>
    </section>
  );
}

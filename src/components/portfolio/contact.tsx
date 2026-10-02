import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { portfolio } from "@/src/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Contact() {
  const { profile } = portfolio;

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <SectionHeading index="07" eyebrow="Contact" />
      <div className="contact-content">
        <div>
          <h3 id="contact-heading">{profile.name}</h3>
          <p>{profile.role}</p>
        </div>
        <dl className="contact-list">
          <div>
            <dt><Mail size={14} /> Email</dt>
            <dd><a href={"mailto:" + profile.email}>{profile.email}</a></dd>
          </div>
          <div>
            <dt><ArrowUpRight size={14} /> LinkedIn</dt>
            <dd><a href={profile.socials[0].url} target="_blank" rel="noreferrer">Aqila Kresna Arrafi</a></dd>
          </div>
          <div>
            <dt><MapPin size={14} /> Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt><ArrowUpRight size={14} /> Website</dt>
            <dd><a href={profile.website} target="_blank" rel="noreferrer">aqilakresnaarrafi.vercel.app</a></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

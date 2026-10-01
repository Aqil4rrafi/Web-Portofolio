import { ArrowDown, ArrowUpRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { portfolio } from "@/src/data/portfolio";

export function Introduction() {
  const { profile } = portfolio;

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="availability"><span />{profile.availability}</div>
        <p className="hero-overline">Portfolio — 2026</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-intro">{profile.introduction}</p>

        <div className="hero-meta">
          <span><MapPin size={16} />{profile.location}</span>
          <a href={"mailto:" + profile.email}><Mail size={16} />{profile.email}</a>
          {profile.socials.slice(0, 2).map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
              {social.label}<ArrowUpRight size={14} />
            </a>
          ))}
        </div>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View projects <ArrowDown size={16} />
          </a>
          <a className="button button-secondary" href="#contact">
            Contact me <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="hero-photo-wrap">
        <div className="hero-photo">
          <Image
            src={profile.image}
            alt={"Portrait of " + profile.name}
            fill
            priority
            sizes="(max-width: 640px) 75vw, 32vw"
          />
        </div>
      </div>
    </section>
  );
}

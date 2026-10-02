import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { portfolio } from "@/src/data/portfolio";

export function Introduction() {
  const { profile } = portfolio;

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-role">{profile.role} — Universitas Gadjah Mada</p>
        <p className="hero-intro">{profile.introduction}</p>

        <div className="hero-meta">
          <span>
            <MapPin size={16} />
            {profile.location}
          </span>
          <a href={"mailto:" + profile.email}>
            <Mail size={16} />
            {profile.email}
          </a>
        </div>

        <div className="hero-actions">
          <a
            className="button button-primary"
            href="/cv/CV-update_AqilaKresna.pdf"
            download
          >
            <Download size={15} /> Download CV
          </a>
          <a
            className="button button-secondary"
            href={profile.socials[0].url}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={14} />
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

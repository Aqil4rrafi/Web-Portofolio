import { portfolio, WEBSITE_URL } from "./portfolio";

const { profile } = portfolio;

export const siteTitle = `${profile.name} — Portfolio & Digital CV`;
export const siteDescription =
  `${profile.name}, Electrical Engineering student at Universitas Gadjah Mada (UGM). Explore projects, experience, and skills in IoT, AI, and web development.`;

export const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${WEBSITE_URL}#profile`,
  url: WEBSITE_URL,
  name: siteTitle,
  description: siteDescription,
  inLanguage: "en",
  mainEntity: {
    "@type": "Person",
    "@id": `${WEBSITE_URL}#person`,
    name: profile.name,
    url: WEBSITE_URL,
    image: new URL(profile.image, WEBSITE_URL).href,
    description: profile.introduction,
    sameAs: profile.socials
      .filter((social) => social.label !== "Website")
      .map((social) => social.url),
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: portfolio.education[0].organization,
    },
    knowsAbout: portfolio.about.focus,
  },
};

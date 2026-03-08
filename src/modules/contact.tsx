"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Instagram,
  Linkedin,
  Github,
  MessageCircle,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import DefaultLayout from "../components/layout/defaultLayout";

const Contact = () => {
  const socials = [
    {
      name: "LinkedIn",
      label: "Professional Network",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/aqila-kresna-arrafi-75344933b",
    },
    {
      name: "GitHub",
      label: "Code Repositories",
      icon: Github,
      link: "https://github.com/Aqil4rrafi",
    },
    {
      name: "Instagram",
      label: "Daily Life",
      icon: Instagram,
      link: "https://instagram.com/kresnarrafi",
    },
    {
      name: "WhatsApp",
      label: "Quick Chat",
      icon: MessageCircle,
      link: "https://wa.me/62887433061958",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="contact"
      className="
        py-20 md:py-24
        bg-gradient-to-b
        from-blue-50
        via-white
        to-purple-50
        dark:from-[#050510]
        dark:via-black
        dark:to-[#0a0515]
        transition-colors duration-500
      "
    >
      <DefaultLayout>
        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          <div data-aos="fade-right" className="mb-12 md:mb-16">
            <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-zinc-500 mb-3">
              Connect
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-black dark:text-white">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>

            <p className="mt-4 text-zinc-500 max-w-md text-sm leading-relaxed">
              Feel free to reach out for collaboration, projects, or just a chat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">

            <div
              data-aos="zoom-in"
              className="
              sm:col-span-2 md:col-span-4
              group
              p-[1px]
              rounded-[28px]
              bg-gradient-to-r
              from-blue-500/40
              via-indigo-500/40
              to-purple-500/40
              hover:from-blue-500
              hover:via-indigo-500
              hover:to-purple-500
              transition-all duration-500
            "
            >
              <div
                className="
                p-7 sm:p-8 md:p-10
                rounded-[28px]
                bg-white
                dark:bg-[#0b0b0b]
                flex flex-col justify-between
                transition-all duration-500
                group-hover:bg-transparent
              "
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 sm:p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 group-hover:bg-white/10 transition">
                    <Mail size={24} className="sm:w-[26px] sm:h-[26px]" />
                  </div>

                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition text-white" />
                </div>

                <div className="mt-8 sm:mt-10 md:mt-12">
                  <p className="text-sm text-zinc-500 mb-2 group-hover:text-white/70 transition">
                    Email Me
                  </p>

                  <Link href="mailto:arrafikresna@gmail.com">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black dark:text-white break-all group-hover:text-white transition-all">
                      arrafikresna@gmail.com
                    </h3>
                  </Link>
                </div>
              </div>
            </div>

            {socials.map((social, index) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="
                group
                p-[1px]
                rounded-[28px]
                bg-gradient-to-r
                from-blue-500/40
                via-indigo-500/40
                to-purple-500/40
                hover:from-blue-500
                hover:via-indigo-500
                hover:to-purple-500
                transition-all duration-500
                hover:scale-[1.03]
              "
              >
                <div
                  className="
                  p-6 sm:p-7 md:p-8
                  rounded-[28px]
                  bg-white
                  dark:bg-[#0a0a0a]
                  flex flex-col justify-between
                  h-full
                  transition-all duration-500
                  group-hover:bg-transparent
                "
                >
                  <div className="flex justify-between items-start">
                    <social.icon
                      size={24}
                      className="
                      text-zinc-600
                      dark:text-zinc-400
                      group-hover:text-white
                      transition
                    "
                    />

                    <ArrowUpRight
                      size={16}
                      className="
                      text-zinc-400
                      group-hover:text-white
                      transition
                    "
                    />
                  </div>

                  <div className="mt-6 sm:mt-8 md:mt-10">
                    <h4 className="text-base sm:text-lg font-semibold text-black dark:text-white group-hover:text-white transition">
                      {social.name}
                    </h4>

                    <p className="text-xs text-zinc-500 mt-1 group-hover:text-white/70 transition">
                      {social.label}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </DefaultLayout>
    </section>
  );
};

export default Contact;
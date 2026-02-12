"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Instagram, Linkedin, Github, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Contact = () => {

  const socials = [
    {
      name: "LinkedIn",
      label: "Professional Network",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/aqila-kresna-arrafi-75344933b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      label: "Code Repositories",
      icon: Github,
      link: "https://github.com/Aqil4rrafi",
      color: "hover:text-neutral-600",
    },
    {
      name: "Instagram",
      label: "Daily Life",
      icon: Instagram,
      link: "https://instagram.com/kresnarrafi",
      color: "hover:text-pink-600",
    },
    {
      name: "WhatsApp",
      label: "Quick Chat",
      icon: MessageCircle,
      link: "https://wa.me/0887433061958",
      color: "hover:text-green-500",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="py-20 px-6 bg-white dark:bg-black transition-colors duration-500 mx-10"
    >
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-right" className="mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-zinc-500 mb-2">Connect</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black dark:text-white">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div
            data-aos="zoom-in"
            className="md:col-span-4 p-8 rounded-[2rem] bg-neutral-100 dark:bg-[#0f0f0f] border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between group"
          >
            <div className="flex justify-between items-start">
              <div className="p-4 rounded-2xl bg-white dark:bg-black shadow-sm">
                <Mail className="text-black dark:text-white" />
              </div>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400" />
            </div>
            <div className="mt-12 group cursor-pointer">
              <p className="text-sm text-zinc-500 mb-1 transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">
                Email Me
              </p>
              <Link href="mailto:arrafikresna@gmail.com">
              <h3 className="relative inline-block text-2xl md:text-3xl font-bold text-black dark:text-white break-all transition-all duration-500 group-hover:tracking-wide">
                arrafikresna@gmail.com
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black dark:bg-white transition-all duration-500 group-hover:w-full"></span>
              </h3>
              </Link>
            </div>
          </div>

          {socials.map((social, index) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="p-8 rounded-[2rem] bg-neutral-200 dark:bg-[#0a0a0a] border-2 border-neutral-300 dark:border-neutral-800 flex flex-col justify-between hover:border-black dark:hover:border-white transition-all duration-500 group"
            >
              <div className="flex justify-between items-start">
                <social.icon className={`transition-colors duration-300 ${social.color}`} size={28} />
                <ArrowUpRight size={18} className="text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-black dark:text-white mt-8">{social.name}</h4>
                <p className="text-xs text-zinc-500">{social.label}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

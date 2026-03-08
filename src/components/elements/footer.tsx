"use client";

import { Github, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
      flex w-full justify-center
      pt-24 pb-12 overflow-hidden
      border-t border-blue-100/40 dark:border-purple-900/30
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
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* CTA */}
          <div className="md:col-span-6 space-y-6">

            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Mari berkolaborasi untuk membangun sesuatu yang luar biasa.
            </h3>

            <Link
              href="mailto:arrafikresna@gmail.com"
              className="
              inline-flex items-center gap-2
              text-lg font-medium
              text-zinc-600 dark:text-zinc-400
              hover:text-transparent
              hover:bg-clip-text
              hover:bg-gradient-to-r
              hover:from-blue-500
              hover:to-purple-500
              transition-all duration-300
              group
              "
            >
              arrafikresna@gmail.com

              <ArrowUpRight
                size={20}
                className="
                transition-transform duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
                "
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-4">

            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              Navigation
            </p>

            <ul className="space-y-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">

              {[
                { name: "Home", href: "#hero" },
                { name: "About Me", href: "#about" },
                { name: "Projects", href: "#project" },
                { name: "FAQ", href: "#faq" },
                { name: "Contact", href: "contact" },
              ].map((item) => (
                <Link key={item.name} href={item.href}>
                  <li
                    className="
                    cursor-pointer
                    transition-all duration-300
                    hover:text-transparent
                    hover:bg-clip-text
                    hover:bg-gradient-to-r
                    hover:from-blue-500
                    hover:to-purple-500
                    "
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-3 space-y-4">

            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              Socials
            </p>

            <div className="flex gap-4">

              {[Github, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#contact"
                  className="
                  p-3
                  rounded-xl
                  bg-white/70
                  dark:bg-zinc-900
                  border border-zinc-100 dark:border-zinc-800
                  text-zinc-500
                  hover:text-white
                  hover:bg-gradient-to-r
                  hover:from-blue-500
                  hover:to-purple-500
                  hover:scale-110
                  transition-all duration-300
                  shadow-sm
                  "
                >
                  <Icon size={18} />
                </a>
              ))}

            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="
          flex flex-col md:flex-row
          justify-between items-center
          pt-8 gap-4
          border-t border-blue-100/40 dark:border-purple-900/30
          "
        >

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Modern.dev — Built with Next.js & Tailwind.
          </p>

          <div className="flex items-center gap-6 text-xs font-medium text-zinc-400">
            <span>INDONESIA / 10:45 PM (GMT+7)</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
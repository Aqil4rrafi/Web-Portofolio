"use client";

import { Github, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex justify-center bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 pt-24 pb-12 mx-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          <div className="md:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold tracking-tighter text-zinc-900 dark:text-white">Mari berkolaborasi untuk membangun sesuatu yang luar biasa.</h3>
            <Link href="mailto:arrafikresna@gmail.com" className="inline-flex items-center gap-2 text-zinc-500 hover:text-black dark:hover:text-white transition-colors group text-lg font-medium">
              arrafikresna@gmail.com 
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Navigation</p>
            <ul className="space-y-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <Link href="#hero"><li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Home</li></Link>
              <Link href="#about"><li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">About Me</li></Link>
              <Link href="#project"><li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Projects</li></Link>
              <Link href="#faq"><li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">FAQ</li></Link>
              <Link href="contact"><li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Contact</li></Link>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Socials</p>
            <div className="flex gap-4 text-zinc-500">
               {[Github, Instagram, Linkedin].map((Icon, idx) => (
                 <a key={idx} href="#contact" className="hover:text-black dark:hover:text-white transition-colors">
                   <Icon size={20} />
                 </a>
               ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100 dark:border-zinc-900 gap-4">
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
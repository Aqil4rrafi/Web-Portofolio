"use client";
import Link from "next/link";

import { useState, useEffect } from "react";
import {
  MoveRight,
  LayoutGrid,
  User,
  Cpu,
  Menu,
  X,
  UserRound,
  Sun,
  Moon,
} from "lucide-react";

const navItems = [
  { name: "About", href: "#about", icon: <User size={16} /> },
  { name: "Projects", href: "#project", icon: <LayoutGrid size={16} /> },
  { name: "FAQ", href: "#faq", icon: <Cpu size={16} /> },
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Init Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const containerStyles = isScrolled
    ? "w-full max-w-4xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-md rounded-2xl px-6 h-14"
    : "w-full max-w-7xl border-2 border-black dark:border-white rounded-xl dark:bg-[#111] px-4 h-16";

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center p-6 transition-all duration-300">
      <div
        className={`flex items-center justify-between transition-all duration-500 ease-in-out ${containerStyles}`}
      >
        <Link href="#hero">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
            <UserRound size={18} className="text-white dark:text-black" />
          </div>
          <span className="font-bold tracking-tight text-black dark:text-white text-lg">
            Aqilarrafi
          </span>
        </div>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl
                ${
                  activeIndex === index
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
            >
              {item.name}
            </a>
          ))}

          <div className="w-[1px] h-4 bg-zinc-200 dark:bg-zinc-800 mx-2" />

          <button
            onClick={toggleTheme}
            className="relative w-12 h-6 bg-zinc-200 dark:bg-zinc-700 rounded-full p-1 transition-colors flex items-center border border-zinc-300 dark:border-zinc-600"
          >
            <div
              className={`w-4 h-4 rounded-full shadow-sm transform transition-all duration-300 flex items-center justify-center ${
                isDarkMode
                  ? "translate-x-6 bg-white"
                  : "translate-x-0 bg-black"
              }`}
            >
              {isDarkMode ? (
                <Moon size={10} className="text-black" />
              ) : (
                <Sun size={10} className="text-white" />
              )}
            </div>
          </button>

            <Link href="#contact">
              <button className="flex items-center gap-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black px-5 py-2 rounded-xl text-sm font-medium transition-all bg-white border-2 border-black text-black dark:border-2 dark:border-white dark:bg-black dark:text-white active:scale-95 ml-2 cursor-pointer">
                Contact <MoveRight size={16} />
              </button>
            </Link>
          </div>

        <button
          className="md:hidden p-2 text-zinc-600 dark:text-zinc-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-24 inset-x-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 shadow-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveIndex(index);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 p-3 rounded-xl font-medium transition-colors
                  ${
                    activeIndex === index
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
              >
                {item.icon} {item.name}
              </a>
            ))}

            <hr className="my-2 border-zinc-200 dark:border-zinc-800" />

            <button
              onClick={toggleTheme}
              className="flex items-center justify-between px-3 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800"
            >
              <span className="text-sm font-medium">Theme</span>
              {isDarkMode ? (
                <Moon size={18} />
              ) : (
                <Sun size={18} />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

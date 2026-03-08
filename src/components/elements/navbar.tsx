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

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

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

  const containerSize = isScrolled
    ? "max-w-4xl h-14"
    : "max-w-7xl h-16";

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center p-6">
      <div
        className={`p-[1px] rounded-2xl bg-gradient-to-r 
        from-indigo-500 via-violet-500 to-purple-600
        transition-all duration-500 w-full ${containerSize}`}
      >

        <div
          className="flex items-center justify-between
          bg-white/70 dark:bg-[#050509]/80
          backdrop-blur-xl rounded-2xl px-6 h-full"
        >

          <Link href="#hero">
            <div className="flex items-center gap-3 group cursor-pointer">

              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-600
                transition-transform group-hover:rotate-12"
              >
                <UserRound size={18} className="text-white" />
              </div>

              <span className="font-semibold tracking-tight text-gray-900 dark:text-white text-lg">
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
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300
                ${
                  activeIndex === index
                    ? "text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md"
                    : "text-gray-600 dark:text-zinc-400 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600"
                }`}
              >
                {item.name}
              </a>
            ))}

            <div className="w-[1px] h-4 bg-gray-200 dark:bg-white/10 mx-3" />

            <button
              onClick={toggleTheme}
              className="relative w-12 h-6 bg-gray-200 dark:bg-zinc-700 rounded-full p-1 flex items-center border border-gray-300 dark:border-zinc-600"
            >

              <div
                className={`w-4 h-4 rounded-full shadow-sm transform transition-all duration-300 flex items-center justify-center ${
                  isDarkMode
                    ? "translate-x-6 bg-white"
                    : "translate-x-0 bg-indigo-600"
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
              <button
                className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium transition-all
                bg-gradient-to-r from-indigo-500 to-purple-600
                text-white hover:scale-105
                hover:shadow-[0_0_25px_rgba(124,58,237,0.4)]
                active:scale-95 ml-3"
              >
                Contact <MoveRight size={16} />
              </button>
            </Link>

          </div>

          <button
            className="md:hidden p-2 text-gray-600 dark:text-zinc-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {isOpen && (
        <div
          className="absolute top-24 inset-x-6
          p-[1px] rounded-2xl
          bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600
          md:hidden"
        >
          <div
            className="bg-white dark:bg-[#050509]
            rounded-2xl p-4"
          >

            <div className="flex flex-col gap-1">

              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 p-3 rounded-xl font-medium transition-all
                  ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                      : "text-gray-800 dark:text-white hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600"
                  }`}
                >
                  {item.icon} {item.name}
                </a>
              ))}

              <hr className="my-2 border-gray-200 dark:border-white/10" />

              <button
                onClick={toggleTheme}
                className="flex items-center justify-between px-3 py-3 rounded-xl bg-gray-100 dark:bg-zinc-800"
              >
                <span className="text-sm font-medium">Theme</span>
                {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
              </button>

            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
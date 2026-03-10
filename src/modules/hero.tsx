"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

import DefaultLayout from "../components/layout/defaultLayout";
import { Button } from "../components/elements/button";

const skills = [
  "React / Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "TensorFlow",
  "PyTorch",
  "UI / UX Design",
  "Node.js",
  "App Building",
  "C++ / Qt",
  "PCB Design",
  "Teaching Math",
];

const Skills = () => {
  return (
    <div className="relative z-10 mt-16 md:mt-32 w-full max-w-7xl mx-auto" data-aos="fade-up">
      
      <div className="flex items-center gap-6 mb-15">

        <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-white">
          Technical{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h3>

        <div className="flex-grow h-[1px] bg-gradient-to-r from-indigo-400/50 via-purple-400/30 to-transparent dark:from-indigo-500/50 dark:via-purple-500/30" />

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="
            group relative rounded-xl p-[1px]
            bg-gradient-to-r from-indigo-400/30 to-purple-400/30
            dark:from-indigo-500/20 dark:to-purple-500/20
            hover:from-indigo-500 hover:to-purple-600
            transition-all duration-500
            "
          >

            <div className="flex items-center justify-center h-full px-6 py-5 rounded-xl
            bg-white dark:bg-[#07070c]
            border border-gray-100 dark:border-white/5">

              <span className="text-sm md:text-base font-medium text-gray-700 dark:text-zinc-300 group-hover:text-gray-900 dark:group-hover:text-white transition">
                {skill}
              </span>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

const Hero = () => {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {

    const rect = e.currentTarget.getBoundingClientRect();

    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-[#050509]">

        <div className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] rounded-full bg-indigo-300/40 dark:bg-indigo-600/20 blur-[180px]" />
        <div className="absolute bottom-[20%] -right-[10%] w-[700px] h-[700px] rounded-full bg-purple-300/40 dark:bg-purple-700/20 blur-[180px]" />

      <DefaultLayout>

        <div id="hero" className="relative z-10 w-full pt-20 md:py-24">

          <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-4 gap-12 items-center">

            <div
              data-aos="fade-right"
              className="
              md:col-span-4 lg:col-span-3
              relative rounded-3xl p-12 md:p-16
              border border-gray-200 dark:border-white/10
              bg-white/70 dark:bg-white/[0.04]
              backdrop-blur-xl
              shadow-xl
              "
            >

              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent" />

              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500">
                Aqila Kresna Arrafi
              </p>

              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white leading-[1.05]">
                Front-End 
              </h1>

              <h2 className="mt-2 text-3xl md:text-4xl font-medium bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
                & Machine Learning Developer
              </h2>

              <div className="mt-10 h-[1px] w-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />

              <p className="pt-10 max-w-2xl text-[17px] md:text-lg leading-relaxed text-gray-600 dark:text-zinc-300">
                Engineering student at{" "}
                <span className="font-medium text-indigo-500">UGM</span>.
                Passionate about building intelligent systems and modern
                interfaces that combine{" "}
                <span className="text-gray-900 dark:text-white">
                  AI capability
                </span>{" "}
                with elegant digital design.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <Link href="#contact">
                  <Button
                    variant="white"
                    className="h-auto rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.35)] transition"
                  >
                    Start a Project
                  </Button>
                </Link>

                <Link href="#project">
                  <Button
                    variant="white"
                    className="h-auto rounded-xl border border-gray-300 dark:border-white/15 text-gray-700 dark:text-zinc-200 text-sm font-medium hover:border-purple-500 hover:text-purple-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition"
                  >
                    View Work
                  </Button>
                </Link>

              </div>

            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="relative flex w-full justify-center md:hidden lg:block lg:col-span-1"
            >

              <div
                className={`group relative hidden md:block w-full max-w-[320px] overflow-hidden rounded-3xl border transition-all duration-700 ${
                  isHovered
                    ? "border-purple-500 shadow-[0_0_50px_rgba(124,58,237,0.35)]"
                    : "border-gray-200 dark:border-white/10"
                }`}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >

                <Image
                  src="/Aqila.jpeg"
                  alt="Profile Photo"
                  width={500}
                  height={600}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isHovered ? "scale-110 rotate-1" : "scale-100"
                  }`}
                />

                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(circle 260px at ${mousePos.x}px ${mousePos.y}px, rgba(99,102,241,0.35), rgba(168,85,247,0.35), transparent 80%)`,
                  }}
                />

              </div>

              <div className="md:hidden w-full max-w-[260px] overflow-hidden rounded-3xl border border-indigo-400/50 shadow-lg">

                <Image
                  src="/Aqila.jpeg"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />

              </div>
            </div>
          </div>
          <Skills />
        </div>
      </DefaultLayout>

    </section>
  );
};

export default Hero;
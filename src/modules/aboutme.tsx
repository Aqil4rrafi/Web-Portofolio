"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CircleDashed, Coffee, UserX, Zap } from "lucide-react";
import DefaultLayout from "../components/layout/defaultLayout";

type FunFactProps = {
  desc: string;
  icon: React.ElementType;
};

function FunFactCard({ desc, icon: Icon }: FunFactProps) {
  return (
    <div className="group relative cursor-pointer">
      {/* Gradient Border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-60 blur-[2px] transition duration-500 group-hover:opacity-100" />

      {/* Card */}
      <div
        className="
        relative flex min-h-[150px] flex-col items-center justify-center
        rounded-2xl p-6
        bg-white dark:bg-black
        text-neutral-800 dark:text-neutral-200
        border border-neutral-200 dark:border-neutral-800
        backdrop-blur-xl
        transition-transform duration-300
        group-hover:scale-[1.04]
      "
      >
        <Icon
          size={26}
          className="mb-3 opacity-60 transition-all duration-300 group-hover:rotate-12 group-hover:opacity-100"
        />

        <h3 className="text-sm font-semibold uppercase tracking-wide">
          {desc}
        </h3>
      </div>
    </div>
  );
}

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="about"
      data-aos="fade-up"
      className="relative min-h-screen overflow-hidden bg-white text-neutral-900 transition-colors duration-500 dark:bg-[#050509] dark:text-neutral-100"
    > 
      <div className="absolute top-[30%] -left-[10%] w-[700px] h-[700px] rounded-full bg-indigo-300/40 dark:bg-indigo-600/20 blur-[180px]" />
      <div className="absolute bottom-[20%] -right-[10%] w-[700px] h-[700px] rounded-full bg-purple-300/40 dark:bg-purple-700/20 blur-[180px]" />


      <DefaultLayout>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

            <div
              data-aos="fade-right"
              className="
              relative overflow-hidden rounded-3xl
              border border-neutral-200 dark:border-neutral-800
              md:col-span-1
              group
            "
            >
              <div className="absolute inset-0 bg-[url('/Rafi.jpeg')] bg-cover bg-center grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" />

              <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-transparent" />
            </div>

            <div
              data-aos="fade-left"
              className="
              md:col-span-3
              rounded-3xl p-10
              bg-white/80 dark:bg-neutral-900/70
              backdrop-blur-xl
              border border-neutral-200 dark:border-neutral-800
            "
            >
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Introduction
                </p>

                <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                  Hello,{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent italic">
                    Everyone
                  </span>
                </h1>

                <p className="max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 text-justify">
                  I am an Electrical Engineering student with a deep focus on AI
                  and Web Development. My journey is defined by resilience:
                  secured a spot at <b>Universitas Gadjah Mada</b> after 7
                  rejections, and currently a <b>Paragon Scholar</b> after 5
                  previous attempts. Turning setbacks into systems.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="
              md:col-span-4
              rounded-3xl p-10
              bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
              text-white shadow-xl
            "
            >
              <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

                <div className="flex min-w-[200px] items-center gap-4">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-white" />
                  <span className="text-xl font-semibold tracking-tight">
                    Fun Fact About Me
                  </span>
                </div>

                <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4">
                  <div data-aos="zoom-in" data-aos-delay="300">
                    <FunFactCard desc="All Rounder" icon={CircleDashed} />
                  </div>

                  <div data-aos="zoom-in" data-aos-delay="400">
                    <FunFactCard desc="Morning Person" icon={Coffee} />
                  </div>

                  <div data-aos="zoom-in" data-aos-delay="500">
                    <FunFactCard desc="Introvert" icon={UserX} />
                  </div>

                  <div data-aos="zoom-in" data-aos-delay="600">
                    <FunFactCard desc="Gasuka Fisika" icon={Zap} />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </DefaultLayout>
    </section>
  );
};

export default AboutMe;
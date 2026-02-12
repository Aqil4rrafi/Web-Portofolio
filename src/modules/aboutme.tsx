"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CircleDashed, Coffee, UserX, Zap } from "lucide-react";

function FunFactCard({ desc, icon: Icon }: { desc: string; icon: React.ElementType }) {
  return (
    <div className="group cursor-pointer transition-all duration-300">
        <div className="flex flex-col min-h-40 items-center justify-center border-2 border-white dark:border-black rounded-2xl p-6 min-w-[140px] hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all">
            <Icon className="mb-2 opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all" size={24} />
            <h1 className="text-md font-bold tracking-tight uppercase">{desc}</h1>
         </div>
    </div>
  );
}

const AboutMe = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="about"
      data-aos="fade-up"
      className="h-auto bg-neutral-50 dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 px-6 py-20 md:p-20 font-sans transition-colors duration-500"
    >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
            <div
              data-aos="fade-right"
              className="md:col-span-1 rounded-3xl bg-neutral-200 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden relative group"
            >
                <div className="absolute inset-0 bg-[url('/Rafi.jpeg')] bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
            </div>

            <div
              data-aos="fade-left"
              className="md:col-span-3 p-8 rounded-4xl bg-white dark:bg-[#111] border-2 border-black dark:border-white flex flex-col justify-center"
            >
                <div className="space-y-4">
                    <p className="text-sm tracking-[0.2em] uppercase text-zinc-500">Introduction</p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                    Hello, <span className="text-neutral-400 dark:text-neutral-600 italic">Everyone</span>
                    </h1>
                    <p className="max-w-4xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 text-justify">
                    I am an Electrical Engineering student with a deep focus on AI and Web Development. 
                    My journey is defined by resilience: Secured a spot at <b>Universitas Gadjah Mada</b> after 7 rejections, 
                    and currently a <b>Paragon Scholar</b> after 5 previous attempts. Turning setbacks into systems.
                    </p>
                </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="md:col-span-4 p-8 rounded-4xl bg-zinc-500 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900"
            >
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4 min-w-[200px]">
                        <div className="w-3 h-3 dark:bg-black bg-white rounded-full animate-pulse" />
                        <span className="text-xl font-bold tracking-tight">Fun Fact About Me</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                      <div data-aos="zoom-in" data-aos-delay="400">
                        <FunFactCard desc="All Rounder" icon={CircleDashed} />
                      </div>
                      <div data-aos="zoom-in" data-aos-delay="500">
                        <FunFactCard desc="Morning Person" icon={Coffee} />
                      </div>
                      <div data-aos="zoom-in" data-aos-delay="600">
                        <FunFactCard desc="Introvert" icon={UserX} />
                      </div>
                      <div data-aos="zoom-in" data-aos-delay="700">
                        <FunFactCard desc="Gasuka Fisika" icon={Zap} />
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutMe;

"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "../components/layout/defaultLayout";

const projects = [
  {
    id: 1,
    title: "Library Space",
    tech: "Qt UI / C++",
    img: "/LibSpace.png",
    src: "https://github.com/qlaqilaa/Project-Pemrograman-Dasar-62765-62767-64101",
  },
  {
    id: 2,
    title: "PCB Design",
    tech: "KiCad",
    img: "/PCBDesign.jpeg",
    src: "https://drive.google.com/drive/folders/1rCzU5xTsz1v-kUhwy_7cSlPHWet1tFgn",
  },
  {
    id: 3,
    title: "Web Portfolio",
    tech: "Next.js + Tailwind CSS",
    img: "/web.png",
    src: "https://aqilas-web-portofolio.vercel.app/",
  },
];

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="project"
      data-aos="fade-up"
      className="relative min-h-screen overflow-hidden bg-white dark:bg-[#050509] transition-colors duration-500"
    >
        <div className="absolute top-[10%] -left-[10%] w-[700px] h-[700px] rounded-full bg-indigo-300/40 dark:bg-indigo-600/20 blur-[180px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[700px] h-[700px] rounded-full bg-purple-300/40 dark:bg-purple-700/20 blur-[180px]" />


      <DefaultLayout>
        <div className="mx-auto max-w-7xl px-6 py-24">
          
          <div
            data-aos="fade-right"
            className="mb-16 flex items-end justify-between"
          >
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-zinc-500">
                Selected Works
              </p>

              <h2 className="text-5xl font-bold tracking-tight text-black md:text-7xl dark:text-white">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
            </div>

            <div className="hidden text-right md:block">
              <p className="font-medium text-zinc-400">03 / Total</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {projects.map((item, index) => (
              <div
                key={item.id}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="group relative cursor-pointer rounded-3xl"
              >
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-60 blur-[2px] transition duration-500 group-hover:opacity-100" />

                <div
                  className="
                    relative aspect-[4/5] overflow-hidden rounded-3xl
                    border border-neutral-200 dark:border-neutral-800
                    bg-white dark:bg-neutral-950
                    backdrop-blur-xl
                    transition-transform duration-500
                    group-hover:scale-[1.03]
                  "
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="
                      object-cover
                      grayscale opacity-30
                      transition-all duration-700
                      group-hover:scale-110
                      group-hover:opacity-70
                      group-hover:grayscale-0
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute inset-0 z-10 flex flex-col justify-between p-8">
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                      {item.tech}
                    </span>

                    <div>
                      <h3 className="mb-3 translate-y-4 text-3xl font-bold text-white transition-transform duration-500 group-hover:translate-y-0">
                        {item.title}
                      </h3>

                      <Link
                        href={item.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-white/80 opacity-0 transition duration-500 hover:text-white group-hover:opacity-100"
                      >
                        View Details ↗
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </DefaultLayout>
    </section>
  );
};

export default Project;
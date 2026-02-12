"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
    const projects = [
        { id: 1, title: "Library Space", tech: "Qt UI / C++" , img:"/LibSpace.png", src:"https://github.com/qlaqilaa/Project-Pemrograman-Dasar-62765-62767-64101" },
        { id: 2, title: "PCB Design", tech: "KiCad", img:"/PCBDesign.jpeg", src:"https://drive.google.com/drive/folders/1rCzU5xTsz1v-kUhwy_7cSlPHWet1tFgn" },
        { id: 3, title: "Web Portfolio", tech: "Next.js + Tailwind CSS", img:"/web.png", src:"https://aqilas-web-portofolio.vercel.app/" },
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
            id="project"
            data-aos="fade-up"
            className="py-20 px-6 md:px-20 bg-white dark:bg-black transition-colors duration-500"
        >
            <div className="max-w-7xl mx-auto">
                <div
                    data-aos="fade-right"
                    className="flex justify-between items-end mb-12"
                >
                    <div>
                        <p className="text-sm tracking-[0.3em] uppercase text-zinc-500 mb-2">Selected Works</p>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black dark:text-white">
                            Projects
                        </h2>
                    </div>
                    <div className="hidden md:block text-right">
                        <p className="text-zinc-400">03 / Total</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((item, index) => (
                        <div
                            key={item.id}
                            data-aos="zoom-in"
                            data-aos-delay={index * 200}
                            className="group relative aspect-[4/5] rounded-3xl bg-zinc-100 dark:bg-[#111] border-2 border-neutral-400 dark:border-neutral-200 overflow-hidden cursor-pointer"
                        >
                            <Image 
                                src={item.img} 
                                alt={item.title} 
                                fill 
                                className="object-cover grayscale opacity-10 group-hover:grayscale-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                            />
                            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                <span className="text-[10px] font-bold tracking-widest text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                                    {item.tech}
                                </span>
                                <div>
                                    <h3 className="text-3xl font-bold text-black dark:text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {item.title}
                                    </h3>
                                    <div className="text-sm text-zinc-800 dark:text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <Link href={item.src}><p className="hover:underline">View details ↗ </p></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;

"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
const Hero = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section
            id="hero"
            data-aos="fade-up"
            className="w-full h-auto bg-white dark:bg-black flex items-center justify-center px-6 md:px-10 py-20 overflow-hidden mt-10 md:mt-20"
        >
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:grid md:grid-cols-4 gap-10 items-center">
                <div
                    data-aos="fade-right"
                    className="border-2 md:border-1 md:col-span-3 border-2 border-black dark:bg-[#111] dark:border-white p-6 md:p-8 rounded-4xl animate-in fade-in slide-in-from-left-10 duration-1000"
                >
                    <p className="text-zinc-700 dark:text-zinc-200 mb-2 tracking-widest uppercase text-md md:text-xl font-medium">
                        Aqila Kresna Arrafi
                    </p>
                    <h1 className="text-3xl md:text-6xl font-extrabold text-black dark:text-white tracking-tighter">
                        Front-End &
                    </h1>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-black dark:text-white tracking-tighter mt-2">
                        Machine Learning <span className="text-zinc-400">Developer</span>
                    </h1>

                    <div className="h-1 w-20 md:w-80 bg-black dark:bg-white mt-6"></div>

                    <p className="w-full h-auto pt-8 text-lg text-zinc-600 dark:text-zinc-100 font-medium text-justify">
                        Currently pursuing a Bachelor’s degree in Electrical Engineering at Universitas Gadjah Mada, with a strong interest in AI development.
                    </p>

                    <div className="flex flex-row gap-5 mt-7">
                        <Link href="#contact">
                        <button className="px-6 py-2 md:px-10 md:py-5 border border-neutral-700 dark:border-neutral-300 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-pointer">
                            Lets Talk →
                        </button>
                        </Link>
                        <Link href="#project">
                        <button className="px-6 py-2 md:px-10 md:py-5 border border-neutral-700 dark:border-neutral-300 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-pointer">
                            View my project
                        </button>
                        </Link>
                    </div>
                </div>

                <div
                    data-aos="fade-left"
                    data-aos-delay="200"
                    className="order-1 md:order-2 md:col-span-1 w-full flex justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200"
                >
                    <div
                        className={`relative overflow-hidden rounded-xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] border-2 border-black dark:border-white w-full max-w-[300px] md:max-w-none
                            ${isHovered ? "md:-translate-y-6 md:scale-[1.02] md:shadow-[0_0_50px_rgba(255,255,255,0.2),0_10px_30px_rgba(0,0,0,0.1)]" : "translate-y-0 scale-100 shadow-none"}
                            cursor-none hidden md:block`}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Image
                            src="/Aqila.jpeg"
                            alt="Foto Profil"
                            width={400}
                            height={500}
                            className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isHovered ? "scale-110" : "scale-100"}`}
                        />

                        <div
                            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                            style={{
                                opacity: isHovered ? 1 : 0,
                                background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.49), transparent 80%)`,
                            }}
                        />

                        {isHovered && (
                            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] bg-[length:100%_4px] animate-pulse" />
                        )}
                    </div>

                    <div className="md:hidden w-full max-w-[280px] relative overflow-hidden rounded-xl border-2 dark:border-white border-black">
                        <Image
                            src="/Aqila.jpeg"
                            alt="Foto Profil"
                            width={300}
                            height={300}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

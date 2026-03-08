"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown } from "lucide-react";
import DefaultLayout from "../components/layout/defaultLayout";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-aos="fade-up"
      className="group relative rounded-2xl overflow-hidden"
    >
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-60 group-hover:opacity-100 blur-[2px] transition duration-500"></div>

      <div className="relative bg-white dark:bg-[#07070c] border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden">

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center px-6 py-5 text-left
          bg-zinc-50 dark:bg-neutral-900
          hover:bg-zinc-100 dark:hover:bg-neutral-800
          transition-colors duration-300"
        >
          <span className="text-md font-semibold text-neutral-900 dark:text-white">
            {question}
          </span>

          <ChevronDown
            className={`transition-transform duration-500 text-neutral-700 dark:text-neutral-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-6 pb-6 pt-2 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="faq"
      data-aos="fade-up"
      className="relative min-h-screen bg-white dark:bg-[#050509] overflow-hidden transition-colors"
    >
        <div className="absolute top-[30%] -left-[10%] w-[700px] h-[700px] rounded-full bg-indigo-300/40 dark:bg-indigo-600/20 blur-[180px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[700px] h-[700px] rounded-full bg-purple-300/40 dark:bg-purple-700/20 blur-[180px]" />


      <DefaultLayout>
        <div className="relative max-w-7xl mx-auto px-6">

          <div data-aos="fade-right" className="mb-12">
            <p className="text-sm tracking-[0.35em] uppercase text-zinc-500 mb-3">
              Questions
            </p>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-black dark:text-white">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
          </div>

          <div className="space-y-4">

            <FAQItem
              question="Is Rafi single? (Most frequently asked)"
              answer="Currently available. If you're planning to confess, the floor is yours!"
            />

            <FAQItem
              question="Why Electrical Engineering at UGM?"
              answer="To be honest? It was the final destination after a long, exhausting battle with Medical School entrance exams."
            />

            <FAQItem
              question="Where was Rafi born?"
              answer="The City of Heroes, Surabaya."
            />

            <FAQItem
              question="When is Rafi's birthday?"
              answer="November 7th. Mark your calendar, surprises are highly appreciated!"
            />

            <FAQItem
              question="Who is the most handsome guy in the world?"
              answer="Well, definitely not Rafi. Let's keep it realistic."
            />

            <FAQItem
              question="Who is Aqila Kresna Arrafi?"
              answer="A curious Electrical Engineering student at Universitas Gadjah Mada who enjoys building things, solving problems, and turning ideas into real projects."
            />

            <FAQItem
              question="What does Aqila enjoy working on?"
              answer="Mostly projects related to engineering, technology, and creative development. I enjoy experimenting with new tools, building systems, and learning how things actually work."
            />

            <FAQItem
              question="What kind of projects does Aqila like?"
              answer="Projects that combine engineering and problem solving — especially systems, electronics, and innovative solutions that can make something work better or more efficiently."
            />

            <FAQItem
              question="What motivates Aqila to keep learning?"
              answer="Curiosity. There is always something new to understand, build, or improve. That constant challenge is what makes learning exciting."
            />

            <FAQItem
              question="What is Aqila's goal for the future?"
              answer="To become an engineer who can create impactful technology, contribute to meaningful projects, and keep growing both technically and personally."
            />

          </div>
        </div>
      </DefaultLayout>
    </section>
  );
};

export default FAQ;
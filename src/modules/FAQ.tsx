"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-aos="fade-up" className="border-2 border-white rounded-2xl overflow-hidden mb-4">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-zinc-100 py-4 px-6 flex justify-between items-center text-left hover:bg-gray-300 transition-colors duration-200"
        >
            <span className="text-md text-black font-semibold">{question}</span>
            <ChevronDown 
                color="black" 
                className={`transition-transform duration-900 ${isOpen ? 'rotate-180' : ''}`} 
            />
        </button>

        <div
            className={`transition-all duration-900 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
            } overflow-hidden`}
        >
            <div className="p-6 bg-black">
                <p className="text-white text-md leading-relaxed font-medium">
                    {answer}
                </p>
            </div>
        </div>
    </div>
  );
}

const FAQ = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="faq"
      data-aos="fade-up"
      className="w-auto my-10 rounded-[2.5rem] border-2 border-black mx-5 md:mx-20 p-10 bg-zinc-300 dark:bg-zinc-800 dark:border-neutral-800 shadow-sm overflow-hidden"
    >
      <div className="max-w-7xl mx-auto"> 
        
        <div data-aos="fade-right" className="mb-4 text-center md:text-left">
          <p className="text-sm tracking-[0.3em] uppercase text-zinc-500 mb-2">Questions</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black dark:text-white">
            FAQ
          </h2>
        </div>

        <div className="space-y-2">
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
        </div>
      </div>
    </section>
  );
};

export default FAQ;

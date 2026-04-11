import { STATS } from "@/site_data_constans";
import React from "react";


export const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="bg-white text-left px-5 max-w-6xl mx-auto py-[90px]">
      <span className="text-xs font-semibold uppercase tracking-[.08em] text-teal block mb-3">
        School Statistics
      </span>
      <h2 className="font-plaufull md:text-4xl text-2xl font-extrabold leading-[1.15] tracking-tight text-dark mb-3">
        Our Progress &amp; Achievements
      </h2>
      <p className="text-[#6A8070] text-[1rem] mx-auto md:w-xl  leading-[1.8]">
        We are proud of our teachers, students, classes, and learning streams.
        Our growing community reflects trust, dedication, and quality education.
      </p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="bg-white border border-border rounded-2xl p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(13,92,74,0.1)]"
          >
            <div className="font-serif text-[2.6rem] font-black text-teal">
              {s.num}
            </div>
            <div className="text-sm text-[#6A8070] font-medium mt-1.5">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
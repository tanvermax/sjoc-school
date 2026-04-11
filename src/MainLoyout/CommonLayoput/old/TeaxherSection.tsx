"use client";
// TeachersSection.tsx
import { useState } from "react";

interface Teacher {
  initials: string;
  name: string;
  role: string;
  experience: string;
  students: string;
  bio: string;
  subjects: string[];
  availability: string;
  language: string;
  classes: string;
  quote: string;
}

const TEACHERS: Teacher[] = [
  {
    initials: "MD",
    name: "MD Atiqur Rahman",
    role: "Islamic Studies",
    experience: "5+",
    students: "80+",
    bio: "A passionate educator in Islamic Studies with years of experience guiding students in Quran recitation, Hadith, and Islamic history. Committed to creating a nurturing classroom environment.",
    subjects: ["Quran Recitation", "Hadith Studies", "Islamic History", "Arabic Language"],
    availability: "Online & In-Person",
    language: "English, Bengali",
    classes: "All Age Groups",
    quote: "My goal is to help every student connect deeply with their faith while excelling academically.",
  },
  {
    initials: "HS",
    name: "Hamzah Sufi",
    role: "Islamic Studies",
    experience: "4+",
    students: "75+",
    bio: "An energetic teacher specializing in Islamic ethics and Quranic interpretation. Hamzah brings a dynamic and interactive teaching style that keeps students engaged and motivated.",
    subjects: ["Islamic Ethics", "Quranic Tafsir", "Fiqh Basics", "Seerah"],
    availability: "In-Person",
    language: "English, Urdu",
    classes: "Youth Focus",
    quote: "Learning is not just about memorizing — it's about understanding the beauty of our deen.",
  },
  {
    initials: "AS",
    name: "Abdus Samad",
    role: "Islamic Studies",
    experience: "6+",
    students: "90+",
    bio: "A seasoned instructor with over six years of experience in Islamic education. Abdus Samad is known for his clear explanations and deep knowledge of classical Islamic sciences.",
    subjects: ["Tajweed", "Classical Arabic", "Islamic Jurisprudence", "Aqeedah"],
    availability: "Online & In-Person",
    language: "English, Arabic",
    classes: "Advanced Level",
    quote: "Every student has unique potential — my role is to unlock it through the light of Islamic knowledge.",
  },
  {
    initials: "MR",
    name: "Maryam Marufur Rahman",
    role: "Islamic Studies",
    experience: "4+",
    students: "67+",
    bio: "A dedicated and compassionate teacher focused on nurturing young minds. Maryam brings warmth and patience to every class, making Islamic education accessible and enjoyable.",
    subjects: ["Quran Memorization", "Islamic Manners", "Du'a & Prayer", "Islamic Stories"],
    availability: "Online & In-Person",
    language: "English, Bengali",
    classes: "Children & Youth",
    quote: "Instilling the love of Islam in a child's heart is the greatest gift an educator can give.",
  },
];

const PersonIcon = () => (
  <svg viewBox="0 0 44 44" width="44" height="44" fill="none" stroke="#0a4f3f" strokeWidth="1.4" strokeLinecap="round">
    <circle cx="22" cy="16" r="8" />
    <path d="M5 40c0-9.4 7.6-17 17-17s17 7.6 17 17" />
  </svg>
);

export default function TeachersSection() {
  const [active, setActive] = useState(0);
  const t = TEACHERS[active];

  return (
    <section id="teachers" className="py-[90px] px-[6%] bg-[#f6faf8]">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block text-[.72rem] font-bold uppercase tracking-[.1em] text-[#0a4f3f] bg-[#e4f5ef] px-3.5 py-1.5 rounded-full mb-3">
            Our Teachers
          </span>
          <h2
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.9rem,3vw,2.9rem)" }}
            className="font-black leading-[1.1] tracking-tight text-[#080f0c]"
          >
            Learn From Expert &amp; Dedicated Teachers
          </h2>
          <p className="text-[#637a6f] text-base leading-[1.8] max-w-[540px] mt-2">
            Our qualified teachers provide proper guidance, individual support, and friendly learning environments.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {TEACHERS.map((teacher, i) => (
            <button
              key={teacher.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border-[1.5px] text-sm font-semibold cursor-pointer transition-all duration-200 ${
                active === i
                  ? "bg-[#0a4f3f] border-[#0a4f3f] text-white shadow-[0_4px_16px_rgba(10,79,63,0.25)]"
                  : "bg-white border-[#daeee6] text-[#637a6f] hover:border-[#10876b] hover:text-[#0a4f3f]"
              }`}
            >
              <span
                className={`w-[26px] h-[26px] rounded-full flex items-center justify-center text-[.65rem] font-bold ${
                  active === i ? "bg-white/20 text-white" : "bg-[#c8ebe0] text-[#0a4f3f]"
                }`}
              >
                {teacher.initials}
              </span>
              {teacher.name}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          key={active}
          className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 animate-[fadeUp_.35s_ease]"
          style={{ animationFillMode: "both" }}
        >
          <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}`}</style>

          {/* Profile Card */}
          <div className="bg-white border border-[#daeee6] rounded-3xl p-8 text-center shadow-[0_4px_24px_rgba(10,79,63,0.08)]">
            {/* Spinning ring avatar */}
            <div className="relative w-[100px] h-[100px] mx-auto mb-5">
              <div className="absolute inset-0 rounded-full bg-[#c8ebe0] flex items-center justify-center">
                <PersonIcon />
              </div>
              <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: "3s" }} viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="47" stroke="#10876b" strokeWidth="3" strokeDasharray="60 240" strokeLinecap="round" />
              </svg>
            </div>

            <div style={{ fontFamily: "'Fraunces', serif" }} className="text-[1.3rem] font-black text-[#080f0c]">
              {t.name}
            </div>
            <div className="mt-2">
              <span className="inline-block text-[.78rem] font-semibold text-[#0a4f3f] bg-[#e4f5ef] px-3 py-1 rounded-full">
                {t.role}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mt-5">
              <div className="bg-[#f6faf8] rounded-xl py-3 text-center">
                <div style={{ fontFamily: "'Fraunces', serif" }} className="text-[1.4rem] font-black text-[#0a4f3f]">{t.experience}</div>
                <div className="text-[.68rem] font-semibold text-[#637a6f] mt-0.5">Yrs Exp.</div>
              </div>
              <div className="bg-[#f6faf8] rounded-xl py-3 text-center">
                <div style={{ fontFamily: "'Fraunces', serif" }} className="text-[1.4rem] font-black text-[#0a4f3f]">{t.students}</div>
                <div className="text-[.68rem] font-semibold text-[#637a6f] mt-0.5">Students</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 style={{ fontFamily: "'Fraunces', serif" }} className="text-[1.6rem] font-black text-[#080f0c]">
              {t.name}
            </h3>
            <p className="text-[.95rem] text-[#637a6f] mt-2 leading-[1.8]">{t.bio}</p>

            {/* Subject tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {t.subjects.map((s) => (
                <span key={s} className="bg-[#e4f5ef] text-[#0a4f3f] px-3.5 py-1.5 rounded-full text-[.78rem] font-semibold">
                  {s}
                </span>
              ))}
            </div>

            {/* Detail cards grid */}
            <div className="grid grid-cols-2 gap-3 mt-5">
              {[
                { label: "Availability", value: t.availability },
                { label: "Language",     value: t.language     },
                { label: "Classes",      value: t.classes      },
                { label: "Certificate",  value: "Awarded on Completion" },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-[#daeee6] rounded-2xl p-4">
                  <div className="text-[.78rem] font-bold text-[#637a6f] uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-[.95rem] font-semibold text-[#1e2d27]">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="relative bg-[#0a4f3f] rounded-2xl p-6 mt-5">
              <span
                style={{ fontFamily: "'Fraunces', serif" }}
                className="absolute -top-3 left-4 text-6xl text-white/20 leading-none"
              >
                "
              </span>
              <p className="text-white text-[.95rem] leading-[1.75] relative z-10">"{t.quote}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
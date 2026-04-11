import React from "react";

// --- Components ---

const MosqueIconWhite = () => (
  <svg viewBox="0 0 120 120" className="w-20 h-20 fill-none">
    <path d="M60 12L60 24" className="stroke-white/90" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M54 24C54 20 66 20 66 24L68 40C65 36 55 36 52 40Z" className="stroke-white/90" strokeWidth="1.8" />
    <path d="M44 48C44 38 76 38 76 48L76 54Q60 46 44 54Z" className="stroke-white/90" strokeWidth="1.8" />
    <rect x="24" y="54" width="72" height="38" rx="3" className="stroke-white/90" strokeWidth="1.8" />
    <path d="M36 92L36 66C36 61 41 57 47 57C53 57 58 61 58 66L58 92" className="stroke-white/90" strokeWidth="1.8" />
    <path d="M36 74L58 74" className="stroke-white/50" strokeWidth="1" strokeDasharray="3 3" />
    <rect x="62" y="63" width="18" height="29" rx="2" className="stroke-white/90" strokeWidth="1.8" />
    <path d="M24 54L29 38L34 54" className="stroke-white/90" strokeWidth="1.8" />
    <path d="M86 54L91 38L96 54" className="stroke-white/90" strokeWidth="1.8" />
  </svg>
);

const CHIPS = [
  { num: "312", label: "Students", pos: "top-5 -right-0 animate-bounce-slow" },
  { num: "17",  label: "Teachers", pos: "top-32 -right-5 animate-bounce-slow [animation-delay:0.7s]" },
  { num: "11",  label: "Classes",  pos: "bottom-24 -right-0 animate-bounce-slow [animation-delay:1.4s]" },
  { num: "1",   label: "Branch",   pos: "bottom-5 -left-10 animate-bounce-slow [animation-delay:0.3s]" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen text-left grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center gap-16 px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* ── BACKGROUND ELEMENTS ── */}
      {/* Top Right Glow */}
      {/* <div className="absolute w-[600px] h-[600px] -top-24 -right-24 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(10,79,63,0.08),transparent_70%)]" /> */}
      {/* Bottom Left Glow */}
      {/* <div className="absolute w-[400px] h-[400px] -bottom-20 -left-20 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(212,146,43,0.05),transparent_70%)]" /> */}

      {/* ── LEFT: CONTENT ── */}
      <div className="relative z-10 space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-100/50 text-emerald-900 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          Ontario, Canada
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="font-['Fraunces'] text-[clamp(2.8rem,5vw,4.5rem)] font-black leading-[1.05] tracking-tight text-slate-900">
            Your One-Stop <br />
            <span className="text-emerald-900 relative">
              Smart Education
              {/* Decorative underline */}
              <span className="absolute left-0 -bottom-2 w-full h-[6px] rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 opacity-30" />
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-[520px] leading-relaxed">
            Sunatul Jamaat of Ontario Canada provides high-quality Islamic and 
            academic education. We build character and moral values through a modern 
            learning system integrated with Islamic guidance.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-5">
          <a
            href="#admission"
            className="group relative inline-flex items-center justify-center text-base font-bold text-white bg-emerald-900 rounded-2xl px-10 py-4 transition-all hover:bg-emerald-800 hover:shadow-xl hover:shadow-emerald-900/20 active:scale-95"
          >
            Register for Admission
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center text-base font-bold text-emerald-900 border-2 border-emerald-900/10 rounded-2xl px-10 py-4 transition-all hover:bg-emerald-50 hover:border-emerald-900/20 active:scale-95"
          >
            Learn More
          </a>
        </div>

        {/* Trust/Social Proof */}
        <div className="flex items-center gap-5 pt-4">
          <div className="flex -space-x-3">
            {["MD", "HS", "AS", "MR"].map((initials) => (
              <div
                key={initials}
                className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-emerald-800 shadow-sm"
              >
                {initials}
              </div>
            ))}
          </div>
          <div className="h-10 w-[1px] bg-slate-200" />
          <p className="text-sm text-slate-500">
            <span className="text-slate-900 font-bold">4 Expert Teachers</span>
            <span className="mx-2">·</span>
            312 Students Enrolled
          </p>
        </div>
      </div>

      {/* ── RIGHT: VISUAL CARD ── */}
      <div className="hidden md:flex justify-center items-center relative py-20">
        {/* The Main Emerald Card */}
        <div className="relative group">
          {/* Card Glow */}
          <div className="absolute -inset-4 bg-emerald-900/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative w-[340px] h-[420px] rounded-[36px] bg-emerald-900 flex flex-col items-center justify-center gap-6 overflow-hidden shadow-2xl shadow-emerald-950/40 border border-white/10">
            {/* Background decorative patterns */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/5 blur-xl" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-amber-500/5 blur-xl" />
            
            {/* Icon Container */}
            <div className="relative w-36 h-36 bg-white/10 backdrop-blur-md rounded-[28px] flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <MosqueIconWhite />
            </div>

            <div className="text-center px-8 space-y-2">
              <h2 className="font-['Fraunces'] text-4xl font-black text-white tracking-widest uppercase">
                SJOC
              </h2>
              <p className="text-xs text-emerald-100/60 font-medium leading-relaxed tracking-wide">
                SUNATUL JAMAAT OF <br /> ONTARIO CANADA
              </p>
            </div>
          </div>
        </div>

        {/* Floating Stat Chips */}
        {CHIPS.map((chip) => (
          <div
            key={chip.label}
            className={`absolute   z-60 bg-white/95 backdrop-blur-sm border border-emerald-50 rounded-2xl px-5 py-4 text-center shadow-[0_20px_50px_rgba(10,79,63,0.12)]  hover:scale-110 transition-transform duration-300 ${chip.pos}`}
          >
            <div className="font-['Fraunces'] text-2xl font-black text-emerald-900 leading-none">
              {chip.num}
            </div>
            <div className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-[0.1em]">
              {chip.label}
            </div>
          </div>
        ))}
      </div>

      {/* Custom Tailwind Animation Logic for 'bounce-slow' */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}
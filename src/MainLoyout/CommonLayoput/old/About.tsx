// AboutSection.tsx
const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="#0a4f3f" strokeWidth="2" strokeLinecap="round">
        <path d="M8 2l1.5 3 3.5.5-2.5 2.5.6 3.5L8 10l-3.1 1.5.6-3.5L3 5.5 6.5 5z" />
      </svg>
    ),
    title: "Modern Islamic Curriculum",
    desc: "Blending academic and religious education for holistic student development.",
  },
  {
    icon: (
      <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="#0a4f3f" strokeWidth="2" strokeLinecap="round">
        <circle cx="8" cy="6" r="3" />
        <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </svg>
    ),
    title: "Qualified, Dedicated Teachers",
    desc: "Providing personalized guidance and a friendly learning environment.",
  },
  {
    icon: (
      <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="#0a4f3f" strokeWidth="2" strokeLinecap="round">
        <rect x="2" y="3" width="12" height="9" rx="1.5" />
        <path d="M5 14h6M8 12v2" />
      </svg>
    ),
    title: "Online & In-Person Classes",
    desc: "Flexible learning options to fit every student's schedule and needs.",
  },
  {
    icon: (
      <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="#0a4f3f" strokeWidth="2" strokeLinecap="round">
        <path d="M8 2l1.5 3h3l-2.5 2 1 3L8 8.5 5.5 10l1-3L4 5h3z" />
      </svg>
    ),
    title: "Certified Completion",
    desc: "Certificates awarded upon successful completion of every program.",
  },
];

const MosqueIconWhite = () => (
  <svg viewBox="0 0 120 120" width="90" height="90" fill="none">
    <path d="M60 12L60 24" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
    <path d="M54 24C54 20 66 20 66 24L68 40C65 36 55 36 52 40Z" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" />
    <path d="M44 48C44 38 76 38 76 48L76 54Q60 46 44 54Z" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" />
    <rect x="24" y="54" width="72" height="38" rx="3" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" />
    <path d="M36 92L36 66C36 61 41 57 47 57C53 57 58 61 58 66L58 92" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" />
    <rect x="62" y="63" width="18" height="29" rx="2" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" />
    <path d="M24 54L29 38L34 54" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" />
    <path d="M86 54L91 38L96 54" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" />
  </svg>
);

export default function AboutSection() {
  return (
    <section id="about" className="py-[90px] px-[6%] bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

        {/* ── Left: Visual Stack ── */}
        <div className="relative h-[420px] hidden md:block">
          {/* Big teal card */}
          <div
            className="absolute left-0 top-0 w-[260px] h-[320px] bg-[#0a4f3f] rounded-3xl flex flex-col items-center justify-center gap-4 overflow-hidden"
            style={{ boxShadow: "0 12px 48px rgba(10,79,63,.14)" }}
          >
            <div className="absolute -top-14 -right-14 w-48 h-48 rounded-full bg-white/[0.06]" />
            <MosqueIconWhite />
            <span style={{ fontFamily: "'Fraunces', serif" }} className="text-[1.6rem] font-black text-white tracking-[.05em]">
              SJOC
            </span>
            <span className="text-[.75rem] text-white/70 text-center px-5">Islamic Education With Excellence</span>
          </div>

          {/* Small info card */}
          <div
            className="absolute right-0 bottom-5 w-[200px] bg-white border border-[#daeee6] rounded-[18px] p-5"
            style={{ boxShadow: "0 12px 48px rgba(10,79,63,.14)" }}
          >
            <div className="text-[.7rem] font-bold text-[#637a6f] uppercase tracking-widest mb-2">Established</div>
            <div style={{ fontFamily: "'Fraunces', serif" }} className="text-[1.5rem] font-black text-[#0a4f3f]">
              Ontario, CA
            </div>
            <div className="text-[.78rem] text-[#637a6f] mt-1">Scarborough, ON M1K 1X8</div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="bg-[#e4f5ef] text-[#0a4f3f] text-[.68rem] font-semibold px-2.5 py-1 rounded-full">Online</span>
              <span className="bg-[#e4f5ef] text-[#0a4f3f] text-[.68rem] font-semibold px-2.5 py-1 rounded-full">In-Person</span>
            </div>
          </div>
        </div>

        {/* ── Right: Text ── */}
        <div>
          <span className="inline-block text-[.72rem] font-bold uppercase tracking-[.1em] text-[#0a4f3f] bg-[#e4f5ef] px-3.5 py-1.5 rounded-full mb-4">
            About Our School
          </span>
          <h2
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.9rem,3vw,2.9rem)" }}
            className="font-black leading-[1.1] tracking-tight text-[#080f0c] mb-3"
          >
            Sunatul Jamaat of Ontario Canada – Islamic Education With Excellence
          </h2>
          <p className="text-[#637a6f] text-base leading-[1.8] max-w-[540px]">
            We focus on building strong character, moral values, discipline, and
            knowledge through a modern learning system with Islamic guidance. Our
            aim is to prepare students for success in both academic life and faith.
          </p>

          <div className="flex flex-col gap-3.5 mt-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="w-9 h-9 bg-[#e4f5ef] rounded-lg flex items-center justify-center flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <div className="text-[.9rem] font-semibold text-[#1e2d27]">{f.title}</div>
                  <div className="text-[.8rem] text-[#637a6f] leading-relaxed mt-0.5">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// AdmissionSection.tsx
const STEPS = [
  { num: "1", title: "Fill the Online Form",  desc: "Complete the registration form with your personal and academic details." },
  { num: "2", title: "Get Confirmation",      desc: "The school team reviews your form and contacts you within 2–3 business days." },
  { num: "3", title: "In-Person Visit",       desc: "Complete the admission process at our Scarborough campus." },
  { num: "4", title: "Start Learning",        desc: "Begin your Islamic education journey with our expert teachers." },
];

const BENEFITS = [
  "Quality Islamic & Academic Education",
  "Online & In-Person Classes",
  "Qualified Expert Teachers",
  "Certificate on Completion",
  "For All Age Groups",
];

const MosqueIconWhite = () => (
  <svg viewBox="0 0 120 120" width="60" height="60" fill="none">
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

export default function AdmissionSection() {
  return (
    <section id="admission" className="py-[90px] px-[6%] bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* ── Left: Steps ── */}
        <div>
          <span className="inline-block text-[.72rem] font-bold uppercase tracking-[.1em] text-[#0a4f3f] bg-[#e4f5ef] px-3.5 py-1.5 rounded-full mb-4">
            Online Registration
          </span>
          <h2
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.9rem,3vw,2.9rem)" }}
            className="font-black leading-[1.1] tracking-tight text-[#080f0c] mb-3"
          >
            Register Online<br />For Admission
          </h2>
          <p className="text-[#637a6f] text-base leading-[1.8] mb-8">
            Complete your registration and begin your learning journey with SJOC.
            The team will contact you for the next steps.
          </p>

          {/* Timeline Steps */}
          <div className="flex flex-col">
            {STEPS.map((step, i) => (
              <div key={step.num} className="flex gap-5 items-start pb-7 relative">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-[#daeee6]" />
                )}
                {/* Number bubble */}
                <div
                  className="w-10 h-10 rounded-full bg-[#0a4f3f] text-white flex items-center justify-center text-sm font-extrabold flex-shrink-0 relative z-10"
                  style={{ boxShadow: "0 0 0 4px #e4f5ef" }}
                >
                  {step.num}
                </div>
                <div>
                  <div className="text-[.95rem] font-bold text-[#1e2d27]">{step.title}</div>
                  <div className="text-[.875rem] text-[#637a6f] leading-relaxed mt-0.5">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center text-base font-semibold text-white bg-[#0a4f3f] rounded-xl px-8 py-3.5 hover:bg-[#0d6b55] hover:-translate-y-px transition-all shadow-[0_4px_16px_rgba(10,79,63,0.25)] no-underline mt-2"
          >
            Apply Now →
          </a>
        </div>

        {/* ── Right: Panel ── */}
        <div
          className="relative rounded-3xl overflow-hidden p-10"
          style={{
            background: "linear-gradient(145deg,#0a4f3f,#0d6b55)",
            boxShadow: "0 12px 48px rgba(10,79,63,.2)",
          }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/[0.05]" />
          <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-white/[0.04]" />

          <div className="relative z-10">
            <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <MosqueIconWhite />
            </div>
            <div style={{ fontFamily: "'Fraunces', serif" }} className="text-[2.2rem] font-black text-white tracking-[.04em]">
              SJOC
            </div>
            <p className="text-white/70 text-sm mt-1 leading-[1.8]">
              Sunatul Jamaat of Ontario Canada — Islamic Education With Excellence
            </p>

            <div className="flex flex-col gap-3.5 mt-7">
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-center gap-3 text-[.875rem] text-white/85">
                  <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M2 5l2.5 2.5L8 3" />
                    </svg>
                  </div>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
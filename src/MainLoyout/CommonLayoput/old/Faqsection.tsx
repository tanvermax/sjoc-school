"use client";
// FAQSection.tsx
import { useState } from "react";

const FAQS = [
  { q: "What programs does Sunatul Jamaat of Ontario Canada offer?",  a: "We offer Islamic Studies programs combining Quran recitation, Islamic history, and academic subjects tailored for various age groups — from children to adults." },
  { q: "Who can enroll in your programs?",                            a: "Our programs are open to students of all age groups from the community looking to pursue Islamic and academic education." },
  { q: "Are classes conducted online or in person?",                  a: "We offer both online and in-person classes to accommodate different schedules and learning preferences." },
  { q: "How can I register for admission?",                           a: "You can register online via the Admission form on our website. The school team will contact you to complete the in-person process." },
  { q: "What are the class timings?",                                 a: "Class timings vary by program and semester. Detailed schedules are shared with registered students upon enrollment." },
  { q: "Is there a registration or monthly fee?",                     a: "Please contact the school directly for current fee information. Details are provided during the admission process." },
  { q: "Where is the school located?",                                a: "Our school is located at 347 Danforth Road, Scarborough, Ontario, M1K 1X8." },
  { q: "Do you offer certificates after course completion?",          a: "Yes, certificates are awarded to students who successfully complete their respective programs and meet the evaluation criteria." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-[90px] px-[6%] bg-[#f6faf8]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.7fr] gap-16 items-start">

        {/* ── Left: Sticky sidebar ── */}
        <div className="md:sticky md:top-[100px]">
          <div
            style={{ fontFamily: "'Fraunces', serif" }}
            className="text-[5rem] font-black text-[#c8ebe0] leading-none mb-0"
          >
            FAQ
          </div>
          <span className="inline-block text-[.72rem] font-bold uppercase tracking-[.1em] text-[#0a4f3f] bg-[#e4f5ef] px-3.5 py-1.5 rounded-full mt-1 mb-3">
            Questions
          </span>
          <h2
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.9rem,3vw,2.4rem)" }}
            className="font-black leading-[1.1] tracking-tight text-[#080f0c]"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[#637a6f] text-base leading-[1.8] mt-3">
            Find answers about admission, programs, class schedules, fees, and more.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center mt-8 text-sm font-semibold text-white bg-[#0a4f3f] rounded-lg px-6 py-3 hover:bg-[#0d6b55] hover:-translate-y-px transition-all shadow-[0_4px_16px_rgba(10,79,63,0.22)] no-underline"
          >
            Contact Us →
          </a>
        </div>

        {/* ── Right: Accordion ── */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`bg-white border rounded-2xl overflow-hidden transition-shadow duration-200 ${
                  isOpen
                    ? "border-[#c8ebe0] shadow-[0_4px_24px_rgba(10,79,63,0.08)]"
                    : "border-[#daeee6] hover:shadow-[0_4px_24px_rgba(10,79,63,0.06)]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left flex justify-between items-center gap-4 px-5 py-4 bg-transparent border-0 cursor-pointer"
                >
                  <span className="text-[.9rem] font-semibold text-[#1e2d27]">{faq.q}</span>
                  <span
                    className={`w-[22px] h-[22px] rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "bg-[#0a4f3f] border-[#0a4f3f] rotate-45"
                        : "border-[#daeee6]"
                    }`}
                  >
                    <svg viewBox="0 0 10 10" width="10" height="10" fill="none"
                      stroke={isOpen ? "white" : "#637a6f"} strokeWidth="2" strokeLinecap="round">
                      <path d="M5 2v6M2 5h6" />
                    </svg>
                  </span>
                </button>

                {/* Animated answer */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "200px" : "0px" }}
                >
                  <p className="text-[.875rem] text-[#637a6f] leading-[1.8] px-5 pb-4">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
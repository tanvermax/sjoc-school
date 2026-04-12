"use client";
import { useEffect, useState } from "react";
import { LanguageDropdown } from "./Language";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Teachers", href: "#teachers" },
  { label: "Admission", href: "#admission" },
  { label: "Notices", href: "#notices" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /* 1. Added 'fixed' or 'sticky' to the WRAPPER, not just the inner content */
    /* 2. Changed top-0 to top-4 to give it that floating 'eSkooly' look */
    <div className="fixed inset-x-0 top-4 z-50 px-5"> 
      <nav
        className={`flex items-center justify-between max-w-7xl mx-auto py-4 px-6 rounded-2xl bg-white backdrop-blur-lg border transition-all duration-300 ${
          scrolled 
            ? "shadow-xl border-[#613DDF]/20 py-3" 
            : "border-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 no-underline">
          <div className="w-10 h-10 bg-[#613DDF] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#613DDF]/20">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
              <path d="M12 3l-4 4H4v2h1v9h14V9h1V7h-4l-4-4z" />
              <rect x="9" y="13" width="6" height="7" />
            </svg>
          </div>
          <span
            style={{ fontFamily: "'Fraunces', serif" }}
            className="text-[1.3rem] font-black text-slate-900 tracking-tight"
          >
            SJOC
          </span>
        </a>

        {/* Desktop links - Updated to your brand purple */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-bold text-slate-500 hover:text-[#613DDF] transition-colors no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA - Updated to #613DDF and #F0EEFD */}
        <div className="flex items-center gap-3 ">
         <LanguageDropdown/>
          <a
            href="#admission"
            className="inline-flex items-center text-sm font-bold text-white bg-[#613DDF] rounded-xl px-5 py-2.5 hover:shadow-lg hover:shadow-[#613DDF]/30 hover:-translate-y-0.5 transition-all no-underline"
          >
            Apply Now →
          </a>
        </div>
      </nav>
    </div>
  );
}
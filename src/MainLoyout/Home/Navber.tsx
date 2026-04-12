"use client";
import { useEffect, useState } from "react";
import { LanguageDropdown } from "./Language";
import { Menu, X } from "lucide-react"; // Added for mobile icons
import { TiThMenuOutline } from "react-icons/ti";

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
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-4 z-40 px-5"> 
      <nav
        className={`flex items-center justify-between max-w-6xl mx-auto py-4 px-6 rounded-2xl bg-white/90 backdrop-blur-lg border transition-all duration-300 ${
          scrolled || isOpen
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

        {/* Desktop Links - Hidden on Mobile */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
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

        {/* Desktop CTA & Language - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageDropdown />
          <a
            href="#admission"
            className="inline-flex items-center text-sm font-bold text-white bg-[#613DDF] rounded-xl px-5 py-2.5 hover:shadow-lg hover:shadow-[#613DDF]/30 hover:-translate-y-0.5 transition-all no-underline"
          >
            Apply Now →
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-900 hover:bg-[#F0EEFD] rounded-xl transition-colors"
        >
          {isOpen ? <X size={28} /> : 
          <TiThMenuOutline  size={28}/>

          // <Menu size={28} />
          }
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`
          absolute top-[calc(100%+12px)] left-0 right-0 bg-white border border-[#613DDF]/10 rounded-2xl shadow-2xl p-6 lg:hidden transition-all duration-300 origin-top
          ${isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-95 opacity-0 invisible"}
        `}>
          <ul className="flex flex-col gap-4 list-none m-0 p-0 mb-6">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-bold text-slate-700 hover:text-[#613DDF] transition-colors no-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col gap-4 pt-6 border-t border-slate-100">
            <div className="flex justify-between items-center px-2">
              <span className="text-sm font-bold text-slate-400">Language</span>
              <LanguageDropdown />
            </div>
            <a
              href="#admission"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center text-center text-base font-bold text-white bg-[#613DDF] rounded-xl py-4 no-underline shadow-lg shadow-[#613DDF]/20"
            >
              Apply Now →
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
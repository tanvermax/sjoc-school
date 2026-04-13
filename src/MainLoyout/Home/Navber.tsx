
import  { useEffect, useState } from "react";
import { LanguageDropdown } from "./Language";
import { X } from "lucide-react"; 
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "#teachers" },
  { label: "Faqs", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-4 z-40 px-5"> 
      <nav
        className={`flex items-center justify-between max-w-7xl mx-auto py-4 px-6 rounded-2xl bg-white/10 backdrop-blur-lg border transition-all duration-300 ${
          scrolled || isOpen
            ? "shadow-xl border-[#4185F4]/20 py-3" 
            : "border-transparent"
        }`}
      >
        {/* Logo */}
       
         <img className="w-40 relative -left-15" src={logo} alt="" />

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-bold text-slate-900 hover:text-[#4185F4] transition-colors no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA & Language */}
        <div className="hidden md:flex items-center gap-3">
          <div className="scale-90 lg:scale-100">
            <LanguageDropdown />
          </div>
          <a
            href="/admissionform"
            className="inline-flex items-center text-sm font-bold text-white bg-[#4185F4] rounded-xl px-5 py-2.5 hover:bg-blue-600 hover:shadow-lg hover:shadow-[#4185F4]/30 hover:-translate-y-0.5 transition-all no-underline"
          >
            Apply Now →
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-900 hover:bg-blue-50 rounded-xl transition-colors"
        >
          {isOpen ? <X className="text-[#4185F4]" size={25} /> : <TiThMenuOutline className="text-[#4185F4]" size={25} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`
          absolute top-[calc(100%+12px)] left-0 right-0 bg-white border border-blue-50 rounded-2xl shadow-2xl p-6 lg:hidden transition-all duration-300 origin-top
          ${isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-95 opacity-0 invisible"}
        `}>
          <ul className="flex flex-col gap-4 list-none m-0 p-0 mb-6">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-bold text-slate-700 hover:text-[#4185F4] transition-colors no-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col gap-4 pt-6 border-t border-slate-100">
            <div className="flex justify-between items-center px-2">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Language</span>
              <LanguageDropdown />
            </div>
            <Link
              to="/admissionform"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center text-center text-base font-bold text-white bg-[#4185F4] rounded-xl py-4 no-underline shadow-lg shadow-[#4185F4]/20"
            >
              Apply Now →
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
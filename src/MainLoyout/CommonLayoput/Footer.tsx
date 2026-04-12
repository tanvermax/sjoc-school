import { 
  MapPin, Mail, Phone, 
  Apple, PlayCircle, ArrowUpRight, GraduationCap 
} from 'lucide-react';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#4185F4] pt-24 pb-12 overflow-hidden text-white">
      {/* Decorative Top Curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container max-w-7xl mx-auto px-6 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* ── COLUMN 1: BRAND ── */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center text-[#4185F4] shadow-lg shadow-blue-900/20">
                <GraduationCap size={28} />
              </div>
              <span className="font-['Fraunces'] text-xl font-black leading-tight">
                Sunatul <br /> Jamaat
              </span>
            </div>
            <p className="text-blue-50/70 text-left pb-4 leading-relaxed text-sm">
              Sunatul Jamaat of Ontario Canada is committed to providing quality Islamic education and academic excellence. Join us to build a bright future with knowledge and faith.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, IoLogoInstagram, FaYoutube, BsTwitterX].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full border border-blue-200/30 flex items-center justify-center hover:bg-white hover:text-[#4185F4] transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ── COLUMN 2: LINKS ── */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-8">
            <div className="space-y-6">
              <h4 className="text-lg font-bold font-['Fraunces']">Useful Links</h4>
              <ul className="space-y-3 text-sm text-blue-100/70">
                {['Home', 'About Us', 'Photos', 'Videos', 'Contact Us'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white flex items-center group transition-colors">
                      <ArrowUpRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── COLUMN 3: APP DOWNLOADS ── */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-['Fraunces']">Download Notearch Apps</h4>
            <div className="space-y-4">
              {/* Student/Parent App */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/5 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100/50">Student & Parent</span>
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-slate-900 py-2 rounded-lg text-[10px] font-bold hover:scale-105 transition-transform">
                    <PlayCircle size={14} /> Android
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-slate-900 py-2 rounded-lg text-[10px] font-bold hover:scale-105 transition-transform">
                    <Apple size={14} /> iOS App
                  </button>
                </div>
              </div>
              {/* Staff App */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/5 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100/50">Staff & Teacher</span>
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-white text-[#4185F4] py-2 rounded-lg text-[10px] font-bold hover:bg-blue-50 transition-all shadow-sm">
                    Android
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-white text-[#4185F4] py-2 rounded-lg text-[10px] font-bold hover:bg-blue-50 transition-all shadow-sm">
                    iOS App
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── COLUMN 4: CONTACT ── */}
          <div className="space-y-6 text-left">
            <h4 className="text-lg font-bold font-['Fraunces']">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex gap-4 group">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <MapPin size={18} className="text-blue-100" />
                </div>
                <div className="text-sm">
                  <p className="font-bold">School Address</p>
                  <p className="text-blue-100/70">347 Danforth Road, Scarborough, M1L 3X8</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail size={18} className="text-blue-100" />
                </div>
                <div className="text-sm">
                  <p className="font-bold">Mail Us</p>
                  <p className="text-blue-100/70">saaza1@yahoo.com</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone size={18} className="text-blue-100" />
                </div>
                <div className="text-sm">
                  <p className="font-bold">Call Us</p>
                  <p className="text-blue-100/70">416-690-2298</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-blue-100/40">
            © {currentYear} Sunatul Jamaat of Ontario Canada. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-blue-100/40 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Admin Login</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Refund</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
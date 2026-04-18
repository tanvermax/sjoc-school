import {
  MapPin,
  Mail,
  Phone,
  Apple,
  PlayCircle,
  ArrowUpRight,
  
} from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import notearch from "../../assets/notearch.png";
const Footer = () => {


  return (
    <footer className="relative bg-[#ffffff] pt-16 overflow-hidden text-black">
      <div className="container max-w-7xl  mx-auto px-6 relative z-10">
        <div className="grid border-b border-gray-200 grid-cols-1 md:grid-cols-2 pb-10 lg:grid-cols-4 gap-12 mb-16">
          {/* ── COLUMN 1: USEFUL LINKS ── */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold  border-l-4 border-white/30 pl-3">
              Useful Links
            </h4>
            <ul className="space-y-3 text-sm text-black">
              {["Home", "About Us", "Photos", "Videos", "Contact Us"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-[#4185F4] flex items-center group transition-colors"
                    >
                      <ArrowUpRight
                        size={14}
                        className="mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                      />
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* ── COLUMN 2: QUICK LINKS ── */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold  border-l-4 border-white/30 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-black">
              {[
                "Admin Login",
                "Terms Condition",
                "Privacy Policy",
                "Refund Cancellation",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-[#4185F4] flex items-center group transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COLUMN 3: HIGH-VISIBILITY DOWNLOADS ── */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-lg font-semibold  border-l-4 border-white/30 pl-3">
              Download Apps
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {/* Student/Parent App - High Visibility */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
                  Student & Parent
                </span>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#4185F4] text-white py-3 rounded-xl border border-white/10 hover:bg-black transition-all shadow-lg active:scale-95"
                  >
                    <PlayCircle size={18} />
                    <div className="text-left leading-tight">
                      <p className="text-[8px] opacity-60">Get it on</p>
                      <p className="text-[11px] font-semibold">Android</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#4185F4] text-white py-3 rounded-xl border border-white/10 hover:bg-black transition-all shadow-lg active:scale-95"
                  >
                    <Apple size={18} />
                    <div className="text-left leading-tight">
                      <p className="text-[8px] opacity-60">Download on</p>
                      <p className="text-[11px] font-semibold">iOS App</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Staff App */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
                  Staff & Teacher
                </span>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-slate-900 py-3 rounded-xl hover:bg-blue-50 transition-all shadow-lg active:scale-95"
                  >
                    <PlayCircle size={18} />
                    <div className="text-left leading-tight">
                      <p className="text-[8px] opacity-60">Get it on</p>
                      <p className="text-[11px] font-semibold">Android</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-slate-900 py-3 rounded-xl hover:bg-blue-50 transition-all shadow-lg active:scale-95"
                  >
                    <Apple size={18} />
                    <div className="text-left leading-tight">
                      <p className="text-[8px] opacity-60">Download on</p>
                      <p className="text-[11px] font-semibold">iOS App</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── COLUMN 4: CONTACT ── */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold  border-l-4 border-white/30 pl-3">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                <Mail size={20} className="text-blue-200 shrink-0" />
                <p className="text-sm text-black">saaza1@yahoo.com</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={20} className="text-blue-200 shrink-0" />
                <p className="text-sm text-black">416-690-2298</p>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={20} className="text-blue-200 mt-1 shrink-0" />
                <p className="text-sm text-black">
                  347 Danforth Road, Scarborough, M1L 3X8
                </p>
              </div>
            </div>
            {/* Social Links moved here for balance */}
            <div className="flex gap-3 pt-2">
              {[FaFacebookF, IoLogoInstagram, FaYoutube, BsTwitterX].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#4185F4] transition-all"
                  >
                    <Icon size={16} />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-6 pb-10 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="flex items-center gap-5">
              <div className="h-16 w-16 bg-[#4185F4] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
                  <img src={notearch} className="w-15" alt="" />
               
  
               </div>
               <h2 className="text-[#4185F4] italic  text-4xl font-black tracking-tighter ">
                {" "}
                Note<span className="text-black">Arch</span>
              </h2>
             
            </div>
             <p className="text-black text-[10px] font-semibold uppercase tracking-[0.3em] mt-1">
                © Notearch Institue. All Rights Reserved
              </p>
          </div>

          {/* <div className="space-y-2">
            <p className="text-slate-500 text-xs font-medium">
              © {currentYear} Sunatul Jamaat of Ontario Canada. All Rights Reserved.
            </p>
            <p className="text-slate-300 text-[10px] font-semibold flex items-center justify-center gap-1">
              POWERED BY <span className="text-slate-400">NOTEARCH TECHNOLOGY</span>
            </p>
          </div> */}
        </div>
      </div>

      {/* ── BRAND FOOTER (Like NoteArch Template) ── */}
      {/* <div className="bg-[#4185F4] py-12"> */}
      {/* <div className="container max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="h-16 w-16 bg-[#4185F4] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
               <img src={notearch} alt="" />
            </div>
            <div>
              <h2 className="text-[#4185F4] text-4xl font-black tracking-tighter ">
                Note<span className="text-slate-900">Arch</span>
              </h2>
              <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-[0.3em] mt-1">
                Institutional Management System
              </p>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-slate-500 text-xs font-medium">
              © {currentYear} Sunatul Jamaat of Ontario Canada. All Rights Reserved.
            </p>
            <p className="text-slate-300 text-[10px] font-semibold flex items-center justify-center gap-1">
              POWERED BY <span className="text-slate-400">NOTEARCH TECHNOLOGY</span>
            </p>
          </div>
        </div> */}
      {/* </div> */}
    </footer>
  );
};

export default Footer;

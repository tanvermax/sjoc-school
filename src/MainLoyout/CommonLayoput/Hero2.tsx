"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Users, ChevronRight, CheckCircle2, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 'admin',
    btnText:"Get Started",
    tag: "#1 Globally Ranked",
    title: <>Free <span className="font-light italic text-[#613DDF]">Online</span> <br /> School <br /> Management</>,
    desc: "Seamlessly manage your school, college, or any institution. Completely free for life, with no limitations.",
    stats: { label: "Total Students", value: "1,365", icon: <Users size={16} /> }
  },
  {
    id: 'student',
    btnText:"Explore Now",
    tag: "Interactive Learning",
    title: <>Empower <span className="font-light italic text-[#613DDF]">Students</span> <br /> Beyond the <br /> Classroom</>,
    desc: "Engage students with integrated LMS tools, online quizzes, and real-time progress tracking.",
    stats: { label: "Quiz Score", value: "98%", icon: <Star size={16} /> }
  },
  {
    id: 'parent',
    btnText:"Join Us",
    tag: "Parent Portal",
    title: <>Stay <span className="font-light italic text-[#613DDF]">Connected</span> <br /> Anytime, <br /> Anywhere</>,
    desc: "Mobile-first platform ensuring parents stay updated with real-time notifications and fee management.",
    stats: { label: "Attendance", value: "On Time", icon: <Bell size={16} /> }
  }
];

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[activeTab];

  return (
    <section className="relative min-h-screen w-full flex items-center pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
      
      {/* Background Layer - Adjusted for Mobile */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-full lg:w-1/2 h-[50vh] lg:h-[80vh] bg-[#F0EEFD]/50 rounded-b-[50px] lg:rounded-l-[100px] lg:rounded-br-none transform lg:translate-x-20" />
        <div className="absolute -top-24 -left-24 w-72 h-72 lg:w-96 lg:h-96 bg-[#613DDF]/5 rounded-full blur-[80px] lg:blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT CONTENT --- */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 bg-[#F0EEFD] text-[#613DDF] px-4 py-2 rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-widest border border-[#613DDF]/10">
                  <Star size={14} className="fill-[#613DDF]" />
                  {current.tag}
                </div>

                <h1 className="font-['Fraunces'] text-3xl! sm:text-5xl! md:text-6xl! lg:text-7xl! font-black text-slate-900 leading-[1.1] lg:leading-[0.95] tracking-tight">
                  {current.title}
                </h1>

                <p className="max-w-md mx-auto lg:mx-0 text-base lg:text-lg text-slate-500 leading-relaxed">
                  {current.desc}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
                  <Button className="w-full sm:w-auto h-14 lg:h-16 px-10 rounded-2xl bg-[#613DDF] text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#613DDF]/40 transition-all group">
                    {current.btnText}
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                       {[11, 12, 13].map(i => (
                         <div key={i} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${i}`} alt="user" />
                         </div>
                       ))}
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] lg:text-xs font-bold text-slate-900 leading-none">125k+ Schools</p>
                      <p className="text-[10px] lg:text-xs text-slate-400">Trusted globally</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center lg:justify-start gap-3 pt-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    activeTab === idx ? "w-10 lg:w-12 bg-[#613DDF]" : "w-2 bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* --- RIGHT CONTENT --- */}
          <div className="relative flex justify-center lg:justify-end h-[350px] sm:h-[450px] lg:h-[550px] order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[480px]"
              >
                {/* Main Image Frame */}
                <div className="absolute inset-0 rounded-[60px] lg:rounded-[100px] bg-[#613DDF]/10 transform -rotate-3 lg:-rotate-6" />
                <div className="relative h-full w-full rounded-[60px] lg:rounded-[100px] overflow-hidden border-4 lg:border-8 border-white shadow-2xl">
                  <img 
                    src={`/hero-${current.id}.jpg`} 
                    alt="School"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#613DDF]/30 to-transparent" />
                </div>

                {/* Floating Stats Card - Responsive Size & Position */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="absolute -left-6 lg:-left-12 top-1/4 bg-white p-3 lg:p-5 rounded-2xl lg:rounded-[2.5rem] shadow-xl border border-slate-50 flex items-center gap-3 lg:gap-4 scale-90 lg:scale-100"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-[#F0EEFD] text-[#613DDF] flex items-center justify-center">
                    {current.stats.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-[8px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-widest">{current.stats.label}</p>
                    <p className="text-lg lg:text-2xl font-black text-slate-900">{current.stats.value}</p>
                  </div>
                </motion.div>

                {/* Success Notification */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute -right-4 lg:-right-8 bottom-10 lg:bottom-20 bg-white p-3 lg:p-4 rounded-xl lg:rounded-3xl shadow-xl border border-slate-50 flex items-center gap-2 lg:gap-3 scale-90 lg:scale-100"
                >
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    <CheckCircle2 size={14} />
                  </div>
                  <p className="text-[10px] lg:text-sm font-bold text-slate-800 lg:pr-4">Verified</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
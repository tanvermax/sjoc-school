"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Star, Users, Briefcase, TrendingUp, DollarSign, ChevronRight, CheckCircle2, Bell, LayoutDashboard } from 'lucide-react';
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 'admin',
    tag: "#1 Globally Ranked",
    title: <>Free <span className="font-light italic">Online</span> <br /> School <br /> Management</>,
    desc: "Seamlessly manage your school, college, or any institution. Completely free for life, with no limitations.",
    color: "#613DDF",
    accent: "#F0EEFD",
    btnText: "Get Started Free",
    stats: { label: "Total Students", value: "1,365", icon: <Users size={16} /> }
  },
  {
    id: 'student',
    tag: "Interactive Learning",
    title: <>Empower <span className="font-light italic">Students</span> <br /> Beyond the <br /> Classroom</>,
    desc: "Engage students with integrated LMS tools, online quizzes, and real-time progress tracking.",
    color: "#059669", // Emerald accent for learning
    accent: "#D1FAE5",
    btnText: "Explore LMS",
    stats: { label: "Quiz Score", value: "98%", icon: <Star size={16} /> }
  },
  {
    id: 'parent',
    tag: "Parent Portal",
    title: <>Stay <span className="font-light italic">Connected</span> <br /> Anytime, <br /> Anywhere</>,
    desc: "Mobile-first platform ensuring parents stay updated with real-time notifications and fee management.",
    color: "#0284C7", // Sky blue for trust
    accent: "#E0F2FE",
    btnText: "Watch Demo",
    stats: { label: "Attendance", value: "On Time", icon: <Bell size={16} /> }
  }
];

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-play slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[activeTab];

  return (
    <section className="relative  min-h-[90vh]  lg:min-h-screen w-full flex items-center  pt-20 overflow-hidden bg-white">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-25 right-0 w-1/2 h-[80vh] bg-[#F0EEFD]/50 rounded-l-[100px] transform translate-x-20" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#613DDF]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl mt-10 md:mt-0 px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT CONTENT: TEXT ANIMATION --- */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 text-left"
              >
                <div className="inline-flex items-center gap-2 bg-[#F0EEFD] text-[#613DDF] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-[#613DDF]/10">
                  <Star size={14} className="fill-[#613DDF]" />
                  {current.tag}
                </div>

                <h1 className="font-['Fraunces'] text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tight">
                  {current.title}
                </h1>

                <p className="max-w-md text-lg text-slate-500 leading-relaxed">
                  {current.desc}
                </p>

                <div className="flex flex-wrap items-center gap-5 pt-4">
                  <Button className="h-16 px-10 rounded-2xl bg-[#613DDF] text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#613DDF]/40 transition-all group">
                    {current.btnText}
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                         </div>
                       ))}
                    </div>
                    <div className="text-xs">
                      <p className="font-bold text-slate-900">125k+ Schools</p>
                      <p className="text-slate-400">Trusted globally</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Navigation Dots */}
            <div className="flex gap-3 pt-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    activeTab === idx ? "w-12 bg-[#613DDF]" : "w-2 bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* --- RIGHT CONTENT: VISUAL STACK --- */}
          <div className="relative -top-3 flex justify-center lg:justify-end h-115 lg:h-125">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="relative w-full max-w-120"
              >
                {/* Main Circular Image */}
                <div className="absolute inset-0 rounded-[100px] bg-[#613DDF]/10 transform -rotate-6" />
                <div className="relative h-full w-full rounded-[100px] overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src={activeTab === 0 ? "/admin-hero.jpg" : activeTab === 1 ? "/student-hero.jpg" : "/parent-hero.jpg"} 
                    alt="School Management"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#613DDF]/40 to-transparent" />
                </div>

                {/* Floating Stats Card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -left-12 top-1/5 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-100 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F0EEFD] text-[#613DDF] flex items-center justify-center">
                    {current.stats.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{current.stats.label}</p>
                    <p className="text-2xl font-black text-slate-900">{current.stats.value}</p>
                  </div>
                </motion.div>

                {/* Success Notification */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -right-8 bottom-20 bg-white p-4 rounded-3xl shadow-2xl border border-slate-50 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    <CheckCircle2 size={16} />
                  </div>
                  <p className="text-sm font-bold text-slate-800 pr-4">Profile Verified</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
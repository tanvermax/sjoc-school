import React from 'react';
import { Users, GraduationCap, School, BookOpen, Trophy } from 'lucide-react';

const stats = [
  {
    id: 1,
    label: "Total Teachers",
    value: "17",
    icon: <Users className="text-[#DDDDF9]" size={28} />,
    suffix: "+"
  },
  {
    id: 2,
    label: "Total Students",
    value: "312",
    icon: <GraduationCap className="text-[#DDDDF9]" size={28} />,
    suffix: ""
  },
  {
    id: 3,
    label: "Total Classes",
    value: "11",
    icon: <School className="text-[#DDDDF9]" size={28} />,
    suffix: ""
  },
  {
    id: 4,
    label: "Total Streams",
    value: "1",
    icon: <BookOpen className="text-[#DDDDF9]" size={28} />,
    suffix: ""
  }
];

export const SchoolStats = () => {
  return (
    <section className="relative py-24 max-w-7xl mx-auto  overflow-hidden">
      {/* Background Orbs to match the Hero design */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-400/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#DDDDF9]/10 text-[#613DDF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-[#613DDF]/20">
            <Trophy size={14} className="animate-pulse" />
            Our Progress & Achievements
          </div>
          
          <h2 className="font-['Fraunces'] text-4xl! md:text-5xl font-bold!  text-black! leading-tight">
            Our Growing <span className="text-[#613DDF]  ">Educational Community</span>
          </h2>
          
          <p className="text-[#613DDF]/70 text-lg leading-relaxed">
            We are proud of our teachers, students, classes, and learning streams. 
            Our growing community reflects trust, dedication, and quality education.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="group relative bg-white/5 backdrop-blur-lg border border-[#613DDF] p-8 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Decorative Circle in background of card */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#613DDF]/8 rounded-full group-hover:scale-125 transition-transform duration-700" />
              
              <div className="relative flex flex-col items-center text-center space-y-4">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-[#613DDF] shadow-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-black text-[#613DDF] font-['Fraunces']">
                      {stat.value}
                    </span>
                    <span className="text-2xl font-bold text-[#613DDF]">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-[#613DDF]/60 font-bold uppercase text-xs tracking-widest">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
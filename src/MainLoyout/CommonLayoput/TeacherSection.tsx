import React, { useState } from 'react';
import { Mail, GraduationCap, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const teacherData = [
  {
    id: 1,
    name: "Sheikh Abdullah",
    role: "Head of Islamic Studies",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
    specialty: "Quran & Tajweed"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Senior Academic Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    specialty: "Ontario Curriculum"
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    role: "Science & Mathematics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
    specialty: "STEM Education"
  },
  {
    id: 4,
    name: "Fatima Zahra",
    role: "Primary Educator",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976",
    specialty: "Early Childhood"
  },
  {
    id: 5,
    name: "Yousuf Khan",
    role: "Arabic Language Expert",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    specialty: "Linguistics"
  },
  {
    id: 6,
    name: "Zainab Al-Farsi",
    role: "History & Ethics",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974",
    specialty: "Islamic History"
  }
];

export const TeachersSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Responsive: show 4 cards on desktop, 1 on mobile
  const cardsToShow = 4;
  const maxIndex = teacherData.length - cardsToShow;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="teachers" className="relative max-w-7xl mx-auto py-24 bg-white overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F0EEFD] rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header with Navigation Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 bg-[#F0EEFD] text-[#613DDF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-[#613DDF]/10">
              <Star size={14} className="fill-[#613DDF]" />
              Our Teachers
            </div>
            <h2 className="font-['Fraunces'] text-4xl! font-bold! md:text-5xl  text-slate-900! leading-tight">
              Learn From Expert & <br />
              <span className="text-[#613DDF] text-7xl">Dedicated Teachers</span>
            </h2>
            <p className="text-[#9177EA] text-lg">
              Our qualified teachers provide proper guidance and individual support in both Islamic and academic education.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="group flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0EEFD] text-[#613DDF] transition-all hover:bg-[#613DDF] hover:text-white"
            >
              <ChevronLeft size={24} className="transition-transform group-hover:-translate-x-1" />
            </button>
            <button 
              onClick={nextSlide}
              className="group flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0EEFD] text-[#613DDF] transition-all hover:bg-[#613DDF] hover:text-white"
            >
              <ChevronRight size={24} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Slider Window */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
          >
            {teacherData.map((teacher) => (
              <div 
                key={teacher.id} 
                className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
              >
                <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#F0EEFD] border border-[#613DDF]/5 p-4 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-[#613DDF]/15 hover:-translate-y-2">
                  
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-6">
                    <div className="absolute inset-0 bg-[#613DDF]/10 group-hover:bg-transparent transition-colors duration-500" />
                    <img 
                      src={teacher.image} 
                      alt={teacher.name} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-[#613DDF] text-white text-[10px] font-bold py-2 px-4 rounded-xl text-center shadow-lg uppercase tracking-wider">
                        {teacher.specialty}
                      </div>
                    </div>
                  </div>

                  {/* Teacher Info */}
                  <div className="text-center pb-4 px-2">
                    <h4 className="text-xl font-black text-slate-900 mb-1 font-['Fraunces'] group-hover:text-[#613DDF]">
                      {teacher.name}
                    </h4>
                    <p className="text-[#613DDF]/60 text-sm font-bold uppercase tracking-widest mb-5">
                      {teacher.role}
                    </p>
                    <div className="flex justify-center gap-3">
                      {[Mail, GraduationCap, Award].map((Icon, idx) => (
                        <button key={idx} className="p-2.5 rounded-full bg-white text-[#613DDF] shadow-sm hover:bg-[#613DDF] hover:text-white transition-all">
                          <Icon size={18} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
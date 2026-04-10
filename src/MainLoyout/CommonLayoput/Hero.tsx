
import { School, Users, BookOpen, MapPin, GraduationCap } from 'lucide-react';

const Hero = () => {
  const stats = [
    { label: "Teachers", value: "17", icon: <Users size={16} /> },
    { label: "Students", value: "312", icon: <GraduationCap size={16} /> },
    { label: "Classes", value: "11", icon: <BookOpen size={16} /> },
    { label: "Branch", value: "1", icon: <MapPin size={16} /> },
  ];

  return (
    <section className="font-serif-custom relative min-h-screen  bg-[#F9F8F3] px-6 py-12 md:py-20">
      <div className="mx-auto grid  grid-cols-1 items-center gap-12 lg:grid-cols-2">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#E8F3EF] px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[#2D5A48]">
            <span className="h-2 w-2 rounded-full bg-[#2D5A48]" />
            Ontario, Canada
          </div>

          <h1 className="font-serif-custom text-5xl font-bold leading-tight  md:text-7xl">
            Your One-Stop <br />
            <span className="text-[#2D5A48]">Smart Education</span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-gray-600">
            Sunatul Jamaat of Ontario Canada is dedicated to providing quality Islamic and academic education — 
            building strong character, moral values, and knowledge through a modern learning system with Islamic guidance.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="rounded-md bg-[#1A4D3B] px-8 py-4 font-semibold text-white transition-all hover:bg-[#143d2f] hover:shadow-lg">
              Register for Admission
            </button>
            <button className="rounded-md border-2 border-[#1A4D3B] px-8 py-4 font-semibold text-[#1A4D3B] transition-all hover:bg-[#1A4D3B] hover:text-white">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content: Visual & Stats */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Main Card */}
          <div className="relative z-10 flex h-[350px] w-[300px] flex-col items-center justify-center rounded-[40px] bg-white shadow-2xl shadow-emerald-900/10 md:h-[450px] md:w-[380px]">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-[#2D5A48] p-4">
              <School size={48} className="text-[#2D5A48]" />
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-widest text-[#2D5A48]">SJOC</h2>
            
            {/* Soft Gradient Background behind card */}
            <div className="absolute -z-10 h-[120%] w-[120%] animate-pulse rounded-full bg-gradient-to-tr from-emerald-100/50 to-transparent blur-3xl" />
          </div>

          {/* Stats Grid Overlay */}
          <div className="absolute -right-4 top-1/2 grid -translate-y-1/2 grid-cols-2 gap-3 md:-right-10">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-lg transition-transform hover:scale-105 md:h-24 md:w-24"
              >
                <span className="text-xl font-bold text-[#0A261D] md:text-2xl">{stat.value}</span>
                <span className="text-[10px] font-medium uppercase text-gray-400 md:text-[12px]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
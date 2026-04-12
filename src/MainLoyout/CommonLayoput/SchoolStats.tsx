import { Users, GraduationCap, School, BookOpen, Trophy } from 'lucide-react';

const stats = [
  {
    id: 1,
    label: "Total Teachers",
    value: "17",
    icon: <Users className="text-white" size={28} />,
    suffix: "+"
  },
  {
    id: 2,
    label: "Total Students",
    value: "312",
    icon: <GraduationCap className="text-white" size={28} />,
    suffix: ""
  },
  {
    id: 3,
    label: "Total Classes",
    value: "11",
    icon: <School className="text-white" size={28} />,
    suffix: ""
  },
  {
    id: 4,
    label: "Total Streams",
    value: "1",
    icon: <BookOpen className="text-white" size={28} />,
    suffix: ""
  }
];

export const SchoolStats = () => {
  return (
    <section className="relative py-24 max-w-7xl mx-auto overflow-hidden bg-white">
      {/* Relevant Background Orbs for #4185F4 */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4185F4]/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#4185F4]/10 text-[#4185F4] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-[#4185F4]/20">
            <Trophy size={14} className="animate-pulse" />
            Our Progress & Achievements
          </div>
          
          <h2 className="font-['Fraunces'] text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Our Growing <span className="text-[#4185F4]">Educational Community</span>
          </h2>
          
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
            We are proud of our teachers, students, and learning streams. 
            Our growing community reflects trust, dedication, and quality education.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="group relative bg-white border-2 border-slate-50 p-8 rounded-[2.5rem] hover:border-[#4185F4]/30 hover:shadow-2xl hover:shadow-[#4185F4]/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Decorative Circle in background */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#4185F4]/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative flex flex-col items-center text-center space-y-5">
                {/* Icon Container using #4185F4 */}
                <div className="w-16 h-16 rounded-2xl bg-[#4185F4] shadow-lg shadow-[#4185F4]/30 flex items-center justify-center border border-white/20 group-hover:rotate-6 transition-transform">
                  {stat.icon}
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-black text-[#4185F4] font-['Fraunces']">
                      {stat.value}
                    </span>
                    <span className="text-2xl font-bold text-[#4185F4]">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">
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
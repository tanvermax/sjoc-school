import { ShieldCheck, GraduationCap, Lightbulb, Users, CheckCircle2 } from 'lucide-react';

const AboutSchool = () => {
  return (
    <section id="about" className="relative max-w-7xl mx-auto py-12 bg-slate-50/50 my-10 rounded-3xl lg:rounded-[3rem] overflow-hidden">
      {/* Background Subtle Elements - Switched to #4185F4 tint */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4185F4]/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ── LEFT SIDE: DYNAMIC VISUAL STACK ── */}
          <div className="relative group order-2 lg:order-1 mt-12 lg:mt-0">
            {/* Main Image Container */}
            <div className="relative aspect-square w-full max-w-[450px] lg:max-w-[500px] mx-auto lg:ml-0">
              {/* Blue Shadow/Rotate Element */}
              <div className="absolute inset-0 bg-[#4185F4] rounded-[3rem] rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-500" />
              
              <div className="relative h-full w-full rounded-[3rem] bg-[#4185F4] overflow-hidden shadow-2xl border-4 border-white">
                 <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070" 
                  alt="Islamic Students" 
                  className="h-full w-full object-cover brightness-105"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -top-6 -right-4 lg:-right-6 bg-white/90 backdrop-blur-md p-4 lg:p-5 rounded-2xl shadow-xl border border-blue-100 flex items-center gap-4 animate-bounce-slow">
                <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-blue-50 flex items-center justify-center text-[#4185F4]">
                   <Users size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Community</p>
                  <p className="text-lg lg:text-xl font-black text-slate-800">100% Trusted</p>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute bottom-10 -left-4 lg:-left-10 space-y-3">
                 <div className="bg-[#4185F4] text-white px-6 py-2 rounded-full text-[10px] lg:text-xs font-bold shadow-lg shadow-blue-900/20">
                    Islamic Excellence
                 </div>
                 <div className="bg-slate-900 text-white px-6 py-2 rounded-full text-[10px] lg:text-xs font-bold shadow-lg ml-6">
                    Ontario Certified
                 </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT SIDE: CONTENT ── */}
          <div className="space-y-8 bg-white p-6 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] shadow-sm order-1 lg:order-2 border border-slate-100">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#4185F4] px-4 py-1.5 rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-widest border border-blue-100/50">
                <CheckCircle2 size={14} />
                Why Choose Our School?
              </div>
              
              <h2 className="font-['Fraunces'] font-bold text-3xl lg:text-4xl text-slate-900 leading-[1.1]">
                Sunatul Jamaat of Ontario <br />
                <span className="text-[#4185F4]">Education With Excellence</span>
              </h2>

              <p className="text-base lg:text-lg text-slate-500 leading-relaxed">
                Sunatul Jamaat of Ontario Canada is dedicated to providing quality Islamic and academic education. 
                Our aim is to prepare students for success in both worlds while staying 
                connected to faith and community.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6 lg:space-y-8 text-left">
              {[
                { 
                  icon: <ShieldCheck size={28} />, 
                  title: "Building Strong Character", 
                  desc: "Focusing on moral values and discipline through a modern learning system." 
                },
                { 
                  icon: <GraduationCap size={28} />, 
                  title: "Academic Success", 
                  desc: "Rigorous standards of education that empower students for future careers." 
                },
                { 
                  icon: <Lightbulb size={28} />, 
                  title: "Success in Both Worlds", 
                  desc: "Equipping students with spiritual and worldly knowledge to thrive." 
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#4185F4] group-hover:bg-[#4185F4] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-200">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg lg:text-xl font-black text-slate-900 mb-1 group-hover:text-[#4185F4] transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-slate-500 text-xs lg:text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default AboutSchool;

import { ShieldCheck, GraduationCap, Lightbulb, Users, CheckCircle2 } from 'lucide-react';

const AboutSchool = () => {
  return (
    <section id="about" className="relative max-w-7xl mx-auto py-12 bg-[#EEF3FC] mt-10 rounded-4xl overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E5EDFD]/50 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ── LEFT SIDE: DYNAMIC VISUAL STACK ── */}
          <div className="relative group order-2 lg:order-1">
            {/* Main Image Container (Rounded like your reference) */}
            <div className="relative aspect-square w-full max-w-[500px] mx-auto lg:ml-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#613DDF] to-[#613DDF] rounded-[3rem] rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-500" />
              
              <div className="relative h-full w-full rounded-[3rem] bg-[#613DDF] overflow-hidden shadow-2xl border-4 border-white">
                 <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070" 
                  alt="Islamic Students" 
                  className="h-full w-full object-cover grayscale brightness-110 contrast-125"
                />
              </div>

              {/* Floating Stat Card: User Satisfaction style */}
              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-4 animate-bounce-slow">
                <div className="h-12 w-12 rounded-full bg-[#ece7fd] flex items-center justify-center text-[#613DDF]">
                   <Users size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Community</p>
                  <p className="text-xl font-black text-slate-800">100% Trusted</p>
                </div>
              </div>

              {/* Floating Badge: Instant Insights style */}
              <div className="absolute bottom-12 -left-10 space-y-3">
                 <div className="bg-[#613DDF] text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg shadow-emerald-900/20">
                    Islamic Excellence
                 </div>
                 <div className="bg-slate-900 text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg ml-6">
                    Ontario Certified
                 </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT SIDE: STRUCTURED CONTENT ── */}
          <div className="space-y-8 bg-white p-5 rounded-4xl order-1 lg:order-2">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 bg-[#E5EDFD] text-[#613DDF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-100">
                <CheckCircle2 size={14} />
                Why Choose Our School?
              </div>
              
              <h2 className="font-['Fraunces'] font-semibold! text-3xl! md:text-5xl  text-black! leading-[1.1]">
                Sunatul Jamaat of Ontario <br />
                <span className="text-[#613DDF]  ">Islamic Education With Excellence</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                Sunatul Jamaat of Ontario Canada is dedicated to providing quality Islamic and academic education. 
                Our aim is to prepare students for success in both education and life while staying 
                connected to faith and community.
              </p>
            </div>

            {/* Feature List (Matching the eSkooly "Why Choose Us" vertical list) */}
            <div className="space-y-8">
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-[#E5EDFD] rounded-2xl flex items-center justify-center text-[#613DDF] group-hover:bg-[#613DDF] group-hover:text-white transition-all duration-300">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 mb-1">Building Strong Character</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Focusing on moral values and discipline through a modern learning system with Islamic guidance.</p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-[#E5EDFD] rounded-2xl flex items-center justify-center text-[#613DDF] group-hover:bg-[#613DDF] group-hover:text-white transition-all duration-300">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 mb-1">Academic Success</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Rigorous standards of education that empower students for future intellectual and career success.</p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-[#E5EDFD] rounded-2xl flex items-center justify-center text-[#613DDF] group-hover:bg-[#613DDF] group-hover:text-white transition-all duration-300">
                  <Lightbulb size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 mb-1">Success in Both Worlds</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Equipping students with spiritual and worldly knowledge to thrive in modern society.</p>
                </div>
              </div>
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
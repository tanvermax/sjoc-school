import React from 'react';
import { ArrowRight, UserPlus, ClipboardCheck, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

const OnlineRegistration = () => {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-[#613DDF] py-24 text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: `radial-gradient(#DDDDF9 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      <div className="absolute -right-20 top-0 h-[500px] w-[500px] rounded-full bg-[#DDDDF9]/10 blur-[120px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          
          {/* ── LEFT CONTENT ── */}
          <div className="flex flex-col text-left space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DDDDF9]/30 bg-[#DDDDF9]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#DDDDF9]">
              <Sparkles size={14} />
              Online Registration
            </div>

            <h2 className="font-['Fraunces'] text-5xl! font-black leading-tight md:text-6xl">
              Register Online <br />
              <span className="text-[#DDDDF9]  ">For Admission</span>
            </h2>

            <p className="max-w-md text-lg leading-relaxed text-[#DDDDF9]/80">
              Complete your registration online and begin your learning journey with Sunatul Jamaat of Ontario Canada. 
              Our team will contact you after submission to guide you through the next steps.
            </p>

            {/* Step Checklist inspired by eSkooly's feature list */}
            <div className="space-y-4 pt-4">
              {[
                { icon: <ClipboardCheck size={20} />, text: "Fill the online application form" },
                { icon: <MessageCircle size={20} />, text: "Receive a call from our admission team" },
                { icon: <UserPlus size={20} />, text: "Secure your place in the upcoming session" }
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DDDDF9]/20 text-[#DDDDF9] group-hover:bg-[#DDDDF9] group-hover:text-[#613DDF] transition-all">
                    {step.icon}
                  </div>
                  <span className="font-medium text-[#DDDDF9]">{step.text}</span>
                </div>
              ))}
            </div>

            <Button className="group h-16 w-fit rounded-2xl bg-[#DDDDF9] px-10 text-lg font-black text-[#613DDF] hover:bg-white transition-all shadow-xl shadow-black/20">
              Apply Now
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          {/* ── RIGHT VISUAL STACK ── */}
          <div className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-1000">
            <div className="relative h-[480px] w-full max-w-[480px]">
              
              {/* Main Image Base (The Student/Professional Visual) */}
              <div className="absolute inset-0 rounded-[4rem] bg-gradient-to-br from-[#DDDDF9]/20 to-transparent rotate-6 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[4rem] border-8 border-white/10  shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070" 
                  alt="Registration Journey" 
                  className="h-full w-full object-cover  brightness-110 mix-blend-overlay"
                />
              </div>

              {/* Floating Data Badges */}
              <div className="absolute -left-12 top-12 flex w-48 flex-col rounded-3xl bg-white p-5 text-slate-800 shadow-2xl animate-bounce-slow">
                <div className="flex items-center justify-between text-[10px] font-black uppercase text-slate-400">
                  <span>Application Status</span>
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="mt-2 text-xl font-black">Active Now</div>
                <div className="mt-3 flex -space-x-2">
                   {[1,2,3].map(i => (
                     <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                     </div>
                   ))}
                   <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#613DDF] text-[10px] font-bold text-white">
                     +12
                   </div>
                </div>
              </div>

              {/* Security/Trust Badge */}
              <div className="absolute -bottom-8 -right-4 flex items-center gap-4 rounded-3xl bg-[#DDDDF9] p-6 shadow-2xl">
                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#613DDF] text-[#DDDDF9]">
                    <Sparkles size={32} />
                 </div>
                 <div className="text-[#613DDF]">
                    <p className="text-xs font-black uppercase tracking-widest opacity-60">Verified</p>
                    <p className="text-xl font-black">Safe & Secure</p>
                 </div>
              </div>

              {/* Decorative Arrow Overlay */}
              <div className="absolute top-1/2 -right-12 opacity-40">
                <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                  <path d="M10 70C30 50 60 80 110 10" stroke="#DDDDF9" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
                  <path d="M110 10L95 12M110 10L108 25" stroke="#DDDDF9" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default OnlineRegistration;
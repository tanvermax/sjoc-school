import { ArrowRight, UserPlus, ClipboardCheck, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

const OnlineRegistration = () => {
  return (
    <section className="relative min-h-150 w-full overflow-hidden bg-[#4185F4] py-16 lg:py-24 rounded-3xl text-white">
      {/* Dynamic Background Elements - Using soft blue variants */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />
      <div className="absolute -right-20 top-0 h-75 w-75 lg:h-125 lg:w-125 rounded-full bg-white/10 blur-[80px] lg:blur-[120px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          
          {/* ── LEFT CONTENT ── */}
          <div className="flex flex-col text-center lg:text-left items-center lg:items-start space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] lg:text-xs font-bold uppercase tracking-widest text-white">
              <Sparkles size={14} />
              Online Registration
            </div>

            <h2 className="font-['Fraunces'] text-4xl sm:text-5xl lg:text-6xl font-black leading-tight lg:leading-[1.1]">
              Register Online <br className="hidden sm:block" />
              <span className="text-blue-100">For Admission</span>
            </h2>

            <p className="max-w-md text-base lg:text-lg leading-relaxed text-blue-50/80">
              Complete your registration online and begin your learning journey with Sunatul Jamaat of Ontario Canada. 
              Our team will contact you to guide you through the next steps.
            </p>

            {/* Step Checklist */}
            <div className="space-y-4 pt-4 w-full max-w-sm sm:max-w-md lg:max-w-none">
              {[
                { icon: <ClipboardCheck size={20} />, text: "Fill the online application form" },
                { icon: <MessageCircle size={20} />, text: "Receive a call from our admission team" },
                { icon: <UserPlus size={20} />, text: "Secure your place in the upcoming session" }
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4 group text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white group-hover:bg-white group-hover:text-[#4185F4] transition-all">
                    {step.icon}
                  </div>
                  <span className="text-sm sm:text-base font-medium text-blue-50">{step.text}</span>
                </div>
              ))}
            </div>

            <Button className="group h-14 lg:h-16 w-full sm:w-fit rounded-2xl bg-white px-10 text-lg font-black text-[#4185F4] hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20">
              Apply Now
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          {/* ── RIGHT VISUAL STACK ── */}
          <div className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-1000 order-2 lg:order-2 mt-12 lg:mt-0">
            <div className="relative h-[320px] w-full max-w-[320px] sm:h-[450px] sm:max-w-[450px] lg:h-[480px] lg:max-w-[480px]">
              
              {/* Main Image Base */}
              <div className="absolute inset-0 rounded-[3rem] lg:rounded-[4rem] bg-gradient-to-br from-white/20 to-transparent rotate-6 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[3rem] lg:rounded-[4rem] border-4 lg:border-8 border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070" 
                  alt="Registration Journey" 
                  className="h-full w-full object-cover brightness-110 mix-blend-overlay"
                />
              </div>

              {/* Floating Data Badge */}
              <div className="absolute -left-4 sm:-left-12 top-6 sm:top-12 flex w-36 sm:w-48 flex-col rounded-2xl sm:rounded-3xl bg-white p-3 sm:p-5 text-slate-800 shadow-2xl animate-bounce-slow">
                <div className="flex items-center justify-between text-[8px] sm:text-[10px] font-black uppercase text-slate-400">
                  <span>Admission Status</span>
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="mt-1 sm:mt-2 text-sm sm:text-xl font-black">Active Now</div>
                <div className="mt-2 sm:mt-3 flex -space-x-2">
                   {[11,12,13].map(i => (
                     <div key={i} className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i}`} alt="user" />
                     </div>
                   ))}
                   <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-white bg-[#4185F4] text-[8px] sm:text-[10px] font-bold text-white">
                     +12
                   </div>
                </div>
              </div>

              {/* Security/Trust Badge */}
              <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 flex items-center gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl bg-blue-50 p-4 sm:p-6 shadow-2xl">
                 <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-[#4185F4] text-white">
                    <Sparkles size={24} className="sm:w-8 sm:h-8" />
                 </div>
                 <div className="text-[#4185F4]">
                    <p className="text-[8px] sm:text-xs font-black uppercase tracking-widest opacity-60">Verified</p>
                    <p className="text-base sm:text-xl font-black">Safe & Secure</p>
                 </div>
              </div>

              {/* Decorative Arrow Overlay */}
              <div className="absolute top-1/2 -right-8 opacity-40 hidden sm:block">
                <svg width="80" height="60" viewBox="0 0 120 80" fill="none">
                  <path d="M10 70C30 50 60 80 110 10" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
                  <path d="M110 10L95 12M110 10L108 25" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default OnlineRegistration;
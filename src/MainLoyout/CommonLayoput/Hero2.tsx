import React from 'react';
import { Play, Star, Users, Briefcase, TrendingUp, DollarSign } from 'lucide-react';
import { Button } from "@/components/ui/button";

const EskoolyHero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#6542E0] text-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
      
      {/* Abstract Background Blobs */}
      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative text-left mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-2">
        
        {/* Left Content */}
        <div className="z-10 flex flex-col space-y-8">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-[10px] font-bold text-[#2D32A9]">#1</span>
            <span className="opacity-80">Globally Ranked & Verified</span>
            <div className="h-4 w-4 rounded-full bg-blue-400 p-0.5">
              <svg fill="white" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
            </div>
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
            Free <span className="font-light">Online</span> <br />
            School <br />
            Management <br />
            <span className="font-light">Software</span>
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-blue-100/80">
            You can now manage your school, college, or any educational institution seamlessly with eSkooly — completely free for life, with no limitations.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Button className="h-14 text-black rounded-full bg-[#ffffff] px-10 text-lg font-bold hover:bg-[#5249e0] shadow-lg shadow-purple-900/20">
              Get Started, <span className="ml-1 font-normal opacity-80 text-sm  ">It's Free</span>
            </Button>
            
            <div className="flex items-center py-5 gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                <Play fill="white" size={20} />
              </div>
              <div className="text-sm">
                <p className="font-bold">Trusted by 125,000+ schools</p>
                <div className="flex items-center gap-1">
                  <span className="font-medium">Rated 4.6</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content: Visual Stack */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Main Visual Circle & Image Container */}
          <div className="relative flex h-[450px] w-[450px] items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#635BFF] to-blue-400 opacity-20 animate-pulse" />
            <div className="absolute h-[80%] w-[80%] rounded-full bg-[#7a7af0] shadow-2xl overflow-hidden">
                {/* Replace with your cutout image */}
                <img 
                  src="/api/placeholder/400/500" 
                  alt="Teachers" 
                  className="h-full w-full object-cover grayscale brightness-110 contrast-125"
                />
            </div>

            {/* Floating Card: Total Students */}
            <div className="absolute -left-10 top-10 flex w-48 flex-col rounded-2xl bg-white/95 p-4 text-slate-800 shadow-xl backdrop-blur-sm">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase text-slate-400">
                <span>Total Students</span>
                <Users size={12} className="text-purple-600" />
              </div>
              <div className="mt-1 text-2xl font-black">1,365</div>
              <div className="mt-2 flex items-center gap-2 text-[10px]">
                <span className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-700 font-bold">New Enrollments</span>
                <span className="font-black text-purple-700">24</span>
              </div>
            </div>

            {/* Floating Card: Total Employees */}
            <div className="absolute -right-4 top-0 flex w-40 flex-col rounded-2xl bg-white p-4 text-slate-800 shadow-xl">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase text-slate-400">
                <span>Total Employees</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-purple-100 text-purple-600">
                  <Briefcase size={16} />
                </div>
                <span className="text-xl font-black">37</span>
              </div>
              <div className="mt-2 flex justify-between text-[9px] font-bold text-slate-400">
                <span>NEWLY HIRED</span>
                <span className="text-slate-800">04</span>
              </div>
            </div>

            {/* Floating Card: Revenue (Bottom) */}
            <div className="absolute -bottom-10 right-10 flex w-64 items-center justify-between rounded-3xl bg-white/90 p-5 text-slate-800 shadow-2xl backdrop-blur-md">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase text-slate-400">Revenue</span>
                <span className="text-2xl font-black">$2420.00</span>
                <div className="mt-2 flex gap-2 text-[9px] font-bold text-slate-400">
                  <span className="text-purple-600">Daily</span>
                  <span>Weekly</span>
                  <span>Monthly</span>
                </div>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900">
                <TrendingUp size={24} className="text-purple-400" />
              </div>
            </div>

            {/* Icon Decoration */}
            <div className="absolute -right-16 bottom-20 flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 border-white/20 text-white shadow-lg">
                <DollarSign size={32} />
                <div className="absolute -top-10 flex items-center gap-1">
                     <div className="h-6 w-1.5 bg-white/30 rounded-full" />
                     <div className="h-10 w-1.5 bg-white rounded-full" />
                     <TrendingUp className="ml-2 rotate-45" size={20}/>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EskoolyHero;


{/* Slide 2: Student Focus */}
<div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-2 animate-in fade-in slide-in-from-right-8 duration-700">
  <div className="z-10 space-y-8">
    <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-amber-400/30">
      Interactive Learning
    </div>
    <h2 className="font-['Fraunces'] text-[clamp(2.8rem,5vw,4.5rem)] font-black leading-[1.05] text-white">
      Empower Students <br />
      <span className="text-amber-400  ">Beyond Classroom</span>
    </h2>
    <p className="text-lg text-blue-100/70 max-w-md">
      Engage students with integrated LMS tools, online quizzes, and progress tracking that makes learning fun and measurable.
    </p>
    <Button className="h-14 rounded-2xl bg-amber-500 hover:bg-amber-600 px-10 text-slate-900 font-bold text-lg">
      Explore LMS Features
    </Button>
  </div>

  <div className="relative flex justify-center">
    {/* Visual: Floating iPad/Tablet mockup feel */}
    <div className="relative w-[380px] h-[380px] bg-gradient-to-br from-amber-400 to-orange-600 rounded-[60px] rotate-3 shadow-2xl overflow-hidden border-8 border-white/10">
       <img src="/student-learning.jpg" className="h-full w-full object-cover -rotate-3 scale-110" alt="Student" />
    </div>
    
    {/* Floating Progress UI */}
    <div className="absolute top-10 -left-12 bg-white p-4 rounded-2xl shadow-2xl w-44 animate-bounce-slow">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
        <span className="text-[10px] font-bold text-slate-400 uppercase">Quiz Passed</span>
      </div>
      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full w-[85%] bg-green-500" />
      </div>
      <div className="mt-2 text-right text-xs font-black text-slate-800">85% Score</div>
    </div>
  </div>
</div>


{/* Slide 3: Parent & Admin Focus */}
<div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-2 animate-in fade-in zoom-in-95 duration-700">
  <div className="relative order-2 lg:order-1 flex justify-center">
    {/* Multi-Device Mockup feel */}
    <div className="relative w-full max-w-md aspect-square">
        <div className="absolute inset-0 bg-blue-400/10 rounded-full scale-110 animate-pulse" />
        <div className="relative z-10 w-full h-full bg-slate-900 rounded-[40px] border-[12px] border-slate-800 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl" />
            <img src="/mobile-app-ui.jpg" className="h-full w-full object-cover rounded-[28px]" alt="App" />
        </div>
        
        {/* Floating Notification */}
        <div className="absolute -right-8 top-1/4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-blue-50 max-w-[200px]">
          <div className="flex gap-3">
             <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">🔔</div>
             <div>
               <p className="text-[11px] font-bold text-slate-900 leading-tight">Attendance Alert</p>
               <p className="text-[9px] text-slate-500">Your child has reached school at 8:45 AM</p>
             </div>
          </div>
        </div>
    </div>
  </div>

  <div className="z-10 space-y-8 order-1 lg:order-2">
    <div className="inline-flex items-center gap-2 bg-blue-400/20 text-blue-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-400/30">
      Parent Portal
    </div>
    <h2 className="font-['Fraunces'] text-[clamp(2.8rem,5vw,4.5rem)] font-black leading-[1.05] text-white">
      Stay Connected <br />
      <span className="text-blue-400">Anytime, Anywhere</span>
    </h2>
    <p className="text-lg text-blue-100/70 max-w-md">
      Our mobile-first platform ensures parents are always in the loop with real-time notifications, results, and fee management.
    </p>
    <div className="flex gap-4">
       <button className="px-8 py-3 bg-white text-emerald-900 rounded-xl font-bold hover:scale-105 transition-transform">Get the App</button>
       <button className="px-8 py-3 border border-white/20 text-white rounded-xl font-bold hover:bg-white/10">Watch Demo</button>
    </div>
  </div>
</div>
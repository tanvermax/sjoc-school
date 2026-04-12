
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background Orbs - Switched to #4185F4 Tints */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4185F4]/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#4185F4] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-[#4185F4]/10">
            <MessageSquare size={14} />
            Get In Touch
          </div>
          <h2 className="font-['Fraunces'] text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Have Any <span className="text-[#4185F4]">Query?</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Need help or want more information? Feel free to contact us anytime. 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* ── LEFT SIDE: FORM ── */}
          <div className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-[3rem] border border-blue-100 shadow-xl shadow-slate-200/50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter First Name"
                    className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-transparent focus:border-[#4185F4] focus:bg-white focus:ring-4 focus:ring-[#4185F4]/10 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter Your Email"
                    className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-transparent focus:border-[#4185F4] focus:bg-white focus:ring-4 focus:ring-[#4185F4]/10 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Enter Message"
                  className="w-full p-6 rounded-[2rem] bg-slate-50 border border-transparent focus:border-[#4185F4] focus:bg-white focus:ring-4 focus:ring-[#4185F4]/10 transition-all outline-none resize-none"
                />
              </div>

              <Button className="w-full sm:w-fit h-16 px-10 rounded-2xl bg-[#4185F4] text-white font-bold text-lg hover:bg-blue-600 hover:shadow-2xl hover:shadow-[#4185F4]/40 transition-all">
                Send Message
                <Send size={18} className="ml-2" />
              </Button>
            </form>
          </div>

          {/* ── RIGHT SIDE: MAP & INFO ── */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Map Container */}
            <div className="relative w-full h-75 lg:h-87.5 rounded-[3rem] overflow-hidden shadow-2xl border-2 border-blue-50">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.288280590481!2d-79.2774786!3d43.7045582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d168f8245245%3A0x2113ca751c7a1962!2s347%20Danforth%20Rd%2C%20Scarborough%2C%20ON%20M1L%203X8%2C%20Canada!5e0!3m2!1sen!2sbd!4v1712910000000!5m2!1sen!2sbd"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Quick Info Card */}
            <div className="bg-[#4185F4] p-8 rounded-[3rem] text-white shadow-xl relative overflow-hidden group">
              <div className="space-y-6 relative z-10">
                 <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center border border-white/20 transition-transform group-hover/item:scale-110">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Location</p>
                    <p className="font-medium">347 Danforth Rd, Scarborough, Canada</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center border border-white/20 transition-transform group-hover/item:scale-110">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Phone Number</p>
                    <p className="font-medium">+1 416-690-2298</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center border border-white/20 transition-transform group-hover/item:scale-110">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Email Address</p>
                    <p className="font-medium">saaza1@yahoo.com</p>
                  </div>
                </div>
              </div>
              {/* Subtle background decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
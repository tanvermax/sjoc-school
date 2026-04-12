import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F0EEFD] rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#613DDF]/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#F0EEFD] text-[#613DDF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-[#613DDF]/10">
            <MessageSquare size={14} />
            Get In Touch
          </div>
          <h2 className="font-['Fraunces'] text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Have Any <span className="text-[#613DDF]">Query?</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Need help or want more information? Feel free to contact us anytime. 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* ── LEFT SIDE: FORM ── */}
          <div className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-[3rem] border border-[#613DDF] shadow-xl shadow-slate-200/50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter First Name"
                    className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#613DDF]/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter Your Email"
                    className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#613DDF]/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Enter Message"
                  className="w-full p-6 rounded-[2rem] bg-slate-50 border-none focus:ring-2 focus:ring-[#613DDF]/20 transition-all resize-none"
                />
              </div>

              <Button className="w-full sm:w-fit h-16 px-10 rounded-2xl bg-[#613DDF] text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#613DDF]/40 transition-all">
                Send Message
                <Send size={18} className="ml-2" />
              </Button>
            </form>
          </div>

          {/* ── RIGHT SIDE: MAP & INFO ── */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Map Container */}
            <div className="relative w-full h-[300px] lg:h-[350px] rounded-[3rem] overflow-hidden shadow-2xl border-2 border-[#c5b8f5]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.2882572111815!2d-79.2730303233818!3d43.70457687109968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ced8f8245245%3A0xc213cad11c7a3962!2s347%20Danforth%20Rd%2C%20Scarborough%2C%20ON%20M1L%203X8%2C%20Canada!5e0!3m2!1sen!2sbd!4v1712910000000!5m2!1sen!2sbd"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Quick Info Card */}
            <div className="bg-[#613DDF] p-8 rounded-[3rem] text-white shadow-xl relative overflow-hidden group">
              <div className="space-y-6 relative z-10">
                {/* <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                    <MapPin size={20} />
                  </div>

http://googleusercontent.com/map_location_reference/1
                  <p className="font-medium">[347 Danforth Rd](http://googleusercontent.com/map_location_reference/0), Scarborough, Canada</p>
                </div> */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                    <Phone size={20} />
                  </div>
                  <p className="font-medium">+1 416-690-2298</p>
                </div>
              </div>
              {/* Subtle background decoration */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
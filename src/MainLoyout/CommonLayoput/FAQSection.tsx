import  { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqData = [
  {
    q: "What programs does Sunatul Jamaat of Ontario Canada offer?",
    a: "We offer Quran learning with Tajweed, Islamic studies, Arabic language education, and academic support programs for students of different age groups."
  },
  {
    q: "Who can enroll in your programs?",
    a: "Our programs are open to students of various age groups, from young children starting their basic Quranic journey to adults seeking deeper Islamic knowledge."
  },
  {
    q: "Are classes conducted online or in person?",
    a: "We offer flexible learning options. Please contact our administration to find out which specific programs are currently available for in-person or online attendance."
  },
  {
    q: "How can I register for admission?",
    a: "You can register directly through our 'Online Registration' section on this website. Simply fill out the form, and our team will contact you for the next steps."
  },
  {
    q: "What are the class timings?",
    a: "Class timings vary depending on the specific program and level. We offer various shifts to accommodate student schedules. Detailed timings will be provided during admission."
  },
  {
    q: "Do you provide qualified teachers?",
    a: "Yes, all our teachers are highly qualified and experienced in both Islamic sciences and academic subjects, providing professional and friendly guidance."
  },
  {
    q: "Is there a registration or monthly fee?",
    a: "Yes, there is a structured fee system to support our high-quality educational services. Please reach out to us for the specific fee details of your chosen program."
  },
  {
    q: "Where is the school located?",
    a: "We are located in Ontario, Canada. For the full address and directions, please visit our contact section or get in touch with our support team."
  },
  {
    q: "How can I contact the school for more information?",
    a: "You can reach us via the contact form on our website, or call us directly. Our team is always ready to assist you with your queries."
  },
  {
    q: "Do you offer certificates after course completion?",
    a: "Yes, we provide certificates to students who successfully complete their respective courses, acknowledging their dedication and achievements."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id='faq'  className="relative py-24 bg-white overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#F0EEFD]/30 -z-10" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F0EEFD] rounded-full blur-[120px] -z-10 opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#613DDF]/10 text-[#613DDF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-[#613DDF]/10">
            <HelpCircle size={14} />
            Common Questions
          </div>
          
          <h2 className="font-['Fraunces'] text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Frequently Asked <span className="text-[#613DDF]  ">Questions</span>
          </h2>
          
          <p className="text-slate-500 text-lg">
            Everything you need to know about our admission, programs, and educational system.
          </p>
        </div>

        {/* FAQ Grid - Split into 2 columns for better readability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`group transition-all duration-300 rounded-[2rem] border ${
                openIndex === index 
                ? 'bg-white border-[#613DDF] shadow-xl shadow-[#613DDF]/10' 
                : 'bg-[#F0EEFD]/50 border-transparent hover:border-[#613DDF]/30'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`text-lg font-bold pr-4  transition-colors ${
                  openIndex === index ? 'text-[#613DDF]' : 'text-[#613DDF]'
                }`}>
                  {item.q}
                </span>
                <div className={`flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 text-[#613DDF]' : 'text-slate-400'
                }`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6 pt-0 text-slate-500 leading-relaxed border-t border-[#F0EEFD]">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Prompt */}

      </div>
    </section>
  );
};
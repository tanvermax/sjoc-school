
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  return (
    <section id="faq" className="relative py-24 bg-white overflow-hidden">
      {/* Background Subtle Accent - Using blue tints */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-50/20 -z-10" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#4185F4]/10 text-[#4185F4] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-[#4185F4]/10">
            <HelpCircle size={14} />
            Common Questions
          </div>

          <h2 className="font-['Fraunces'] text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Frequently Asked <span className="text-[#4185F4]">Questions</span>
          </h2>

          <p className="text-slate-500 text-lg">
            Everything you need to know about our admission, programs, and
            educational system.
          </p>
        </div>

        {/* FAQ Grid using Shadcn Accordion */}
        <div className="max-w-7xl mx-auto">
          <Accordion type="single" collapsible className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`group px-6 rounded-[2rem] border-2 transition-all duration-300 data-[state=open]:bg-white data-[state=open]:border-[#4185F4] data-[state=open]:shadow-xl data-[state=open]:shadow-blue-600/10 data-[state=closed]:bg-slate-50/50 data-[state=closed]:border-transparent hover:border-[#4185F4]/30`}
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <span className="text-lg font-bold text-left pr-4 text-slate-800 group-data-[state=open]:text-[#4185F4] transition-colors">
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 text-base leading-relaxed pb-6">
                  <div className="pt-4 border-t border-blue-50">
                    {item.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
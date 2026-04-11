// NoticesSection.tsx
const NOTICES = [
  {
    date: "Apr 2026",
    badge: "Admission",
    badgeClass: "bg-[#e0f2fe] text-[#0369a1]",
    title: "New Semester Enrollment Now Open",
    body: "Enrollment for the upcoming semester is now open. Register online to secure your spot in our Islamic studies and academic programs before seats fill up.",
  },
  {
    date: "Mar 2026",
    badge: "Schedule",
    badgeClass: "bg-[#fef9c3] text-[#a16207]",
    title: "Updated Class Schedule Released",
    body: "The revised timetable for all classes has been published. Students and parents are requested to review the updated schedule on the portal.",
  },
  {
    date: "Mar 2026",
    badge: "Exams",
    badgeClass: "bg-[#fce7f3] text-[#9d174d]",
    title: "Annual Exam Dates Announced",
    body: "Annual examinations are scheduled for late May. Preparation guidelines and syllabus breakdowns have been shared with all enrolled students.",
  },
];

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function NoticesSection() {
  return (
    <section id="notices" className="py-[90px]  bg-[#f6faf8]">
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <div className="flex justify-between items-end gap-6 flex-wrap mb-10">
          <div>
            <span className="inline-block text-[.72rem] font-bold uppercase tracking-[.1em] text-[#0a4f3f] bg-[#e4f5ef] px-3.5 py-1.5 rounded-full mb-3">
              Announcements
            </span>
            <h2
              style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.9rem,3vw,2.9rem)" }}
              className="font-black leading-[1.1] tracking-tight text-[#080f0c]"
            >
              Latest Notices &amp;<br />Important Updates
            </h2>
            <p className="text-[#637a6f] text-base leading-[1.8] max-w-[540px] mt-2">
              Stay connected with Sunatul Jamaat of Ontario Canada for the latest events, schedules, and school news.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-[#0a4f3f] border-[1.5px] border-[#0a4f3f] rounded-lg px-5 py-2.5 hover:bg-[#e4f5ef] transition-colors no-underline whitespace-nowrap"
          >
            View All Notices →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NOTICES.map((n) => (
            <div
              key={n.title}
              className="group bg-white border border-[#daeee6] rounded-[20px] p-7 cursor-pointer relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(10,79,63,0.14)] transition-all duration-300"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 w-1 h-full bg-[#10876b] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom rounded-l-[20px]" />

              <div className="flex justify-between items-center mb-4">
                <span className="text-[.72rem] font-bold text-[#0a4f3f] uppercase tracking-widest">{n.date}</span>
                <span className={`text-[.7rem] font-bold px-2.5 py-1 rounded-full ${n.badgeClass}`}>{n.badge}</span>
              </div>

              <h3
                style={{ fontFamily: "'Fraunces', serif" }}
                className="text-[1.1rem] font-black text-[#080f0c] mb-2 leading-[1.3]"
              >
                {n.title}
              </h3>
              <p className="text-[.875rem] text-[#637a6f] leading-[1.7]">{n.body}</p>

              <div className="inline-flex items-center gap-1.5 text-[.8rem] font-semibold text-[#0a4f3f] mt-5 group-hover:gap-3 transition-all">
                Read More <ArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
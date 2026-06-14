const educations = [
  {
    period: "2021 — 2025",
    degree: "Bachelor of Engineering",
    field: " Computer Science and Design Engineering",
    institution: "Dr. Vitthalrao Vikhe Patil College of Engineering, Ahmednagar.",
    grade: "CGPA: 7.55 / 10",
    highlights: [
        "Savitribai Phule Pune University"   
    ],
    current: false,
  },
  {
    period: "2019 — 2021",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science — Physics, Chemistry, Mathematics",
    institution: "Bhimashankar Padalkar junior College, Aurangabad.",
    grade: "Percentage: 82.33%",
    highlights: [
      "Maharashtra State Board",      
    ],
    current: false,
  },
  {
    period: "2019",
    degree: "Secondary School Certificate (SSC)",
    field: "General Studies",
    institution: "Tanwani Madhyamic Vidhya Mandir, Aurangabad.",
    grade: "Percentage: 64.00%",
    highlights: [
      "Maharashtra State Board",      
    ],
    current: false,
  },
];

export const Education = () => {
     return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Knowledge that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}builds foundations.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A structured academic background that fuelled my passion for
            building scalable, real-world applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Education Items */}
          <div className="space-y-12">
            {educations.map((edu, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {edu.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.field}</p>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>

                    {/* Grade */}
                    <p className="text-sm text-primary/80 font-medium mt-3">
                      🎓 {edu.grade}
                    </p>

                    {/* Highlights */}
                    <ul
                      className={`flex flex-col gap-1 mt-4 ${
                        idx % 2 === 0 ? "md:items-end" : ""
                      }`}
                    >
                      {edu.highlights.map((point, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex gap-2 items-start"
                        >
                          <span className="text-primary mt-0.5 shrink-0">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
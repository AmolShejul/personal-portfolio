const experiences = [
  {
    period: "Nov 2025 — May 2026",
    role: "Software Development Intern",
    company: "SETTribe LLP, Pune",
    description: [
      "Worked as a Full Stack Developer Trainee using React.js, Spring Boot, and MySQL for web application development.",
      "Developed responsive frontend features and reusable UI components using React.js to improve user experience.",
      "Created dynamic forms with validation and integrated them with backend REST APIs for seamless data handling.",
      "Built and enhanced dashboard functionalities, including data display, user interactions, and component-based UI improvements.",
      "Developed backend modules using Spring Boot, implementing business logic and CRUD operations.",
      "Used MySQL for database design, query execution, data management, and backend database integration.",
      "Collaborated in a remote team environment using GitHub for version control, feature branching, issue tracking, and code management.",
      "Debugged frontend-backend integration issues and resolved code conflicts to ensure smooth application performance.",
      "Maintained a clean, modular project structure following good coding practices for scalability and maintainability.",
      "Successfully delivered assigned tasks within deadlines while coordinating with the development team.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React.js", "SpringBoot", "Hibernate (JPA)", "MySql", "Github"],
    current: true,
  },
  {
    period: "Dec 2023 — Jan 2024",
    role: "Full Stack Developer",
    company: "Technogrowth Software Solutions Pvt. Ltd., Pune",
    description:[
        "Built a full stack CRUD web application using Spring Boot (backend) and Angular (frontend) with MySQL database integration.",
        "Developed and consumed REST APIs handling HTTP methods (GET, POST, PUT, DELETE) for seamless client-server communication.",
        "Structured backend code following MVC architecture with separate Controller and Service layers.",
        "Collaborated in code reviews and followed SDLC practices.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Angular", "SpringBoot", "Hibernate (JPA)", "MySql"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
            h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
                font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
                mt-4 mb-6 animate-fade-in animation-delay-100
                    text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
                animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
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
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>

                    {/* Description: array -> left-justified bullet list, string -> paragraph */}
                    {Array.isArray(exp.description) ? (
                      <ul className="space-y-1.5 mt-4 text-left">
                        {exp.description.map((point, pointIdx) => (
                          <li
                            key={pointIdx}
                            className="text-sm text-muted-foreground flex gap-2 leading-relaxed"
                          >
                            <span className="text-primary mt-1 shrink-0">▸</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted-foreground mt-4">
                        {exp.description}
                      </p>
                    )}

                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
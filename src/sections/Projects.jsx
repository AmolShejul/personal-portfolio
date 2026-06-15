import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "RIDEVA – Vehicle Rental System",
    description:[
        "Built a full-stack vehicle rental web application with role-based dashboards for Admin, Owner, and User.",
        "Built 8+ REST APIs (Spring Boot + JPA) for vehicle booking, auth, and CRUD across 3 user roles.",
        "Implemented JWT authentication, booking workflow, and vehicle CRUD operations.",
        "Created responsive UI using React.js with protected routes and API integration.",        
    ],      
    image: "/projects/project1.jpeg",
    tags: ["HTML5", "CSS", "JavaScript", "React.js", "Spring Boot", "Java", "Hibernate(JPA)", "JWT", "REST API", "Bootstrap", "MySQL", "Postman", "Github"],
    // link: "#",
    github: "https://github.com/AmolShejul/RIDEVA-Vehicle-Rental-System",
  },
  {
    title: "Shejul Hospital — Hospital Management System",
    description: [
      "Developed a full-stack Hospital Management System with role-based access for Doctor and Admin portals using Angular (frontend) and Spring Boot (backend) with MySQL database.",
      "Designed and implemented RESTful APIs (GET, POST, PUT, DELETE) for Patient management, Medicine inventory, and Appointment scheduling using Spring Boot and JPA Repository.",
      "Built Doctor Dashboard with patient queue management and Medicine inventory with full CRUD operations.",      
    ],
    image: "/projects/project2.png",
    tags: ["HTML5", "CSS3", "Angular", "Java", "Spring Boot", "Hibernate(JPA)", "REST API", "Bootstrap", "MySQL", "Postman", "Github"],
    // link: "#",
    github: "#",
  },
  {
    title: "Sumruddha Sala E-Portal",
    description:[
        "Built a multi-role e-portal (Head Master, Sachiv, CEO) for Zilla Parishad to track school construction lifecycle across an entire district.",
        "Built Financial Utilization tracker (sanctioned vs. utilized funds) and Blocker Reporting form.",
        "Participated in requirement understanding, API testing, and debugging activities during development.",
    ],      
    image: "/projects/project3.png",
    tags: ["HTML5", "CSS", "JavaScript", "React.js", "Spring Boot", "Java", "Hibernate(JPA)", "JWT", "REST API", "Bootstrap", "MySQL", "Postman", "Github"],
    // link: "#",
    github: "https://github.com/SETTribe-IT-Solutions/INT-ST-SD-12-Projects",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            FEATURED PROJECTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects built using
            <span className="font-serif italic font-normal text-white">
              {" "}
              Java, Spring Boot, React.js, and MySQL.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A showcase of full-stack applications built using Java, Spring Boot, React.js, and MySQL
            to solve real-world business challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                        bg-gradient-to-t from-card via-card/50
                        to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <a
                            href={project.link}
                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                            <ArrowUpRight className="w-5 h-5" />
                        </a> */}
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {/* <ArrowUpRight
                    className="w-5 h-5 
                        text-muted-foreground group-hover:text-primary
                        group-hover:translate-x-1 
                        group-hover:-translate-y-1 transition-all"
                  /> */}
                </div>

                {/* Description: array -> bullet list, string -> paragraph */}
                {Array.isArray(project.description) ? (
                  <ul className="space-y-1.5">
                    {project.description.map((point, pointIdx) => (
                      <li
                        key={pointIdx}
                        className="text-muted-foreground text-sm flex gap-2 leading-relaxed"
                      >
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          {/* <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton> */}
        </div>
      </div>
    </section>
  );
};
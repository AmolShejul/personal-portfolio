import { Code2, Lightbulb, Rocket, Database } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Backend Development",
    description:
      "Building secure and scalable backend systems using Java, Spring Boot, Hibernate, and REST APIs.",
  },
  {
    icon: Rocket,
    title: "Frontend Development",
    description:
      "Creating responsive and interactive user interfaces using React.js, HTML, CSS, and JavaScript.",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Designing and managing relational databases using MySQL, writing optimized queries, and ensuring efficient data storage.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Analyzing requirements, debugging issues, and delivering efficient software solutions through logical thinking.",
  },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
                <div className="animate-fade-in">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                    About Me
                </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                Building scalable full-stack applications,
                <span className="font-serif italic font-normal text-white">
                    {" "}
                    one solution at a time.
                </span>
                </h2>

                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                    I'm Amol Shejul, a Computer Science graduate and Java Full Stack Developer 
                    with hands-on experience in Spring Boot, React.js, REST APIs, Hibernate, and MySQL. 
                    I enjoy building scalable applications and solving real-world problems through technology.
                </p>
                <p>
                    My expertise includes Java, Spring Boot, React.js, REST APIs, MySQL, JWT Authentication, and Git. 
                    I have worked on full-stack applications such as Rideva 
                    Vehicle Rental System and Sumruddha Sala E-Portal, focusing on secure and user-friendly solutions.
                </p>
                <p>
                    I am continuously learning new technologies and improving my skills in 
                    Java, Spring Boot, React.js, and cloud technologies. I enjoy solving real-world 
                    problems and building applications that create value for users.
                </p>
                </div>

                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                    "My goal is to build reliable, scalable, and user-friendly applications while 
                    continuously learning and growing as a Full Stack Developer."
                </p>
                </div>
            </div>

            {/* Right Column - Hilights */}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                <div
                    key={idx}
                    className="glass p-6 rounded-2xl animate-fade-in"
                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                    {item.description}
                    </p>
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    );
};
import {Button} from '@/components/Button';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
import { Download, ArrowRight, ChevronDown} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
    "Java","Spring Boot","React.js","MySQL","Hibernate","REST APIs","Git","GitHub","AWS EC2"    
];

export const Hero = () => {
      
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/*Bg*/}
        <div className="absolute inset-0">
            <img src="/hero-bg.png" 
            alt=" Hero image" 
            className="w-full h-full object-cover opacity-40"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>

        {/*Green Dots*/}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (              
                <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
                style={{
                    backgroundColor: "#202cb2",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                }}/>
            ))}
        </div>
        {/*content*/}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/*left Column - Text Content*/}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            Java Full Stack Developer
                        </span>
                    </div>

                    {/*Headline*/}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Building scalable <span className="text-primary glow-text">web applications</span>
                            <br/>
                            with modern
                            <br/>
                            <span className="font-serif italic font-normal text-white">
                                technologies.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            I'm Amol Shejul, a Java Full Stack Developer specializing in
                            Spring Boot, React.js, REST APIs, and MySQL. I build secure,
                            responsive, and scalable web applications with modern technologies.
                        </p>
                    </div>
                    {/*CTAs Call To Action*/}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Hire Me <ArrowRight className="w-5 h-5"/>
                        </Button>
                        <AnimatedBorderButton>
                            <Download className="w-5 h-5" />
                            Download Resume
                        </AnimatedBorderButton>

                        {/*Social Links*/}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Connect with me: </span>
                            {[
                                {icon: FaGithub, href: "https://github.com/AmolShejul"},
                                {icon: FaLinkedin, href: "#"}
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    {<social.icon className="w-5 h-5"/>}</a>
                            ))}                            
                        </div>                                                         
                        
                    </div>
                </div>
                {/* Right Column - Profile Image*/}
                <div className="relatice animate -fade-in animation-delay-300">
                    <div className="relative max-w-md mx-auto">
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img
                            src="/profile-photo.jpg"
                            alt="Pedro Machado"
                            className="w-full aspect-[4/5] object-cover rounded-2xl"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                    <span className="text-sm font-medium">Available for Internship & Full-Time Roles.</span>
                                </div>
                            </div>
                            {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">2+</div>
                                <div className="text-xs text-muted-foreground">Internships.</div>
                            </div>
                        </div>                         
                    </div>
                </div>
            </div>

            {/*Skills Section */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work With</p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="flex-shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-froeground transition-colors">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 
        animate-fade-in animation-delay-800"
        >
            <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>                
    </section>
    );
}
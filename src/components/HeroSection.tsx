
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/30 via-violet-500/40 to-indigo-500/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-violet-500/35 via-blue-500/45 to-cyan-500/35 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-500/25 via-purple-500/35 to-violet-500/25 rounded-full filter blur-3xl animate-blob"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-1000"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-violet-400 rounded-full animate-bounce animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-indigo-400 rounded-full animate-bounce animation-delay-3000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Profile Image with enhanced glow */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">AD</span>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/40 to-violet-500/40 rounded-full filter blur-xl -z-10 animate-pulse"></div>
            </div>
          </div>

          {/* Name in single line */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-slide-in-right">
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Abhishek Dwivedi
            </span>
          </h1>

          <h2 className="text-2xl lg:text-3xl text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Full-Stack Developer & CS Student
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
            Building scalable web applications with modern technologies. 
            Passionate about AI, automation, and creating solutions that make a difference.
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-400 hover:to-violet-400 text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl neon-glow"
              asChild
            >
              <a href="#contact" className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-purple-400/50 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#resume" className="flex items-center gap-3">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '800ms' }}>
            {[
              { icon: Github, href: "https://github.com/abhishekdwivedi2022", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" }
            ].map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-full hover:from-purple-500/20 hover:to-violet-500/20 transition-all duration-300 hover:scale-110 border border-slate-600/50 hover:border-purple-400/50 neon-glow"
                  aria-label={social.label}
                >
                  <IconComponent className="w-6 h-6 text-slate-400 hover:text-purple-400 transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <a href="#about" className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors">
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

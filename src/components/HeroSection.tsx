
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Code, Trophy } from "lucide-react";

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Full-Stack Developer", "Problem Solver", "Tech Explorer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/abhishekdwivedi2022",
      icon: Github,
      className: "bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-400/30 hover:border-cyan-400/60"
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: Linkedin,
      className: "bg-slate-800 hover:bg-slate-700 text-blue-400 border border-blue-400/30 hover:border-blue-400/60"
    },
    {
      name: "Resume",
      url: "#resume",
      icon: Download,
      className: "bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/rkabhishekdwivedi/",
      icon: Code,
      className: "bg-slate-800 hover:bg-slate-700 text-orange-400 border border-orange-400/30 hover:border-orange-400/60"
    },
    {
      name: "GFG",
      url: "https://www.geeksforgeeks.org/user/r_abhishek/",
      icon: Trophy,
      className: "bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-400/30 hover:border-emerald-400/60"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Blobs */}
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-20 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Floating Particles */}
        <div className="particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-start animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 p-1 animate-float neon-glow">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl font-bold gradient-text">
                  AD
                </div>
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
              <div className="absolute -inset-8 rounded-full border border-teal-400/20 animate-pulse"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left animate-slide-in-right">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Abhishek
              <span className="block gradient-text neon-text">
                Dwivedi
              </span>
            </h1>
            
            <div className="text-2xl lg:text-3xl text-slate-300 mb-4 font-medium h-12">
              <span className="gradient-text-purple typing-animation">
                {roles[currentRole]}
              </span>
            </div>
            
            <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
              Building fast, scalable, and human-centered web solutions with cutting-edge technologies. 
              Passionate about creating seamless user experiences and robust systems.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <Button
                    key={link.name}
                    asChild
                    className={`${link.className} hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover-glow btn-pulse`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <IconComponent size={18} />
                      {link.name}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

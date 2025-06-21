
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
      className: "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-purple-400 border-2 border-purple-400/40 hover:border-purple-400/80 shadow-lg hover:shadow-purple-400/20"
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: Linkedin,
      className: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white border-2 border-blue-400/40 hover:border-blue-400/80 shadow-lg hover:shadow-blue-400/20"
    },
    {
      name: "Resume",
      url: "#resume",
      icon: Download,
      className: "bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-400 hover:to-violet-500 text-white border-2 border-purple-400/40 hover:border-purple-400/80 shadow-lg hover:shadow-purple-400/20"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/rkabhishekdwivedi/",
      icon: Code,
      className: "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white border-2 border-orange-400/40 hover:border-orange-400/80 shadow-lg hover:shadow-orange-400/20"
    },
    {
      name: "GFG",
      url: "https://www.geeksforgeeks.org/user/r_abhishek/",
      icon: Trophy,
      className: "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white border-2 border-green-400/40 hover:border-green-400/80 shadow-lg hover:shadow-green-400/20"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 mt-4">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multiple Gradient Blobs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-violet-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-1000"></div>
        
        {/* Enhanced Floating Particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              background: `radial-gradient(circle, ${
                i % 4 === 0 ? 'rgba(147, 51, 234, 0.8)' :
                i % 4 === 1 ? 'rgba(139, 92, 246, 0.8)' :
                i % 4 === 2 ? 'rgba(59, 130, 246, 0.8)' :
                'rgba(168, 85, 247, 0.8)'
              } 0%, transparent 70%)`
            }}></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-start animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-400 via-violet-500 to-indigo-400 p-1 animate-float neon-glow shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-5xl font-bold gradient-text border-2 border-purple-400/20">
                  AD
                </div>
              </div>
              {/* Enhanced decorative rings */}
              <div className="absolute -inset-6 rounded-full border-2 border-purple-400/40 animate-ping"></div>
              <div className="absolute -inset-10 rounded-full border border-violet-400/30 animate-pulse"></div>
              <div className="absolute -inset-14 rounded-full border border-indigo-400/20 animate-pulse animation-delay-1000"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left animate-slide-in-right">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Abhishek
              <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent neon-text">
                Dwivedi
              </span>
            </h1>
            
            <div className="text-2xl lg:text-3xl text-slate-300 mb-4 font-medium h-12">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent typing-animation">
                {roles[currentRole]}
              </span>
            </div>
            
            <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
              Building fast, scalable, and human-centered web solutions with cutting-edge technologies. 
              Passionate about creating seamless user experiences and robust systems.
            </p>

            {/* Enhanced Social Links */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <Button
                    key={link.name}
                    asChild
                    className={`${link.className} hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 btn-pulse font-semibold px-6 py-3`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <IconComponent size={20} />
                      {link.name}
                    </a>
                  </Button>
                );
              })}
            </div>

            {/* Location Info */}
            <div className="mt-8 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl border border-purple-400/20 backdrop-blur-sm">
              <p className="text-slate-300 text-sm">
                📍 <span className="text-purple-400 font-semibold">Mathura, Uttar Pradesh</span> • 
                📧 <span className="text-violet-400 font-semibold">abhishek.dwivedi2022@glbajajgroup.org</span> • 
                📱 <span className="text-indigo-400 font-semibold">+91 9026019016</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

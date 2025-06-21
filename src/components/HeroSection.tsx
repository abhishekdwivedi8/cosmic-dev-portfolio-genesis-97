
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Code, Trophy } from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/abhishekdwivedi2022",
      icon: Github,
      className: "bg-gray-900 hover:bg-gray-800 text-white"
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: Linkedin,
      className: "bg-blue-600 hover:bg-blue-700 text-white"
    },
    {
      name: "Resume",
      url: "#",
      icon: Download,
      className: "bg-green-600 hover:bg-green-700 text-white"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/rkabhishekdwivedi/",
      icon: Code,
      className: "bg-orange-500 hover:bg-orange-600 text-white"
    },
    {
      name: "GFG",
      url: "https://www.geeksforgeeks.org/user/r_abhishek/",
      icon: Trophy,
      className: "bg-emerald-600 hover:bg-emerald-700 text-white"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-start animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-8xl font-bold text-gray-600">
                  AD
                </div>
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-purple-400/30 animate-ping"></div>
              <div className="absolute -inset-8 rounded-full border border-cyan-400/20"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left animate-slide-in-right">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Abhishek
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Dwivedi
              </span>
            </h1>
            
            <div className="text-xl lg:text-2xl text-gray-300 mb-4 font-medium">
              Full-Stack Developer | B.Tech CSE 2026
            </div>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Building fast, scalable, and human-centered web solutions with modern technologies. 
              Passionate about creating seamless user experiences and robust backend systems.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <Button
                    key={link.name}
                    asChild
                    className={`${link.className} hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
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

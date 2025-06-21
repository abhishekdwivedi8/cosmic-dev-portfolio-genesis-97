
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";

const SkillsSection = () => {
  const allSkills = [
    // Frontend
    "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Tailwind CSS",
    // Backend
    "Node.js", "Express.js",
    // Databases
    "MongoDB", "MySQL",
    // Programming Languages
    "Java", "Python", "C",
    // Tools & Concepts
    "Git", "REST APIs", "OOP", "SDLC", "AI/ML"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1f1147] via-[#2d1a65] to-[#351b80] relative overflow-hidden" id="skills">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#00f0b5]/10 via-[#a66cff]/15 to-[#64ffda]/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-[#a66cff]/15 via-[#00f0b5]/20 to-[#64ffda]/15 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto leading-relaxed">
            Mastering modern technologies to build scalable and innovative solutions.
          </p>
        </div>

        {/* Single Skills Card */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
          <Card className="group glass-card hover:neon-glow-purple transition-all duration-500 hover:scale-[1.02] border-2 border-[#a66cff]/30 hover:border-[#00f0b5]/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-r from-[#00f0b5] to-[#a66cff] rounded-xl shadow-lg group-hover:rotate-12 transition-transform duration-500">
                  <Code className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                  Technology Stack
                </h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {allSkills.map((skill, index) => (
                  <div
                    key={skill}
                    className="group/skill relative animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Badge className="w-full p-3 bg-gradient-to-r from-[#2d1a65]/80 to-[#351b80]/80 text-[#e0e0e0] hover:from-[#00f0b5]/20 hover:to-[#a66cff]/20 hover:text-[#00f0b5] hover:border-[#00f0b5]/50 transition-all duration-300 border border-[#a66cff]/30 group-hover/skill:scale-110 group-hover/skill:shadow-lg group-hover/skill:shadow-[#00f0b5]/25 cursor-pointer">
                      <span className="font-medium text-center w-full">{skill}</span>
                    </Badge>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00f0b5]/20 to-[#a66cff]/20 opacity-0 group-hover/skill:opacity-100 rounded-full transition-opacity duration-300 blur-xl pointer-events-none"></div>
                  </div>
                ))}
              </div>
              
              {/* Bottom accent line */}
              <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-[#a66cff]/50 to-transparent rounded-full">
                <div className="h-full bg-gradient-to-r from-[#00f0b5] to-[#a66cff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

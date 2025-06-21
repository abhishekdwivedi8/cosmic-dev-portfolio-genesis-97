
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Trophy, Users, Target, Lightbulb, Award, Brain } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    { icon: Code, text: "200+ DSA Problems Solved", color: "text-[#00f0b5]", bg: "from-[#00f0b5]/10 to-[#00f0b5]/5" },
    { icon: Trophy, text: "2 Hackathon Participations", color: "text-[#a66cff]", bg: "from-[#a66cff]/10 to-[#a66cff]/5" },
    { icon: Users, text: "Agile Team Leadership", color: "text-[#64ffda]", bg: "from-[#64ffda]/10 to-[#64ffda]/5" },
    { icon: GraduationCap, text: "CGPA: 7.72/10", color: "text-[#a66cff]", bg: "from-[#a66cff]/10 to-[#a66cff]/5" },
    { icon: Award, text: "Full-Stack Development", color: "text-[#00f0b5]", bg: "from-[#00f0b5]/10 to-[#00f0b5]/5" },
    { icon: Brain, text: "AI/ML Enthusiast", color: "text-[#64ffda]", bg: "from-[#64ffda]/10 to-[#64ffda]/5" }
  ];

  const interests = [
    { icon: Target, text: "AI & Automation", color: "text-[#64ffda]", bg: "from-[#64ffda]/20 to-[#00f0b5]/20" },
    { icon: Lightbulb, text: "Future-Forward Development", color: "text-[#a66cff]", bg: "from-[#a66cff]/20 to-[#64ffda]/20" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#2d1a65] to-[#351b80] relative overflow-hidden" id="about">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-[#a66cff]/15 to-[#64ffda]/15 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-[#00f0b5]/15 to-[#a66cff]/15 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-gradient-to-r from-[#64ffda]/10 to-[#00f0b5]/10 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Me Content */}
          <div className="space-y-6 animate-fade-in">
            <Card className="glass-card hover-glow transition-all duration-500 border-2 border-[#a66cff]/30 hover:border-[#00f0b5]/50">
              <CardContent className="p-8">
                <div className="space-y-6 text-[#e0e0e0] leading-relaxed">
                  <p className="text-lg">
                    A <span className="text-[#00f0b5] font-semibold">relentlessly curious</span> and <span className="text-[#a66cff] font-semibold">impact-driven</span> B.Tech Computer Science student with hands-on experience in full-stack development, system design, and software automation.
                  </p>
                  <p className="text-lg">
                    Skilled in solving technical problems using <span className="text-[#64ffda] font-semibold">scalable, maintainable code</span>, focused on building practical solutions influenced by AI, automation, and connectivity.
                  </p>
                  <p className="text-lg">
                    Seeking opportunities that <span className="text-[#00f0b5] font-semibold">challenge convention</span>, foster innovation, and align with a future where <span className="gradient-text font-semibold">code meets purpose</span>.
                  </p>
                  <p className="text-lg">
                    Currently pursuing <span className="text-[#a66cff] font-semibold">B.Tech in Computer Science and Engineering</span> at G.L. Bajaj Group of Institutions, graduating in <span className="text-[#64ffda] font-semibold">2026</span> with a CGPA of <span className="text-[#00f0b5] font-semibold">7.72/10</span>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Education & Stats */}
          <div className="space-y-6">
            {/* Education Card */}
            <Card className="glass-card hover-glow transition-all duration-500 animate-fade-in border-2 border-[#a66cff]/30 hover:border-[#00f0b5]/50 overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-[#00f0b5] via-[#64ffda] to-[#a66cff]"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-[#a66cff] to-[#00f0b5] rounded-xl shadow-lg">
                    <GraduationCap className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">B.Tech Computer Science Engineering</h4>
                  <p className="text-[#e0e0e0] font-medium">G.L. Bajaj Group of Institutions, Mathura</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className="bg-gradient-to-r from-[#a66cff]/30 to-[#64ffda]/30 text-[#a66cff] border border-[#a66cff]/40 px-3 py-1">
                      Batch: 2022 - 2026
                    </Badge>
                    <Badge className="bg-gradient-to-r from-[#00f0b5]/30 to-[#64ffda]/30 text-[#00f0b5] border border-[#00f0b5]/40 px-3 py-1">
                      CGPA: 7.72/10
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements Grid */}
            <Card className="glass-card hover-glow transition-all duration-500 animate-fade-in border border-[#a66cff]/30 hover:border-[#64ffda]/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#00f0b5] to-[#64ffda] rounded-full"></div>
                  Highlights & Achievements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={index} className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${achievement.bg} hover:scale-105 transition-all duration-300 border border-[#a66cff]/20 hover:border-[#00f0b5]/30`}>
                        <IconComponent className={`w-6 h-6 ${achievement.color} flex-shrink-0`} />
                        <span className="text-sm text-[#e0e0e0] font-medium">{achievement.text}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="glass-card hover-glow transition-all duration-500 animate-fade-in border border-[#a66cff]/30 hover:border-[#00f0b5]/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#64ffda] to-[#a66cff] rounded-full"></div>
                  Interests & Passions
                </h3>
                <div className="space-y-3">
                  {interests.map((interest, index) => {
                    const IconComponent = interest.icon;
                    return (
                      <div key={index} className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${interest.bg} hover:scale-105 transition-all duration-300 border border-[#a66cff]/20 hover:border-[#64ffda]/30`}>
                        <IconComponent className={`w-6 h-6 ${interest.color} flex-shrink-0`} />
                        <span className="text-sm text-[#e0e0e0] font-medium">{interest.text}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

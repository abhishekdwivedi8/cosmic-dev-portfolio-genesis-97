
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Trophy, Users, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { category: "Languages", items: ["Java", "C", "Python", "JavaScript", "TypeScript"] },
    { category: "Tools", items: ["Git", "VS Code", "GitHub Copilot", "MongoDB Compass"] }
  ];

  const achievements = [
    { icon: Code, text: "200+ DSA Problems Solved", color: "text-cyan-400" },
    { icon: Trophy, text: "Hackathon Participant", color: "text-yellow-400" },
    { icon: Users, text: "Team Leadership Experience", color: "text-emerald-400" },
    { icon: GraduationCap, text: "7.72 CGPA", color: "text-purple-400" }
  ];

  const interests = [
    { icon: Target, text: "AI & Automation", color: "text-pink-400" },
    { icon: Lightbulb, text: "Future-Forward Development", color: "text-orange-400" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            A relentlessly curious and impact-driven B.Tech Computer Science student with hands-on experience 
            in full-stack development, system design, and software automation. Skilled in solving technical problems 
            using scalable, maintainable code. Passionate about AI, automation, and future-forward development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education Timeline */}
          <Card className="glass-card hover-glow transition-all duration-300 animate-fade-in border-0">
            <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-purple-400/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">B.Tech Computer Science Engineering</h4>
                    <p className="text-slate-400">G.L. Bajaj Group of Institutions (AKTU)</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-400/30">2022 - 2026</Badge>
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-400/30">CGPA: 7.72/10</Badge>
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-400/30">Currently at GL Bajaj</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Achievements */}
          <div className="space-y-8">
            {skills.map((skillGroup, index) => (
              <Card key={skillGroup.category} className="glass-card hover-glow transition-all duration-300 animate-fade-in border-0" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} className="bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 transition-colors border border-slate-600/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Achievements */}
            <Card className="glass-card hover-glow transition-all duration-300 animate-fade-in border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
                        <IconComponent className={`w-5 h-5 ${achievement.color}`} />
                        <span className="text-sm text-slate-300">{achievement.text}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="glass-card hover-glow transition-all duration-300 animate-fade-in border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Interests</h3>
                <div className="space-y-3">
                  {interests.map((interest, index) => {
                    const IconComponent = interest.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
                        <IconComponent className={`w-5 h-5 ${interest.color}`} />
                        <span className="text-sm text-slate-300">{interest.text}</span>
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


import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Code, Trophy, Users, Target, Lightbulb, Award, Brain, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const AboutSection = () => {
  const [isEducationExpanded, setIsEducationExpanded] = useState(false);

  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js"] },
    { category: "Databases", items: ["MongoDB", "MySQL"] },
    { category: "Programming Languages", items: ["Java", "Python", "C"] },
    { category: "Tools & Others", items: ["Git", "GitHub", "REST APIs", "OOP", "SDLC", "AI/ML"] }
  ];

  const achievements = [
    { icon: Code, text: "200+ DSA Problems Solved", color: "text-purple-400", bg: "from-purple-500/10 to-purple-600/10" },
    { icon: Trophy, text: "2 Hackathon Participations", color: "text-violet-400", bg: "from-violet-500/10 to-violet-600/10" },
    { icon: Users, text: "Agile Team Leadership", color: "text-indigo-400", bg: "from-indigo-500/10 to-indigo-600/10" },
    { icon: GraduationCap, text: "CGPA: 7.72/10", color: "text-blue-400", bg: "from-blue-500/10 to-blue-600/10" },
    { icon: Award, text: "Full-Stack Development", color: "text-cyan-400", bg: "from-cyan-500/10 to-cyan-600/10" },
    { icon: Brain, text: "AI/ML Enthusiast", color: "text-teal-400", bg: "from-teal-500/10 to-teal-600/10" }
  ];

  const interests = [
    { icon: Target, text: "AI & Automation", color: "text-purple-400", bg: "from-purple-500/20 to-violet-500/20" },
    { icon: Lightbulb, text: "Future-Forward Development", color: "text-violet-400", bg: "from-violet-500/20 to-indigo-500/20" }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="about">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-violet-500/15 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full filter blur-3xl animate-blob animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              A relentlessly curious and impact-driven B.Tech Computer Science student with hands-on experience 
              in full-stack development, system design, and software automation.
            </p>
            <p>
              Skilled in solving technical problems using scalable, maintainable code, focused on building 
              practical solutions influenced by AI, automation, and connectivity.
            </p>
            <p>
              Seeking opportunities that challenge convention, foster innovation, and align with a future 
              where code meets purpose.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Enhanced Education Timeline */}
          <Card className="glass-card hover-glow transition-all duration-500 animate-fade-in border-2 border-transparent hover:border-purple-400/50 overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500"></div>
            <CardContent className="p-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-gradient-to-b from-purple-400 to-violet-400">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full animate-pulse shadow-lg"></div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-white">B.Tech Computer Science Engineering</h4>
                    <p className="text-slate-400 font-medium">G.L. Bajaj Group of Institutions, Mathura</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className="bg-gradient-to-r from-purple-500/30 to-violet-500/30 text-purple-300 border border-purple-400/40 px-3 py-1">
                        Batch: 2022 - 2026
                      </Badge>
                      <Badge className="bg-gradient-to-r from-violet-500/30 to-indigo-500/30 text-violet-300 border border-violet-400/40 px-3 py-1">
                        CGPA: 7.72/10
                      </Badge>
                      <Badge className="bg-gradient-to-r from-indigo-500/30 to-blue-500/30 text-indigo-300 border border-indigo-400/40 px-3 py-1">
                        Current Student
                      </Badge>
                    </div>
                    <div className="mt-4 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg border border-purple-400/20">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Currently pursuing B.Tech in Computer Science and Engineering at G.L. Bajaj Group of Institutions, 
                        graduating in 2026 with a CGPA of 7.72/10. Specializing in full-stack development, 
                        data structures & algorithms, and emerging technologies like AI/ML.
                      </p>
                    </div>

                    {/* Expandable Section */}
                    <Button
                      onClick={() => setIsEducationExpanded(!isEducationExpanded)}
                      variant="ghost"
                      className="w-full mt-4 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                    >
                      {isEducationExpanded ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-2" />
                          Hide Previous Education
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-2" />
                          Show Previous Education
                        </>
                      )}
                    </Button>

                    {isEducationExpanded && (
                      <div className="mt-6 space-y-6 animate-fade-in">
                        {/* 12th Class */}
                        <div className="relative pl-8 border-l-2 border-gradient-to-b from-violet-400 to-indigo-400">
                          <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full shadow-lg"></div>
                          <div className="space-y-2">
                            <h5 className="text-lg font-semibold text-white">Senior Secondary (XII)</h5>
                            <p className="text-slate-400">Science Stream (PCM with Computer Science)</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge className="bg-gradient-to-r from-violet-500/30 to-indigo-500/30 text-violet-300 border border-violet-400/40">
                                2021-2022
                              </Badge>
                              <Badge className="bg-gradient-to-r from-indigo-500/30 to-blue-500/30 text-indigo-300 border border-indigo-400/40">
                                CBSE Board
                              </Badge>
                            </div>
                          </div>
                        </div>

                        {/* 10th Class */}
                        <div className="relative pl-8 border-l-2 border-gradient-to-b from-indigo-400 to-blue-400">
                          <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full shadow-lg"></div>
                          <div className="space-y-2">
                            <h5 className="text-lg font-semibold text-white">Secondary (X)</h5>
                            <p className="text-slate-400">All Subjects</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge className="bg-gradient-to-r from-indigo-500/30 to-blue-500/30 text-indigo-300 border border-indigo-400/40">
                                2019-2020
                              </Badge>
                              <Badge className="bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-blue-300 border border-blue-400/40">
                                CBSE Board
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Skills & Achievements */}
          <div className="space-y-6">
            {skills.map((skillGroup, index) => (
              <Card key={skillGroup.category} className="glass-card hover-glow transition-all duration-500 animate-fade-in border border-slate-700/50 hover:border-purple-400/50" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full"></div>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} className="bg-gradient-to-r from-slate-700/80 to-slate-600/80 text-slate-300 hover:from-slate-600/80 hover:to-slate-500/80 transition-all duration-300 border border-slate-600/50 hover:border-purple-400/50 px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Enhanced Achievements */}
            <Card className="glass-card hover-glow transition-all duration-500 animate-fade-in border border-slate-700/50 hover:border-violet-400/50">
              <CardContent className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full"></div>
                  Highlights & Achievements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={index} className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${achievement.bg} hover:scale-105 transition-all duration-300 border border-slate-700/30 hover:border-purple-400/30`}>
                        <IconComponent className={`w-6 h-6 ${achievement.color} flex-shrink-0`} />
                        <span className="text-sm text-slate-300 font-medium">{achievement.text}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Interests */}
            <Card className="glass-card hover-glow transition-all duration-500 animate-fade-in border border-slate-700/50 hover:border-indigo-400/50">
              <CardContent className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full"></div>
                  Interests & Passions
                </h3>
                <div className="space-y-3">
                  {interests.map((interest, index) => {
                    const IconComponent = interest.icon;
                    return (
                      <div key={index} className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${interest.bg} hover:scale-105 transition-all duration-300 border border-slate-700/30 hover:border-indigo-400/30`}>
                        <IconComponent className={`w-6 h-6 ${interest.color} flex-shrink-0`} />
                        <span className="text-sm text-slate-300 font-medium">{interest.text}</span>
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

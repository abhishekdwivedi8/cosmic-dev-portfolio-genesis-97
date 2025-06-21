
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Trophy, Users } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { category: "Languages", items: ["Java", "C", "Python", "JavaScript", "TypeScript"] },
    { category: "Tools", items: ["Git", "VS Code", "GitHub Copilot", "MongoDB Compass"] }
  ];

  const achievements = [
    { icon: Code, text: "200+ DSA Problems Solved", color: "text-blue-500" },
    { icon: Trophy, text: "Hackathon Participant", color: "text-yellow-500" },
    { icon: Users, text: "Team Leadership Experience", color: "text-green-500" },
    { icon: GraduationCap, text: "7.72 CGPA", color: "text-purple-500" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Science student with a strong foundation in full-stack development. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education Timeline */}
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in border-0 bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-full">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-purple-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-gray-900">B.Tech Computer Science Engineering</h4>
                    <p className="text-gray-600">G.L. Bajaj Group of Institutions (AKTU)</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">2022 - 2026</Badge>
                      <Badge variant="outline" className="text-green-700 border-green-300">CGPA: 7.72/10</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Achievements */}
          <div className="space-y-8">
            {skills.map((skillGroup, index) => (
              <Card key={skillGroup.category} className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in border-0 bg-gradient-to-br from-white to-gray-50" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Achievements */}
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in border-0 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <IconComponent className={`w-5 h-5 ${achievement.color}`} />
                        <span className="text-sm text-gray-700">{achievement.text}</span>
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

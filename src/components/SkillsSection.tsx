
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Settings } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "React", level: 85 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-green-500",
      bgColor: "bg-green-100",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 85 },
        { name: "Java", level: 75 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-purple-500",
      bgColor: "bg-purple-100",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Database Design", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      icon: Settings,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Agile/Scrum", level: 70 },
        { name: "Problem Solving", level: 85 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Skills & <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-0 bg-gradient-to-br from-white to-gray-50"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 ${category.bgColor} rounded-full`}>
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                          style={{
                            animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Python", "C", "AJAX", "DOM Manipulation", "GitHub Copilot", 
              "MongoDB Compass", "Version Control", "Agile Development", 
              "Team Collaboration", "Problem Solving", "Algorithm Design"
            ].map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors px-3 py-1 text-sm"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Briefcase, Zap, Trophy, Users } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "Internshala",
      period: "May 2023 - July 2023",
      location: "Remote",
      type: "Internship",
      icon: "💻",
      achievements: [
        "Built a full-stack PG Finder App using React.js, Node.js, MySQL",
        "Used AJAX for dynamic filtering and seamless UX",
        "Worked in a 3-member Agile team using GitHub for version control",
        "Reduced user search time by 30% and improved responsiveness"
      ],
      technologies: ["React.js", "Node.js", "MySQL", "AJAX", "Git", "GitHub", "Agile"],
      gradient: "from-purple-500 to-violet-500"
    }
  ];

  const additionalExperience = [
    {
      title: "Hackathon Participation",
      description: "Built 2 full-stack projects in 48-hour constraints",
      icon: "🚀",
      color: "from-violet-500 to-indigo-500",
      achievements: ["2 Full-Stack Projects", "48-Hour Development", "Team Collaboration"]
    },
    {
      title: "Problem Solving Expertise",
      description: "200+ DSA problems solved across platforms",
      icon: "🧠",
      color: "from-indigo-500 to-blue-500",
      achievements: ["200+ Problems Solved", "Algorithm Mastery", "Coding Competitions"]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="experience">
      {/* Modern Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/15 via-violet-500/25 to-indigo-500/15 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-violet-500/20 via-blue-500/30 to-purple-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-3000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Building experience through hands-on development and continuous learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-violet-500 to-indigo-500 rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full border-4 border-slate-900 shadow-lg shadow-purple-500/50"></div>
                
                <Card className="ml-20 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="text-4xl animate-bounce">{exp.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                            <h4 className="text-xl text-purple-400 font-semibold">{exp.company}</h4>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-slate-300">
                              <Calendar className="w-4 h-4 text-purple-400" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-300">
                              <MapPin className="w-4 h-4 text-violet-400" />
                              <span>{exp.location}</span>
                            </div>
                            <Badge className={`w-fit bg-gradient-to-r ${exp.gradient} text-white`}>
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-purple-400" />
                        Key Achievements
                      </h5>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div 
                            key={achievementIndex} 
                            className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors animate-fade-in"
                            style={{ animationDelay: `${(achievementIndex + 1) * 200}ms` }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Building className="w-5 h-5 text-violet-400" />
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} className="bg-slate-700/80 text-slate-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-violet-500/20 hover:text-purple-300 transition-all duration-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Additional Experience Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {additionalExperience.map((item, index) => (
              <Card 
                key={index}
                className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  
                  <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2">
                    {item.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center gap-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`}></div>
                        <span className="text-sm text-slate-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`mt-4 h-1 bg-slate-700 rounded-full overflow-hidden`}>
                    <div className={`h-full bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;


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
      gradient: "from-[#00f0b5] to-[#a66cff]"
    }
  ];

  const additionalExperience = [
    {
      title: "Hackathon Participation",
      description: "Built 2 full-stack projects in 48-hour constraints",
      icon: "🚀",
      color: "from-[#a66cff] to-[#64ffda]",
      achievements: ["2 Full-Stack Projects", "48-Hour Development", "Team Collaboration"]
    },
    {
      title: "Problem Solving Expertise",
      description: "200+ DSA problems solved across platforms",
      icon: "🧠",
      color: "from-[#64ffda] to-[#00f0b5]",
      achievements: ["200+ Problems Solved", "Algorithm Mastery", "Coding Competitions"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#351b80] via-[#2d1a65] to-[#1f1147] relative overflow-hidden" id="experience">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-[#00f0b5]/15 via-[#a66cff]/25 to-[#64ffda]/15 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-[#a66cff]/20 via-[#64ffda]/30 to-[#00f0b5]/20 rounded-full filter blur-3xl animate-pulse animation-delay-3000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto leading-relaxed">
            Building experience through hands-on development and continuous learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00f0b5] via-[#a66cff] to-[#64ffda] rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-[#00f0b5] to-[#a66cff] rounded-full border-4 border-[#1f1147] shadow-lg neon-glow"></div>
                
                <Card className="ml-20 glass-card hover:neon-glow-purple transition-all duration-500 hover:scale-[1.02] border-2 border-[#a66cff]/30 hover:border-[#00f0b5]/50">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="text-4xl animate-bounce">{exp.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                            <h4 className="text-xl text-[#00f0b5] font-semibold">{exp.company}</h4>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-[#e0e0e0]">
                              <Calendar className="w-4 h-4 text-[#00f0b5]" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#e0e0e0]">
                              <MapPin className="w-4 h-4 text-[#a66cff]" />
                              <span>{exp.location}</span>
                            </div>
                            <Badge className={`w-fit bg-gradient-to-r ${exp.gradient} text-black font-semibold`}>
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-[#00f0b5]" />
                        Key Achievements
                      </h5>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div 
                            key={achievementIndex} 
                            className="flex items-start gap-3 p-3 bg-[#2d1a65]/50 rounded-lg hover:bg-[#351b80]/50 transition-colors animate-fade-in"
                            style={{ animationDelay: `${(achievementIndex + 1) * 200}ms` }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-[#00f0b5] to-[#a66cff] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-[#e0e0e0]">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Building className="w-5 h-5 text-[#a66cff]" />
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} className="bg-[#2d1a65]/80 text-[#e0e0e0] hover:bg-gradient-to-r hover:from-[#00f0b5]/20 hover:to-[#a66cff]/20 hover:text-[#00f0b5] transition-all duration-300 border border-[#a66cff]/30">
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
                className="group glass-card hover:neon-glow transition-all duration-500 hover:scale-105 border-2 border-[#a66cff]/30 hover:border-[#00f0b5]/50 animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                      {item.title}
                    </h4>
                  </div>
                  
                  <p className="text-[#e0e0e0] mb-4 group-hover:text-white transition-colors">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2">
                    {item.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center gap-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`}></div>
                        <span className="text-sm text-[#e0e0e0]">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`mt-4 h-1 bg-[#2d1a65] rounded-full overflow-hidden`}>
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

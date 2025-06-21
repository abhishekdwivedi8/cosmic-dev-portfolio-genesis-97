
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Trophy } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "Internshala",
      period: "May 2023 - July 2023",
      location: "Remote",
      type: "Internship",
      description: "Developed and maintained web applications using modern technologies. Built the PG Finder App using React, Node.js, and MySQL with advanced search and filtering capabilities.",
      achievements: [
        "Built full-stack PG Finder application from scratch",
        "Implemented real-time search and filtering using AJAX",
        "Collaborated with cross-functional teams using Agile methodology",
        "Utilized Git/GitHub for version control and team collaboration",
        "Gained hands-on experience with React ecosystem and database management"
      ],
      technologies: ["React", "Node.js", "MySQL", "AJAX", "Git", "GitHub"],
      icon: Building,
      gradient: "from-blue-500 to-purple-600"
    }
  ];

  const additionalExperience = [
    {
      title: "Hackathon Participation",
      description: "Built 2 full-stack projects in 48 hours using Agile development practices",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-100"
    },
    {
      title: "Open Source Contributions",
      description: "Active contributor to various open-source projects on GitHub",
      icon: Building,
      color: "text-green-500",
      bgColor: "bg-green-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My journey in web development through internships, projects, and continuous learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Experience */}
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card 
                key={index}
                className="mb-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in border-0 overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${exp.gradient}`}></div>
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className={`p-4 bg-gradient-to-br ${exp.gradient} rounded-full flex-shrink-0`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                          <h4 className="text-xl text-gray-700 font-semibold">{exp.company}</h4>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                          <Badge variant="outline" className="w-fit">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Additional Experience */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {additionalExperience.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-0"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${item.bgColor} rounded-full flex-shrink-0`}>
                        <IconComponent className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

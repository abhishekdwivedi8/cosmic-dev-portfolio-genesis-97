
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Trophy, Code, Users } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "Internshala",
      period: "May 2023 - July 2023",
      location: "Remote",
      type: "Internship",
      description: "Built a full-stack PG Finder App using React.js, Node.js, MySQL with advanced search and filtering capabilities. Used AJAX for dynamic filtering and seamless UX. Worked in a 3-member Agile team using GitHub for version control. Reduced user search time by 30% and improved responsiveness.",
      achievements: [
        "Built full-stack PG Finder application from scratch using React.js, Node.js, MySQL",
        "Implemented real-time search and filtering using AJAX for seamless user experience",
        "Collaborated with 3-member Agile team using GitHub for version control and project management",
        "Reduced user search time by 30% and significantly improved application responsiveness",
        "Gained hands-on experience with React ecosystem, database management, and API integration",
        "Applied SDLC principles and Agile methodology in real-world development environment"
      ],
      technologies: ["React.js", "Node.js", "MySQL", "AJAX", "Git", "GitHub", "Agile", "SDLC"],
      icon: Building,
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/10 to-purple-600/10"
    }
  ];

  const additionalExperience = [
    {
      title: "Hackathon Participation",
      description: "Participated in 2 full-stack hackathons, building complete applications within 48-hour constraints using Agile development practices",
      details: "Built innovative solutions under time pressure, collaborated with diverse teams, and implemented full-stack features rapidly",
      icon: Trophy,
      color: "text-yellow-400",
      bgColor: "from-yellow-500/20 to-orange-500/20",
      achievements: ["2 Full-Stack Projects", "48-Hour Development", "Team Collaboration", "Rapid Prototyping"]
    },
    {
      title: "Problem Solving & DSA",
      description: "Consistent problem solver with 200+ DSA problems solved across LeetCode and GeeksforGeeks platforms",
      details: "Strong focus on algorithmic thinking, data structures mastery, and real-world application of problem-solving skills",
      icon: Code,
      color: "text-emerald-400",
      bgColor: "from-emerald-500/20 to-teal-500/20",
      achievements: ["200+ Problems Solved", "Algorithm Mastery", "Coding Competitions", "Technical Interview Prep"]
    },
    {
      title: "Team Leadership & Collaboration",
      description: "Experience in leading development teams and collaborating in Agile environments with strong communication skills",
      details: "Led cross-functional teams, mentored junior developers, and facilitated effective project delivery",
      icon: Users,
      color: "text-purple-400",
      bgColor: "from-purple-500/20 to-pink-500/20",
      achievements: ["Team Leadership", "Agile Methodology", "Cross-functional Collaboration", "Project Management"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="experience">
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My journey in web development through internships, projects, and continuous learning in the tech industry.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Enhanced Main Experience */}
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card 
                key={index}
                className="mb-12 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in border-0 overflow-hidden hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-3 bg-gradient-to-r ${exp.gradient}`}></div>
                <CardContent className="p-10 bg-gradient-to-br from-white to-gray-50">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className={`p-6 bg-gradient-to-br ${exp.gradient} rounded-2xl flex-shrink-0 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-3">{exp.role}</h3>
                          <h4 className="text-2xl text-gray-700 font-semibold">{exp.company}</h4>
                        </div>
                        
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-3 text-gray-600">
                            <Calendar className="w-5 h-5 text-blue-500" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <MapPin className="w-5 h-5 text-emerald-500" />
                            <span className="font-medium">{exp.location}</span>
                          </div>
                          <Badge className="w-fit bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                        {exp.description}
                      </p>
                      
                      <div className="mb-8">
                        <h5 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements & Impact</h5>
                        <div className="grid gap-3">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
                              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 leading-relaxed">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-xl font-semibold text-gray-900 mb-4">Technologies & Skills Used</h5>
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-purple-100 hover:to-cyan-100 hover:text-purple-800 transition-all duration-300 px-4 py-2 text-sm font-medium">
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

          {/* Enhanced Additional Experience */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {additionalExperience.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-0 overflow-hidden group"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${item.bgColor} mb-6`}></div>
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 bg-gradient-to-r ${item.bgColor} rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-8 h-8 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxe mb-4">{item.description}</p>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.details}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h6 className="text-sm font-semibold text-gray-800 mb-2">Key Highlights:</h6>
                      {item.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">{achievement}</span>
                        </div>
                      ))}
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

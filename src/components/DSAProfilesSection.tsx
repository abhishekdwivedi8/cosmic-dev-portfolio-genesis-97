
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Trophy, ExternalLink, Target, Award } from "lucide-react";

const DSAProfilesSection = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "rkabhishekdwivedi",
      url: "https://leetcode.com/u/rkabhishekdwivedi/",
      stats: {
        solved: "200+",
        ranking: "Active",
        streak: "Consistent"
      },
      icon: Code,
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-500/10 to-yellow-500/10",
      achievements: ["Problem Solver", "Daily Practice", "Algorithm Master"]
    },
    {
      platform: "GeeksforGeeks",
      username: "r_abhishek",
      url: "https://www.geeksforgeeks.org/user/r_abhishek/",
      stats: {
        solved: "150+",
        ranking: "Active",
        streak: "Regular"
      },
      icon: Trophy,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      achievements: ["Data Structures", "Coding Practice", "Interview Prep"]
    }
  ];

  const skills = [
    { name: "Data Structures", level: 85, color: "cyan" },
    { name: "Algorithms", level: 80, color: "teal" },
    { name: "Problem Solving", level: 90, color: "emerald" },
    { name: "System Design", level: 75, color: "purple" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden" id="coding">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Consistent problem-solving across multiple platforms with 200+ problems solved and growing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {profiles.map((profile, index) => {
            const IconComponent = profile.icon;
            return (
              <Card 
                key={profile.platform}
                className={`p-8 glass-card hover-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className={`w-full h-32 bg-gradient-to-r ${profile.bgGradient} rounded-lg mb-6 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r opacity-20 animate-pulse"></div>
                    <IconComponent className={`w-16 h-16 text-white relative z-10`} />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{profile.platform}</h3>
                    <Badge className={`bg-gradient-to-r ${profile.gradient} text-white`}>
                      Active
                    </Badge>
                  </div>
                  
                  <p className="text-slate-400 mb-6">@{profile.username}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(profile.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold gradient-text">{value}</div>
                        <div className="text-sm text-slate-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {profile.achievements.map((achievement) => (
                        <Badge key={achievement} variant="secondary" className="bg-slate-700 text-slate-300">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${profile.gradient} hover:scale-105 transition-all duration-300 text-white`}
                  >
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={18} />
                      View Profile
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Progress */}
        <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Problem Solving <span className="gradient-text">Skills</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="glass-card p-6 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-white">{skill.name}</span>
                  <Badge variant="outline" className="text-cyan-400 border-cyan-400/50">
                    {skill.level}%
                  </Badge>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-${skill.color}-400 to-${skill.color}-600 rounded-full transition-all duration-1000 ease-out animate-pulse`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
          {[
            { icon: Target, label: "Problems Solved", value: "200+" },
            { icon: Award, label: "Platforms", value: "2+" },
            { icon: Trophy, label: "Streak Days", value: "50+" },
            { icon: Code, label: "Languages", value: "3+" }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="glass-card p-6 text-center rounded-xl hover-glow transition-all duration-300">
                <IconComponent className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DSAProfilesSection;

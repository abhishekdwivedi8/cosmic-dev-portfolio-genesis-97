
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Trophy, Target, ExternalLink } from "lucide-react";

const CodingStatsSection = () => {
  const platforms = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/rkabhishekdwivedi/",
      icon: Code,
      gradient: "from-orange-400 to-red-600",
      stats: [
        { label: "Problems Solved", value: "200+", color: "text-green-600" },
        { label: "Contest Rating", value: "1400+", color: "text-blue-600" },
        { label: "Global Ranking", value: "Top 15%", color: "text-purple-600" }
      ],
      achievements: [
        "Consistent problem-solving streak",
        "Active contest participation",
        "Strong algorithmic thinking",
        "Data structures mastery"
      ]
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/r_abhishek/",
      icon: Trophy,
      gradient: "from-green-400 to-emerald-600",
      stats: [
        { label: "Articles Read", value: "500+", color: "text-green-600" },
        { label: "Practice Problems", value: "150+", color: "text-blue-600" },
        { label: "Coding Score", value: "750+", color: "text-purple-600" }
      ],
      achievements: [
        "Regular practice sessions",
        "Algorithm implementation",
        "Technical article contributions",
        "Community engagement"
      ]
    }
  ];

  const skillAreas = [
    { name: "Arrays & Strings", proficiency: 90 },
    { name: "Dynamic Programming", proficiency: 75 },
    { name: "Tree & Graph", proficiency: 80 },
    { name: "Sorting & Searching", proficiency: 85 },
    { name: "Recursion & Backtracking", proficiency: 70 },
    { name: "Mathematical Algorithms", proficiency: 75 }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white" id="coding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Coding <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My problem-solving journey across different coding platforms, showcasing algorithmic thinking and programming skills.
          </p>
        </div>

        {/* Platform Stats */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <Card 
                key={platform.name}
                className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-0 overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-3 bg-gradient-to-r ${platform.gradient}`}></div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${platform.gradient} rounded-full`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
                      <Button asChild variant="outline" size="sm" className="mt-2">
                        <a href={platform.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Profile
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {platform.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {platform.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* DSA Skills Breakdown */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in border-0">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-full">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">DSA Proficiency</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {skillAreas.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {skill.proficiency}%
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${skill.proficiency}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Problem-Solving Approach</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                I follow a systematic approach to problem-solving: understanding the problem thoroughly, 
                identifying patterns, choosing optimal data structures and algorithms, implementing clean solutions, 
                and optimizing for time and space complexity. Regular practice has strengthened my ability to 
                tackle complex algorithmic challenges efficiently.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CodingStatsSection;


import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Settings, Layers, Zap } from "lucide-react";
import { useState } from "react";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-purple-500 to-violet-600",
      skills: [
        { name: "HTML/CSS", icon: "🌐", desc: "Semantic markup & responsive design" },
        { name: "JavaScript", icon: "⚡", desc: "ES6+ & DOM manipulation" },
        { name: "TypeScript", icon: "📘", desc: "Type-safe development" },
        { name: "React.js", icon: "⚛️", desc: "Component-based architecture" },
        { name: "Tailwind CSS", icon: "🎨", desc: "Utility-first styling" }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-violet-500 to-indigo-600",
      skills: [
        { name: "Node.js", icon: "🟢", desc: "Server-side JavaScript runtime" },
        { name: "Express.js", icon: "🚀", desc: "Fast web framework" }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-indigo-500 to-blue-600",
      skills: [
        { name: "MongoDB", icon: "🍃", desc: "NoSQL document database" },
        { name: "MySQL", icon: "🐬", desc: "Relational database management" }
      ]
    },
    {
      title: "Tools & Concepts",
      icon: Settings,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "Git", icon: "📚", desc: "Version control system" },
        { name: "REST APIs", icon: "🔗", desc: "RESTful web services" },
        { name: "OOP", icon: "🏗️", desc: "Object-oriented programming" },
        { name: "SDLC", icon: "🔄", desc: "Software development lifecycle" },
        { name: "AI/ML", icon: "🤖", desc: "Artificial intelligence & machine learning" }
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="skills">
      {/* Modern Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 via-violet-500/30 to-indigo-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-violet-500/25 via-blue-500/35 to-cyan-500/25 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-500/15 via-purple-500/25 to-violet-500/15 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Mastering modern technologies to build scalable and innovative solutions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-purple-500/25`
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-600/50'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            {skillCategories[activeTab].skills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                    {skill.desc}
                  </p>
                  <div className="mt-4 h-1 bg-slate-700 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${skillCategories[activeTab].color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
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

export default SkillsSection;

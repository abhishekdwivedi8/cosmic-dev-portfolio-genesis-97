
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText, Star } from "lucide-react";

const ResumeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden" id="resume">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Download my comprehensive resume showcasing my skills, experience, and achievements in full-stack development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card hover-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-cyan-500 to-teal-500"></div>
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Resume Preview */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full">
                        <FileText className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Abhishek Dwivedi</h3>
                        <p className="text-slate-400">Full-Stack Developer Resume</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-slate-300">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm">B.Tech CSE | CGPA: 7.72/10</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm">Full-Stack Development Experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm">200+ DSA Problems Solved</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm">Internship at Internshala</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm">Multiple Full-Stack Projects</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-xl filter blur-xl -z-10"></div>
                </div>

                {/* Download Section */}
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Ready to Download?
                  </h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    Get the complete overview of my technical skills, educational background, 
                    professional experience, and project portfolio in a professionally formatted document.
                  </p>
                  
                  <div className="space-y-4">
                    <Button
                      className="w-full lg:w-auto bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl btn-pulse"
                      asChild
                    >
                      <a href="#" download className="flex items-center justify-center gap-3">
                        <Download className="w-5 h-5" />
                        Download Resume
                      </a>
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="w-full lg:w-auto border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a href="#" className="flex items-center justify-center gap-3">
                        <Eye className="w-5 h-5" />
                        Preview Online
                      </a>
                    </Button>
                  </div>

                  <div className="mt-8 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg border border-emerald-400/20">
                    <p className="text-sm text-slate-400">
                      📄 <strong className="text-emerald-400">Updated:</strong> December 2024 | 
                      📊 <strong className="text-emerald-400">Format:</strong> PDF | 
                      📝 <strong className="text-emerald-400">Size:</strong> 2 pages
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Facts */}
          <div className="grid md:grid-cols-4 gap-6 mt-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            {[
              { label: "Experience", value: "1+ Years" },
              { label: "Projects", value: "10+" },
              { label: "Technologies", value: "15+" },
              { label: "Certifications", value: "Multiple" }
            ].map((fact, index) => (
              <div key={fact.label} className="glass-card p-6 text-center rounded-xl hover-glow transition-all duration-300">
                <div className="text-2xl font-bold gradient-text mb-1">{fact.value}</div>
                <div className="text-sm text-slate-400">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

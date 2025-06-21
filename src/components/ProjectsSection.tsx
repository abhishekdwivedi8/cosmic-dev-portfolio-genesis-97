
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Github, Smartphone, Search, Home, Eye, X } from "lucide-react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "ScanServe - QR Restaurant Ordering",
      shortDescription: "Full-stack SaaS platform with QR-based ordering and role-based dashboards",
      fullDescription: "Built a comprehensive full-stack SaaS platform where customers can scan table-specific QR codes to order food. Implemented role-based dashboards for customers, managers, and chefs with real-time order flow and admin control. Features include table management, menu customization, order tracking, and payment integration ready.",
      technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      features: [
        "QR code scanning for table-based ordering",
        "Real-time order tracking and notifications",
        "Role-based dashboards (Customer, Staff, Admin, Chef)",
        "Dynamic menu management system",
        "Payment integration ready architecture",
        "Mobile-responsive design with PWA features",
        "Order analytics and reporting",
        "Multi-restaurant support"
      ],
      icon: Smartphone,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-500/20 to-teal-600/20",
      demoUrl: "#",
      githubUrl: "https://github.com/abhishekdwivedi2022",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      id: 2,
      title: "WhatsApp Order Form",
      shortDescription: "Responsive form sending food orders directly to vendors via WhatsApp",
      fullDescription: "Created a streamlined responsive form that sends food order details directly to vendors via WhatsApp. Specifically targeted for local food vendors serving college students. Features automatic message formatting, order validation, and vendor management system.",
      technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "WhatsApp API"],
      features: [
        "Interactive order form with real-time validation",
        "Automatic WhatsApp message formatting",
        "Real-time order summary and pricing",
        "Mobile-optimized interface for students",
        "Multiple vendor support system",
        "Order history tracking and management",
        "Custom vendor profiles",
        "Bulk order handling"
      ],
      icon: ExternalLink,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-500/20 to-cyan-600/20",
      demoUrl: "#",
      githubUrl: "https://github.com/abhishekdwivedi2022",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 3,
      title: "PG Finder Web App",
      shortDescription: "Full-stack app with real-time filtering and dynamic AJAX search",
      fullDescription: "Developed a comprehensive full-stack application with real-time filtering and dynamic search using AJAX. Designed specifically for students to find PG accommodations efficiently. Built during internship at Internshala, reduced user search time by 30% and improved overall responsiveness.",
      technologies: ["React.js", "Node.js", "MySQL", "AJAX", "CSS3", "Express.js"],
      features: [
        "Advanced search with real-time AJAX filtering",
        "Dynamic location-based search with maps",
        "User reviews and ratings system",
        "Booking management and calendar integration",
        "Responsive design for all devices",
        "Owner dashboard for property management",
        "Photo gallery and virtual tours",
        "Price comparison and analytics"
      ],
      icon: Search,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/20 to-pink-600/20",
      demoUrl: "#",
      githubUrl: "https://github.com/abhishekdwivedi2022",
      image: "photo-1581091226825-a6a2a5aee158"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden" id="projects">
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/15 to-teal-500/15 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full filter blur-3xl animate-blob"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my development work, from full-stack web applications to innovative solutions that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.id}
                className="group cursor-pointer glass-card hover-glow transition-all duration-500 hover:-translate-y-3 animate-fade-in border-2 border-transparent hover:border-cyan-400/50 overflow-hidden relative"
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
              >
                {/* Enhanced project image with overlay */}
                <div className={`h-56 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <img 
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=400&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.bgGradient} flex items-center justify-center`}>
                    <IconComponent className="w-20 h-20 text-white opacity-90 drop-shadow-lg" />
                  </div>
                  
                  {/* Hover overlay with "More Details" button */}
                  {hoveredProject === project.id && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center animate-fade-in">
                      <Button 
                        className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        More Details
                      </Button>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6 bg-gradient-to-b from-slate-800/90 to-slate-900/90 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-300 border border-slate-600/50 text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-400 border border-cyan-400/30 text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white border-0">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-400/30 text-white">
            {selectedProject && (
              <>
                <DialogHeader className="relative">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute right-0 top-0 p-2 hover:bg-slate-700 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-slate-300 leading-relaxed">
                    {selectedProject.fullDescription}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-8">
                  <div className={`h-72 bg-gradient-to-r ${selectedProject.gradient} rounded-xl flex items-center justify-center overflow-hidden shadow-2xl`}>
                    <img 
                      src={`https://images.unsplash.com/${selectedProject.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-card p-6 rounded-xl">
                      <h4 className="text-xl font-semibold mb-4 text-cyan-400">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-300 border border-slate-600/50 px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="glass-card p-6 rounded-xl">
                      <h4 className="text-xl font-semibold mb-4 text-emerald-400">Key Features</h4>
                      <ul className="space-y-2 max-h-40 overflow-y-auto">
                        {selectedProject.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl">
                    <h4 className="text-xl font-semibold mb-4 text-purple-400">All Features</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 pt-6">
                    <Button asChild className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold py-3">
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 border border-cyan-400/30">
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;

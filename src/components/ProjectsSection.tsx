
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Github, Smartphone, Search, Home } from "lucide-react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "ScanServe - QR Restaurant Ordering",
      shortDescription: "Full-stack QR-based restaurant ordering system with real-time dashboards",
      fullDescription: "A comprehensive restaurant ordering solution that allows customers to scan QR codes, browse menus, place orders, and track them in real-time. Built with modern web technologies and features role-based dashboards for customers, staff, and management.",
      technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "MongoDB"],
      features: [
        "QR code scanning for table-based ordering",
        "Real-time order tracking and notifications",
        "Role-based dashboards (Customer, Staff, Admin)",
        "Menu management system",
        "Payment integration ready",
        "Mobile-responsive design"
      ],
      icon: Smartphone,
      gradient: "from-green-400 to-emerald-600",
      demoUrl: "#",
      githubUrl: "https://github.com/abhishekdwivedi2022",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      id: 2,
      title: "WhatsApp Order Form",
      shortDescription: "Web form that sends food orders directly to vendors via WhatsApp",
      fullDescription: "A streamlined web application that simplifies the food ordering process by allowing customers to fill out a form and automatically send their orders to vendors through WhatsApp. Built with vanilla JavaScript and DOM manipulation.",
      technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "WhatsApp API"],
      features: [
        "Interactive order form with validation",
        "Automatic WhatsApp message formatting",
        "Real-time order summary",
        "Mobile-optimized interface",
        "Multiple vendor support",
        "Order history tracking"
      ],
      icon: ExternalLink,
      gradient: "from-blue-400 to-cyan-600",
      demoUrl: "#",
      githubUrl: "https://github.com/abhishekdwivedi2022",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 3,
      title: "PG Finder App",
      shortDescription: "React-based app for finding and filtering paying guest accommodations",
      fullDescription: "A comprehensive web application built during my internship at Internshala that helps students and professionals find suitable paying guest accommodations. Features advanced search and filtering capabilities with a modern, user-friendly interface.",
      technologies: ["React", "Node.js", "MySQL", "AJAX", "CSS3"],
      features: [
        "Advanced search and filtering system",
        "Real-time availability updates",
        "Location-based search with maps",
        "User reviews and ratings",
        "Booking management system",
        "Responsive design for all devices"
      ],
      icon: Search,
      gradient: "from-purple-400 to-pink-600",
      demoUrl: "#",
      githubUrl: "https://github.com/abhishekdwivedi2022",
      image: "photo-1581091226825-a6a2a5aee158"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my development work, from full-stack web applications to innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.id}
                className="group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <img 
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=400&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-white opacity-80" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                  <DialogDescription className="text-lg">
                    {selectedProject.fullDescription}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div className={`h-64 bg-gradient-to-r ${selectedProject.gradient} rounded-lg flex items-center justify-center overflow-hidden`}>
                    <img 
                      src={`https://images.unsplash.com/${selectedProject.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <Button asChild className="flex-1">
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
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

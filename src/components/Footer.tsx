
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/abhishekdwivedi2022",
      icon: Github
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: Linkedin
    },
    {
      name: "Email",
      url: "mailto:abhishek.dwivedi@example.com",
      icon: Mail
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    {  name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-16 relative">
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-50"
        size="icon"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Abhishek Dwivedi
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full-Stack Developer passionate about creating innovative web solutions. 
              Always learning, always building, always growing.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors duration-200 hover:scale-110"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h4 className="text-lg font-semibold mb-6">Let's Connect</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300">📧 abhishek.dwivedi@example.com</p>
              </div>
              <div>
                <p className="text-gray-300">📱 +91 XXXXX XXXXX</p>
              </div>
              <div>
                <p className="text-gray-300">📍 Greater Noida, India</p>
              </div>
              <div>
                <p className="text-gray-300">🎓 B.Tech CSE 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © 2024 Abhishek Dwivedi. Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
            </p>
            <p className="text-gray-400 text-sm">
              Designed & Developed with passion for clean code
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      </div>
    </footer>
  );
};

export default Footer;

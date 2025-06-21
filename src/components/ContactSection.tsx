
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto URL with form data
    const mailtoUrl = `mailto:abhishek.dwivedi2022@gmail.com?subject=Portfolio%20Message&body=Name:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}%0A%0AMessage:%20${encodeURIComponent(formData.message)}`;
    
    // Open default email client
    window.location.href = mailtoUrl;
    
    setTimeout(() => {
      toast({
        title: "Email Client Opened!",
        description: "Your default email app should open with the pre-filled message.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/abhishekdwivedi2022",
      icon: Github,
      color: "hover:text-slate-300"
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: Linkedin,
      color: "hover:text-blue-400"
    },
    {
      name: "Resume",
      url: "#resume",
      icon: Download,
      color: "hover:text-emerald-400"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abhishek.dwivedi2022@gmail.com",
      color: "text-cyan-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      color: "text-emerald-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Greater Noida, India",
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a tech chat. 
            Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="glass-card hover-glow transition-all duration-300 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  I'm currently looking for new opportunities in full-stack development. 
                  Whether you have a project in mind or just want to chat about technology, 
                  I'd love to hear from you.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors">
                        <div className="p-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full">
                          <IconComponent className={`w-5 h-5 ${info.color}`} />
                        </div>
                        <div>
                          <div className="text-sm text-slate-500">{info.label}</div>
                          <div className="font-medium text-white">{info.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 ${link.color} hover-glow`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Projects", value: "10+" },
                { label: "Problems Solved", value: "200+" },
                { label: "Technologies", value: "15+" }
              ].map((stat, index) => (
                <Card key={index} className="glass-card hover-glow transition-all duration-300 border-0">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card hover-glow transition-all duration-300 animate-slide-in-right border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-medium py-3 transition-all duration-300 hover:scale-105 btn-pulse"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Opening Email...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg border border-emerald-400/20">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-400/30">
                    Available for Work
                  </Badge>
                </div>
                <p className="text-sm text-slate-400">
                  I'm currently open to full-time opportunities and freelance projects. 
                  Let's discuss how we can work together!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


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

    // Create enhanced mailto URL with form data
    const subject = encodeURIComponent("Portfolio Message from " + formData.name);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:abhishek.dwivedi2022@gmail.com?subject=${subject}&body=${body}`;
    
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
      color: "hover:text-slate-300",
      bg: "from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700"
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: Linkedin,
      color: "hover:text-blue-400",
      bg: "from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600"
    },
    {
      name: "Resume",
      url: "#resume",
      icon: Download,
      color: "hover:text-emerald-400",
      bg: "from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abhishek.dwivedi2022@glbajajgroup.org",
      color: "text-cyan-400",
      bg: "from-cyan-500/10 to-cyan-600/10"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9026019016",
      color: "text-emerald-400",
      bg: "from-emerald-500/10 to-emerald-600/10"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mathura, Uttar Pradesh",
      color: "text-purple-400",
      bg: "from-purple-500/10 to-purple-600/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden" id="contact">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-teal-500/15 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-orange-500/10 rounded-full filter blur-3xl animate-blob"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a tech chat. 
            Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Enhanced Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="glass-card hover-glow transition-all duration-500 border-2 border-transparent hover:border-cyan-400/50 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500"></div>
              <CardContent className="p-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  I'm currently looking for new opportunities in full-stack development. 
                  Whether you have a project in mind or just want to chat about technology, 
                  I'd love to hear from you.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${info.bg} hover:scale-105 transition-all duration-300 border border-slate-700/30 hover:border-cyan-400/30`}>
                        <div className="p-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl shadow-lg">
                          <IconComponent className={`w-5 h-5 ${info.color}`} />
                        </div>
                        <div>
                          <div className="text-sm text-slate-500 font-medium">{info.label}</div>
                          <div className="font-semibold text-white">{info.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h4 className="text-lg font-semibold text-white mb-6">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-4 bg-gradient-to-r ${link.bg} rounded-xl transition-all duration-300 hover:scale-110 ${link.color} hover-glow shadow-lg`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Projects", value: "10+", color: "from-cyan-400 to-teal-400" },
                { label: "Problems Solved", value: "200+", color: "from-purple-400 to-pink-400" },
                { label: "Technologies", value: "15+", color: "from-emerald-400 to-green-400" }
              ].map((stat, index) => (
                <Card key={index} className="glass-card hover-glow transition-all duration-300 hover:scale-105 border border-slate-700/50 hover:border-cyan-400/50">
                  <CardContent className="p-4 text-center bg-gradient-to-br from-slate-800/80 to-slate-900/80">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <Card className="glass-card hover-glow transition-all duration-500 animate-slide-in-right border-2 border-transparent hover:border-purple-400/50 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500"></div>
            <CardContent className="p-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-3">
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
                    className="bg-slate-800/70 border-2 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-400 rounded-xl p-4 transition-all duration-300 hover:border-slate-500/70"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-3">
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
                    className="bg-slate-800/70 border-2 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-400 rounded-xl p-4 transition-all duration-300 hover:border-slate-500/70"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-3">
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
                    className="bg-slate-800/70 border-2 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-400 resize-none rounded-xl p-4 transition-all duration-300 hover:border-slate-500/70"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold py-4 transition-all duration-300 hover:scale-105 btn-pulse rounded-xl shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Opening Email...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-400/30">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 text-emerald-300 border border-emerald-400/40 px-3 py-1">
                    Available for Work
                  </Badge>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  I'm currently open to full-time opportunities and freelance projects. 
                  Let's discuss how we can work together to build something amazing!
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

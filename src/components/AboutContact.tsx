import { useState } from "react";
import { Send, CheckCircle, Users, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const AboutContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const features = [
    {
      icon: Users,
      title: "Team-First",
      description: "Built for collaboration and seamless team workflows.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focus on outcomes that matter to your business.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Enterprise-grade reliability and performance.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* About Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
                About <span className="gradient-text">Alfrez</span>
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We're on a mission to democratize access to powerful development tools. 
                  Our platform brings together the best resources, tutorials, and tools 
                  that developers need to build exceptional products.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded by developers for developers, we understand the challenges 
                  of finding the right tools for your project. That's why we've curated 
                  a comprehensive collection of resources that span from ideation to deployment.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-6 hover-scale p-4 rounded-2xl hover:bg-card/50 transition-all">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div id="contact">
            <Card className="elegant-shadow border-0 card-gradient hover:card-hover-shadow transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold mb-4">Get in Touch</CardTitle>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Have questions or want to collaborate? We'd love to hear from you and discuss how we can help.
                </p>
              </CardHeader>
              <CardContent className="pt-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12 text-lg transition-smooth focus:ring-2 focus:ring-primary/20 rounded-xl"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12 text-lg transition-smooth focus:ring-2 focus:ring-primary/20 rounded-xl"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="min-h-[140px] text-lg transition-smooth focus:ring-2 focus:ring-primary/20 rounded-xl resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-hero-gradient hover:opacity-90 hover:scale-105 h-14 text-lg rounded-xl transition-all shadow-lg hover:shadow-xl"
                  >
                    Send Message
                    <Send className="ml-3 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
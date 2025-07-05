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
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible."
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  const features = [{
    icon: Users,
    title: "Team-First",
    description: "Built for collaboration and seamless team workflows."
  }, {
    icon: Target,
    title: "Results-Driven",
    description: "Focus on outcomes that matter to your business."
  }, {
    icon: Award,
    title: "Quality Assured",
    description: "Enterprise-grade reliability and performance."
  }];
  return <section id="about" className="py-20 bg-blue-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-green-50">
              About <span className="gradient-text text-green-300">Alfrez</span>
            </h2>
            <p className="mb-8 leading-relaxed text-lg text-gray-300">
              We're on a mission to democratize access to powerful development tools. 
              Our platform brings together the best resources, tutorials, and tools 
              that developers need to build exceptional products.
            </p>
            
            <p className="mb-8 leading-relaxed text-zinc-300">
              Founded by developers for developers, we understand the challenges 
              of finding the right tools for your project. That's why we've curated 
              a comprehensive collection of resources that span from ideation to deployment.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => <div key={index} className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg mt-1">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-slate-50">{feature.title}</h3>
                    <p className="text-sm font-normal text-zinc-400">{feature.description}</p>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Contact Section */}
          <div id="contact">
            <Card className="elegant-shadow border-0 card-gradient">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <p className="text-muted-foreground">
                  Have questions or want to collaborate? We'd love to hear from you.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="transition-smooth focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className="transition-smooth focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required className="min-h-[120px] transition-smooth focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <Button type="submit" className="w-full bg-hero-gradient hover:opacity-90" size="lg">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutContact;
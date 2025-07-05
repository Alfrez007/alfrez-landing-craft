import { Users, Target, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
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
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
              About <span className="gradient-text">Alfrez</span>
            </h1>
            
            <div className="text-center mb-16">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're on a mission to democratize access to powerful development tools. 
                Our platform brings together the best resources, tutorials, and tools 
                that developers need to build exceptional products.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded by developers for developers, we understand the challenges 
                of finding the right tools for your project. That's why we've curated 
                a comprehensive collection of resources that span from ideation to deployment.
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="p-4 bg-primary/10 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
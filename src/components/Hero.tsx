import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-24 pb-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-gradient rounded-full mb-8 hover-scale">
            <Zap className="h-5 w-5 text-primary pulse-glow" />
            <span className="text-sm font-semibold">Powerful Tools for Modern Teams</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
            Build Amazing Things with{" "}
            <span className="gradient-text bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">Next-Gen Tools</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Discover cutting-edge tools and resources that empower teams to build, 
            scale, and innovate faster than ever before. Join thousands of developers 
            and creators worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg"
              onClick={() => scrollToSection("#tools")}
              className="bg-hero-gradient hover:opacity-90 hover:scale-105 text-lg px-10 py-4 h-auto rounded-xl shadow-xl hover:shadow-2xl transition-all"
            >
              Explore Tools
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("#about")}
              className="text-lg px-10 py-4 h-auto rounded-xl border-2 hover:bg-primary/5 transition-all hover:scale-105"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="glass-gradient rounded-3xl p-6 hover-lift">
              <div className="text-4xl font-bold gradient-text mb-2">50K+</div>
              <div className="text-muted-foreground font-medium">Active Users</div>
            </div>
            <div className="glass-gradient rounded-3xl p-6 hover-lift">
              <div className="text-4xl font-bold gradient-text mb-2">200+</div>
              <div className="text-muted-foreground font-medium">Tools Available</div>
            </div>
            <div className="glass-gradient rounded-3xl p-6 hover-lift">
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-muted-foreground font-medium">Uptime</div>
            </div>
            <div className="glass-gradient rounded-3xl p-6 hover-lift">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { ArrowRight, Code, Database, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const TrendingTools = () => {
  const tools = [
    {
      icon: Code,
      title: "Code Generator",
      description: "AI-powered code generation for multiple programming languages with smart autocomplete.",
      category: "Development",
      trending: true,
    },
    {
      icon: Database,
      title: "DataFlow Pro",
      description: "Advanced data pipeline management with real-time analytics and monitoring.",
      category: "Analytics",
      trending: true,
    },
    {
      icon: Rocket,
      title: "Deploy Master",
      description: "One-click deployment platform supporting all major cloud providers seamlessly.",
      category: "DevOps",
      trending: true,
    },
    {
      icon: Shield,
      title: "SecureGuard",
      description: "Comprehensive security toolkit for vulnerability scanning and threat detection.",
      category: "Security",
      trending: true,
    },
  ];

  return (
    <section id="tools" className="py-24 bg-gradient-to-b from-muted/50 to-background relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Trending <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover the most popular tools that are transforming how teams work and build products.
            Join thousands of developers who trust these solutions.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tools.map((tool, index) => (
            <Card key={index} className="group hover-lift border-0 elegant-shadow card-gradient hover:card-hover-shadow transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                    <tool.icon className="h-7 w-7 text-primary" />
                  </div>
                  {tool.trending && (
                    <span className="px-3 py-1 bg-gradient-to-r from-accent/20 to-primary/20 text-accent text-xs font-bold rounded-full border border-accent/20">
                      🔥 Trending
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl font-bold mb-2">{tool.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {tool.category}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {tool.description}
                </p>
                <Button variant="ghost" className="w-full justify-between p-3 h-auto hover:bg-primary/5 group-hover:text-primary transition-all rounded-xl">
                  <span className="font-semibold">Try Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            asChild
            className="px-10 py-4 h-auto text-lg rounded-xl border-2 hover:bg-primary/5 hover:scale-105 transition-all"
          >
            <Link to="/tools">
              View More Tools
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingTools;
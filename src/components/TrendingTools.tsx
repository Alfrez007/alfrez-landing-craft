import { ArrowRight, Code, Database, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="tools" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trending <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover the most popular tools that are transforming how teams work and build products.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tools.map((tool, index) => (
            <Card key={index} className="hover-lift border-0 elegant-shadow card-gradient">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  {tool.trending && (
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      Trending
                    </span>
                  )}
                </div>
                <CardTitle className="text-lg">{tool.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {tool.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {tool.description}
                </p>
                <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                  Try Now
                  <ArrowRight className="h-4 w-4" />
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
            className="px-8 py-3"
          >
            View More Tools
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingTools;
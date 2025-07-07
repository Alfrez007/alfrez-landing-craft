import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Book, Code, Lightbulb, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Documentation = () => {
  const sections = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics and set up your first project",
      articles: ["Quick Start Guide", "Installation", "Configuration", "First Steps"]
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation and examples",
      articles: ["Authentication", "Endpoints", "Rate Limits", "SDKs"]
    },
    {
      icon: Lightbulb,
      title: "Tutorials",
      description: "Step-by-step guides for common use cases",
      articles: ["Building Your First App", "Advanced Workflows", "Best Practices", "Troubleshooting"]
    },
    {
      icon: Settings,
      title: "Advanced Topics",
      description: "Deep dive into advanced features and customization",
      articles: ["Custom Integrations", "Webhooks", "Performance", "Security"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">Documentation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to know to get started and make the most of our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sections.map((section, index) => (
              <Card key={index} className="card-gradient border-0 elegant-shadow hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-2xl">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{section.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {section.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <button className="text-left hover:text-primary transition-colors text-muted-foreground hover:underline">
                          {article}
                        </button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;
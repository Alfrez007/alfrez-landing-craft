import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, MessageSquare, Book, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HelpCenter = () => {
  const categories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics and set up your account",
      articles: 12
    },
    {
      icon: MessageSquare,
      title: "Account & Billing",
      description: "Manage your subscription and billing",
      articles: 8
    },
    {
      icon: Phone,
      title: "API & Integration",
      description: "Technical documentation and guides",
      articles: 15
    }
  ];

  const popularArticles = [
    "How to get started with Alfrez?",
    "Setting up your first project",
    "Managing team members",
    "API authentication guide",
    "Troubleshooting common issues"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">Help Center</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Find answers to your questions and get the help you need.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for help articles..." 
                className="pl-12 py-3 text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="card-gradient border-0 elegant-shadow hover-lift cursor-pointer">
                <CardHeader className="text-center">
                  <div className="p-4 bg-primary/10 rounded-2xl mx-auto mb-4 w-fit">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <span className="text-sm text-muted-foreground">
                    {category.articles} articles
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Popular Articles</h2>
            <Card className="card-gradient border-0 elegant-shadow">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {popularArticles.map((article, index) => (
                    <li key={index}>
                      <button className="text-left hover:text-primary transition-colors text-muted-foreground hover:underline">
                        {article}
                      </button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="text-center mt-16">
              <h3 className="text-xl font-bold mb-4">Still need help?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <Button className="bg-hero-gradient hover:opacity-90">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const posts = [
    {
      title: "Getting Started with Modern Development Tools",
      excerpt: "Explore the essential tools every developer needs to streamline their workflow and boost productivity.",
      author: "John Doe",
      date: "Dec 15, 2024",
      category: "Development",
    },
    {
      title: "The Future of AI in Software Development",
      excerpt: "How artificial intelligence is reshaping the way we write, test, and deploy code.",
      author: "Jane Smith",
      date: "Dec 12, 2024",
      category: "AI",
    },
    {
      title: "Best Practices for Team Collaboration",
      excerpt: "Learn effective strategies for remote team collaboration and project management.",
      author: "Mike Johnson",
      date: "Dec 10, 2024",
      category: "Productivity",
    },
    {
      title: "Security Fundamentals for Modern Apps",
      excerpt: "Essential security practices to protect your applications from common threats.",
      author: "Sarah Wilson",
      date: "Dec 8, 2024",
      category: "Security",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest insights, tutorials, and industry trends.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {posts.map((post, index) => (
              <Card key={index} className="hover-lift border-0 elegant-shadow card-gradient">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-smooth cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-3"
            >
              Load More Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
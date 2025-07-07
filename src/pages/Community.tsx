import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, MessageCircle, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Community = () => {
  const stats = [
    { label: "Active Members", value: "25K+", icon: Users },
    { label: "Discussions", value: "5.2K", icon: MessageCircle },
    { label: "Solutions Shared", value: "12K+", icon: Award },
    { label: "Topics", value: "150+", icon: TrendingUp }
  ];

  const discussions = [
    {
      title: "Best practices for API integration",
      author: "Sarah Chen",
      replies: 23,
      category: "Development",
      timeAgo: "2 hours ago"
    },
    {
      title: "How to optimize deployment performance?",
      author: "Mike Johnson", 
      replies: 15,
      category: "DevOps",
      timeAgo: "4 hours ago"
    },
    {
      title: "New feature request: Custom webhooks",
      author: "Alex Rivera",
      replies: 31,
      category: "Feature Requests",
      timeAgo: "1 day ago"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Join Our <span className="gradient-text">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Connect with developers, share knowledge, and get help from our amazing community.
            </p>
            <Button className="bg-hero-gradient hover:opacity-90 text-lg px-8 py-3">
              Join Discussion
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="card-gradient border-0 elegant-shadow hover-lift">
                <CardContent className="text-center p-6">
                  <div className="p-3 bg-primary/10 rounded-2xl mx-auto mb-4 w-fit">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Recent Discussions</h2>
              <Button variant="outline">View All</Button>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion, index) => (
                <Card key={index} className="card-gradient border-0 elegant-shadow hover-lift cursor-pointer">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold mb-2 hover:text-primary transition-colors">
                          {discussion.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>by {discussion.author}</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                            {discussion.category}
                          </span>
                          <span>{discussion.timeAgo}</span>
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold">{discussion.replies}</div>
                        <div className="text-xs text-muted-foreground">replies</div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <h3 className="text-xl font-bold mb-4">Ready to get involved?</h3>
              <p className="text-muted-foreground mb-6">
                Share your knowledge, ask questions, and help build our community.
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-hero-gradient hover:opacity-90">
                  Start a Discussion
                </Button>
                <Button variant="outline">
                  Browse Topics
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
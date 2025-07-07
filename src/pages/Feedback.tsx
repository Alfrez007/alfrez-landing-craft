import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageSquare, Star, Lightbulb, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Feedback = () => {
  const feedbackTypes = [
    {
      icon: Star,
      title: "General Feedback",
      description: "Share your thoughts about our platform"
    },
    {
      icon: Lightbulb,
      title: "Feature Request",
      description: "Suggest new features or improvements"
    },
    {
      icon: Bug,
      title: "Bug Report",
      description: "Report issues or problems you've encountered"
    },
    {
      icon: MessageSquare,
      title: "Other",
      description: "Anything else you'd like to share"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Your <span className="gradient-text">Feedback</span> Matters
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Help us improve by sharing your thoughts, suggestions, and experiences. We read every piece of feedback.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {feedbackTypes.map((type, index) => (
                <Card key={index} className="card-gradient border-0 elegant-shadow hover-lift cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <div className="p-3 bg-primary/10 rounded-2xl mx-auto mb-3 w-fit">
                      <type.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-bold">{type.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="card-gradient border-0 elegant-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send us your feedback</CardTitle>
                <CardDescription>
                  We'd love to hear from you. Fill out the form below and we'll get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your feedback, suggestion, or issue..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="flex gap-4">
                  <Button className="bg-hero-gradient hover:opacity-90 flex-1">
                    Send Feedback
                  </Button>
                  <Button variant="outline">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-12">
              <h3 className="text-xl font-bold mb-4">Other ways to reach us</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="card-gradient border-0 elegant-shadow">
                  <CardContent className="text-center p-6">
                    <MessageSquare className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Live Chat</h4>
                    <p className="text-sm text-muted-foreground">Available 24/7 for immediate help</p>
                  </CardContent>
                </Card>

                <Card className="card-gradient border-0 elegant-shadow">
                  <CardContent className="text-center p-6">
                    <Star className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Community Forum</h4>
                    <p className="text-sm text-muted-foreground">Join discussions with other users</p>
                  </CardContent>
                </Card>

                <Card className="card-gradient border-0 elegant-shadow">
                  <CardContent className="text-center p-6">
                    <Bug className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">GitHub Issues</h4>
                    <p className="text-sm text-muted-foreground">Report bugs and feature requests</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Feedback;
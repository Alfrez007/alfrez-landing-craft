import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Careers = () => {
  const positions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build amazing user experiences with React and modern web technologies."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco",
      type: "Full-time", 
      description: "Drive product strategy and work with cross-functional teams to deliver exceptional products."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Scale our infrastructure and improve developer experience across the platform."
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "New York",
      type: "Full-time",
      description: "Create intuitive and delightful user experiences for our growing user base."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're building the future of developer tools. Come help us create amazing products that developers love.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="card-gradient border-0 elegant-shadow hover-lift">
              <CardHeader className="text-center">
                <div className="p-4 bg-primary/10 rounded-2xl mx-auto mb-4 w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Great Culture</CardTitle>
                <CardDescription>Collaborative, inclusive, and fun work environment</CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-gradient border-0 elegant-shadow hover-lift">
              <CardHeader className="text-center">
                <div className="p-4 bg-primary/10 rounded-2xl mx-auto mb-4 w-fit">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Remote First</CardTitle>
                <CardDescription>Work from anywhere with flexible hours</CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-gradient border-0 elegant-shadow hover-lift">
              <CardHeader className="text-center">
                <div className="p-4 bg-primary/10 rounded-2xl mx-auto mb-4 w-fit">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Work-Life Balance</CardTitle>
                <CardDescription>Unlimited PTO and wellness benefits</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <Card key={index} className="card-gradient border-0 elegant-shadow hover-lift">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-bold mb-2">{position.title}</CardTitle>
                        <CardDescription className="text-muted-foreground mb-4">
                          {position.description}
                        </CardDescription>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <Button className="bg-hero-gradient hover:opacity-90">
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
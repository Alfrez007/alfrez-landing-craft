import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Key, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const API = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">API Documentation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Powerful REST API to integrate our tools into your applications. Fast, reliable, and easy to use.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="card-gradient border-0 elegant-shadow hover-lift">
              <CardHeader className="text-center">
                <div className="p-4 bg-primary/10 rounded-2xl mx-auto mb-4 w-fit">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Fast & Reliable</CardTitle>
                <CardDescription>99.9% uptime with global CDN</CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-gradient border-0 elegant-shadow hover-lift">
              <CardHeader className="text-center">
                <div className="p-4 bg-primary/10 rounded-2xl mx-auto mb-4 w-fit">
                  <Key className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Secure Authentication</CardTitle>
                <CardDescription>API keys and OAuth 2.0 support</CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-gradient border-0 elegant-shadow hover-lift">
              <CardHeader className="text-center">
                <div className="p-4 bg-primary/10 rounded-2xl mx-auto mb-4 w-fit">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Developer Friendly</CardTitle>
                <CardDescription>Clear docs and SDKs available</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="card-gradient border-0 elegant-shadow max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Quick Start</CardTitle>
              <CardDescription>Get started with our API in minutes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-background/50 rounded-lg p-6">
                <h4 className="font-semibold mb-3">1. Get your API key</h4>
                <code className="text-sm text-muted-foreground">
                  curl -H "Authorization: Bearer YOUR_API_KEY" https://api.alfrez.com/v1/tools
                </code>
              </div>
              
              <div className="bg-background/50 rounded-lg p-6">
                <h4 className="font-semibold mb-3">2. Make your first request</h4>
                <code className="text-sm text-muted-foreground">
                  {"{"}<br/>
                  &nbsp;&nbsp;"tools": [...]<br/>
                  &nbsp;&nbsp;"total": 42<br/>
                  {"}"}
                </code>
              </div>

              <div className="text-center pt-6">
                <Button className="bg-hero-gradient hover:opacity-90">
                  Get API Key
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default API;
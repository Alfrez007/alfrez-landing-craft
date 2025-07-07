import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 projects",
        "Basic tools access",
        "Email support",
        "1GB storage"
      ]
    },
    {
      name: "Pro",
      price: "$29",
      description: "Best for growing teams and businesses",
      features: [
        "Unlimited projects",
        "All tools access",
        "Priority support",
        "10GB storage",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For large organizations with custom needs",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "Dedicated support",
        "Unlimited storage",
        "Team management"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Simple <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose the perfect plan for your needs. All plans include our core features with different usage limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`card-gradient border-0 elegant-shadow hover-lift ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader className="text-center pb-8">
                  {plan.popular && (
                    <div className="bg-hero-gradient text-white text-sm font-bold py-2 px-4 rounded-full mb-4 mx-auto w-fit">
                      Most Popular
                    </div>
                  )}
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="text-muted-foreground mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-hero-gradient hover:opacity-90' : ''}`}>
                    Get Started
                  </Button>
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

export default Pricing;
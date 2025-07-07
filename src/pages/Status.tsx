import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, AlertCircle, XCircle, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Status = () => {
  const services = [
    {
      name: "API Services",
      status: "operational",
      uptime: "99.98%",
      responseTime: "45ms"
    },
    {
      name: "Web Application",
      status: "operational", 
      uptime: "99.99%",
      responseTime: "120ms"
    },
    {
      name: "Database",
      status: "maintenance",
      uptime: "99.95%",
      responseTime: "200ms"
    },
    {
      name: "CDN",
      status: "operational",
      uptime: "99.99%",
      responseTime: "25ms"
    }
  ];

  const incidents = [
    {
      title: "Scheduled Database Maintenance",
      status: "ongoing",
      time: "2 hours ago",
      description: "We are performing routine database maintenance to improve performance."
    },
    {
      title: "API Rate Limiting Issues Resolved",
      status: "resolved",
      time: "1 day ago", 
      description: "Temporary issues with API rate limiting have been fully resolved."
    },
    {
      title: "CDN Performance Optimization",
      status: "resolved",
      time: "3 days ago",
      description: "Completed CDN optimization resulting in 40% faster load times."
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "maintenance":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "degraded":
        return <AlertCircle className="h-5 w-5 text-orange-500" />;
      case "outage":
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
  };

  const getIncidentIcon = (status: string) => {
    switch (status) {
      case "ongoing":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "resolved":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              System <span className="gradient-text">Status</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real-time status and uptime monitoring for all Alfrez services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="card-gradient border-0 elegant-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Current Status</CardTitle>
                <CardDescription>All systems operational</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(service.status)}
                        <div>
                          <div className="font-semibold">{service.name}</div>
                          <div className="text-sm text-muted-foreground capitalize">
                            {service.status === "operational" ? "Operational" : 
                             service.status === "maintenance" ? "Under Maintenance" : service.status}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{service.uptime} uptime</div>
                        <div className="text-xs text-muted-foreground">{service.responseTime} avg response</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 elegant-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Recent Incidents</CardTitle>
                <CardDescription>Latest updates and maintenance activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {incidents.map((incident, index) => (
                    <div key={index} className="p-4 bg-background/50 rounded-lg">
                      <div className="flex items-start gap-3">
                        {getIncidentIcon(incident.status)}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{incident.title}</h4>
                            <span className="text-sm text-muted-foreground">{incident.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{incident.description}</p>
                          <div className="mt-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              incident.status === "ongoing" 
                                ? "bg-yellow-500/20 text-yellow-500" 
                                : "bg-green-500/20 text-green-500"
                            }`}>
                              {incident.status === "ongoing" ? "Ongoing" : "Resolved"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 elegant-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Overall Uptime</CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">99.98%</div>
                    <div className="text-sm text-muted-foreground">API Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">99.99%</div>
                    <div className="text-sm text-muted-foreground">Web App</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">99.95%</div>
                    <div className="text-sm text-muted-foreground">Database</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">99.99%</div>
                    <div className="text-sm text-muted-foreground">CDN</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Status;
import Navigation from "@/components/Navigation";
import { Shield, Users, Package, Bell, CheckCircle, AlertTriangle, Map, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DecisionSupport = () => {
  const activeAlerts = [
    {
      id: 1,
      region: "Sindh Province",
      severity: "critical",
      message: "Heavy rainfall expected in next 36 hours. Evacuation recommended for low-lying areas.",
      timestamp: "2 hours ago",
      status: "active",
    },
    {
      id: 2,
      region: "Punjab South",
      severity: "warning",
      message: "River levels rising. Monitor situation closely.",
      timestamp: "5 hours ago",
      status: "monitoring",
    },
    {
      id: 3,
      region: "KPK Region",
      severity: "info",
      message: "Moderate rainfall predicted. Prepare emergency supplies.",
      timestamp: "12 hours ago",
      status: "prepared",
    },
  ];

  const resources = [
    { type: "Relief Teams", available: 42, deployed: 18, location: "Sindh" },
    { type: "Medical Units", available: 28, deployed: 12, location: "Punjab" },
    { type: "Rescue Boats", available: 156, deployed: 64, location: "Multiple" },
    { type: "Emergency Shelters", available: 89, deployed: 34, location: "Various" },
  ];

  const recentActions = [
    { action: "Evacuation order issued", region: "Sindh - District 4", time: "1 hour ago", user: "NDMA Coordinator" },
    { action: "Relief teams dispatched", region: "Punjab South", time: "3 hours ago", user: "Provincial Director" },
    { action: "Emergency supplies allocated", region: "KPK Region", time: "6 hours ago", user: "Resource Manager" },
    { action: "SMS alerts sent to 250K residents", region: "Sindh Province", time: "8 hours ago", user: "Alert System" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  Decision Support Dashboard
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Real-time coordination for NDMA and provincial authorities
                </p>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 glass rounded-lg border border-accent/20 self-start sm:self-auto">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs sm:text-sm text-foreground font-medium">System Active</span>
              </div>
            </div>
          </div>


          {/* Role Selector - Placeholder */}
          <div className="mb-6 sm:mb-8 glass rounded-xl p-4 sm:p-6 border border-border/50 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">Access Level</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">NDMA National Coordinator</p>
                </div>
              </div>
              <Button variant="glass" size="sm" className="self-start sm:self-auto">
                Switch Role
              </Button>
            </div>
          </div>


          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Active Alerts */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <Card className="glass border-border/50 p-4 sm:p-6 animate-fade-in shadow-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center">
                    <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-warning mr-2" />
                    Active Alerts
                  </h2>
                  <Button variant="hero" size="sm">
                    Issue New Alert
                  </Button>
                </div>


                <div className="space-y-4">
                  {activeAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-5 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                        alert.severity === "critical"
                          ? "bg-destructive/10 border-destructive/30"
                          : alert.severity === "warning"
                          ? "bg-warning/10 border-warning/30"
                          : "bg-accent/10 border-accent/30"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3">
                          <AlertTriangle
                            className={`h-5 w-5 mt-0.5 ${
                              alert.severity === "critical"
                                ? "text-destructive"
                                : alert.severity === "warning"
                                ? "text-warning"
                                : "text-accent"
                            }`}
                          />
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{alert.region}</h4>
                            <p className="text-sm text-muted-foreground">{alert.message}</p>
                          </div>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full bg-card border border-border">
                          {alert.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                        <div className="flex gap-2">
                          <Button variant="glass" size="sm">
                            View Details
                          </Button>
                          <Button variant="secondary" size="sm">
                            Take Action
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Resource Allocation */}
              <Card className="glass border-border/50 p-4 sm:p-6 animate-fade-in shadow-card">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 flex items-center">
                  <Package className="h-5 w-5 sm:h-6 sm:w-6 text-accent mr-2" />
                  Resource Allocation
                </h2>


                <div className="space-y-4">
                  {resources.map((resource, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{resource.type}</h4>
                          <p className="text-xs text-muted-foreground mt-1">Location: {resource.location}</p>
                        </div>
                        <Button variant="glass" size="sm">
                          Deploy
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-xs text-muted-foreground">Available</span>
                          <div className="text-2xl font-bold text-success">{resource.available}</div>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">Deployed</span>
                          <div className="text-2xl font-bold text-accent">{resource.deployed}</div>
                        </div>
                      </div>
                      <div className="mt-3 relative h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="absolute left-0 top-0 h-full bg-gradient-primary rounded-full transition-all duration-500"
                          style={{
                            width: `${(resource.deployed / (resource.available + resource.deployed)) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-4 sm:space-y-6">
              {/* Quick Actions */}
              <Card className="glass border-border/50 p-4 sm:p-6 animate-fade-in shadow-card">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">Quick Actions</h3>

                <div className="space-y-3">
                  <Button variant="hero" className="w-full justify-start">
                    <Map className="h-4 w-4 mr-2" />
                    View Risk Map
                  </Button>
                  <Button variant="glass" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Emergency Contacts
                  </Button>
                  <Button variant="glass" className="w-full justify-start">
                    <Bell className="h-4 w-4 mr-2" />
                    Send Mass Alert
                  </Button>
                  <Button variant="glass" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Coordinate Teams
                  </Button>
                </div>
              </Card>

              {/* Recent Actions */}
              <Card className="glass border-border/50 p-4 sm:p-6 animate-fade-in shadow-card">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">Recent Actions</h3>

                <div className="space-y-4">
                  {recentActions.map((item, idx) => (
                    <div key={idx} className="pb-4 border-b border-border/30 last:border-0 last:pb-0">
                      <div className="flex items-start gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{item.action}</p>
                          <p className="text-xs text-muted-foreground mt-1">{item.region}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2 ml-6">
                        <span className="text-xs text-muted-foreground">{item.user}</span>
                        <span className="text-xs text-muted-foreground">{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* SMS Alert Status */}
              <Card className="glass border-border/50 p-6 animate-fade-in shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-4">SMS Alert System</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-success/10 border border-success/30">
                    <div className="text-3xl font-bold text-success mb-1">2.8M</div>
                    <div className="text-sm text-foreground font-medium mb-1">Messages Sent</div>
                    <div className="text-xs text-muted-foreground">Last 7 days</div>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                    <div className="text-3xl font-bold text-accent mb-1">98.7%</div>
                    <div className="text-sm text-foreground font-medium mb-1">Delivery Rate</div>
                    <div className="text-xs text-muted-foreground">Average success</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionSupport;

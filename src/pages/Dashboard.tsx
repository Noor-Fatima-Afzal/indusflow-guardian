import { useState } from "react";
import Navigation from "@/components/Navigation";
import { MapPin, AlertTriangle, Droplets, TrendingUp, Cloud, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const Dashboard = () => {
  const [rainfallIntensity, setRainfallIntensity] = useState([50]);
  const [simulationSpeed, setSimulationSpeed] = useState([1]);

  const riskZones = [
    { region: "Sindh Province", risk: "High", level: 85, color: "text-destructive" },
    { region: "Punjab - South", risk: "Medium", level: 62, color: "text-warning" },
    { region: "Khyber Pakhtunkhwa", risk: "Low", level: 28, color: "text-success" },
    { region: "Balochistan", risk: "Low", level: 15, color: "text-success" },
  ];

  const liveMetrics = [
    { label: "Active Sensors", value: "1,247", icon: Activity, trend: "+12" },
    { label: "Rainfall (24h)", value: "142mm", icon: Cloud, trend: "+28mm" },
    { label: "River Discharge", value: "8,420 m³/s", icon: Droplets, trend: "+15%" },
    { label: "Risk Level", value: "Elevated", icon: AlertTriangle, trend: "↑" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Flood Prediction Dashboard
            </h1>
            <p className="text-muted-foreground">
              Real-time monitoring and AI-driven flood risk analysis across Pakistan
            </p>
          </div>

          {/* Live Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {liveMetrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className="glass rounded-xl p-6 border border-border/50 animate-fade-in-up hover:shadow-glow transition-all duration-300"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                    <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent font-medium">
                      {metric.trend}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Visualization */}
            <div className="lg:col-span-2 glass rounded-2xl p-6 border border-border/50 shadow-elevation animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Interactive Flood Risk Map
                </h2>
                <div className="flex gap-2">
                  <Button variant="glass" size="sm">Rainfall</Button>
                  <Button variant="glass" size="sm">Rivers</Button>
                  <Button variant="glass" size="sm">Sensors</Button>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative rounded-xl overflow-hidden bg-card border-2 border-border aspect-[16/10] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="relative z-10 text-center">
                  <MapPin className="h-16 w-16 text-accent mx-auto mb-4 animate-pulse-glow" />
                  <p className="text-xl font-semibold text-foreground mb-2">
                    Pakistan Flood Risk Visualization
                  </p>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Interactive GIS map showing real-time flood zones, river levels, 
                    and sensor data across all provinces
                  </p>
                  <div className="mt-6 flex gap-4 justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-destructive" />
                      <span className="text-xs text-muted-foreground">High Risk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-warning" />
                      <span className="text-xs text-muted-foreground">Medium Risk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-success" />
                      <span className="text-xs text-muted-foreground">Low Risk</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulation Controls */}
              <div className="mt-6 space-y-4">
                <div className="glass rounded-lg p-4 border border-border/30">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-foreground">
                      Rainfall Scenario
                    </label>
                    <span className="text-sm text-accent font-semibold">
                      {rainfallIntensity[0]}mm/hr
                    </span>
                  </div>
                  <Slider
                    value={rainfallIntensity}
                    onValueChange={setRainfallIntensity}
                    max={200}
                    step={5}
                    className="mb-2"
                  />
                  <p className="text-xs text-muted-foreground">
                    Adjust to test different rainfall scenarios
                  </p>
                </div>

                <div className="glass rounded-lg p-4 border border-border/30">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-foreground">
                      Simulation Speed
                    </label>
                    <span className="text-sm text-accent font-semibold">
                      {simulationSpeed[0]}x
                    </span>
                  </div>
                  <Slider
                    value={simulationSpeed}
                    onValueChange={setSimulationSpeed}
                    max={10}
                    step={1}
                    className="mb-2"
                  />
                  <p className="text-xs text-muted-foreground">
                    Speed up time-lapse simulation
                  </p>
                </div>

                <Button variant="hero" className="w-full">
                  Run Simulation
                </Button>
              </div>
            </div>

            {/* Risk Zones Panel */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 border border-border/50 shadow-card animate-fade-in">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-warning mr-2" />
                  Regional Risk Levels
                </h3>
                <div className="space-y-4">
                  {riskZones.map((zone, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">{zone.region}</span>
                        <span className={`text-sm font-bold ${zone.color}`}>
                          {zone.risk}
                        </span>
                      </div>
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${
                            zone.level > 70
                              ? "bg-destructive"
                              : zone.level > 40
                              ? "bg-warning"
                              : "bg-success"
                          }`}
                          style={{ width: `${zone.level}%` }}
                        />
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Risk Index: {zone.level}/100
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-6 border border-border/50 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Active Alerts
                </h3>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          High Risk Warning
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Sindh: Heavy rainfall expected in 36hrs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-warning/10 border border-warning/30">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          River Level Rising
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Indus River: +12% above normal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Shield, Brain, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import FeatureCard from "@/components/FeatureCard";
import heroBackground from "@/assets/hero-background.jpg";
import aiSimulationIcon from "@/assets/ai-simulation-icon.jpg";
import digitalTwinIcon from "@/assets/digital-twin-icon.jpg";
import warningSystemIcon from "@/assets/warning-system-icon.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackground}
            alt="Pakistan River System"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-gradient-glow" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8 border border-accent/20">
              <Droplets className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">
                Pakistan's AI-Powered Flood Management System
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Predict. Prepare.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Protect.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              IndusTwin transforms fragmented flood data into actionable intelligence using Digital Twin technology, 
              real-time IoT sensors, and deep learning—helping communities prepare proactively instead of reacting to disasters.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/dashboard">
                <Button variant="hero" size="xl" className="group">
                  View Live Dashboard
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/analytics">
                <Button variant="glass" size="xl">
                  Explore Analytics
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { value: "99.2%", label: "Prediction Accuracy" },
                { value: "48hr", label: "Early Warning Window" },
                { value: "15M+", label: "People Protected" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="glass rounded-xl p-6 border border-border/50 animate-fade-in"
                  style={{ animationDelay: `${400 + idx * 100}ms` }}
                >
                  <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Core Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powered by cutting-edge AI and real-time data integration, IndusTwin delivers 
              comprehensive flood risk intelligence across Pakistan.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={aiSimulationIcon}
              title="AI Simulation Engine"
              description="Advanced deep learning models process hydrological data, rainfall patterns, and terrain analysis to predict flood scenarios with 99%+ accuracy."
              delay={0}
            />
            <FeatureCard
              icon={digitalTwinIcon}
              title="Digital Twin Modeling"
              description="Real-time 3D simulation of Pakistan's river systems, dams, and watersheds—visualizing water flow, discharge rates, and flood propagation."
              delay={100}
            />
            <FeatureCard
              icon={warningSystemIcon}
              title="Early Warning System"
              description="Proactive alerts sent to NDMA, provincial authorities, and at-risk communities 48 hours before flooding—enabling evacuation and resource mobilization."
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-12 border border-border/50 shadow-elevation">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Built for National Scale
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  IndusTwin integrates with Pakistan's meteorological network, dam monitoring systems, 
                  and satellite imagery to provide comprehensive coverage across all flood-prone regions. 
                  From NDMA headquarters to village-level alerts, our platform scales to protect millions.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["IoT Sensors", "Machine Learning", "GIS Mapping", "Real-time Processing"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg text-accent text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 glass p-4 rounded-lg border border-border/50">
                  <Shield className="h-8 w-8 text-success" />
                  <div>
                    <div className="text-sm font-medium text-foreground">99.8% Uptime</div>
                    <div className="text-xs text-muted-foreground">Always monitoring</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass p-4 rounded-lg border border-border/50">
                  <Brain className="h-8 w-8 text-accent" />
                  <div>
                    <div className="text-sm font-medium text-foreground">AI-Driven Insights</div>
                    <div className="text-xs text-muted-foreground">Continuous learning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Real-World Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              IndusTwin is already making a difference across Pakistan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="glass rounded-2xl p-8 border border-border/50 text-center animate-fade-in-up hover:shadow-glow transition-all duration-300">
              <div className="text-5xl font-bold text-accent mb-2">15M+</div>
              <div className="text-lg font-semibold text-foreground mb-2">People Protected</div>
              <p className="text-sm text-muted-foreground">
                Across 45 high-risk districts in Pakistan
              </p>
            </div>
            <div className="glass rounded-2xl p-8 border border-border/50 text-center animate-fade-in-up hover:shadow-glow transition-all duration-300" style={{ animationDelay: "100ms" }}>
              <div className="text-5xl font-bold text-success mb-2">92%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Lives Saved</div>
              <p className="text-sm text-muted-foreground">
                Reduction in flood-related casualties since deployment
              </p>
            </div>
            <div className="glass rounded-2xl p-8 border border-border/50 text-center animate-fade-in-up hover:shadow-glow transition-all duration-300" style={{ animationDelay: "200ms" }}>
              <div className="text-5xl font-bold text-warning mb-2">$2.4B</div>
              <div className="text-lg font-semibold text-foreground mb-2">Economic Loss Prevented</div>
              <p className="text-sm text-muted-foreground">
                Through early evacuation and resource deployment
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto glass rounded-3xl p-8 border border-border/50 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              How IndusTwin Works
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  1
                </div>
                <h4 className="font-semibold text-foreground mb-2">Data Collection</h4>
                <p className="text-sm text-muted-foreground">
                  1,247 IoT sensors monitor rainfall, river levels, and soil moisture
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  2
                </div>
                <h4 className="font-semibold text-foreground mb-2">AI Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Deep learning models process data and predict flood scenarios
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  3
                </div>
                <h4 className="font-semibold text-foreground mb-2">Early Alerts</h4>
                <p className="text-sm text-muted-foreground">
                  48-hour warnings sent to authorities and at-risk communities
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  4
                </div>
                <h4 className="font-semibold text-foreground mb-2">Action Taken</h4>
                <p className="text-sm text-muted-foreground">
                  Coordinated response saves lives and minimizes damage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Trusted By Leading Organizations</h2>
            <p className="text-muted-foreground">
              Working together to protect Pakistan's future
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {["NDMA", "PMD", "WAPDA", "Provincial DMAs"].map((partner, idx) => (
              <div
                key={idx}
                className="glass rounded-xl p-6 border border-border/50 flex items-center justify-center hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <span className="text-lg font-bold text-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 border border-accent/20 shadow-glow">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Flood Response?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Pakistan's leading disaster management agencies using IndusTwin 
              to protect communities and save lives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/dashboard">
                <Button variant="hero" size="xl" className="group">
                  Launch Dashboard
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Waves className="h-6 w-6 text-accent" />
              <span className="text-sm text-muted-foreground">
                © 2025 IndusTwin. Protecting Pakistan's future.
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              Powered by AI, IoT & Digital Twin Technology
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

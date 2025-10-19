import { useState } from "react";
import Navigation from "@/components/Navigation";
import { MapPin, AlertTriangle, CheckCircle, Info, Bell, Download, Share2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Community = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const safetyTips = [
    {
      title: "Before a Flood",
      tips: [
        "Know your area's flood risk and evacuation routes",
        "Prepare an emergency kit with food, water, and medicines",
        "Keep important documents in waterproof containers",
        "Store emergency contacts and enable SMS alerts",
      ],
    },
    {
      title: "During a Flood",
      tips: [
        "Move to higher ground immediately if evacuation is ordered",
        "Avoid walking or driving through flood waters",
        "Stay informed via radio, TV, or mobile alerts",
        "Do not touch electrical equipment if wet",
      ],
    },
    {
      title: "After a Flood",
      tips: [
        "Return home only when authorities say it's safe",
        "Avoid flood water - it may be contaminated",
        "Document damage with photos for insurance",
        "Check for structural damage before re-entering buildings",
      ],
    },
  ];

  const emergencyContacts = [
    { service: "National Disaster Helpline", number: "1092", available: "24/7" },
    { service: "Rescue 1122", number: "1122", available: "24/7" },
    { service: "Police Emergency", number: "15", available: "24/7" },
    { service: "NDMA Emergency", number: "051-9205598", available: "24/7" },
  ];

  const districts = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Multan",
    "Hyderabad",
    "Peshawar",
    "Quetta",
    "Faisalabad",
    "Sialkot",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-6 sm:mb-8 animate-fade-in text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Community Flood Safety
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              Check flood risk in your area and learn how to stay safe
            </p>
          </div>


          {/* Risk Checker */}
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-in-up">
            <Card className="glass border-border/50 p-4 sm:p-6 lg:p-8 shadow-elevation">
              <div className="text-center mb-4 sm:mb-6">
                <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-accent mx-auto mb-3 sm:mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Check Your Area's Flood Risk
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Select your district to see current flood risk level and alerts
                </p>
              </div>


              <div className="space-y-4">
                <div>
                  <Label htmlFor="district" className="text-foreground mb-2 block">
                    Select Your District
                  </Label>
                  <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                    <SelectTrigger className="glass border-border/50">
                      <SelectValue placeholder="Choose your district..." />
                    </SelectTrigger>
                    <SelectContent className="glass border-border/50">
                      {districts.map((district) => (
                        <SelectItem key={district} value={district}>
                          {district}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedDistrict && (
                  <div className="mt-6 p-6 rounded-xl bg-success/10 border border-success/30 animate-fade-in">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="h-8 w-8 text-success" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Low Risk</h3>
                        <p className="text-sm text-muted-foreground">{selectedDistrict} District</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      No immediate flood threat detected. Continue monitoring for updates.
                    </p>
                    <Button variant="hero" className="w-full">
                      <Bell className="h-4 w-4 mr-2" />
                      Enable SMS Alerts for {selectedDistrict}
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Alert Signup */}
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-in-up">
            <Card className="glass border-accent/30 p-4 sm:p-6 lg:p-8 shadow-glow">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Bell className="h-6 w-6 sm:h-8 sm:w-8 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1 w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    Receive Free Flood Alerts
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Get early warning SMS alerts 48 hours before potential flooding in your area
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="glass border-border/50"
                    />
                    <Button variant="hero" className="sm:w-auto">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Free service. Standard SMS rates may apply.
                  </p>
                </div>
              </div>
            </Card>
          </div>


          {/* Safety Guide */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-6 sm:mb-8 animate-fade-in">
              Flood Safety Guide
            </h2>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">

              {safetyTips.map((section, idx) => (
                <Card
                  key={idx}
                  className="glass border-border/50 p-4 sm:p-6 animate-fade-in-up hover:shadow-glow transition-all duration-300"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 flex items-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent/20 flex items-center justify-center mr-2 sm:mr-3">
                      <span className="text-accent font-bold text-sm sm:text-base">{idx + 1}</span>
                    </div>
                    {section.title}
                  </h3>

                  <ul className="space-y-3">
                    {section.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <Card className="glass border-border/50 p-4 sm:p-6 lg:p-8 shadow-card animate-fade-in">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 flex items-center">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-destructive mr-2 sm:mr-3" />
                Emergency Contacts
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">

                {emergencyContacts.map((contact, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{contact.service}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-success/20 text-success">
                        {contact.available}
                      </span>
                    </div>
                    <a
                      href={`tel:${contact.number}`}
                      className="text-2xl font-bold text-accent hover:text-secondary transition-colors"
                    >
                      {contact.number}
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Resources Download */}
          <div className="max-w-4xl mx-auto">
            <Card className="glass border-border/50 p-4 sm:p-6 lg:p-8 shadow-card animate-fade-in">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                Downloadable Resources
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">

                <Button variant="glass" className="h-auto py-4 px-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-accent" />
                    <div className="text-left">
                      <div className="font-semibold text-foreground">Emergency Preparedness Guide</div>
                      <div className="text-xs text-muted-foreground">PDF, 2.4 MB</div>
                    </div>
                  </div>
                </Button>
                <Button variant="glass" className="h-auto py-4 px-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-accent" />
                    <div className="text-left">
                      <div className="font-semibold text-foreground">Evacuation Route Map</div>
                      <div className="text-xs text-muted-foreground">PDF, 1.8 MB</div>
                    </div>
                  </div>
                </Button>
                <Button variant="glass" className="h-auto py-4 px-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-accent" />
                    <div className="text-left">
                      <div className="font-semibold text-foreground">Family Emergency Plan Template</div>
                      <div className="text-xs text-muted-foreground">PDF, 856 KB</div>
                    </div>
                  </div>
                </Button>
                <Button variant="glass" className="h-auto py-4 px-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Share2 className="h-5 w-5 text-accent" />
                    <div className="text-left">
                      <div className="font-semibold text-foreground">Share Safety Tips</div>
                      <div className="text-xs text-muted-foreground">WhatsApp, SMS</div>
                    </div>
                  </div>
                </Button>
              </div>
            </Card>
          </div>

          {/* Info Banner */}
          <div className="max-w-4xl mx-auto mt-8 sm:mt-12 glass rounded-2xl p-4 sm:p-6 lg:p-8 border border-accent/20 text-center animate-fade-in">
            <Info className="h-10 w-10 sm:h-12 sm:w-12 text-accent mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              Stay Informed, Stay Safe
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              IndusTwin provides 48-hour advance warnings to help you and your family prepare. 
              Enable alerts, share this information with your community, and always follow official 
              guidance from NDMA and local authorities.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Community;

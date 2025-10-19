import Navigation from "@/components/Navigation";
import { TrendingUp, TrendingDown, Activity, CloudRain, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Analytics = () => {
  // Mock data for charts
  const rainfallData = [
    { month: "Jan", rainfall: 45, historical: 52 },
    { month: "Feb", rainfall: 38, historical: 48 },
    { month: "Mar", rainfall: 62, historical: 58 },
    { month: "Apr", rainfall: 88, historical: 75 },
    { month: "May", rainfall: 142, historical: 98 },
    { month: "Jun", rainfall: 185, historical: 125 },
    { month: "Jul", rainfall: 225, historical: 165 },
    { month: "Aug", rainfall: 198, historical: 142 },
  ];

  const floodHistoryData = [
    { year: "2019", incidents: 12, affected: 2.8 },
    { year: "2020", incidents: 18, affected: 4.2 },
    { year: "2021", incidents: 15, affected: 3.5 },
    { year: "2022", incidents: 24, affected: 8.1 },
    { year: "2023", incidents: 14, affected: 3.2 },
    { year: "2024", incidents: 19, affected: 5.4 },
  ];

  const forecastData = [
    { day: "Day 1", risk: 35, confidence: 98 },
    { day: "Day 2", risk: 42, confidence: 96 },
    { day: "Day 3", risk: 58, confidence: 94 },
    { day: "Day 4", risk: 72, confidence: 91 },
    { day: "Day 5", risk: 85, confidence: 88 },
    { day: "Day 6", risk: 78, confidence: 85 },
    { day: "Day 7", risk: 65, confidence: 82 },
  ];

  const keyInsights = [
    {
      title: "Rainfall Trend",
      value: "+42%",
      change: "vs last year",
      trend: "up",
      icon: CloudRain,
      color: "text-warning",
    },
    {
      title: "Flood Events",
      value: "19",
      change: "in 2024",
      trend: "up",
      icon: Activity,
      color: "text-destructive",
    },
    {
      title: "AI Accuracy",
      value: "99.2%",
      change: "+0.8% improvement",
      trend: "up",
      icon: TrendingUp,
      color: "text-success",
    },
    {
      title: "Response Time",
      value: "48hr",
      change: "early warning",
      trend: "down",
      icon: AlertCircle,
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Analytics & Insights
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              AI-driven forecasts and historical trend analysis
            </p>
          </div>

          {/* Key Insights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {keyInsights.map((insight, idx) => {
              const Icon = insight.icon;
              const TrendIcon = insight.trend === "up" ? TrendingUp : TrendingDown;
              return (
                <div
                  key={idx}
                  className="glass rounded-xl p-4 sm:p-6 border border-border/50 animate-fade-in-up hover:shadow-glow transition-all duration-300"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${insight.color}`} />
                    <TrendIcon className={`h-4 w-4 sm:h-5 sm:w-5 ${insight.color}`} />
                  </div>
                  <div className={`text-2xl sm:text-3xl font-bold mb-1 ${insight.color}`}>
                    {insight.value}
                  </div>
                  <div className="text-xs sm:text-sm text-foreground font-medium mb-1">
                    {insight.title}
                  </div>
                  <div className="text-xs text-muted-foreground">{insight.change}</div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Rainfall Trends */}
            <Card className="glass border-border/50 p-4 sm:p-6 animate-fade-in">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
                Rainfall Trends (2024)
              </h3>
              <ResponsiveContainer width="100%" height={250}>

                <AreaChart data={rainfallData}>
                  <defs>
                    <linearGradient id="rainfallGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(190 100% 50%)" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="hsl(190 100% 50%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="rainfall"
                    stroke="hsl(190 100% 50%)"
                    fillOpacity={1}
                    fill="url(#rainfallGradient)"
                    name="Current Rainfall (mm)"
                  />
                  <Line
                    type="monotone"
                    dataKey="historical"
                    stroke="hsl(var(--muted-foreground))"
                    strokeDasharray="5 5"
                    name="Historical Avg"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card>

            {/* Flood History */}
            <Card className="glass border-border/50 p-4 sm:p-6 animate-fade-in">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
                Historical Flood Events
              </h3>
              <ResponsiveContainer width="100%" height={250}>

                <BarChart data={floodHistoryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="incidents" fill="hsl(210 100% 45%)" name="Flood Incidents" />
                  <Bar dataKey="affected" fill="hsl(0 85% 60%)" name="People Affected (M)" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* AI Forecast */}
            <Card className="glass border-border/50 p-4 sm:p-6 animate-fade-in lg:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  7-Day AI Flood Risk Forecast
                </h3>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs text-accent font-medium">Live Prediction</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={forecastData}>
                  <defs>
                    <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(0 85% 60%)" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="hsl(0 85% 60%)" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="risk"
                    stroke="hsl(0 85% 60%)"
                    fill="url(#riskGradient)"
                    strokeWidth={3}
                    name="Flood Risk Level (%)"
                  />
                  <Line
                    type="monotone"
                    dataKey="confidence"
                    stroke="hsl(142 76% 45%)"
                    strokeWidth={2}
                    name="AI Confidence (%)"
                  />
                </LineChart>
              </ResponsiveContainer>

              <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="glass rounded-lg p-3 sm:p-4 border border-destructive/30">
                  <div className="text-xl sm:text-2xl font-bold text-destructive mb-1">Day 5</div>
                  <div className="text-xs sm:text-sm text-foreground mb-1 sm:mb-2">Peak Risk</div>
                  <div className="text-xs text-muted-foreground">85% flood probability</div>
                </div>
                <div className="glass rounded-lg p-3 sm:p-4 border border-success/30">
                  <div className="text-xl sm:text-2xl font-bold text-success mb-1">98%</div>
                  <div className="text-xs sm:text-sm text-foreground mb-1 sm:mb-2">Initial Accuracy</div>
                  <div className="text-xs text-muted-foreground">High confidence window</div>
                </div>
                <div className="glass rounded-lg p-3 sm:p-4 border border-accent/30">
                  <div className="text-xl sm:text-2xl font-bold text-accent mb-1">48hr</div>
                  <div className="text-xs sm:text-sm text-foreground mb-1 sm:mb-2">Warning Time</div>
                  <div className="text-xs text-muted-foreground">Before critical threshold</div>
                </div>
              </div>

            </Card>
          </div>

          {/* AI Model Info */}
          <div className="mt-6 sm:mt-8 glass rounded-2xl p-4 sm:p-6 lg:p-8 border border-border/50 shadow-elevation animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              AI-Powered Prediction Engine
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-3xl">
              IndusTwin's deep learning model processes over 1,200 real-time data points including 
              satellite imagery, IoT sensor readings, meteorological forecasts, and historical patterns 
              to deliver 99.2% accurate flood predictions up to 7 days in advance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                { label: "Data Sources", value: "1,247" },
                { label: "Models Trained", value: "156" },
                { label: "Predictions/Day", value: "48K" },
                { label: "Historical Data", value: "15 years" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-lg bg-card border border-border/50"
                >
                  <div className="text-xl sm:text-2xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

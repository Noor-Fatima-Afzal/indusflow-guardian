import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div
      className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border border-border/50"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-gradient-glow rounded-full blur-xl opacity-50" />
        <img 
          src={icon} 
          alt={title}
          className="relative w-20 h-20 rounded-xl object-cover"
        />
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;

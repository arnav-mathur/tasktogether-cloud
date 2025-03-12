
import { Infinity as InfinityIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

const Logo = ({ className, showText = true, size = 24 }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <InfinityIcon 
          size={size} 
          className="text-primary infinity-glow filter drop-shadow-lg" 
          strokeWidth={1.5}
        />
      </div>
      
      {showText && (
        <span className="text-2xl font-bold tracking-tighter">
          <span className="text-primary">Focus</span>
          <span className="text-accent">Flow</span>
        </span>
      )}
    </div>
  );
};

export default Logo;

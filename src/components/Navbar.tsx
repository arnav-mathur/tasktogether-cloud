
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-infinity.png" alt="Focus Flow Logo" className="h-9 w-auto infinity-glow filter drop-shadow-lg" />
          <span className="text-2xl font-bold tracking-tighter">
            <span className="text-primary">Focus</span>
            <span className="text-accent">Flow</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
            How it Works
          </a>
          <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="#waitlist">
            <Button 
              className="shadow-lg hover:shadow-xl transition-all focus-flow-gradient text-white rounded-full px-6"
            >
              Join Waitlist
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

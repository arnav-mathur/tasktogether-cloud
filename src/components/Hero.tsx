
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Logo from "./Logo";

const Hero = () => {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 focus-flow-gradient opacity-15 -z-10" />
      
      {/* Decorative elements - more vibrant */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl -z-10 animate-pulse-subtle" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl -z-10 animate-pulse-subtle" />
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block py-1 px-4 focus-flow-gradient rounded-full"
            >
              <span className="text-sm font-semibold text-white">
                Coming Soon — Join the Waitlist
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <Logo size={60} className="infinity-glow" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
            >
              Your AI <span className="title-gradient font-extrabold">Accountability Partner</span> for Maximum Productivity
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Focus Flow uses strategic accountability and AI to help you schedule, complete, and verify tasks — integrating with your calendar and sending perfectly timed reminders.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#waitlist">
              <Button className="rounded-full px-8 py-6 text-base shadow-xl hover:shadow-2xl focus-flow-gradient text-white transition-all">
                Join the Waitlist
              </Button>
            </a>
            <a href="#how-it-works">
              <Button variant="outline" className="rounded-full px-8 py-6 text-base bg-background/60 backdrop-blur-sm hover:bg-background/80 border border-primary/30 transition-all">
                Learn How It Works
              </Button>
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative mt-12 w-full max-w-5xl"
          >
            <div className="aspect-video rounded-2xl overflow-hidden neo-border enhanced-card-bg p-1 subtle-shadow">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/sNhVvYD7dds" 
                  title="Focus Flow App Demo"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* Decorative elements - more vibrant */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-2xl -z-10 animate-pulse-subtle" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-2xl -z-10 animate-pulse-subtle" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

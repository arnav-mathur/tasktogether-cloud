
import { motion } from "framer-motion";
import { Calendar, MessageSquare, Bell, Shield } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-10 h-10 text-primary" />,
    title: "Tell Your AI Partner What You Need To Do",
    description: "Use voice or text to tell your AI partner about your tasks. It can be as simple as saying 'I need to finish my presentation by Friday' or 'Remind me to call mom tomorrow'."
  },
  {
    icon: <Calendar className="w-10 h-10 text-primary" />,
    title: "AI Schedules Around Your Availability",
    description: "Your AI partner checks your calendar integration, understands your sleep schedule, and strategically plans when you should complete each task for maximum productivity."
  },
  {
    icon: <Bell className="w-10 h-10 text-primary" />,
    title: "Receive Smart, Timely Reminders",
    description: "Get perfectly timed notifications via app or WhatsApp that keep you on track without overwhelming you. Your AI partner knows when to nudge you gently."
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "How We Verify Your Tasks",
    description: "Choose from multiple verification methods: Photo verification authenticated by AI, location-based geotagging to confirm you're at the right place, or social verification from friends and family."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-full"
          >
            Simple Process
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl md:text-4xl font-bold tracking-tight"
          >
            How <span className="title-gradient">Focus Flow</span> Works
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl"
          >
            Our AI-powered accountability system makes staying productive easier than ever before.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/10 to-transparent -translate-x-1/2 z-0" />
          
          <div className="space-y-20 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 * index }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full glass-card mb-4 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">{step.description}</p>
                </div>
                
                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center size-10 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 z-20">
                  <div className="size-4 rounded-full bg-primary animate-pulse-subtle" />
                </div>
                
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

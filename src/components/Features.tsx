import { motion } from "framer-motion";
import { Calendar, Check, User, Users, MessageSquare, Award, Shield, Zap, Ban } from "lucide-react";

const features = [
  {
    icon: <User className="w-6 h-6 text-primary" />,
    title: "AI Accountability Partner",
    description: "Personal AI assistant that helps you stay focused and complete your tasks on time."
  },
  {
    icon: <Calendar className="w-6 h-6 text-primary" />,
    title: "Calendar Integration",
    description: "Seamlessly integrates with Google Calendar, Apple Calendar and more to optimize your schedule."
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    title: "Voice & Text Conversion",
    description: "Quickly add tasks using voice-to-task or text-to-task features for maximum convenience."
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Strategic Reminders",
    description: "Perfectly timed notifications to ensure you never miss important tasks."
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    title: "WhatsApp Integration",
    description: "Interact with your accountability partner directly through WhatsApp."
  },
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: "Challenges & Streaks",
    description: "Gamify your productivity with challenges, streaks and leaderboards with friends and family."
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Task Verification System",
    description: "Verify your tasks with photo verification, location-based geotagging, or social verification from friends and family."
  },
  {
    icon: <Ban className="w-6 h-6 text-primary" />,
    title: "App Blocking",
    description: "Block distracting apps during focus sessions to maintain productivity and stay on track with your goals."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-background/0 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-full"
          >
            Powerful Features
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl md:text-4xl font-bold tracking-tight"
          >
            Everything you need to <span className="title-gradient">maximize productivity</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl"
          >
            Focus Flow combines cutting-edge AI with proven productivity techniques to help you achieve more with less stress.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 mb-4">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

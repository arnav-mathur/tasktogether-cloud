
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Focus Flow has completely transformed my productivity. The AI partner feels like having a personal assistant who actually cares about my success!",
    author: "Emma R.",
    role: "Marketing Director"
  },
  {
    quote: "I've tried dozens of productivity apps, but nothing sticks like Focus Flow. The accountability features make all the difference.",
    author: "Michael T.",
    role: "Software Engineer"
  },
  {
    quote: "The calendar integration and WhatsApp reminders are game-changers. I'm getting more done with less stress than ever before.",
    author: "Sarah L.",
    role: "Graduate Student"
  },
  {
    quote: "Competing with my friends on the leaderboard has turned productivity into something fun rather than a chore.",
    author: "David K.",
    role: "Entrepreneur"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-background to-background/0 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-background/0 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-full"
          >
            Success Stories
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl md:text-4xl font-bold tracking-tight"
          >
            What Our <span className="title-gradient">Beta Users</span> Say
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl"
          >
            Early adopters are already seeing remarkable improvements in their productivity and task completion rates.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative p-6 glass-card subtle-shadow"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="inline-block mr-1 text-primary"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg italic mb-4">{testimonial.quote}</blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
              
              {/* Decorative quote mark */}
              <div className="absolute top-4 right-4 text-6xl leading-none text-primary/10 font-serif">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

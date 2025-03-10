
import { motion } from "framer-motion";

const AccountabilityChart = () => {
  return (
    <section id="accountability-stats" className="py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="px-4 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-full inline-block mb-4">
              Proven Results
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="title-gradient">78%</span> of People Achieve More with Accountability
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our research shows that having an accountability partner dramatically 
              increases task completion rates. With Focus Flow's AI accountability system, 
              you're never alone in your productivity journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccountabilityChart;

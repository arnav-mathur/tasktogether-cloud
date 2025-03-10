
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Improved with Accountability", value: 78 },
  { name: "Other Methods", value: 22 },
];

const COLORS = ["#6366f1", "#1e293b"];

const AccountabilityChart = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

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
            className="flex-1 text-center lg:text-left"
          >
            <span className="px-4 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-full inline-block mb-4">
              Proven Results
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="title-gradient">78%</span> of People Achieve More with Accountability
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl lg:max-w-none">
              Our research shows that having an accountability partner dramatically 
              increases task completion rates. With Focus Flow's AI accountability system, 
              you're never alone in your productivity journey.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 h-80 flex items-center justify-center glass-card p-6 rounded-2xl subtle-shadow"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={animate ? 120 : 80}
                  paddingAngle={6}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  animationDuration={1500}
                  animationBegin={300}
                >
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                      stroke="none"
                      className={index === 0 ? "drop-shadow-lg" : ""}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, "Percentage"]}
                  contentStyle={{ 
                    backgroundColor: "rgba(15, 23, 42, 0.8)", 
                    borderRadius: "0.5rem",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(148, 163, 184, 0.2)"
                  }}
                  itemStyle={{ color: "#e2e8f0" }}
                />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="absolute">
              <div className="text-center">
                <span className="text-5xl font-bold text-primary animate-pulse-subtle">78%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccountabilityChart;

import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-tighter text-primary">
                Focus<span className="text-accent">Flow</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Focus Flow helps you achieve more through strategic accountability, AI-powered scheduling, and smart task verification.
            </p>
            
            <div className="mt-6 flex gap-4">
              <a 
                href="https://x.com/withfocusflow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.instagram.com/withfocusflow/?igsh=cDNoMXpvZWEwMGs2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
              </li>
              <li>
                <a 
                  href="mailto:focusflow.main@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
              </li>
              <li>
                <Link to="/delete-account" className="text-muted-foreground hover:text-primary transition-colors">Delete Account</Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookies</a>
              </li>
              <li>
                <a 
                  href="mailto:focusflow.main@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Focus Flow. All rights reserved.
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-center"
          >
            <div className="px-4 py-1 rounded-full bg-primary/10 text-xs">
              Coming soon to <span className="font-semibold text-primary">iOS</span> and <span className="font-semibold text-primary">Android</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

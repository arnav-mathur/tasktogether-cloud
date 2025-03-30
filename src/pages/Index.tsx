import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  // Smooth scroll to element when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth",
          });
        }
      }
    };

    // Handle initial load with hash
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    // Handle hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Preload logo images
  useEffect(() => {
    const preloadImages = () => {
      const infinityLogo = new Image();
      infinityLogo.src = "/logo-infinity.png";
      
      const fullLogo = new Image();
      fullLogo.src = "/logo-full.png";
    };
    
    preloadImages();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-[#f5f7ff] to-[#eef2ff]"
      >
        {/* Enhanced background elements */}
        <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 -z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-tr from-accent/5 via-secondary/5 to-primary/5 -z-10" />
        
        {/* Decorative orbs */}
        <div className="fixed top-1/4 left-1/5 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10 animate-float" />
        <div className="fixed bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-accent/5 blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }} />
        
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Waitlist />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;

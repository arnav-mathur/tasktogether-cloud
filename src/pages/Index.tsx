
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AccountabilityChart from "@/components/AccountabilityChart";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
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
        className="min-h-screen bg-background"
      >
        <Navbar />
        <main>
          <Hero />
          <Features />
          <AccountabilityChart />
          <HowItWorks />
          <Testimonials />
          <Waitlist />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;

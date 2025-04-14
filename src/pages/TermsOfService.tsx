import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f7ff] to-[#eef2ff]">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="gap-2 mb-4">
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Focus Flow Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Effective Date: April 4th, 2025</p>
          
          <div className="prose prose-slate max-w-none">
            <p className="lead">These Terms of Service ("Terms") govern your use of Focus Flow ("the App"). By using the App, you agree to these Terms.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Purpose</h2>
            <p>Focus Flow is designed to help users plan, track, and complete personal tasks using AI support and accountability features.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. User Responsibilities</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>You agree to use the app for lawful and respectful purposes.</li>
              <li>You are responsible for ensuring the accuracy of the data you provide.</li>
              <li>You agree not to upload inappropriate or misleading content (e.g., fake challenge proof).</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. AI and User-Generated Verification</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>The AI (e.g., Gemini) is used to support planning and task verification.</li>
              <li>User-submitted photos or geolocation data may be used for verification and are subject to the Privacy Policy.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Beta Disclaimer</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>During beta, features may be unstable or experimental.</li>
              <li>We may remove or change access at any time without notice.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Account Suspension/Termination</h2>
            <p>We reserve the right to suspend or terminate accounts that violate these Terms or compromise the community experience.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Intellectual Property</h2>
            <p>All content, branding, code, and AI prompts are the property of Focus Flow.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
            <p>We are not liable for any productivity outcomes, lost data, or calendar conflicts. Use of the app is at your own discretion.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
            <p>These Terms may change from time to time. Continued use of the app constitutes acceptance of any changes.</p>
            
            <h3 className="text-lg font-medium mt-6 mb-4">Contact</h3>
            <p>If you have any questions about these Terms, please contact us at: <a href="mailto:focusflow.main@gmail.com" className="text-primary hover:underline">focusflow.main@gmail.com</a></p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;

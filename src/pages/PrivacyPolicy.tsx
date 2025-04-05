
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  useEffect(() => {
    // Scroll to top when component mounts
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Focus Flow Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last Updated: 4th April, 2025</p>
          
          <div className="prose prose-slate max-w-none">
            <p className="lead">At Focus Flow, your privacy matters. This Privacy Policy explains how we collect, use, and protect your information as you use our mobile application and services ("Focus Flow", "we", "our").</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <h3 className="text-lg font-medium mt-6 mb-2">Personal Information (provided by you):</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name, username</li>
              <li>Email address (Google login or email/password)</li>
              <li>Birthday or age</li>
              <li>ADHD status (Yes/No)</li>
              <li>Focus duration (e.g. how long you can stay focused)</li>
              <li>Habits or goals you're working on</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-2">Calendar Access:</h3>
            <p>We request permission to access your Google Calendar to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Read your availability (to plan tasks)</li>
              <li>Add events on your behalf (to schedule tasks)</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-2">Analytics Data (automatically collected):</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>App usage patterns</li>
              <li>Device type, OS version</li>
              <li>Interaction data (through Google Analytics and Firebase Analytics)</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>To personalize your task planning and recommendations</li>
              <li>To create and schedule tasks into your calendar</li>
              <li>To verify challenge completion (AI/photo/location-based)</li>
              <li>To improve app features through aggregated, anonymized analytics</li>
              <li>To understand user behavior and improve onboarding or UX</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. Use of AI (Gemini)</h2>
            <p>We may use AI models (e.g. Google Gemini) to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Help plan and schedule your tasks based on your habits, availability, and preferences</li>
              <li>Verify challenge completions (e.g., via image or location inputs, with user consent)</li>
            </ul>
            <p>We do not sell your data to any third party. AI analysis is used strictly to improve your personalized experience.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Storage & Security</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>All data is stored securely using Firebase.</li>
              <li>Google Calendar tokens are stored with encryption and can be revoked anytime.</li>
              <li>We use HTTPS and industry-standard practices to protect your data.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Your Rights</h2>
            <p>Depending on your location (e.g., EU, California), you may have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Request a copy of your data</li>
              <li>Ask us to delete your data</li>
              <li>Revoke access to your calendar or delete your account</li>
            </ul>
            <p>To request any of the above, contact us at: <a href="mailto:focusflow.main@gmail.com" className="text-primary hover:underline">focusflow.main@gmail.com</a></p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Children's Privacy</h2>
            <p>Focus Flow is not intended for users under 13. If you are under this age, please do not use the app. We do not knowingly collect data from children under 13.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to this Policy</h2>
            <p>We may update this Privacy Policy. You'll be notified via in-app updates or email if major changes occur.</p>
            
            <h3 className="text-lg font-medium mt-6 mb-2">Contact Us:</h3>
            <p>Email: <a href="mailto:focusflow.main@gmail.com" className="text-primary hover:underline">focusflow.main@gmail.com</a></p>
            <p>Website: <a href="https://focusflowapp.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://focusflowapp.io/</a></p>
            
            <p className="mt-8 text-muted-foreground">This Privacy Policy is compliant with GDPR, CCPA, and other major data regulations. By using Focus Flow, you consent to this Privacy Policy.</p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

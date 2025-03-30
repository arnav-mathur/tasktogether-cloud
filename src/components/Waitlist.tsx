
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

import WaitlistForm from "./waitlist/WaitlistForm";
import FeaturesDialog from "./waitlist/FeaturesDialog";
import FeedbackDialog from "./waitlist/FeedbackDialog";
import PriceDialog from "./waitlist/PriceDialog";
import WaitlistBenefits from "./waitlist/WaitlistBenefits";

const features = [
  "Voice & Text to task - for easy and efficient calendar management in seconds",
  "Challenges & Streaks - that you can do with, and are verified by your friends",
  "AI Accountability Partner - that verifies tasks and sends strategic & personalised Reminders therby holding you accountable",
  "Task Verification System (AI, Location & Social)",
  "App Blocking - that blocks distracting apps during focus sessions"
];

interface FeatureRating {
  feature: string;
  excitement: number;
}

const Waitlist = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFeaturesDialog, setShowFeaturesDialog] = useState(false);
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);
  const [showPriceDialog, setShowPriceDialog] = useState(false);
  const [featureRatings, setFeatureRatings] = useState<FeatureRating[]>(
    features.map(feature => ({ feature, excitement: 0 }))
  );
  const [feedback, setFeedback] = useState("");
  const [pricePreference, setPricePreference] = useState(5);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
  const handleJoinWaitlist = (email: string, name: string) => {
    setEmail(email);
    setName(name);
    setShowFeaturesDialog(true);
  };
  
  const handleFeatureRatingChange = (feature: string, excitement: number) => {
    setFeatureRatings(prevRatings => 
      prevRatings.map(rating => 
        rating.feature === feature ? { ...rating, excitement } : rating
      )
    );
  };
  
  const handleFeatureSubmit = () => {
    setShowFeaturesDialog(false);
    setShowFeedbackDialog(true);
  };
  
  const handleFeedbackSubmit = () => {
    setShowFeedbackDialog(false);
    setShowPriceDialog(true);
  };
  
  const handlePriceSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      if (!email) {
        throw new Error("Email is required");
      }
      
      // Add user to Supabase waitlist table with feature ratings, feedback, and price preference
      const { error } = await supabase
        .from('waitlist')
        .insert([{
          email: email,
          name: name || null,
          feature_ratings: featureRatings,
          feedback: feedback.trim() || null,
          price_preference: pricePreference
        }]);
      
      if (error) throw error;
      
      toast.success("You've been added to our waitlist!", {
        description: "Thank you for your feedback. We'll notify you when Focus Flow launches.",
      });
      
      // Close all dialogs and reset form
      setShowPriceDialog(false);
      setFeatureRatings(features.map(feature => ({ feature, excitement: 0 })));
      setFeedback("");
      setEmail("");
      setName("");
      setPricePreference(5);
    } catch (error) {
      console.error("Error adding to waitlist:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background -z-10" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto glass-card p-8 md:p-12 subtle-shadow"
        >
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4">
              Limited Spots Available
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the <span className="title-gradient">Focus Flow</span> Waitlist
            </h2>
            <p className="text-lg text-muted-foreground">
              Be among the first to experience the future of productivity and accountability.
            </p>
          </div>
          
          <WaitlistForm onSubmit={handleJoinWaitlist} />
          <WaitlistBenefits />
        </motion.div>
      </div>
      
      <FeaturesDialog 
        open={showFeaturesDialog} 
        onOpenChange={setShowFeaturesDialog}
        features={features}
        featureRatings={featureRatings}
        onFeatureRatingChange={handleFeatureRatingChange}
        onSubmit={handleFeatureSubmit}
      />
      
      <FeedbackDialog
        open={showFeedbackDialog}
        onOpenChange={setShowFeedbackDialog}
        feedback={feedback}
        onFeedbackChange={setFeedback}
        onSubmit={handleFeedbackSubmit}
      />

      <PriceDialog
        open={showPriceDialog}
        onOpenChange={setShowPriceDialog}
        pricePreference={pricePreference}
        onPriceChange={setPricePreference}
        onSubmit={handlePriceSubmit}
        isSubmitting={isSubmitting}
      />
    </section>
  );
};

export default Waitlist;

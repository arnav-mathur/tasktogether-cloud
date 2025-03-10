
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const features = [
  "AI Accountability Partner",
  "Calendar Integration",
  "Voice & Text Conversion",
  "Strategic Reminders",
  "WhatsApp Integration",
  "Challenges & Streaks",
  "Task Verification System",
  "App Blocking"
];

const Waitlist = () => {
  const { currentUser, signInWithGoogle } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFeaturesDialog, setShowFeaturesDialog] = useState(false);
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [feedback, setFeedback] = useState("");
  
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      // Show features selection dialog after successful sign-in
      setShowFeaturesDialog(true);
    } catch (error) {
      console.error("Error signing in with Google:", error);
      toast.error("Failed to sign in with Google. Please try again.");
    }
  };
  
  const handleFeatureSubmit = () => {
    if (selectedFeatures.length === 0) {
      toast.error("Please select at least one feature you're excited about");
      return;
    }
    
    // Close features dialog and open feedback dialog
    setShowFeaturesDialog(false);
    setShowFeedbackDialog(true);
  };
  
  const handleFeedbackSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      if (!currentUser?.email) {
        throw new Error("User email not found");
      }
      
      // Add user to Firestore waitlist collection with feature preferences and feedback
      await addDoc(collection(db, "waitlist"), {
        email: currentUser.email,
        name: currentUser.displayName || null,
        uid: currentUser.uid,
        selectedFeatures,
        feedback: feedback.trim() || null,
        createdAt: serverTimestamp()
      });
      
      toast.success("You've been added to our waitlist!", {
        description: "Thank you for your feedback. We'll notify you when Focus Flow launches.",
      });
      
      // Close all dialogs
      setShowFeedbackDialog(false);
      setSelectedFeatures([]);
      setFeedback("");
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
          
          <div className="flex flex-col space-y-6 items-center">
            <Button 
              onClick={handleGoogleSignIn}
              className="w-full max-w-md rounded-lg h-12 px-8 shadow-lg hover:shadow-xl bg-card hover:bg-card/90 border border-border transition-all flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                <path fill="none" d="M1 1h22v22H1z" />
              </svg>
              Sign up with Google
            </Button>
            
            <p className="text-sm text-muted-foreground text-center">
              We respect your privacy and will never share your information.
            </p>
          </div>
          
          <div className="mt-10 pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-sm">Early access to new features</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-sm">Exclusive launch pricing</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-sm">Priority customer support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Features Selection Dialog */}
      <Dialog open={showFeaturesDialog} onOpenChange={setShowFeaturesDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Which features are you most excited about?</DialogTitle>
            <DialogDescription>
              Select all features you're looking forward to using with Focus Flow.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox
                  id={`feature-${feature}`}
                  checked={selectedFeatures.includes(feature)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedFeatures([...selectedFeatures, feature]);
                    } else {
                      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
                    }
                  }}
                />
                <label
                  htmlFor={`feature-${feature}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {feature}
                </label>
              </div>
            ))}
          </div>
          <Button onClick={handleFeatureSubmit} className="w-full">Continue</Button>
        </DialogContent>
      </Dialog>
      
      {/* Feedback Dialog */}
      <Dialog open={showFeedbackDialog} onOpenChange={setShowFeedbackDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share your thoughts with us</DialogTitle>
            <DialogDescription>
              What would you like to see (or not see) in Focus Flow?
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              placeholder="Your feedback helps us improve Focus Flow..."
              className="min-h-32"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          <Button 
            onClick={handleFeedbackSubmit} 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Join Waitlist"}
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Waitlist;

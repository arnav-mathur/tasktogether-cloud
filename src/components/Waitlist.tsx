
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";

const features = [
  "AI Accountability Partner",
  "Voice & Text to task",
  "Strategic Reminders (Whatsapp & Notifications)",
  "Challenges & Streaks",
  "Task Verification System (AI, Location & Social)",
  "App Blocking"
];

const Waitlist = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFeaturesDialog, setShowFeaturesDialog] = useState(false);
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);
  const [showPriceDialog, setShowPriceDialog] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [feedback, setFeedback] = useState("");
  const [pricePreference, setPricePreference] = useState(5);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
  const handleJoinWaitlist = () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // Show features selection dialog
    setShowFeaturesDialog(true);
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
  
  const handleFeedbackSubmit = () => {
    // Close feedback dialog and open price preference dialog
    setShowFeedbackDialog(false);
    setShowPriceDialog(true);
  };
  
  const handlePriceSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      if (!email) {
        throw new Error("Email is required");
      }
      
      // Add user to Supabase waitlist table with feature preferences, feedback, and price preference
      const { error } = await supabase
        .from('waitlist')
        .insert([{
          email: email,
          name: name || null,
          selected_features: selectedFeatures,
          feedback: feedback.trim() || null,
          price_preference: pricePreference
        }]);
      
      if (error) throw error;
      
      toast.success("You've been added to our waitlist!", {
        description: "Thank you for your feedback. We'll notify you when Focus Flow launches.",
      });
      
      // Close all dialogs and reset form
      setShowPriceDialog(false);
      setSelectedFeatures([]);
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

  const formatPriceLabel = (value: number) => {
    if (value === 0) return "Free";
    if (value >= 10) return "$10+";
    return `$${value}`;
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
          
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name (Optional)
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
            
            <Button 
              onClick={handleJoinWaitlist}
              className="w-full max-w-md mx-auto rounded-lg h-12 px-8 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              Continue to Waitlist
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
          <Button onClick={handleFeedbackSubmit} className="w-full">
            Continue
          </Button>
        </DialogContent>
      </Dialog>

      {/* Price Preference Dialog */}
      <Dialog open={showPriceDialog} onOpenChange={setShowPriceDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>What would you be willing to pay?</DialogTitle>
            <DialogDescription>
              Drag the slider to indicate how much you'd be willing to pay for Focus Flow per month.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Free</span>
                <span className="text-sm font-medium">$10+</span>
              </div>
              <Slider
                value={[pricePreference]}
                min={0}
                max={10}
                step={1}
                onValueChange={(value) => setPricePreference(value[0])}
                className="py-4"
              />
              <div className="text-center">
                <span className="text-lg font-semibold">{formatPriceLabel(pricePreference)}</span>
                <p className="text-sm text-muted-foreground mt-1">per month</p>
              </div>
            </div>
          </div>
          <Button 
            onClick={handlePriceSubmit} 
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


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface WaitlistFormProps {
  onSubmit: (email: string, name: string) => void;
}

const WaitlistForm = ({ onSubmit }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
  const handleSubmit = () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    onSubmit(email, name);
  };
  
  return (
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
        onClick={handleSubmit}
        className="w-full max-w-md mx-auto rounded-lg h-12 px-8 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
      >
        Continue to Waitlist
      </Button>
      
      <p className="text-sm text-muted-foreground text-center">
        We respect your privacy and will never share your information.
      </p>
    </div>
  );
};

export default WaitlistForm;

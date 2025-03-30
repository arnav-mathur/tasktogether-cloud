
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FeedbackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  feedback: string;
  onFeedbackChange: (feedback: string) => void;
  onSubmit: () => void;
}

const FeedbackDialog = ({ 
  open, 
  onOpenChange, 
  feedback, 
  onFeedbackChange, 
  onSubmit 
}: FeedbackDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
            onChange={(e) => onFeedbackChange(e.target.value)}
          />
        </div>
        <Button onClick={onSubmit} className="w-full">
          Continue
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackDialog;


import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FeaturesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  features: string[];
  selectedFeatures: string[];
  onFeatureChange: (feature: string, checked: boolean) => void;
  onSubmit: () => void;
}

const FeaturesDialog = ({ 
  open, 
  onOpenChange, 
  features, 
  selectedFeatures, 
  onFeatureChange, 
  onSubmit 
}: FeaturesDialogProps) => {
  const handleSubmit = () => {
    if (selectedFeatures.length === 0) {
      toast.error("Please select at least one feature you're excited about");
      return;
    }
    onSubmit();
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
                  onFeatureChange(feature, !!checked);
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
        <Button onClick={handleSubmit} className="w-full">Continue</Button>
      </DialogContent>
    </Dialog>
  );
};

export default FeaturesDialog;

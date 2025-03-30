
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FeatureRating {
  feature: string;
  excitement: number;
}

interface FeaturesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  features: string[];
  featureRatings: FeatureRating[];
  onFeatureRatingChange: (feature: string, excitement: number) => void;
  onSubmit: () => void;
}

const FeaturesDialog = ({ 
  open, 
  onOpenChange, 
  features, 
  featureRatings, 
  onFeatureRatingChange, 
  onSubmit 
}: FeaturesDialogProps) => {
  const handleSubmit = () => {
    // Check if at least one feature has an excitement level > 0
    const hasRatedFeature = featureRatings.some(rating => rating.excitement > 0);
    if (!hasRatedFeature) {
      toast.error("Please rate at least one feature you're excited about");
      return;
    }
    onSubmit();
  };
  
  const getExcitementLevel = (feature: string): number => {
    const rating = featureRatings.find(r => r.feature === feature);
    return rating ? rating.excitement : 0;
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Rate your excitement for these features</DialogTitle>
          <DialogDescription>
            On a scale of 0-10, how excited are you about each feature of Focus Flow?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          {features.map((feature) => (
            <div key={feature} className="space-y-2">
              <label
                htmlFor={`feature-${feature}`}
                className="text-sm font-medium leading-none"
              >
                {feature}
              </label>
              <Slider
                id={`feature-${feature}`}
                min={0}
                max={10}
                step={1}
                value={[getExcitementLevel(feature)]}
                onValueChange={(value) => {
                  onFeatureRatingChange(feature, value[0]);
                }}
                showValue
                valueDisplay={`${getExcitementLevel(feature)}/10`}
              />
            </div>
          ))}
        </div>
        <Button onClick={handleSubmit} className="w-full">Continue</Button>
      </DialogContent>
    </Dialog>
  );
};

export default FeaturesDialog;


import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PriceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pricePreference: number;
  onPriceChange: (value: number) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

const PriceDialog = ({ 
  open, 
  onOpenChange, 
  pricePreference, 
  onPriceChange, 
  onSubmit,
  isSubmitting
}: PriceDialogProps) => {
  const formatPriceLabel = (value: number) => {
    if (value === 0) return "Free";
    if (value >= 10) return "$10+";
    return `$${value}`;
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
              onValueChange={(value) => onPriceChange(value[0])}
              className="py-4"
            />
            <div className="text-center">
              <span className="text-lg font-semibold">{formatPriceLabel(pricePreference)}</span>
              <p className="text-sm text-muted-foreground mt-1">per month</p>
            </div>
          </div>
        </div>
        <Button 
          onClick={onSubmit} 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Join Waitlist"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default PriceDialog;


import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  showValue?: boolean;
  valueDisplay?: string;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, showValue, valueDisplay, ...props }, ref) => (
  <div className="relative w-full">
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
    {showValue && (
      <div className="absolute -top-6 right-0 text-sm font-medium">
        {valueDisplay || props.value}
      </div>
    )}
    <div className="flex justify-between mt-1 text-xs text-muted-foreground">
      <span>0</span>
      <span>10</span>
    </div>
  </div>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }

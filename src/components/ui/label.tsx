import * as React from "react";
import { cn } from "@/lib/utils";

const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentProps<"label">
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "flex items-center gap-x-2 text-[10px] font-bold tracking-[0.18em] text-white/40 uppercase mb-2 cursor-pointer",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";

export { Label };

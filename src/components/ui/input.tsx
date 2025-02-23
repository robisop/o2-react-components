import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-5xl w-full sm:w-[400px] caret-surface-brand rounded-lg border border-surface-x-high bg-transparent py-sm pl-md pr-xs body-md text-content-xx-high transition-colors placeholder:text-content-low focus-visible:border-state-focus focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-state-focus hover:outline-none hover:ring hover:ring-state-hover disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

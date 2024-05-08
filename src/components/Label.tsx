import * as React from "react";

import { cn } from "../utils/cn";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export default function Label({ className, children, ...props }: LabelProps) {
  return (
    <label
      className={cn("text-sm ml-1", className)}
      {...props}
    >
      {children}
    </label>
  );
}

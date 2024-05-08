import * as React from "react";

import { cn } from "../utils/cn";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export default function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "flex h-8 w-full rounded-md border p-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-slate-400 invalid:text-slate-400",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

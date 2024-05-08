import * as React from "react";
import { cn } from "../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, type, ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "px-4 py-1 text-sm uppercase font-semibold rounded-md ring text-white bg-blue-600 shadow-lg hover:bg-blue-700",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

import * as React from "react";
import {cn} from "../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "black" | "white" | "outline";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "black", children, ...props }, ref) => {
    
    // Base Styles (Layout & Animation)
    const baseStyles = "px-6 py-2 md:px-10 md:py-4 rounded-full text-sm md:text-base font-medium transition-all duration-300 active:scale-95 cursor-pointer border";

    // Variasi Berdasarkan Props
    const variants = {
      // Tombol Hitam (Default)
      black: "bg-black text-white border-black hover:bg-transparent hover:text-black dark:bg-white dark:text-black dark:border-white dark:hover:bg-transparent dark:hover:text-white",
      
      // Tombol Putih
      white: "bg-white text-black border-white hover:bg-transparent hover:text-white dark:bg-zinc-900 dark:text-white dark:border-zinc-800 dark:hover:bg-white dark:hover:text-black",
      
      // Tombol Garis Saja (Outline)
      outline: "bg-transparent border-neutral-700 text-neutral-700 hover:bg-black hover:text-white hover:border-black dark:border-neutral-300 dark:text-neutral-300 dark:hover:bg-white dark:hover:text-black dark:hover:border-white",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";
import * as React from "react";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-line  focus:ring-slate-400  focus:ring-offset-2 displayed:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900",
  {
    variants: {
      variant: {
        default:
          "bg-sky-600 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100",

        link: "text-sky-600 bg-transparent dark:bg-transparent underline-offset-4 hover:underline  dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
        ghost:
          "text-sky-600 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

import { Slot } from "@radix-ui/react-slot";
import { classNames } from "./lib/classNames";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

/**
 * Acceptance Criteria:
 * The button…
 * - is a button element by default ✅
 * - renders the children prop ✅
 * - has a default style (rounded corners, padding, background color, text color) ✅
 * - has a default style that lays out the children ✅
 * - has a hover state ✅
 * - has a disabled state ✅
 * - has a focused state ✅
 * - allow the any className to be passed to it overriding the default style ✅
 * - has allow any event handlers (or other button props) to be passed to it ✅
 * - can be any other element (e.g. a, div, etc.) ✅
 * - should not care about icons inside the button ✅
 * - has multiple color variants (primary, success, danger) ✅
 * - has multiple size variants (sm, md, lg) ✅
 * - has an "icon only" variant with a square aspect ratio ✅
 * - should support a ref ✅
 */

const buttonVariants = cva(
  "rounded-md flex items-center gap-2 hover:bg-slate-900 disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-pink-500",
  {
    variants: {
      variant: {
        default: "bg-slate-700 text-white",
        primary: "bg-pink-500 text-black",
        success: "bg-green-500 text-white",
        danger: "bg-red-500 text-white",
      },
      size: {
        sm: "h-7 px-3 text-sm",
        md: "h-9 px-4 text-base",
        lg: "h-11 px-5 text-lg",
        icon: "size-9 justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

type ButtonProps = {
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, asChild, variant, size, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={classNames(buttonVariants({ variant, size }), className)}
        {...props}
        ref={ref}
      >
        {children}
      </Comp>
    );
  }
);

export default Button;

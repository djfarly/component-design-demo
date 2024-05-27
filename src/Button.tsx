import { Slot } from "@radix-ui/react-slot";
import { classNames } from "./lib/classNames";

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
 * - should not care about icons inside the button
 * - has multiple color variants (primary, success, danger)
 * - has multiple size variants (sm, md, lg)
 * - has an "icon only" variant with a square aspect ratio
 * - should support a ref
 */

type ButtonProps = {
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, asChild, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={classNames(
        "rounded-full bg-slate-700 text-white px-4 py-2 flex items-center hover:bg-slate-900 disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-pink-500",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default Button;

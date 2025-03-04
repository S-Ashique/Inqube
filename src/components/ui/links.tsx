import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Link from "next/link";

export const linkVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium  transition-all duration-300  disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 hover:scale-105 active:scale-90 focus-visible:scale-105",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-heading hover:bg-primary/80 focus-visible:bg-primary/80 active:bg-primary/80 [&_svg]:fill-text [&_svg]:stroke-text",
        outline:
          "border bg-accent hover:bg-muted focus-visible:bg-muted active:bg-muted",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export function Links({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<typeof Link> &
  VariantProps<typeof linkVariants> & {
    asChild?: boolean;
  }) {
  return (
    <Link
      className={cn(linkVariants({ variant, size, className }))}
      {...props}
    />
  );
}

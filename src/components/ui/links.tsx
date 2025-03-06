import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Link from "next/link";

export const linkVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm transition-all duration-300  disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 shrink-0 ",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-heading hover:bg-primary/80 focus-visible:bg-primary/80 active:bg-primary/80 [&_svg]:fill-heading [&_svg]:stroke-heading",
        outline:
          "border bg-muted hover:bg-accent focus-visible:bg-accent active:bg-accent hover:text-heading focus-visible:text-heading active:text-heading",
        link: "hover:text-heading focus-visible:text-heading active:text-heading",
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
  is_scale = true,
  ...props
}: React.ComponentProps<typeof Link> &
  VariantProps<typeof linkVariants> & { is_scale?: boolean }) {
  return (
    <Link
      className={cn(
        linkVariants({ variant, size, className }),
        is_scale && "hover:scale-105 active:scale-90 focus-visible:scale-105"
      )}
      {...props}
    />
  );
}

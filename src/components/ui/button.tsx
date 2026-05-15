import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'group relative inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-all duration-500 ease-out-quint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bloom focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-clay text-champagne hover:bg-bloom-deep shadow-[0_8px_24px_-12px_rgba(56,35,35,0.4)] hover:shadow-[0_12px_28px_-12px_rgba(158,50,86,0.5)] hover:-translate-y-0.5',
        bloom:
          'bg-bloom text-white hover:bg-bloom-deep shadow-[0_10px_28px_-12px_rgba(215,86,122,0.55)] hover:shadow-[0_14px_36px_-12px_rgba(215,86,122,0.65)] hover:-translate-y-0.5',
        destructive:
          'bg-destructive text-destructive-foreground shadow hover:bg-destructive/90',
        outline:
          'border border-clay/20 bg-transparent text-clay hover:border-clay hover:bg-clay hover:text-champagne',
        ghost:
          'bg-transparent text-clay hover:bg-clay/5 hover:text-bloom-deep',
        link:
          'text-bloom underline-offset-4 hover:underline px-0 h-auto rounded-none',
        secondary:
          'bg-petal text-clay hover:bg-petal/70',
      },
      size: {
        default: 'h-11 px-7 text-sm',
        sm: 'h-9 px-5 text-xs',
        lg: 'h-14 px-10 text-base',
        xl: 'h-16 px-12 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

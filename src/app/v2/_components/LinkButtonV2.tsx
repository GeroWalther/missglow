'use client';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

const linkButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold uppercase tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bloom-deep focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-bloom-deep text-background hover:opacity-90',
        outline:
          'border border-border bg-transparent text-foreground hover:bg-foreground hover:text-background',
        candy:
          'bg-candy text-foreground hover:opacity-90',
        ghost:
          'bg-transparent text-foreground hover:bg-foreground/5',
      },
      size: {
        default: 'h-10 px-5',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-7 text-base',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);

type Props = Omit<ComponentProps<typeof Link>, 'className'> &
  VariantProps<typeof linkButtonVariants> & {
    className?: string;
  };

export default function LinkButtonV2({
  variant,
  size,
  className,
  ...props
}: Props) {
  return (
    <Link
      {...props}
      className={cn(linkButtonVariants({ variant, size, className }))}
    />
  );
}

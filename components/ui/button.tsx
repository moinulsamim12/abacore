import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-linear-to-r from-[#6EE7F9] via-[#3B82F6] to-[#A855F7] text-[#050816] shadow-[0_18px_50px_rgba(110,231,249,0.25)] hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(59,130,246,0.32)]',
        secondary:
          'border border-white/8 bg-white/6 text-slate-50/90 backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/10 hover:text-slate-50',
        ghost: 'text-slate-300 hover:bg-white/5 hover:text-slate-50',
        outline: 'border border-white/12 bg-transparent text-slate-50 hover:bg-white/5'
      },
      size: {
        default: 'h-11 px-6 py-2.5',
        sm: 'h-9 rounded-full px-4',
        lg: 'h-12 rounded-full px-7 text-base'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
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

    return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

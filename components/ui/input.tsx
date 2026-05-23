import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = 'text', ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        'flex h-11 w-full rounded-2xl border border-white/8 bg-white/4 px-4 py-2 text-sm text-slate-50 placeholder:text-slate-400 shadow-sm outline-none transition-all duration-300 focus:border-[#6EE7F9]/70 focus:ring-2 focus:ring-[#6EE7F9]/25',
        className
      )}
      {...props}
    />
  )
);
Input.displayName = 'Input';

export { Input };

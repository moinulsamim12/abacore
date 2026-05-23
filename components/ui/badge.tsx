import * as React from 'react';

import { cn } from '@/lib/utils';

function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-white/8 bg-white/6 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-200/90 backdrop-blur-xl',
        className
      )}
      {...props}
    />
  );
}

export { Badge };

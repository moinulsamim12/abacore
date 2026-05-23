import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, centered = false, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl space-y-5', centered && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <Badge className="w-fit border-[#6EE7F9]/35 bg-[#6EE7F9]/12 text-[#6EE7F9]">{eyebrow}</Badge>
      ) : null}
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold tracking-[-0.02em] text-slate-50 sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="text-base leading-8 text-slate-400 sm:text-lg">{description}</p>
      </div>
    </div>
  );
}

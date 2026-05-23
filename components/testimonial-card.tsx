import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  review: string;
}

export function TestimonialCard({ name, role, company, review }: TestimonialCardProps) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <Card className="h-full border-white/10 bg-white/3">
      <CardContent className="space-y-6 p-7">
        <p className="text-sm leading-7 text-slate-300/90">{review}</p>
        <div className="flex items-center gap-4 border-t border-white/10 pt-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-sm font-semibold text-white">
            {initials}
          </div>
          <div>
            <p className="font-medium text-white">{name}</p>
            <p className="text-sm text-slate-400">
              {role} · {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

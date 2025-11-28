import { TrendingUp, AlertCircle, CheckCircle, Info } from 'lucide-react';

interface InsightCardProps {
  type: 'success' | 'warning' | 'info' | 'neutral';
  title: string;
  description: string;
  probability?: 'High' | 'Medium' | 'Low';
}

export function InsightCard({ type, title, description, probability }: InsightCardProps) {
  const styles = {
    success: {
      bg: 'bg-secondary/10 border-secondary/30',
      icon: CheckCircle,
      iconColor: 'text-secondary',
      badge: 'bg-secondary text-secondary-foreground',
    },
    warning: {
      bg: 'bg-orange-50 border-orange-200',
      icon: AlertCircle,
      iconColor: 'text-orange-500',
      badge: 'bg-orange-500 text-white',
    },
    info: {
      bg: 'bg-primary/10 border-primary/30',
      icon: Info,
      iconColor: 'text-primary',
      badge: 'bg-primary text-primary-foreground',
    },
    neutral: {
      bg: 'bg-muted border-border',
      icon: TrendingUp,
      iconColor: 'text-muted-foreground',
      badge: 'bg-muted-foreground text-white',
    },
  };

  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className={`rounded-[20px] border-2 p-4 ${style.bg}`}>
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 ${style.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-5 h-5 ${style.iconColor}`} />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <p className="text-foreground">{title}</p>
            {probability && (
              <span className={`px-3 py-1 rounded-full text-xs ${style.badge} whitespace-nowrap`}>
                {probability} Match
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

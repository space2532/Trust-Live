import { LucideIcon } from 'lucide-react';

interface DataMetricCardProps {
  icon: LucideIcon;
  label: string;
  yourValue: string;
  roommateValue: string;
  matchScore: number;
}

export function DataMetricCard({ icon: Icon, label, yourValue, roommateValue, matchScore }: DataMetricCardProps) {
  const isHighMatch = matchScore >= 80;
  const isMediumMatch = matchScore >= 60 && matchScore < 80;

  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <p className="text-sm text-foreground">{label}</p>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-primary/5 rounded-[12px] p-2">
          <p className="text-xs text-muted-foreground mb-1">You</p>
          <p className="text-sm text-foreground">{yourValue}</p>
        </div>
        <div className="bg-secondary/5 rounded-[12px] p-2">
          <p className="text-xs text-muted-foreground mb-1">Roommate</p>
          <p className="text-sm text-foreground">{roommateValue}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex-1 bg-muted rounded-full h-1.5 overflow-hidden">
          <div 
            className={`h-full transition-all ${
              isHighMatch ? 'bg-secondary' : isMediumMatch ? 'bg-yellow-500' : 'bg-orange-500'
            }`}
            style={{ width: `${matchScore}%` }}
          />
        </div>
        <span className={`text-xs ${
          isHighMatch ? 'text-secondary' : isMediumMatch ? 'text-yellow-600' : 'text-orange-600'
        }`}>
          {matchScore}%
        </span>
      </div>
    </div>
  );
}

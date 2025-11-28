import { Users, TrendingUp } from 'lucide-react';

interface ParticipantProgressProps {
  current: number;
  target: number;
}

export function ParticipantProgress({ current, target }: ParticipantProgressProps) {
  const percentage = Math.min((current / target) * 100, 100);
  const remaining = target - current;

  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          <h3 className="text-foreground">Group Progress</h3>
        </div>
        <div className="flex items-center gap-1 text-secondary">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm">{percentage.toFixed(0)}%</span>
        </div>
      </div>

      {/* Visual Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-foreground">{current} joined</span>
          <span className="text-muted-foreground text-sm">{target} needed</span>
        </div>
        
        {/* Progress Bar */}
        <div className="relative w-full h-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-secondary via-emerald-400 to-emerald-500 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
            style={{ width: `${percentage}%` }}
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        </div>

        {/* Participant Avatars */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex -space-x-2">
            {[...Array(current)].map((_, idx) => (
              <div 
                key={idx}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white flex items-center justify-center"
              >
                <span className="text-xs text-white">👤</span>
              </div>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {remaining > 0 ? `${remaining} more needed!` : 'Goal reached! 🎉'}
          </span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-[12px] p-3 border border-secondary/20">
          <p className="text-xs text-muted-foreground mb-1">Current Price</p>
          <p className="text-secondary">₩{(15000 - (current * 1000)).toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-[12px] p-3 border border-primary/20">
          <p className="text-xs text-muted-foreground mb-1">Your Savings</p>
          <p className="text-primary">₩{(5000).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

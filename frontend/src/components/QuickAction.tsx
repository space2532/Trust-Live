import { LucideIcon } from 'lucide-react';

interface QuickActionProps {
  icon: LucideIcon;
  label: string;
  color: 'primary' | 'secondary';
}

export function QuickAction({ icon: Icon, label, color }: QuickActionProps) {
  return (
    <button className="flex flex-col items-center gap-2">
      <div 
        className={`w-14 h-14 rounded-[20px] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-transform hover:scale-105 ${
          color === 'primary' 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-secondary text-secondary-foreground'
        }`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-xs text-foreground">{label}</span>
    </button>
  );
}

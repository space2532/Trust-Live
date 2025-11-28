import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageCircle } from 'lucide-react';
import { MatchCircle } from './MatchCircle';

interface RoommateCardCompactProps {
  name: string;
  avatar: string;
  matchPercentage: number;
  status?: string;
  sharedInterests: string[];
}

export function RoommateCardCompact({ name, avatar, matchPercentage, status = 'Active', sharedInterests }: RoommateCardCompactProps) {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-4 flex-shrink-0">
      {/* Header with Profile */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="relative w-10 aspect-square">
            <ImageWithFallback 
              src={avatar}
              alt={name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <p className="text-sm text-foreground">{name}</p>
        </div>
        <MatchCircle percentage={matchPercentage} size="small" />
      </div>

      {/* Interests */}
      <div className="flex flex-wrap gap-1 mb-3">
        {sharedInterests.slice(0, 3).map((interest, idx) => (
          <span key={idx} className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs">
            {interest}
          </span>
        ))}
      </div>

      {/* CTA */}
      <button className="w-full bg-primary text-primary-foreground px-3 py-2 rounded-[12px] flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors text-sm">
        <MessageCircle className="w-4 h-4" />
        <span>Message</span>
      </button>
    </div>
  );
}

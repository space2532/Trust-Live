import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Clock } from 'lucide-react';

interface GroupBuyCardProps {
  title: string;
  image: string;
  originalPrice: number;
  groupPrice: number;
  participantsCount: number;
  maxParticipants: number;
  timeLeft: string;
  location: string;
}

export function GroupBuyCard({ 
  title, 
  image, 
  originalPrice, 
  groupPrice, 
  participantsCount, 
  maxParticipants,
  timeLeft,
  location
}: GroupBuyCardProps) {
  const discount = Math.round(((originalPrice - groupPrice) / originalPrice) * 100);

  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden w-64 flex-shrink-0">
      <div className="relative">
        <ImageWithFallback 
          src={image}
          alt={title}
          className="w-full h-36 object-cover"
        />
        <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-full">
          <span className="text-xs">{discount}% OFF</span>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-foreground mb-2 line-clamp-2 min-h-[3rem]">{title}</p>
        
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-primary">${groupPrice}</span>
          <span className="text-xs text-muted-foreground line-through">${originalPrice}</span>
        </div>

        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="w-3 h-3" />
              <span>{participantsCount}/{maxParticipants} joined</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{timeLeft}</span>
            </div>
          </div>
          
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div 
              className="bg-secondary h-full transition-all"
              style={{ width: `${(participantsCount / maxParticipants) * 100}%` }}
            />
          </div>
        </div>

        <p className="text-xs text-muted-foreground mb-3">📍 {location}</p>

        <button className="w-full bg-secondary text-secondary-foreground py-2 rounded-full hover:bg-secondary/90 transition-colors">
          Join Deal
        </button>
      </div>
    </div>
  );
}

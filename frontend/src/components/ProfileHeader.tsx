import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  university: string;
  compatibilityScore: number;
  avatar: string;
}

export function ProfileHeader({ name, university, compatibilityScore, avatar }: ProfileHeaderProps) {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-5">
      <div className="flex items-center gap-4">
        <ImageWithFallback 
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h2 className="text-foreground">{name}</h2>
          <p className="text-sm text-muted-foreground">{university}</p>
        </div>
      </div>
      
      <div className="mt-4 bg-gradient-to-r from-primary to-secondary rounded-[20px] p-4 flex items-center gap-3">
        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
          <Award className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-white/90">Lifestyle Compatibility Score</p>
          <p className="text-2xl text-white">{compatibilityScore}%</p>
        </div>
      </div>
    </div>
  );
}

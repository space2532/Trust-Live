import { Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface StoryCircleProps {
  username?: string;
  avatar?: string;
  isAddStory?: boolean;
}

export function StoryCircle({ username, avatar, isAddStory }: StoryCircleProps) {
  if (isAddStory) {
    return (
      <button className="flex flex-col items-center gap-2 flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
          <Plus className="w-6 h-6 text-white" />
        </div>
        <p className="text-xs text-muted-foreground">Add Story</p>
      </button>
    );
  }

  return (
    <button className="flex flex-col items-center gap-2 flex-shrink-0">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
        <ImageWithFallback 
          src={avatar || ''} 
          alt={username || ''}
          className="w-full h-full rounded-full object-cover border-2 border-white"
        />
      </div>
      <p className="text-xs text-muted-foreground truncate max-w-[64px]">{username}</p>
    </button>
  );
}

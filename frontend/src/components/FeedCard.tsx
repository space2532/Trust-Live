import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FeedCardProps {
  username: string;
  userAvatar: string;
  timestamp: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

export function FeedCard({ 
  username, 
  userAvatar, 
  timestamp, 
  content, 
  image, 
  likes, 
  comments 
}: FeedCardProps) {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden mb-4">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <ImageWithFallback 
              src={userAvatar} 
              alt={username}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-foreground">{username}</p>
              <p className="text-xs text-muted-foreground">{timestamp}</p>
            </div>
          </div>
          <button className="p-2 hover:bg-muted rounded-full transition-colors">
            <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
        <p className="text-foreground mb-3">{content}</p>
      </div>
      
      {image && (
        <ImageWithFallback 
          src={image} 
          alt="Post content"
          className="w-full h-64 object-cover"
        />
      )}
      
      <div className="p-4 flex items-center justify-between border-t border-border">
        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <Heart className="w-5 h-5" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span>{comments}</span>
        </button>
        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

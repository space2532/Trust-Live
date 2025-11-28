import { X, Heart, RotateCcw, Star } from 'lucide-react';

interface SwipeControlsProps {
  onPass: () => void;
  onLike: () => void;
  onSuperLike: () => void;
  onUndo: () => void;
}

export function SwipeControls({ onPass, onLike, onSuperLike, onUndo }: SwipeControlsProps) {
  return (
    <div className="flex items-center justify-center gap-4 py-6">
      <button 
        onClick={onUndo}
        className="w-12 h-12 bg-white border-2 border-border rounded-full flex items-center justify-center hover:scale-110 hover:border-muted-foreground transition-all shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
      >
        <RotateCcw className="w-5 h-5 text-muted-foreground" />
      </button>

      <button 
        onClick={onPass}
        className="w-16 h-16 bg-white border-4 border-destructive/30 rounded-full flex items-center justify-center hover:scale-110 hover:bg-destructive/10 transition-all shadow-[0_4px_12px_rgba(220,38,38,0.2)]"
      >
        <X className="w-8 h-8 text-destructive" />
      </button>

      <button 
        onClick={onSuperLike}
        className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-[0_4px_12px_rgba(30,58,138,0.3)]"
      >
        <Star className="w-6 h-6 text-white fill-white" />
      </button>

      <button 
        onClick={onLike}
        className="w-16 h-16 bg-white border-4 border-secondary/30 rounded-full flex items-center justify-center hover:scale-110 hover:bg-secondary/10 transition-all shadow-[0_4px_12px_rgba(61,214,140,0.2)]"
      >
        <Heart className="w-8 h-8 text-secondary fill-secondary" />
      </button>
    </div>
  );
}

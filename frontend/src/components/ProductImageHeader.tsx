import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Share2, Heart } from 'lucide-react';

interface ProductImageHeaderProps {
  image: string;
  discount: number;
  onBack?: () => void;
}

export function ProductImageHeader({ image, discount, onBack }: ProductImageHeaderProps) {
  return (
    <div className="relative">
      <ImageWithFallback 
        src={image}
        alt="Product"
        className="w-full h-80 object-cover"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Top Actions */}
      <div className="absolute top-4 left-0 right-0 px-4 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg">
            <Share2 className="w-5 h-5 text-foreground" />
          </button>
          <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg">
            <Heart className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Discount Badge */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <div className="bg-gradient-to-r from-destructive via-orange-500 to-red-600 text-white px-6 py-3 rounded-full shadow-[0_4px_16px_rgba(220,38,38,0.4)] animate-pulse-subtle">
          <span className="text-lg">🔥 {discount}% Discount</span>
        </div>
      </div>

      {/* Flash Deal Badge */}
      <div className="absolute bottom-4 left-4">
        <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span>Flash Deal</span>
        </div>
      </div>
    </div>
  );
}

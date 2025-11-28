import { Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  seller: string;
  condition: string;
}

export function ProductCard({ title, price, image, seller, condition }: ProductCardProps) {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
      <div className="relative aspect-square">
        <ImageWithFallback 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-secondary hover:text-secondary-foreground transition-all">
          <Heart className="w-4 h-4" />
        </button>
        <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
          <span className="text-xs">{condition}</span>
        </div>
      </div>
      <div className="p-3">
        <p className="text-foreground mb-1 line-clamp-2">{title}</p>
        <div className="flex items-center justify-between">
          <p className="text-primary">${price}</p>
          <p className="text-xs text-muted-foreground">by {seller}</p>
        </div>
      </div>
    </div>
  );
}

import { ImageWithFallback } from './figma/ImageWithFallback';
import { MatchCircle } from './MatchCircle';
import { Sparkles, MapPin } from 'lucide-react';

interface RoommateSwipeCardProps {
  name: string;
  age: number;
  photo: string;
  major: string;
  university: string;
  matchPercentage: number;
  attributes: string[];
  onViewDetails: () => void;
}

export function RoommateSwipeCard({ 
  name, 
  age, 
  photo, 
  major, 
  university,
  matchPercentage, 
  attributes,
  onViewDetails
}: RoommateSwipeCardProps) {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] overflow-hidden">
      {/* Photo Section */}
      <div className="relative">
        <ImageWithFallback 
          src={photo}
          alt={name}
          className="w-full h-96 object-cover"
        />
        
        {/* AI Badge */}
        <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">AI Matched</span>
        </div>

        {/* Match Circle */}
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
          <MatchCircle percentage={matchPercentage} size="small" />
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6">
        {/* Name and Age */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-foreground">{name}, {age}</h2>
            <p className="text-sm text-muted-foreground">{major}</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{university}</span>
        </div>

        {/* Attributes */}
        <div className="mb-5">
          <p className="text-sm text-muted-foreground mb-3">Key Lifestyle Traits</p>
          <div className="flex flex-wrap gap-2">
            {attributes.map((attr, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full border-2 border-primary/20"
              >
                {attr}
              </span>
            ))}
          </div>
        </div>

        {/* View Details Button */}
        <button 
          onClick={onViewDetails}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-[20px] hover:shadow-lg transition-all"
        >
          View Detailed Analysis
        </button>
      </div>
    </div>
  );
}

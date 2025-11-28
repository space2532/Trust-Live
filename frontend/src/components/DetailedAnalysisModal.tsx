import { X, TrendingUp } from 'lucide-react';
import { MatchCircle } from './MatchCircle';

interface AnalysisCategory {
  category: string;
  match: number;
  yourPreference: string;
  theirPreference: string;
}

interface DetailedAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  matchPercentage: number;
  categories: AnalysisCategory[];
}

export function DetailedAnalysisModal({ 
  isOpen, 
  onClose, 
  name, 
  matchPercentage,
  categories 
}: DetailedAnalysisModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white rounded-t-[20px] sm:rounded-[20px] w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex-1">
            <h2 className="text-foreground mb-1">Compatibility Analysis</h2>
            <p className="text-sm text-muted-foreground">with {name}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Overall Match */}
          <div className="flex items-center justify-center mb-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[20px] p-6">
            <div className="text-center">
              <MatchCircle percentage={matchPercentage} size="large" />
              <p className="mt-4 text-sm text-muted-foreground">Overall Compatibility</p>
            </div>
          </div>

          {/* AI Insight */}
          <div className="bg-secondary/10 border-2 border-secondary/30 rounded-[20px] p-4 mb-6 flex gap-3">
            <TrendingUp className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-foreground mb-1">AI Insight</p>
              <p className="text-sm text-muted-foreground">
                You both have compatible sleep schedules and cleanliness standards. Strong match for a harmonious living environment!
              </p>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="space-y-4">
            <h3 className="text-foreground mb-3">Lifestyle Breakdown</h3>
            {categories.map((category, idx) => (
              <div key={idx} className="bg-muted rounded-[20px] p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-foreground">{category.category}</p>
                  <span className="text-sm text-secondary">{category.match}% match</span>
                </div>
                
                <div className="w-full bg-white rounded-full h-2 mb-3 overflow-hidden">
                  <div 
                    className="bg-secondary h-full transition-all rounded-full"
                    style={{ width: `${category.match}%` }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white rounded-[12px] p-3">
                    <p className="text-xs text-muted-foreground mb-1">You</p>
                    <p className="text-foreground">{category.yourPreference}</p>
                  </div>
                  <div className="bg-white rounded-[12px] p-3">
                    <p className="text-xs text-muted-foreground mb-1">{name}</p>
                    <p className="text-foreground">{category.theirPreference}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-border bg-white">
          <button 
            onClick={onClose}
            className="w-full bg-primary text-primary-foreground py-4 rounded-[20px] hover:bg-primary/90 transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}

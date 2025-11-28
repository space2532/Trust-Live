import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProfileBioCard } from './ProfileBioCard';
import { ReputationDetailCard } from './ReputationDetailCard';
import { useLanguage } from '../contexts/LanguageContext';

interface ReputationDetail {
  manners: number;
  communication: number;
  payment: number;
}

interface RoommateDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  avatar: string;
  university?: string;
  major?: string;
  year?: number;
  bio: string;
  likes: string[];
  dislikes: string[];
  reputation: ReputationDetail;
  recentReviews?: string[];
}

export function RoommateDetailModal({
  isOpen,
  onClose,
  name,
  avatar,
  university,
  major,
  year,
  bio,
  likes,
  dislikes,
  reputation,
  recentReviews,
}: RoommateDetailModalProps) {
  const { language } = useLanguage();

  if (!isOpen) return null;

  const englishYearLabels: Record<number, string> = {
    1: 'Freshman',
    2: 'Sophomore',
    3: 'Junior',
    4: 'Senior',
  };
  const yearLabel = year && language === 'ko' ? `${year}학년` : (year ? englishYearLabels[year] ?? 'Student' : '');

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[20px] w-full max-w-md overflow-hidden flex flex-col animate-slide-up"
        style={{ 
          height: '70vh',
          maxHeight: '70vh'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex-1">
            <h2 className="text-foreground mb-1">
              {language === 'ko' ? '룸메이트 상세 정보' : 'Roommate Details'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 min-h-0 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
          <div className="flex flex-col gap-6">
            {/* Profile Section */}
            <div className="flex flex-col items-center gap-4 pb-6 border-b border-border">
              <div className="relative">
                <ImageWithFallback
                  src={avatar}
                  alt={name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-secondary rounded-full border-2 border-white flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl text-foreground mb-2">{name}</h3>
                {university && (
                  <p className="text-sm text-foreground mb-1">{university}</p>
                )}
                {major && yearLabel && (
                  <p className="text-xs text-muted-foreground">{`${major} • ${yearLabel}`}</p>
                )}
              </div>
            </div>

            {/* Bio Section */}
            <ProfileBioCard bio={bio} likes={likes} dislikes={dislikes} />

            {/* Reputation Section */}
            <ReputationDetailCard
              livingManners={reputation.manners}
              communication={reputation.communication}
              payment={reputation.payment}
              maxScore={100}
              recentReviews={recentReviews}
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-border bg-white">
          <button
            onClick={onClose}
            className="w-full bg-primary text-primary-foreground py-4 rounded-[20px] hover:bg-primary/90 transition-colors"
          >
            {language === 'ko' ? '확인' : 'Got it!'}
          </button>
        </div>
      </div>
    </div>
  );
}


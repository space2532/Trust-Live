import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, CheckCircle2, Edit } from 'lucide-react';
import { useUser } from '../hooks/useUser';

interface ProfileHeaderProps {
  name: string;
  university: string;
  avatar: string;
  trustScore: number;
  trustGrade: string;
  mainTrait: string;
  language: 'ko' | 'en';
  onEditClick?: () => void;
}

export function ProfileHeader({
  name,
  university,
  avatar,
  trustScore,
  trustGrade,
  mainTrait,
  language,
  onEditClick,
}: ProfileHeaderProps) {
  const { user } = useUser();
  const englishYearLabels: Record<number, string> = {
    1: 'Freshman',
    2: 'Sophomore',
    3: 'Junior',
    4: 'Senior',
  };
  const yearLabel = language === 'ko' ? `${user.year}학년` : englishYearLabels[user.year] ?? 'Student';

  return (
    <div className="bg-gradient-to-br from-primary/10 via-blue-50 to-purple-50 rounded-3xl shadow-lg border-2 border-primary/20 p-5 relative">
      {/* Edit Button - Top Right (only shown in MyPage) */}
      {onEditClick && (
        <button 
          onClick={onEditClick}
          className="absolute top-4 right-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
        >
          <Edit className="w-5 h-5" />
        </button>
      )}
      <div className="flex items-start gap-4 mb-6">
        {/* Avatar */}
        <div className="relative">
          <ImageWithFallback
            src={avatar}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-secondary rounded-full border-2 border-white flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* User Info */}
        <div className="flex-1">
          <h2 className="text-foreground mb-2">{name}</h2>
          
          {/* Verified Badge */}
          <div className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3">
            <CheckCircle2 className="w-3 h-3" />
            <span className="text-xs">{language === 'ko' ? '인증된 대학생' : 'Verified University Student'}</span>
          </div>
          
          <div className="space-y-0.5">
            <p className="text-sm text-foreground">{university}</p>
            <p className="text-xs text-muted-foreground">{`${user.major} • ${yearLabel}`}</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 bg-white/60 backdrop-blur rounded-2xl p-4">
        {/* Trust Score */}
        <div className="flex flex-col items-center justify-center text-center rounded-xl bg-primary/5 px-3 py-2 min-w-0">
          <p className="text-2xl text-primary mb-0.5">{trustScore}</p>
          <p className="text-xs text-muted-foreground break-keep">
            {language === 'ko' ? '신뢰점수' : 'Trust Score'}
          </p>
        </div>

        {/* Trait 1 */}
        <div className="flex flex-col items-center justify-center text-center rounded-xl bg-secondary/10 px-3 py-2 min-w-0">
          <div className="flex items-center gap-1 min-w-0">
            <Sparkles className="w-4 h-4 text-secondary shrink-0" />
            <p
              className="text-sm text-foreground truncate max-w-[110px]"
              title={trustGrade}
            >
              {trustGrade}
            </p>
          </div>
        </div>

        {/* Trait 2 */}
        <div className="flex flex-col items-center justify-center text-center rounded-xl bg-emerald-50 px-3 py-2 min-w-0">
          <div className="flex items-center gap-1 min-w-0">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <p
              className="text-sm text-emerald-700 truncate max-w-[110px]"
              title={mainTrait}
            >
              {mainTrait}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

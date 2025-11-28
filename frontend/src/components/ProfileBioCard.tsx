import { Heart, ThumbsDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProfileBioCardProps {
  bio: string;
  likes: string[];
  dislikes: string[];
}

export function ProfileBioCard({ bio, likes, dislikes }: ProfileBioCardProps) {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-5 flex flex-col gap-4">
      {/* Bio */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-muted-foreground">
          {language === 'ko' ? '자기소개' : 'About'}
        </span>
        <p className="text-sm text-foreground leading-snug">{bio}</p>
      </div>

      {/* Likes / Dislikes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Likes */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-secondary/15 flex items-center justify-center">
              <Heart className="w-3.5 h-3.5 text-secondary" />
            </div>
            <span className="text-xs font-medium text-foreground">
              {language === 'ko' ? '좋아하는 것' : 'Likes'}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {likes.length === 0 ? (
              <span className="text-[11px] text-muted-foreground">
                {language === 'ko'
                  ? '아직 좋아하는 것을 추가하지 않았어요.'
                  : 'No likes added yet.'}
              </span>
            ) : (
              likes.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs"
                >
                  {item}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Dislikes */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-destructive/10 flex items-center justify-center">
              <ThumbsDown className="w-3.5 h-3.5 text-destructive" />
            </div>
            <span className="text-xs font-medium text-foreground">
              {language === 'ko' ? '싫어하는 것' : 'Dislikes'}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {dislikes.length === 0 ? (
              <span className="text-[11px] text-muted-foreground">
                {language === 'ko'
                  ? '아직 싫어하는 것을 추가하지 않았어요.'
                  : 'No dislikes added yet.'}
              </span>
            ) : (
              dislikes.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs"
                >
                  {item}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



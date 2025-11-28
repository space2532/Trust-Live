import { Star, Shield, MessageSquare } from 'lucide-react';
import { Progress } from './ui/progress';
import { useLanguage } from '../contexts/LanguageContext';

interface ReputationDetailCardProps {
  livingManners: number;
  communication: number;
  payment: number;
  /** 0–100 기반 퍼센트 값이 들어온다고 가정 */
  maxScore?: number;
  recentReviews?: string[];
}

export function ReputationDetailCard({
  livingManners,
  communication,
  payment,
  maxScore = 100,
  recentReviews,
}: ReputationDetailCardProps) {
  const { language } = useLanguage();

  const categories = [
    {
      key: 'living',
      label: language === 'ko' ? '생활 매너' : 'Living Manners',
      value: livingManners,
      icon: Shield,
    },
    {
      key: 'communication',
      label: language === 'ko' ? '의사소통' : 'Communication',
      value: communication,
      icon: MessageSquare,
    },
    {
      key: 'payment',
      label: language === 'ko' ? '결제/정산' : 'Payment',
      value: payment,
      icon: Star,
    },
  ];

  const normalized = (value: number) => Math.min(100, Math.max(0, (value / maxScore) * 100));

  const defaultReviews =
    recentReviews ||
    (language === 'ko'
      ? ['깔끔하고 조용해요', '정산을 칼같이 해요']
      : ['Very tidy and quiet', 'Always settles payments on time']);

  const overall =
    (normalized(livingManners) + normalized(communication) + normalized(payment)) / 3;

  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-6 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <Shield className="w-4 h-4 text-primary" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-foreground text-sm font-medium">
              {language === 'ko' ? '상세 평판' : 'Reputation Details'}
            </h3>
            <span className="text-xs text-muted-foreground">
              {language === 'ko'
                ? '룸메이트들이 남긴 세부 평가'
                : 'Detailed feedback from roommates'}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-baseline gap-1">
            <span className="text-sm text-muted-foreground">
              {language === 'ko' ? '종합' : 'Overall'}
            </span>
            <span className="text-lg text-primary font-semibold">
              {Math.round((overall / 100) * maxScore)}
            </span>
            <span className="text-xs text-muted-foreground">/ {maxScore}</span>
          </div>
        </div>
      </div>

      {/* Category breakdown */}
      <div className="flex flex-col gap-3 mt-1">
        {categories.map(({ key, label, value, icon: Icon }) => (
          <div key={key} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-xs text-foreground">{label}</span>
              </div>
              <span className="text-xs text-muted-foreground">
                {value} / {maxScore}
              </span>
            </div>
            <Progress value={normalized(value)} />
          </div>
        ))}
      </div>

      {/* Recent anonymous reviews */}
      <div className="border-t border-muted pt-4 mt-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
            <MessageSquare className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="text-xs font-medium text-foreground">
            {language === 'ko' ? '최근 익명 리뷰' : 'Recent Anonymous Reviews'}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {defaultReviews.slice(0, 2).map((review, idx) => (
            <div
              key={idx}
              className="relative max-w-full rounded-2xl bg-muted px-3 py-2 text-xs text-foreground shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
            >
              <p className="leading-snug">{review}</p>
              <div className="absolute -bottom-1 left-4 w-2 h-2 bg-muted rotate-45" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



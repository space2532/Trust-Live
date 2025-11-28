import { ArrowLeft, Megaphone } from 'lucide-react';
import { useDashboardLogic } from '../hooks/useDashboardLogic';
import { useLanguage } from '../contexts/LanguageContext';

interface DormNoticeScreenProps {
  onBack: () => void;
}

export function DormNoticeScreen({ onBack }: DormNoticeScreenProps) {
  const { dormNotices } = useDashboardLogic();
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 pt-4 pb-8 md:pt-8 md:pb-12">
        {/* Header */}
        <header className="flex items-center gap-3 mb-6">
          <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Megaphone className="w-4 h-4" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl text-foreground">
                {language === 'ko' ? '기숙사 공지' : 'Dorm Notices'}
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground">
                {language === 'ko'
                  ? '기숙사 생활과 관련된 최신 안내를 한 곳에서 확인하세요.'
                  : 'See all recent notices related to your dorm life.'}
              </p>
            </div>
          </div>
        </header>

        {/* Notice List */}
        <div className="space-y-4">
          {dormNotices.map((notice) => (
            <div
              key={notice.id}
              className="rounded-2xl border border-border bg-white p-4 md:p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm md:text-base font-semibold text-foreground pr-3">
                  {notice.title}
                </p>
                <span className="text-[11px] md:text-xs px-2 py-0.5 rounded-full bg-secondary/15 text-secondary">
                  {notice.status}
                </span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-2">
                {notice.description}
              </p>
              <p className="text-[11px] md:text-xs text-muted-foreground">
                {language === 'ko' ? '일시 · 기간' : 'Date / Period'} : {notice.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



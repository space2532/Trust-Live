import { useState } from 'react';
import { Sparkles, ChevronRight, Moon, Sun, Volume2, Users, BookOpen, Home, Utensils, Coffee, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useUser } from '../hooks/useUser';
import { motion } from 'motion/react';

interface LifestyleQuestion {
  id: string;
  category: string;
  question: string;
  icon: any;
  options: { value: number; label: string; icon?: string }[];
}

interface LifestyleInputScreenProps {
  onBack: () => void;
}

export function LifestyleInputScreen({ onBack }: LifestyleInputScreenProps) {
  const { t, language } = useLanguage();
  const { updateLifestyle } = useUser();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const mapAnswersToLifestyle = (data: Record<string, number>) => ({
    sleep: data.sleep ?? 5,
    cleanliness: data.cleanliness ?? 5,
    noise: data.noise ?? 5,
    social: data.social ?? 5,
    study: data.study ?? 5,
    sharing: data.sharing ?? 5,
  });

  const questions: LifestyleQuestion[] = [
    {
      id: 'sleep',
      category: language === 'ko' ? '수면 패턴' : 'Sleep Pattern',
      question: language === 'ko' ? '당신의 수면 스타일은?' : 'What\'s your sleep style?',
      icon: Moon,
      options: [
        { value: 10, label: language === 'ko' ? '일찍 자고 일찍 일어남 (10시 전)' : 'Early to bed, early to rise (Before 10 PM)', icon: '🌅' },
        { value: 7, label: language === 'ko' ? '보통 (10-12시)' : 'Normal (10-12 PM)', icon: '🌙' },
        { value: 4, label: language === 'ko' ? '늦게 자고 늦게 일어남 (12시 이후)' : 'Night owl (After 12 AM)', icon: '🦉' },
      ],
    },
    {
      id: 'cleanliness',
      category: language === 'ko' ? '청결도' : 'Cleanliness',
      question: language === 'ko' ? '청소는 얼마나 자주 하시나요?' : 'How often do you clean?',
      icon: Sparkles,
      options: [
        { value: 10, label: language === 'ko' ? '매일 청소 (완벽주의자)' : 'Daily (Perfectionist)', icon: '✨' },
        { value: 7, label: language === 'ko' ? '주 2-3회 (꽤 깔끔함)' : '2-3 times a week (Pretty clean)', icon: '🧹' },
        { value: 4, label: language === 'ko' ? '주 1회 이하 (여유로움)' : 'Once a week or less (Relaxed)', icon: '😌' },
      ],
    },
    {
      id: 'noise',
      category: language === 'ko' ? '소음 민감도' : 'Noise Sensitivity',
      question: language === 'ko' ? '소음에 대한 선호도는?' : 'Your noise preference?',
      icon: Volume2,
      options: [
        { value: 10, label: language === 'ko' ? '매우 조용한 환경' : 'Very quiet environment', icon: '🤫' },
        { value: 7, label: language === 'ko' ? '보통 수준' : 'Moderate level', icon: '🎵' },
        { value: 4, label: language === 'ko' ? '활기찬 분위기' : 'Lively atmosphere', icon: '🎉' },
      ],
    },
    {
      id: 'social',
      category: language === 'ko' ? '사교성' : 'Social Life',
      question: language === 'ko' ? '친구들을 얼마나 자주 초대하시나요?' : 'How often do you invite friends over?',
      icon: Users,
      options: [
        { value: 10, label: language === 'ko' ? '거의 안함 (조용히 지냄)' : 'Rarely (Prefer quiet)', icon: '🏠' },
        { value: 7, label: language === 'ko' ? '가끔 (월 1-2회)' : 'Sometimes (1-2 times/month)', icon: '👥' },
        { value: 4, label: language === 'ko' ? '자주 (주 1회 이상)' : 'Often (Weekly+)', icon: '🎊' },
      ],
    },
    {
      id: 'study',
      category: language === 'ko' ? '공부 습관' : 'Study Habits',
      question: language === 'ko' ? '공부는 주로 어디서 하시나요?' : 'Where do you usually study?',
      icon: BookOpen,
      options: [
        { value: 10, label: language === 'ko' ? '집에서 집중' : 'At home, focused', icon: '📚' },
        { value: 7, label: language === 'ko' ? '도서관/카페 선호' : 'Prefer library/cafe', icon: '☕' },
        { value: 4, label: language === 'ko' ? '그룹 스터디' : 'Group study', icon: '👨‍🎓' },
      ],
    },
    {
      id: 'sharing',
      category: language === 'ko' ? '물건 공유' : 'Sharing',
      question: language === 'ko' ? '물건 공유에 대한 생각은?' : 'Your thoughts on sharing items?',
      icon: Coffee,
      options: [
        { value: 10, label: language === 'ko' ? '적극 공유' : 'Love to share', icon: '🤝' },
        { value: 7, label: language === 'ko' ? '특정 물건만 가능' : 'Only certain items', icon: '👌' },
        { value: 4, label: language === 'ko' ? '개인 물건 선호' : 'Prefer personal items', icon: '🔒' },
      ],
    },
  ];

  const handleAnswer = (questionId: string, value: number) => {
    const nextAnswers = { ...answers, [questionId]: value };
    setAnswers(nextAnswers);
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300);
    } else {
      setTimeout(() => {
        updateLifestyle(mapAnswersToLifestyle(nextAnswers));
        setShowResults(true);
      }, 300);
    }
  };

  const calculateScore = () => {
    const values = Object.values(answers);
    if (values.length === 0) return 0;
    return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-blue-50 to-purple-50">
        {/* Header */}
        <header className="bg-white border-b border-border sticky top-0 z-40">
          <div className="px-4 py-4 flex items-center justify-between max-w-md mx-auto">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <h1 className="text-primary">{language === 'ko' ? '라이프스타일 분석' : 'Lifestyle Analysis'}</h1>
            </div>
          </div>
        </header>

        <main className="px-4 py-8 max-w-md mx-auto pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] p-8 text-center"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-foreground mb-4">{language === 'ko' ? '분석 완료!' : 'Analysis Complete!'}</h2>
            <p className="text-muted-foreground mb-8">
              {language === 'ko' 
                ? '당신의 라이프스타일 프로필이 생성되었습니다.' 
                : 'Your lifestyle profile has been created.'}
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[20px] p-6 mb-6">
              <p className="text-sm text-muted-foreground mb-2">{language === 'ko' ? '라이프스타일 점수' : 'Lifestyle Score'}</p>
              <div className="text-6xl text-primary mb-2">{score}</div>
              <p className="text-sm text-muted-foreground">{language === 'ko' ? '10점 만점' : 'out of 10'}</p>
            </div>

            {/* Breakdown */}
            <div className="space-y-3 mb-8">
              {questions.map((q) => {
                const Icon = q.icon;
                const value = answers[q.id] || 0;
                return (
                  <div key={q.id} className="flex items-center justify-between bg-muted rounded-[16px] p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{q.category}</span>
                    </div>
                    <span className="text-primary">{value}/10</span>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => {
                onBack();
              }}
              className="w-full bg-primary text-primary-foreground py-4 rounded-[20px] hover:bg-primary/90 transition-colors mb-3"
            >
              {language === 'ko' ? '완료' : 'Complete'}
            </button>
            
            <button
              onClick={() => {
                setCurrentStep(0);
                setAnswers({});
                setShowResults(false);
              }}
              className="w-full bg-muted text-foreground py-4 rounded-[20px] hover:bg-muted/80 transition-colors"
            >
              {language === 'ko' ? '다시 시작하기' : 'Start Over'}
            </button>
          </motion.div>
        </main>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const Icon = currentQuestion.icon;
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="px-4 py-4 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-3">
            <button 
              onClick={onBack}
              className="p-2 -ml-2 hover:bg-muted rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <h1 className="text-primary">{language === 'ko' ? '라이프스타일 분석' : 'Lifestyle Analysis'}</h1>
            </div>
            <span className="text-sm text-muted-foreground">
              {currentStep + 1} / {questions.length}
            </span>
          </div>
          {/* Progress Bar */}
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </header>

      <main className="px-4 py-8 max-w-md mx-auto pb-24">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Question Card */}
          <div className="bg-white rounded-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] p-8 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            
            <p className="text-sm text-muted-foreground text-center mb-2">{currentQuestion.category}</p>
            <h2 className="text-foreground text-center mb-8">{currentQuestion.question}</h2>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleAnswer(currentQuestion.id, option.value)}
                  className="w-full bg-gradient-to-br from-muted to-muted/50 hover:from-primary/10 hover:to-secondary/10 border-2 border-transparent hover:border-primary/30 rounded-[20px] p-4 transition-all text-left group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{option.icon}</div>
                    <div className="flex-1">
                      <p className="text-foreground group-hover:text-primary transition-colors">
                        {option.label}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Skip Button */}
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="w-full text-muted-foreground hover:text-foreground transition-colors py-3"
            >
              {language === 'ko' ? '이전 질문' : 'Previous Question'}
            </button>
          )}
        </motion.div>
      </main>
    </div>
  );
}
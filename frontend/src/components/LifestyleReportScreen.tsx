import { useState } from 'react';
import { Sparkles, ChevronRight, Moon, Volume2, Users, BookOpen, Coffee, Heart, Edit3, TrendingUp, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

interface LifestyleReportScreenProps {
  onStartInput: () => void;
}

interface LifestyleProfile {
  name: string;
  avatar: string;
  overall: number;
  categories: {
    sleep: number;
    cleanliness: number;
    noise: number;
    social: number;
    study: number;
    sharing: number;
  };
}

export function LifestyleReportScreen({ onStartInput }: LifestyleReportScreenProps) {
  const { t, language } = useLanguage();
  
  // Mock data - 실제로는 상태나 API에서 가져올 데이터
  const myProfile: LifestyleProfile = {
    name: language === 'ko' ? '나' : 'Me',
    avatar: '👤',
    overall: 8.2,
    categories: {
      sleep: 9,
      cleanliness: 8,
      noise: 8,
      social: 7,
      study: 9,
      sharing: 8,
    },
  };

  const roommateProfile: LifestyleProfile = {
    name: language === 'ko' ? '지민' : 'Jimin',
    avatar: '👨‍🎓',
    overall: 7.8,
    categories: {
      sleep: 8,
      cleanliness: 9,
      noise: 7,
      social: 8,
      study: 8,
      sharing: 7,
    },
  };

  const calculateMatchRate = (profile1: LifestyleProfile, profile2: LifestyleProfile) => {
    const categories = Object.keys(profile1.categories) as Array<keyof typeof profile1.categories>;
    const differences = categories.map(key => 
      Math.abs(profile1.categories[key] - profile2.categories[key])
    );
    const avgDifference = differences.reduce((a, b) => a + b, 0) / differences.length;
    return Math.round((10 - avgDifference) * 10);
  };

  const matchRate = calculateMatchRate(myProfile, roommateProfile);

  const categoryInfo = [
    { 
      key: 'sleep', 
      icon: Moon, 
      label: language === 'ko' ? '수면 패턴' : 'Sleep Pattern',
      color: 'from-blue-500 to-blue-600' 
    },
    { 
      key: 'cleanliness', 
      icon: Sparkles, 
      label: language === 'ko' ? '청결도' : 'Cleanliness',
      color: 'from-purple-500 to-purple-600' 
    },
    { 
      key: 'noise', 
      icon: Volume2, 
      label: language === 'ko' ? '소음 민감도' : 'Noise Sensitivity',
      color: 'from-pink-500 to-pink-600' 
    },
    { 
      key: 'social', 
      icon: Users, 
      label: language === 'ko' ? '사교성' : 'Social Life',
      color: 'from-green-500 to-green-600' 
    },
    { 
      key: 'study', 
      icon: BookOpen, 
      label: language === 'ko' ? '공부 습관' : 'Study Habits',
      color: 'from-orange-500 to-orange-600' 
    },
    { 
      key: 'sharing', 
      icon: Coffee, 
      label: language === 'ko' ? '물건 공유' : 'Sharing',
      color: 'from-teal-500 to-teal-600' 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="px-4 py-4 flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <h1 className="text-primary">{language === 'ko' ? '라이프스타일 분석' : 'Lifestyle Analysis'}</h1>
          </div>
          <button 
            onClick={onStartInput}
            className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <Edit3 className="w-4 h-4" />
            {language === 'ko' ? '수정' : 'Edit'}
          </button>
        </div>
      </header>

      <main className="px-4 py-6 max-w-md mx-auto pb-24">
        {/* Match Rate Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-primary to-secondary rounded-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.15)] p-6 mb-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-4xl">{myProfile.avatar}</div>
              <Heart className="w-6 h-6" />
              <div className="text-4xl">{roommateProfile.avatar}</div>
            </div>
            <Award className="w-8 h-8 opacity-80" />
          </div>
          
          <p className="text-sm opacity-90 mb-2">
            {language === 'ko' ? '룸메이트 매칭률' : 'Roommate Match Rate'}
          </p>
          <div className="flex items-end gap-2 mb-3">
            <div className="text-5xl">{matchRate}%</div>
            <TrendingUp className="w-6 h-6 mb-2" />
          </div>
          
          <div className="flex items-center justify-between text-sm opacity-90">
            <span>{myProfile.name}</span>
            <span>{language === 'ko' ? '와' : 'with'}</span>
            <span>{roommateProfile.name}</span>
          </div>
          
          {/* Match Bar */}
          <div className="mt-4 h-2 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${matchRate}%` }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </motion.div>

        {/* My Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] p-6 mb-4"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{myProfile.avatar}</div>
              <div>
                <h3 className="text-foreground">{language === 'ko' ? '내 프로필' : 'My Profile'}</h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'ko' ? '종합 점수' : 'Overall Score'}: <span className="text-primary">{myProfile.overall}/10</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {categoryInfo.map((cat) => {
              const Icon = cat.icon;
              const value = myProfile.categories[cat.key as keyof typeof myProfile.categories];
              return (
                <div key={cat.key} className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${cat.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-foreground">{cat.label}</span>
                      <span className="text-sm text-primary">{value}/10</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${cat.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${value * 10}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Roommate Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] p-6 mb-4"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{roommateProfile.avatar}</div>
              <div>
                <h3 className="text-foreground">{language === 'ko' ? '룸메이트 프로필' : 'Roommate Profile'}</h3>
                <p className="text-sm text-muted-foreground">
                  {roommateProfile.name} · {language === 'ko' ? '종합 점수' : 'Overall Score'}: <span className="text-primary">{roommateProfile.overall}/10</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {categoryInfo.map((cat) => {
              const Icon = cat.icon;
              const myValue = myProfile.categories[cat.key as keyof typeof myProfile.categories];
              const roommateValue = roommateProfile.categories[cat.key as keyof typeof roommateProfile.categories];
              const difference = Math.abs(myValue - roommateValue);
              
              return (
                <div key={cat.key} className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${cat.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-foreground">{cat.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-primary">{roommateValue}/10</span>
                        {difference <= 1 && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                            {language === 'ko' ? '비슷함' : 'Similar'}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${cat.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${roommateValue * 10}%` }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Insights & Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] p-6 mb-4"
        >
          <h3 className="text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            {language === 'ko' ? '인사이트 & 추천' : 'Insights & Recommendations'}
          </h3>

          <div className="space-y-3">
            <div className="bg-gradient-to-r from-secondary/10 to-emerald-50 rounded-[20px] p-4 border-2 border-secondary/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-foreground mb-1">
                    {language === 'ko' ? '높은 호환성!' : 'High Compatibility!'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {language === 'ko' 
                      ? '당신과 지민은 수면 패턴과 학습 스타일에서 매우 높은 일치도를 보입니다. 조용한 환경을 선호하는 점도 비슷합니다.'
                      : 'You and Jimin show very high compatibility in sleep patterns and study styles. You both prefer quiet environments.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-blue-50 rounded-[20px] p-4 border-2 border-primary/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground mb-1">
                    {language === 'ko' ? '개선 포인트' : 'Improvement Area'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {language === 'ko'
                      ? '사교성 부분에서 약간의 차이가 있습니다. 서로의 개인 공간을 존중하면서 필요할 때 소통하는 규칙을 정하면 좋겠습니다.'
                      : 'There\'s a slight difference in sociability. Setting clear communication rules while respecting personal space would be beneficial.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tips Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-[20px] p-4"
        >
          <h4 className="text-sm text-foreground mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            {language === 'ko' ? '매칭 팁' : 'Matching Tips'}
          </h4>
          <p className="text-sm text-muted-foreground">
            {language === 'ko' 
              ? `${matchRate}%의 매칭률은 훌륭합니다! 서로의 차이를 존중하면서 공통점을 활용하면 더 좋은 룸메이트 관계를 만들 수 있어요.`
              : `A ${matchRate}% match rate is excellent! Respecting differences while leveraging commonalities can create an even better roommate relationship.`}
          </p>
        </motion.div>
      </main>
    </div>
  );
}
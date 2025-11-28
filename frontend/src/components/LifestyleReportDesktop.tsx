import { Sparkles, Moon, Volume2, Users, BookOpen, Coffee, Heart, Edit3, TrendingUp, Award, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { useUser } from '../hooks/useUser';

interface LifestyleReportDesktopProps {
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

export function LifestyleReportDesktop({ onStartInput }: LifestyleReportDesktopProps) {
  const { language } = useLanguage();
  const { user } = useUser();
  
  const myProfile: LifestyleProfile = {
    name: language === 'ko' ? '나' : 'Me',
    avatar: '👤',
    overall: Number(
      (
        Object.values(user.lifestyle).reduce((acc, value) => acc + value, 0) /
        Object.values(user.lifestyle).length
      ).toFixed(1),
    ),
    categories: { ...user.lifestyle },
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

  const topMatches = [
    { name: language === 'ko' ? '사라' : 'Sarah', avatar: '👩‍🎓', match: 94, traits: ['Early Bird', 'Clean', 'Quiet'] },
    { name: language === 'ko' ? '마이크' : 'Mike', avatar: '👨‍💼', match: 91, traits: ['Night Owl', 'Social', 'Active'] },
    { name: language === 'ko' ? '에밀리' : 'Emily', avatar: '👩‍💻', match: 89, traits: ['Organized', 'Quiet', 'Study'] },
  ];

  const lifestyleCategories = [
    { 
      key: 'sleep', 
      icon: Moon, 
      label: language === 'ko' ? '수면 패턴' : 'Sleep Pattern',
      myScore: myProfile.categories.sleep,
      roommateScore: roommateProfile.categories.sleep,
      color: 'from-purple-400 to-purple-600'
    },
    { 
      key: 'cleanliness', 
      icon: Sparkles, 
      label: language === 'ko' ? '청결도' : 'Cleanliness',
      myScore: myProfile.categories.cleanliness,
      roommateScore: roommateProfile.categories.cleanliness,
      color: 'from-blue-400 to-blue-600'
    },
    { 
      key: 'noise', 
      icon: Volume2, 
      label: language === 'ko' ? '소음 민감도' : 'Noise Sensitivity',
      myScore: myProfile.categories.noise,
      roommateScore: roommateProfile.categories.noise,
      color: 'from-orange-400 to-orange-600'
    },
    { 
      key: 'social', 
      icon: Users, 
      label: language === 'ko' ? '사교성' : 'Sociability',
      myScore: myProfile.categories.social,
      roommateScore: roommateProfile.categories.social,
      color: 'from-pink-400 to-pink-600'
    },
    { 
      key: 'study', 
      icon: BookOpen, 
      label: language === 'ko' ? '학습 스타일' : 'Study Style',
      myScore: myProfile.categories.study,
      roommateScore: roommateProfile.categories.study,
      color: 'from-green-400 to-green-600'
    },
    { 
      key: 'sharing', 
      icon: Coffee, 
      label: language === 'ko' ? '공유 의향' : 'Sharing Willingness',
      myScore: myProfile.categories.sharing,
      roommateScore: roommateProfile.categories.sharing,
      color: 'from-teal-400 to-teal-600'
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 min-h-screen">
      <div className="w-full max-w-[1440px] min-w-[1024px] mx-auto px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Profile Overview */}
          <div className="col-span-4 space-y-6">
            {/* My Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-primary/10 via-purple-50 to-pink-50 rounded-3xl shadow-lg border-2 border-primary/20 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                  {myProfile.avatar}
                </div>
                <div>
                  <h2 className="text-foreground mb-1">{language === 'ko' ? '내 라이프스타일 DNA' : 'My Lifestyle DNA'}</h2>
                  <p className="text-sm text-muted-foreground">{language === 'ko' ? '개인화된 분석' : 'Personalized Analysis'}</p>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur rounded-2xl p-6 mb-6">
                <p className="text-sm text-muted-foreground mb-2">{language === 'ko' ? '종합 점수' : 'Overall Score'}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl text-primary">{myProfile.overall}</span>
                  <span className="text-xl text-muted-foreground">/10</span>
                </div>
              </div>

              <button 
                onClick={onStartInput}
                className="w-full bg-primary text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all no-underline"
              >
                <Edit3 className="w-5 h-5" />
                {language === 'ko' ? '라이프스타일 재분석' : 'Re-analyze Lifestyle'}
              </button>
            </motion.div>

            {/* Top Matches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl shadow-lg border border-border p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-foreground flex items-center gap-2">
                  <Award className="w-5 h-5 text-secondary" />
                  {language === 'ko' ? '추천 룸메이트' : 'Top Matches'}
                </h3>
              </div>

              <div className="space-y-4">
                {topMatches.map((match, index) => (
                  <div
                    key={index}
                    className="bg-muted rounded-2xl p-4 hover:bg-primary/5 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-xl">
                        {match.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{match.name}</p>
                        <p className="text-xs text-muted-foreground">{language === 'ko' ? '매칭률' : 'Match'}: {match.match}%</p>
                      </div>
                      <div className="text-2xl text-secondary">{match.match}%</div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {match.traits.map((trait, i) => (
                        <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-secondary to-emerald-400 text-white py-3 rounded-xl mt-4 hover:shadow-lg transition-all">
                {language === 'ko' ? '더 많은 매칭 보기' : 'View More Matches'}
              </button>
            </motion.div>

            {/* Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-secondary/20 to-emerald-50 rounded-3xl p-6 border-2 border-secondary/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                  🏆
                </div>
                <div>
                  <p className="text-sm text-foreground mb-1">
                    {language === 'ko' ? '완벽한 매칭 달성!' : 'Perfect Match Achieved!'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {language === 'ko' ? '94% 이상의 호환성' : '94% compatibility or higher'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Detailed Analysis */}
          <div className="col-span-8 space-y-6">
            {/* Comparison Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-lg border border-border p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-foreground">{language === 'ko' ? '라이프스타일 비교' : 'Lifestyle Comparison'}</h2>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">{myProfile.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-secondary" />
                    <span className="text-sm text-foreground">{roommateProfile.name}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {lifestyleCategories.map((category, index) => {
                  const Icon = category.icon;
                  const diff = Math.abs(category.myScore - category.roommateScore);
                  const compatibility = 100 - (diff * 10);
                  
                  return (
                    <motion.div
                      key={category.key}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-muted rounded-2xl p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-foreground mb-1">{category.label}</p>
                          <p className="text-xs text-secondary">{compatibility}% {language === 'ko' ? '호환' : 'Compatible'}</p>
                        </div>
                      </div>

                      {/* My Score Bar */}
                      <div className="mb-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-muted-foreground">{myProfile.name}</span>
                          <span className="text-xs text-foreground">{category.myScore}/10</span>
                        </div>
                        <div className="h-2 bg-white rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-blue-600"
                            initial={{ width: 0 }}
                            animate={{ width: `${category.myScore * 10}%` }}
                            transition={{ duration: 0.8, delay: index * 0.05 + 0.2 }}
                          />
                        </div>
                      </div>

                      {/* Roommate Score Bar */}
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-muted-foreground">{roommateProfile.name}</span>
                          <span className="text-xs text-foreground">{category.roommateScore}/10</span>
                        </div>
                        <div className="h-2 bg-white rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-secondary to-emerald-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${category.roommateScore * 10}%` }}
                            transition={{ duration: 0.8, delay: index * 0.05 + 0.3 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl shadow-lg border border-border p-8"
            >
              <h3 className="text-foreground mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                {language === 'ko' ? '인사이트 & 추천' : 'Insights & Recommendations'}
              </h3>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-secondary/10 to-emerald-50 rounded-2xl p-6 border-2 border-secondary/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground mb-2">
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

                <div className="bg-gradient-to-r from-primary/10 to-blue-50 rounded-2xl p-6 border-2 border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground mb-2">
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

              <button className="w-full bg-primary text-white py-4 rounded-xl mt-6 flex items-center justify-center gap-2 hover:shadow-lg transition-all">
                {language === 'ko' ? '상세 분석 보기' : 'View Detailed Analysis'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

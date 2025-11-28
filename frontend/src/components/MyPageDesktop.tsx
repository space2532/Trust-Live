import { Settings, User, ShoppingBag, TrendingUp, Award, MapPin, Heart, ChevronRight, Edit, Bell, Shield, CreditCard, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LifestyleDNACard } from './LifestyleDNACard';
import { OrderHistory } from './OrderHistory';
import { MenuOptions } from './MenuOptions';
import { useUser } from '../hooks/useUser';
import { ProfileBioCard } from './ProfileBioCard';
import { ReputationDetailCard } from './ReputationDetailCard';

interface MyPageDesktopProps {
  onSettingsClick: () => void;
}

export function MyPageDesktop({ onSettingsClick }: MyPageDesktopProps) {
  const { language, t } = useLanguage();
  const { user } = useUser();
  const englishYearLabels: Record<number, string> = {
    1: 'Freshman',
    2: 'Sophomore',
    3: 'Junior',
    4: 'Senior',
  };
  const yearLabel = language === 'ko' ? `${user.year}학년` : englishYearLabels[user.year] ?? 'Student';

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 min-h-screen pt-24">
      <div className="w-full max-w-[1440px] min-w-[1024px] mx-auto px-8 pb-16">
        <div className="grid grid-cols-12 gap-12">
          {/* Left Column - Profile */}
          <div className="col-span-4 flex flex-col" style={{ gap: '44px' }}>
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-primary/10 via-blue-50 to-purple-50 rounded-3xl shadow-lg border-2 border-primary/20 p-8 relative"
            >
              {/* Edit Button - Top Right */}
              <button className="absolute top-6 right-6 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Edit className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4 mb-6">
                {/* Avatar */}
                <div className="relative">
                  <ImageWithFallback
                    src={user.avatar}
                    alt={user.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-secondary rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <h2 className="text-foreground mb-2">{user.name}</h2>
                  
                  {/* Verified Badge */}
                  <div className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3">
                    <CheckCircle2 className="w-3 h-3" />
                    <span className="text-xs">{language === 'ko' ? '인증된 대학생' : 'Verified University Student'}</span>
                  </div>
                  
                  <div className="space-y-0.5">
                    <p className="text-sm text-foreground">{user.university}</p>
                    <p className="text-xs text-muted-foreground">{`${user.major} • ${yearLabel}`}</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 bg-white/60 backdrop-blur rounded-2xl p-4">
                {/* Trust Score */}
                <div className="flex flex-col items-center justify-center text-center rounded-xl bg-primary/5 px-3 py-2 min-w-0">
                  <p className="text-2xl text-primary mb-0.5">{user.trustScore}</p>
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
                      title={language === 'ko' ? '아침형 인간' : 'Morning Person'}
                    >
                      {language === 'ko' ? '아침형 인간' : 'Morning Person'}
                    </p>
                  </div>
                </div>

                {/* Trait 2 */}
                <div className="flex flex-col items-center justify-center text-center rounded-xl bg-emerald-50 px-3 py-2 min-w-0">
                  <div className="flex items-center gap-1 min-w-0">
                    <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
                    <p
                      className="text-sm text-emerald-700 truncate max-w-[110px]"
                      title={language === 'ko' ? '깔끔 대장' : 'Super Tidy'}
                    >
                      {language === 'ko' ? '깔끔 대장' : 'Super Tidy'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio / 자기소개 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <ProfileBioCard bio={user.bio} likes={user.likes} dislikes={user.dislikes} />
            </motion.div>

            {/* Menu Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <MenuOptions />
            </motion.div>

            {/* App Version */}
            <div className="text-center py-4">
              <p className="text-xs text-muted-foreground">Trust-Live v1.0.2</p>
              <p className="text-xs text-muted-foreground">Student Housing Super App</p>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="col-span-8 flex flex-col" style={{ gap: '44px' }}>
            {/* Reputation Details - 상세 평판 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <ReputationDetailCard
                livingManners={user.reputation.manners}
                communication={user.reputation.communication}
                payment={user.reputation.payment}
                maxScore={100}
                recentReviews={user.recentReviews.map((r) => r.text)}
              />
            </motion.div>

            {/* Order History & Lifestyle DNA - Side by Side */}
            <div className="grid grid-cols-2 gap-8">
              {/* Lifestyle DNA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <LifestyleDNACard />
              </motion.div>

              {/* Order History */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <OrderHistory />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Settings, User, ShoppingBag, TrendingUp, Award, MapPin, Heart, ChevronRight, Edit, Bell, Shield, CreditCard, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrustScoreCard } from './TrustScoreCard';
import { AchievementBadges } from './AchievementBadges';
import { LifestyleDNACard } from './LifestyleDNACard';
import { OrderHistory } from './OrderHistory';
import { MenuOptions } from './MenuOptions';

interface MyPageDesktopProps {
  onSettingsClick: () => void;
}

export function MyPageDesktop({ onSettingsClick }: MyPageDesktopProps) {
  const { language, t } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 min-h-screen pt-24">
      <div className="w-full max-w-[1440px] mx-auto px-8 pb-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Profile */}
          <div className="col-span-4 space-y-6">
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
                    src="https://images.unsplash.com/photo-1639654655546-68bc1f21e9e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDAyMzc3MHww&ixlib=rb-4.1.0&q=80&w=200"
                    alt="Alex Kim"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-secondary rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <h2 className="text-foreground mb-2">{language === 'ko' ? '알렉스 김' : 'Alex Kim'}</h2>
                  
                  {/* Verified Badge */}
                  <div className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3">
                    <CheckCircle2 className="w-3 h-3" />
                    <span className="text-xs">{language === 'ko' ? '인증된 대학생' : 'Verified University Student'}</span>
                  </div>
                  
                  <div className="space-y-0.5">
                    <p className="text-sm text-foreground">{language === 'ko' ? '주립대학교' : 'State University'}</p>
                    <p className="text-xs text-muted-foreground">{language === 'ko' ? '컴퓨터공학 • 3학년' : 'Computer Science • Junior'}</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 bg-white/60 backdrop-blur rounded-2xl p-4">
                <div className="text-center">
                  <p className="text-2xl text-primary">98</p>
                  <p className="text-xs text-muted-foreground">{language === 'ko' ? '신뢰점수' : 'Trust Score'}</p>
                </div>
                <div className="text-center border-l border-r border-border">
                  <p className="text-2xl text-secondary">12</p>
                  <p className="text-xs text-muted-foreground">{language === 'ko' ? '참여딜' : 'Deals Joined'}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl text-foreground">6 {language === 'ko' ? '개월' : 'mo'}</p>
                  <p className="text-xs text-muted-foreground">{language === 'ko' ? '회원' : 'Member'}</p>
                </div>
              </div>
            </motion.div>

            {/* Menu Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
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
          <div className="col-span-8 space-y-6">
            {/* Trust Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <TrustScoreCard score={98} maxScore={100} />
            </motion.div>

            {/* Achievement Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <AchievementBadges />
            </motion.div>

            {/* Order History & Lifestyle DNA - Side by Side */}
            <div className="grid grid-cols-2 gap-6">
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
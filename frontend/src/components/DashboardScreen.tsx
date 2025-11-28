import { ProfileHeader } from './ProfileHeader';
import { RoommateCardCompact } from './RoommateCardCompact';
import { Bell } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, MessageCircle } from 'lucide-react';

export function DashboardScreen() {
  const { t, language } = useLanguage();

  const roommates = [
    {
      id: 1,
      name: language === 'ko' ? '사라 존슨' : 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      matchPercentage: 98,
      status: language === 'ko' ? '활동중' : 'Active',
      sharedInterests: language === 'ko' ? ['아침형 인간', '청결주의', '조용한 학습'] : ['Early Bird', 'Clean Freak', 'Quiet Study'],
    },
    {
      id: 2,
      name: language === 'ko' ? '마크 리' : 'Mark Lee',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      matchPercentage: 92,
      status: language === 'ko' ? '활동중' : 'Active',
      sharedInterests: language === 'ko' ? ['올빼미족', '사교적', '음악 애호가'] : ['Night Owl', 'Social', 'Music Lover'],
    },
    {
      id: 3,
      name: language === 'ko' ? '에밀리 박' : 'Emily Park',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      matchPercentage: 89,
      status: language === 'ko' ? '활동중' : 'Active',
      sharedInterests: language === 'ko' ? ['정리정돈', '채식주의', '운동 열심'] : ['Organized', 'Vegetarian', 'Gym Enthusiast'],
    },
  ];
  
  const groupBuyDeals = [
    {
      id: 1,
      name: language === 'ko' ? '프리미엄 생수 팩' : 'Premium Water Pack',
      image: 'https://images.unsplash.com/photo-1565151448704-33d96c51fff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3R0bGVkJTIwd2F0ZXIlMjBwYWNrfGVufDF8fHx8MTc2NDE0MjY5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 20000,
      groupPrice: 15000,
      discount: 30,
      participants: 3,
      target: 5,
      location: language === 'ko' ? 'A동' : 'Dorm A',
      deadline: language === 'ko' ? '3시간 남음' : '3h left',
    },
    {
      id: 2,
      name: language === 'ko' ? '세탁 세제' : 'Laundry Detergent',
      image: 'https://images.unsplash.com/photo-1642429948905-62fc9c9b3f76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXRlcmdlbnQlMjBib3R0bGV8ZW58MXx8fHwxNzY0MTQyNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 18000,
      groupPrice: 12600,
      discount: 30,
      participants: 4,
      target: 5,
      location: language === 'ko' ? 'B동' : 'Dorm B',
      deadline: language === 'ko' ? '5시간 남음' : '5h left',
    },
    {
      id: 3,
      name: language === 'ko' ? '청소 용품' : 'Cleaning Supplies',
      image: 'https://images.unsplash.com/photo-1626379481874-3dc5678fa8ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHN1cHBsaWVzfGVufDF8fHx8MTc2NDEzNDQ5MHww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 25000,
      groupPrice: 17500,
      discount: 30,
      participants: 2,
      target: 5,
      location: language === 'ko' ? 'A동' : 'Dorm A',
      deadline: language === 'ko' ? '8시간 남음' : '8h left',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="px-4 py-4 flex items-center justify-between max-w-md mx-auto">
          <div>
            <h1 className="text-primary">Trust-Live</h1>
            <p className="text-xs text-muted-foreground">{language === 'ko' ? '학생 주거 허브' : 'Student Housing Hub'}</p>
          </div>
          <button className="relative p-2 hover:bg-muted rounded-full transition-colors">
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
          </button>
        </div>
      </header>

      <main className="pt-4 px-4 max-w-md mx-auto space-y-5 pb-24">
        {/* Profile Header */}
        <ProfileHeader 
          name={language === 'ko' ? '알렉스 김' : 'Alex Kim'}
          university={language === 'ko' ? '주립대학교' : 'State University'}
          compatibilityScore={94}
          avatar="https://images.unsplash.com/photo-1639654655546-68bc1f21e9e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDAyMzc3MHww&ixlib=rb-4.1.0&q=80&w=200"
        />

        {/* My Roommates */}
        <div>
          <h2 className="text-foreground mb-3 px-1">{language === 'ko' ? '내 룸메이트' : 'My Roommates'}</h2>
          
          {/* Horizontal Scroll */}
          <div className="overflow-x-auto -mx-4 px-4 pb-2">
            <div className="flex gap-4" style={{ minWidth: 'min-content' }}>
              {roommates.map((roommate) => (
                <div key={roommate.id} style={{ width: '200px' }}>
                  <RoommateCardCompact
                    name={roommate.name}
                    avatar={roommate.avatar}
                    matchPercentage={roommate.matchPercentage}
                    status={roommate.status}
                    sharedInterests={roommate.sharedInterests}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tips Card */}
        <div className="bg-gradient-to-br from-secondary/10 to-emerald-50 rounded-[20px] p-4 border-2 border-secondary/30">
          <div className="flex gap-3">
            <span className="text-2xl flex-shrink-0">💡</span>
            <div>
              <p className="text-sm text-foreground mb-1">{t('dashboard.livingTip')}</p>
              <p className="text-sm text-muted-foreground">
                {t('dashboard.tipMessage')}
              </p>
            </div>
          </div>
        </div>

        {/* Hyper-local Group Buy Deals */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-foreground">{t('dashboard.nearbyDeals')}</h2>
            <button className="text-sm text-primary hover:underline">{t('dashboard.seeAll')}</button>
          </div>

          {/* Horizontal Scroll */}
          <div className="overflow-x-auto -mx-4 px-4 pb-2">
            <div className="flex gap-4" style={{ minWidth: 'min-content' }}>
              {groupBuyDeals.map((deal) => (
                <div 
                  key={deal.id}
                  className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden flex-shrink-0"
                  style={{ width: '280px' }}
                >
                  {/* Product Image */}
                  <div className="relative">
                    <ImageWithFallback 
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-destructive text-white px-3 py-1 rounded-full text-sm">
                      {deal.discount}% {t('dashboard.off')}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs text-foreground">
                      ⏰ {deal.deadline}
                    </div>
                  </div>

                  {/* Deal Info */}
                  <div className="p-4">
                    <h3 className="text-foreground mb-2">{deal.name}</h3>
                    


                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-lg text-primary">₩{deal.groupPrice.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground line-through">₩{deal.originalPrice.toLocaleString()}</span>
                    </div>

                    {/* Progress */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-muted-foreground">{deal.participants}/{deal.target} {t('dashboard.joined')}</span>
                        <span className="text-secondary">{Math.round((deal.participants / deal.target) * 100)}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-secondary to-emerald-500 h-full transition-all"
                          style={{ width: `${(deal.participants / deal.target) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-secondary to-emerald-400 text-white py-2 rounded-[12px] text-sm hover:shadow-lg transition-all">
                      {t('dashboard.joinDeal')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Posts */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-foreground">{language === 'ko' ? '커뮤니티 피드' : 'Community Feed'}</h2>
            <button className="text-sm text-primary hover:underline">{language === 'ko' ? '더보기' : 'See All'}</button>
          </div>

          <div className="space-y-3">
            {[
              {
                id: 1,
                author: {
                  name: language === 'ko' ? '사라 김' : 'Sarah Kim',
                  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
                },
                category: language === 'ko' ? '룸메이트 찾기' : 'Roommate Search',
                title: language === 'ko' ? '깔끔한 룸메이트 구해요!' : 'Looking for a clean roommate!',
                content: language === 'ko' 
                  ? '안녕하세요! 다음 달부터 2인실 공유할 룸메이트를 찾고 있습니다.'
                  : 'Hi! Looking for a roommate to share a 2BR apartment starting next month.',
                likes: 24,
                comments: 12,
                timeAgo: language === 'ko' ? '2시간 전' : '2h ago',
                categoryColor: 'bg-primary',
              },
              {
                id: 2,
                author: {
                  name: language === 'ko' ? '알렉스 박' : 'Alex Park',
                  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
                },
                category: language === 'ko' ? '공동구매' : 'Group Buy',
                title: language === 'ko' ? '쌀 대량 구매 같이 하실 분?' : 'Anyone want to join bulk rice purchase?',
                content: language === 'ko'
                  ? '20kg 프리미엄 쌀 공동구매 진행합니다. 10명 모이면 1인당 15,000원 절약!'
                  : 'Group buy for 20kg premium rice bags. Save ₩15,000 each with 10 people!',
                likes: 45,
                comments: 28,
                timeAgo: language === 'ko' ? '5시간 전' : '5h ago',
                categoryColor: 'bg-secondary',
              },
              {
                id: 3,
                author: {
                  name: language === 'ko' ? '제이미 리' : 'Jamie Lee',
                  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
                },
                category: language === 'ko' ? '주거 팁' : 'Housing Tips',
                title: language === 'ko' ? '저렴한 학생 주거지 베스트 3' : 'Best neighborhoods for students',
                content: language === 'ko'
                  ? '막 이사했는데 팁 공유하고 싶어요! 신촌 지역이 잘 찾아보면 좋은 매물이 많더라구요.'
                  : 'Just moved and wanted to share some tips! Sinchon area has great deals.',
                likes: 67,
                comments: 19,
                timeAgo: language === 'ko' ? '1일 전' : '1d ago',
                categoryColor: 'bg-blue-500',
              },
            ].map((post) => (
              <div key={post.id} className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-4">
                <div className="flex items-center gap-3 mb-3">
                  <ImageWithFallback
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{post.author.name}</p>
                    <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
                  </div>
                  <span className={`${post.categoryColor} text-white px-2 py-1 rounded-full text-xs`}>
                    {post.category}
                  </span>
                </div>

                <h3 className="text-sm text-foreground mb-2">{post.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{post.content}</p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-3 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
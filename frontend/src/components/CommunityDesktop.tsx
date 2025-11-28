import { Plus, Heart, MessageCircle, Share2, TrendingUp, Users, Home as HomeIcon, ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

interface Post {
  id: number;
  author: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  category: string;
  title: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timeAgo: string;
  categoryColor: string;
}

export function CommunityDesktop() {
  const { t, language } = useLanguage();

  const posts: Post[] = [
    {
      id: 1,
      author: {
        name: 'Sarah Kim',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
        verified: true,
      },
      category: language === 'ko' ? '룸메이트 찾기' : 'Roommate Search',
      title: language === 'ko' ? '깔끔한 룸메이트를 찾고 있어요!' : 'Looking for a clean roommate near campus!',
      content: language === 'ko' 
        ? '안녕하세요! 다음 달부터 투룸 아파트를 함께 쓸 룸메이트를 찾고 있습니다. 저는 컴퓨터공학과 3학년이고, 조용하고 깔끔한 편입니다. 월세는 45만원입니다.'
        : 'Hi! I\'m looking for a roommate to share a 2BR apartment starting next month. I\'m a junior majoring in CS, quiet, and very clean. Rent is ₩450,000/month.',
      likes: 24,
      comments: 12,
      timeAgo: language === 'ko' ? '2시간 전' : '2h ago',
      categoryColor: 'bg-primary',
    },
    {
      id: 2,
      author: {
        name: 'Alex Park',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
        verified: true,
      },
      category: language === 'ko' ? '그룹바이' : 'Group Buy',
      title: language === 'ko' ? '쌀 대량 구매 같이 하실 분?' : 'Anyone want to join bulk rice purchase?',
      content: language === 'ko'
        ? '20kg 프리미엄 쌀 대량 구매를 준비하고 있습니다. 10명이 모이면 각자 15,000원씩 절약할 수 있어요! 관심 있으시면 DM 주세요.'
        : 'I\'m organizing a group buy for 20kg premium rice bags. If we get 10 people, we can save ₩15,000 each! DM me if interested.',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800',
      likes: 45,
      comments: 28,
      timeAgo: language === 'ko' ? '5시간 전' : '5h ago',
      categoryColor: 'bg-secondary',
    },
    {
      id: 3,
      author: {
        name: 'Jamie Lee',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
        verified: true,
      },
      category: language === 'ko' ? '주거 팁' : 'Housing Tips',
      title: language === 'ko' ? '예산 맞는 학생 동네 추천' : 'Best neighborhoods for students on a budget',
      content: language === 'ko'
        ? '막 이사했는데 팁을 공유하고 싶어서요! 신촌 지역은 잘 찾아보면 좋은 매물이 많아요. 제가 추천하는 곳 TOP 3는...'
        : 'Just moved and wanted to share some tips! Sinchon area has great deals if you look carefully. Here are my top 3 picks...',
      likes: 67,
      comments: 19,
      timeAgo: language === 'ko' ? '1일 전' : '1d ago',
      categoryColor: 'bg-blue-500',
    },
    {
      id: 4,
      author: {
        name: 'Chris Choi',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
        verified: false,
      },
      category: language === 'ko' ? '마켓플레이스' : 'Marketplace',
      title: language === 'ko' ? '책상과 의자 판매 - 상태 좋음!' : 'Selling desk and chair - great condition!',
      content: language === 'ko'
        ? '곧 이사 가게 되어 공부용 책상(8만원)과 인체공학 의자(6만원)를 판매합니다. 둘 다 1년도 안 됐어요. 직거래만 가능합니다.'
        : 'Moving out soon, selling my study desk (₩80,000) and ergonomic chair (₩60,000). Both less than 1 year old. Pickup only.',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800',
      likes: 12,
      comments: 8,
      timeAgo: language === 'ko' ? '2일 전' : '2d ago',
      categoryColor: 'bg-orange-500',
    },
    {
      id: 5,
      author: {
        name: 'Emma Wilson',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
        verified: true,
      },
      category: language === 'ko' ? '주거 팁' : 'Housing Tips',
      title: language === 'ko' ? '겨울철 난방비 절약하는 꿀팁' : 'Winter heating cost saving tips',
      content: language === 'ko'
        ? '작년 겨울에 난방비가 너무 많이 나와서 이것저것 시도해봤는데, 정말 효과 있었던 방법들을 공유합니다! 창문 단열재가 가장 효과적이었어요.'
        : 'Last winter my heating bill was crazy, so I tried various methods. Here are the ones that really worked! Window insulation was the most effective.',
      likes: 89,
      comments: 34,
      timeAgo: language === 'ko' ? '3일 전' : '3d ago',
      categoryColor: 'bg-blue-500',
    },
    {
      id: 6,
      author: {
        name: 'Mike Johnson',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
        verified: true,
      },
      category: language === 'ko' ? '그룹바이' : 'Group Buy',
      title: language === 'ko' ? '생필품 코스트코 공동구매' : 'Costco essentials group buy',
      content: language === 'ko'
        ? '이번 주말에 코스트코 가는데, 티슈/세제 등 생필품 대량 구매 나눠 가지실 분 모집합니다. 5명 정도면 좋을 것 같아요!'
        : 'Going to Costco this weekend, looking for people to split bulk purchases of tissues, detergent, etc. Looking for about 5 people!',
      likes: 56,
      comments: 41,
      timeAgo: language === 'ko' ? '4일 전' : '4d ago',
      categoryColor: 'bg-secondary',
    },
  ];

  const categories = [
    { name: language === 'ko' ? '전체' : 'All', icon: TrendingUp, color: 'text-primary' },
    { name: language === 'ko' ? '룸메이트' : 'Roommates', icon: Users, color: 'text-primary' },
    { name: language === 'ko' ? '주거' : 'Housing', icon: HomeIcon, color: 'text-blue-500' },
    { name: language === 'ko' ? '마켓' : 'Marketplace', icon: ShoppingCart, color: 'text-orange-500' },
  ];

  const trendingTopics = [
    { tag: language === 'ko' ? '룸메이트찾기' : 'roommate', count: 234 },
    { tag: language === 'ko' ? '그룹바이' : 'groupbuy', count: 189 },
    { tag: language === 'ko' ? '신촌' : 'sinchon', count: 156 },
    { tag: language === 'ko' ? '절약팁' : 'savingtips', count: 143 },
    { tag: language === 'ko' ? '대학생활' : 'studentlife', count: 128 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 pt-24">
      <div className="w-full max-w-[1440px] mx-auto px-8 pb-12">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-foreground mb-2">{t('community.title')}</h1>
              <p className="text-muted-foreground">
                {language === 'ko' ? '학생들과 정보를 공유하고 소통하세요' : 'Connect and share with fellow students'}
              </p>
            </div>
            <button className="bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:shadow-xl hover:shadow-primary/30 transition-all">
              <Plus className="w-5 h-5" />
              <span>{language === 'ko' ? '새 글 작성' : 'New Post'}</span>
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex gap-3">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl border-2 transition-all ${
                    index === 0
                      ? 'bg-primary text-white border-primary shadow-lg'
                      : 'bg-white text-foreground border-border hover:border-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Posts Feed */}
          <div className="col-span-8 space-y-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Author Info */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <ImageWithFallback
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-foreground">{post.author.name}</span>
                        {post.author.verified && (
                          <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-xs text-white">✓</span>
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{post.timeAgo}</p>
                    </div>
                    <span className={`${post.categoryColor} text-white text-sm px-4 py-2 rounded-full`}>
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <h2 className="text-foreground mb-3">{post.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.content}
                    </p>
                  </div>
                </div>

                {/* Image if exists */}
                {post.image && (
                  <div className="w-full">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                )}

                {/* Actions */}
                <div className="px-6 py-4 border-t border-border flex items-center gap-8">
                  <button className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                      <Heart className="w-5 h-5" />
                    </div>
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors ml-auto group">
                    <div className="w-10 h-10 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                      <Share2 className="w-5 h-5" />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Load More */}
            <button className="w-full bg-white text-foreground border-2 border-border py-4 rounded-2xl hover:bg-primary hover:text-white hover:border-primary transition-colors">
              {t('community.loadMore')}
            </button>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4 space-y-6">
            {/* Trending Topics */}
            <div className="bg-white rounded-3xl shadow-lg border border-border p-6 sticky top-24">
              <h3 className="text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                {language === 'ko' ? '인기 토픽' : 'Trending Topics'}
              </h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <button
                    key={index}
                    className="w-full bg-muted hover:bg-primary/10 rounded-xl p-4 flex items-center justify-between transition-colors group"
                  >
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      #{topic.tag}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {topic.count} {language === 'ko' ? '게시물' : 'posts'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-primary/10 to-blue-50 rounded-3xl border-2 border-primary/30 p-6">
              <h3 className="text-foreground mb-4">
                {language === 'ko' ? '커뮤니티 통계' : 'Community Stats'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{language === 'ko' ? '활성 사용자' : 'Active Users'}</span>
                  <span className="text-xl text-primary">2,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{language === 'ko' ? '오늘의 게시물' : 'Posts Today'}</span>
                  <span className="text-xl text-primary">124</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{language === 'ko' ? '진행 중인 그룹바이' : 'Active Group Buys'}</span>
                  <span className="text-xl text-secondary">38</span>
                </div>
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-white rounded-3xl shadow-lg border border-border p-6">
              <h3 className="text-foreground mb-4">
                {language === 'ko' ? '커뮤니티 가이드' : 'Community Guidelines'}
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-0.5">✓</span>
                  <span>{language === 'ko' ? '서로 존중하고 배려해주세요' : 'Be respectful and considerate'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-0.5">✓</span>
                  <span>{language === 'ko' ? '개인정보를 공유하지 마세요' : 'Don\'t share personal information'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-0.5">✓</span>
                  <span>{language === 'ko' ? '스팸이나 광고는 금지됩니다' : 'No spam or advertising'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-0.5">✓</span>
                  <span>{language === 'ko' ? '관련 카테고리에 게시해주세요' : 'Post in relevant categories'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

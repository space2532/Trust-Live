import { useMemo, useState } from 'react';
import { TrendingUp, Users, Home as HomeIcon, ShoppingCart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CommunityPost {
  id: number;
  author: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  categoryId: string;
  category: string;
  title: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timeAgo: string;
  categoryColor: string;
}

export function useCommunity() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = useMemo(
    () => [
      { id: 'all', name: language === 'ko' ? '전체' : 'All', icon: TrendingUp, color: 'text-primary' },
      { id: 'roommates', name: language === 'ko' ? '룸메이트' : 'Roommates', icon: Users, color: 'text-primary' },
      { id: 'housing', name: language === 'ko' ? '주거' : 'Housing', icon: HomeIcon, color: 'text-blue-500' },
      { id: 'marketplace', name: language === 'ko' ? '마켓' : 'Marketplace', icon: ShoppingCart, color: 'text-orange-500' },
    ],
    [language],
  );

  const posts: CommunityPost[] = useMemo(
    () => [
      {
        id: 1,
        author: {
          name: 'Sarah Kim',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
          verified: true,
        },
        categoryId: 'roommates',
        category: language === 'ko' ? '룸메이트 찾기' : 'Roommate Search',
        title: language === 'ko' ? '깔끔한 룸메이트를 찾고 있어요!' : 'Looking for a clean roommate near campus!',
        content:
          language === 'ko'
            ? '안녕하세요! 다음 달부터 투룸 아파트를 함께 쓸 룸메이트를 찾고 있습니다. 저는 컴퓨터공학과 3학년이고, 조용하고 깔끔한 편입니다. 월세는 45만원입니다.'
            : "Hi! I'm looking for a roommate to share a 2BR apartment starting next month. I'm a junior majoring in CS, quiet, and very clean. Rent is ₩450,000/month.",
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
        categoryId: 'marketplace',
        category: language === 'ko' ? '그룹바이' : 'Group Buy',
        title: language === 'ko' ? '쌀 대량 구매 같이 하실 분?' : 'Anyone want to join bulk rice purchase?',
        content:
          language === 'ko'
            ? '20kg 프리미엄 쌀 대량 구매를 준비하고 있습니다. 10명이 모이면 각자 15,000원씩 절약할 수 있어요! 관심 있으시면 DM 주세요.'
            : "I'm organizing a group buy for 20kg premium rice bags. If we get 10 people, we can save ₩15,000 each! DM me if interested.",
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
        categoryId: 'housing',
        category: language === 'ko' ? '주거 팁' : 'Housing Tips',
        title: language === 'ko' ? '예산 맞는 학생 동네 추천' : 'Best neighborhoods for students on a budget',
        content:
          language === 'ko'
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
        categoryId: 'marketplace',
        category: language === 'ko' ? '마켓플레이스' : 'Marketplace',
        title: language === 'ko' ? '책상과 의자 판매 - 상태 좋음!' : 'Selling desk and chair - great condition!',
        content:
          language === 'ko'
            ? '곧 이사 가게 되어 공부용 책상(8만원)과 인체공학 의자(6만원)를 판매합니다. 둘 다 1년도 안 됐어요. 직거래만 가능합니다.'
            : "Moving out soon, selling my study desk (₩80,000) and ergonomic chair (₩60,000). Both less than 1 year old. Pickup only.",
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
        categoryId: 'housing',
        category: language === 'ko' ? '주거 팁' : 'Housing Tips',
        title: language === 'ko' ? '겨울철 난방비 절약하는 꿀팁' : 'Winter heating cost saving tips',
        content:
          language === 'ko'
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
        categoryId: 'marketplace',
        category: language === 'ko' ? '그룹바이' : 'Group Buy',
        title: language === 'ko' ? '생필품 코스트코 공동구매' : 'Costco essentials group buy',
        content:
          language === 'ko'
            ? '이번 주말에 코스트코 가는데, 티슈/세제 등 생필품 대량 구매 나눠 가지실 분 모집합니다. 5명 정도면 좋을 것 같아요!'
            : "Going to Costco this weekend, looking for people to split bulk purchases of tissues, detergent, etc. Looking for about 5 people!",
        likes: 56,
        comments: 41,
        timeAgo: language === 'ko' ? '4일 전' : '4d ago',
        categoryColor: 'bg-secondary',
      },
    ],
    [language],
  );

  const trendingTopics = useMemo(
    () => [
      { tag: language === 'ko' ? '룸메이트찾기' : 'roommate', count: 234 },
      { tag: language === 'ko' ? '그룹바이' : 'groupbuy', count: 189 },
      { tag: language === 'ko' ? '신촌' : 'sinchon', count: 156 },
      { tag: language === 'ko' ? '절약팁' : 'savingtips', count: 143 },
      { tag: language === 'ko' ? '대학생활' : 'studentlife', count: 128 },
    ],
    [language],
  );

  const stats = useMemo(
    () => ({
      activeUsers: 2847,
      postsToday: 124,
      activeGroupBuys: 38,
    }),
    [],
  );

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all') {
      return posts;
    }
    return posts.filter((post) => post.categoryId === selectedCategory);
  }, [posts, selectedCategory]);

  return {
    t,
    language,
    categories,
    posts,
    filteredPosts,
    trendingTopics,
    stats,
    selectedCategory,
    setSelectedCategory,
  };
}


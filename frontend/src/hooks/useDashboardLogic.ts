import { useMemo, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function useDashboardLogic() {
  const { t, language } = useLanguage();
  const [selectedRoommateId, setSelectedRoommateId] = useState(1);

  const roommates = useMemo(
    () => [
      {
        id: 1,
        name: language === 'ko' ? '사라 존슨' : 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
        matchPercentage: 98,
        status: language === 'ko' ? '활동중' : 'Active',
        sharedInterests:
          language === 'ko'
            ? ['아침형 인간', '청결주의', '조용한 학습']
            : ['Early Bird', 'Clean Freak', 'Quiet Study'],
      },
      {
        id: 2,
        name: language === 'ko' ? '마크 리' : 'Mark Lee',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
        matchPercentage: 92,
        status: language === 'ko' ? '활동중' : 'Active',
        sharedInterests:
          language === 'ko'
            ? ['올빼미족', '사교적', '음악 애호가']
            : ['Night Owl', 'Social', 'Music Lover'],
      },
      {
        id: 3,
        name: language === 'ko' ? '에밀리 박' : 'Emily Park',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
        matchPercentage: 89,
        status: language === 'ko' ? '활동중' : 'Active',
        sharedInterests:
          language === 'ko'
            ? ['정리정돈', '채식주의', '운동 열심']
            : ['Organized', 'Vegetarian', 'Gym Enthusiast'],
      },
    ],
    [language],
  );

  const groupBuyDeals = useMemo(
    () => [
      {
        id: 1,
        name: language === 'ko' ? '프리미엄 생수 팩' : 'Premium Water Pack',
        image:
          'https://images.unsplash.com/photo-1565151448704-33d96c51fff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
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
        image:
          'https://images.unsplash.com/photo-1642429948905-62fc9c9b3f76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
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
        image:
          'https://images.unsplash.com/photo-1626379481874-3dc5678fa8ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
        originalPrice: 25000,
        groupPrice: 17500,
        discount: 30,
        participants: 2,
        target: 5,
        location: language === 'ko' ? 'A동' : 'Dorm A',
        deadline: language === 'ko' ? '8시간 남음' : '8h left',
      },
    ],
    [language],
  );

  const communityPosts = useMemo(
    () => [
      {
        id: 1,
        author: {
          name: language === 'ko' ? '사라 김' : 'Sarah Kim',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
        },
        category: language === 'ko' ? '룸메이트 찾기' : 'Roommate Search',
        title: language === 'ko' ? '깔끔한 룸메이트 구해요!' : 'Looking for a clean roommate!',
        content:
          language === 'ko'
            ? '안녕하세요! 다음 달부터 2인실 공유할 룸메이트를 찾고 있습니다. 컴공 3학년이고 조용하고 깔끔한 성격입니다. 월세 45만원.'
            : 'Hi! Looking for a roommate to share a 2BR apartment. CS junior, quiet and clean. Rent is ₩450,000/month.',
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
        content:
          language === 'ko'
            ? '20kg 프리미엄 쌀 공동구매 진행합니다. 10명 모이면 1인당 15,000원 절약! 관심있으시면 DM 주세요.'
            : 'Group buy for 20kg premium rice bags. If we get 10 people, we save ₩15,000 each! DM if interested.',
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
        title: language === 'ko' ? '저렴한 학생 주거지 베스트 3' : 'Best neighborhoods for students on a budget',
        content:
          language === 'ko'
            ? '막 이사했는데 팁 공유하고 싶어요! 신촌 지역이 잘 찾아보면 좋은 매물이 많더라구요. 제가 추천하는 곳 3군데...'
            : 'Just moved and wanted to share some tips! Sinchon area has great deals if you look carefully. Here are my top 3 picks...',
        likes: 67,
        comments: 19,
        timeAgo: language === 'ko' ? '1일 전' : '1d ago',
        categoryColor: 'bg-blue-500',
      },
      {
        id: 4,
        author: {
          name: language === 'ko' ? '크리스 최' : 'Chris Choi',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
        },
        category: language === 'ko' ? '마켓플레이스' : 'Marketplace',
        title: language === 'ko' ? '책상과 의자 판매 - 거의 새것!' : 'Selling desk and chair - great condition!',
        content:
          language === 'ko'
            ? '곧 이사가서 책상(8만원)과 인체공학 의자(6만원) 판매합니다. 둘 다 1년 미만 사용. 직접 픽업만 가능.'
            : 'Moving soon, selling my study desk (₩80,000) and ergonomic chair (₩60,000). Both less than 1 year old. Pickup only.',
        likes: 12,
        comments: 8,
        timeAgo: language === 'ko' ? '2일 전' : '2d ago',
        categoryColor: 'bg-orange-500',
      },
    ],
    [language],
  );

  return {
    t,
    language,
    roommates,
    groupBuyDeals,
    communityPosts,
    selectedRoommateId,
    setSelectedRoommateId,
  };
}


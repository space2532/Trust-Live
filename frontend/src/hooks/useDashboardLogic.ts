import { useMemo, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useMarket } from './useMarket';
import { useCommunity } from './useCommunity';

export function useDashboardLogic() {
  const { t, language } = useLanguage();
  const { products } = useMarket();
  const { posts } = useCommunity();
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
        university: language === 'ko' ? '서울대학교' : 'Seoul National University',
        major: language === 'ko' ? '컴퓨터공학과' : 'Computer Science',
        year: 3,
        bio:
          language === 'ko'
            ? '안녕하세요! 깔끔하고 조용한 환경을 좋아하는 3학년입니다. 아침형 인간이라 일찍 자고 일찍 일어나요. 공부할 때는 조용한 환경이 필요해서 룸메이트와 서로 존중하며 생활하고 싶어요.'
            : "Hello! I'm a 3rd-year student who loves clean and quiet environments. I'm an early bird, so I sleep and wake up early. I need a quiet environment when studying, so I'd like to live respectfully with my roommate.",
        likes:
          language === 'ko'
            ? ['조용한 환경', '정리정돈', '아침 운동', '독서']
            : ['Quiet environment', 'Tidiness', 'Morning exercise', 'Reading'],
        dislikes:
          language === 'ko'
            ? ['시끄러운 음악', '늦은 시간 통화', '흡연']
            : ['Loud music', 'Late night calls', 'Smoking'],
        reputation: {
          manners: 95,
          communication: 92,
          payment: 98,
        },
        recentReviews:
          language === 'ko'
            ? ['깔끔하고 조용해요', '정산을 칼같이 해요', '매우 신뢰할 수 있는 사람이에요']
            : ['Very tidy and quiet', 'Always settles payments on time', 'Very trustworthy person'],
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
        university: language === 'ko' ? '연세대학교' : 'Yonsei University',
        major: language === 'ko' ? '경영학과' : 'Business Administration',
        year: 2,
        bio:
          language === 'ko'
            ? '밤에 활동적인 타입이에요! 음악을 좋아하고 친구들과 어울리는 걸 즐겨요. 하지만 룸메이트의 프라이버시는 존중합니다. 함께 살면서 서로 배려하며 지내고 싶어요.'
            : "I'm a night owl! I love music and enjoy hanging out with friends. However, I respect my roommate's privacy. I'd like to live together while being considerate of each other.",
        likes:
          language === 'ko'
            ? ['음악', '친구들과 시간 보내기', '게임', '요리']
            : ['Music', 'Spending time with friends', 'Gaming', 'Cooking'],
        dislikes:
          language === 'ko'
            ? ['너무 조용한 환경', '아침 일찍 깨우기']
            : ['Too quiet environment', 'Waking up early in the morning'],
        reputation: {
          manners: 88,
          communication: 95,
          payment: 90,
        },
        recentReviews:
          language === 'ko'
            ? ['사교적이고 친절해요', '의사소통이 원활해요']
            : ['Sociable and kind', 'Great communication'],
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
        university: language === 'ko' ? '고려대학교' : 'Korea University',
        major: language === 'ko' ? '영어영문학과' : 'English Literature',
        year: 4,
        bio:
          language === 'ko'
            ? '정리정돈을 좋아하고 건강한 라이프스타일을 추구해요. 채식주의자이고 운동을 꾸준히 하고 있어요. 깔끔한 공간에서 생활하는 것을 선호합니다.'
            : "I love organizing and pursue a healthy lifestyle. I'm a vegetarian and exercise regularly. I prefer living in a clean space.",
        likes:
          language === 'ko'
            ? ['정리정돈', '운동', '건강한 식단', '요가']
            : ['Organizing', 'Exercise', 'Healthy diet', 'Yoga'],
        dislikes:
          language === 'ko'
            ? ['지저분한 공간', '늦은 시간 소음']
            : ['Messy spaces', 'Late night noise'],
        reputation: {
          manners: 90,
          communication: 88,
          payment: 92,
        },
        recentReviews:
          language === 'ko'
            ? ['매우 깔끔하고 정리정돈을 잘해요', '건강한 라이프스타일을 추구해요']
            : ['Very tidy and organized', 'Pursues a healthy lifestyle'],
      },
    ],
    [language],
  );

  const groupBuyDeals = useMemo(() => {
    const prioritized = [...products].sort((a, b) => {
      if (a.isHot === b.isHot) {
        return b.id - a.id;
      }
      return Number(b.isHot) - Number(a.isHot);
    });

    const formatDeadline = (timeLeft: string) => {
      if (language === 'ko') {
        const hours = timeLeft.match(/(\d+)h/);
        const minutes = timeLeft.match(/(\d+)m/);
        const parts = [];
        if (hours) parts.push(`${hours[1]}시간`);
        if (minutes) parts.push(`${minutes[1]}분`);
        const label = parts.join(' ').trim() || timeLeft;
        return `${label} 남음`;
      }
      return `${timeLeft} left`;
    };

    return prioritized.slice(0, 3).map((product) => ({
      id: product.id,
      name: product.title,
      image: product.image,
      originalPrice: product.originalPrice,
      groupPrice: product.discountedPrice,
      discount: product.discount,
      participants: product.currentParticipants,
      target: product.targetParticipants,
      location: product.location,
      deadline: formatDeadline(product.timeLeft),
    }));
  }, [products, language]);

  const communityPosts = useMemo(
    () =>
      [...posts]
        .filter((post) => post.categoryId !== 'anonymous')
        .sort((a, b) => b.id - a.id)
        .slice(0, 4),
    [posts],
  );

  const dormNotices = useMemo(
    () =>
      [
        {
          id: 1,
          title: language === 'ko' ? '11월 시설 점검 안내' : 'Nov. Facility Inspection',
          description:
            language === 'ko'
              ? '11월 30일(토) 오전 9시, 3동·4동 공용 구역 전기 점검이 예정되어 있습니다.'
              : 'Electrical inspection for Towers 3 & 4 on Sat, Nov 30 at 9 AM.',
          date: language === 'ko' ? '11.30 (토)' : 'Sat · Nov 30',
          status: language === 'ko' ? '예정' : 'Upcoming',
        },
        {
          id: 2,
          title: language === 'ko' ? '택배실 운영 시간 연장' : 'Parcel Room Hours Extended',
          description:
            language === 'ko'
              ? '기말고사 기간(12/2~12/13) 동안 평일 자정까지 운영합니다.'
              : 'Open until midnight on weekdays during finals (Dec 2–13).',
          date: language === 'ko' ? '12.02 ~ 12.13' : 'Dec 2 – Dec 13',
          status: language === 'ko' ? '공지' : 'Notice',
        },
        {
          id: 3,
          title: language === 'ko' ? '야간 소음 자제 요청' : 'Quiet Hours Reminder',
          description:
            language === 'ko'
              ? '기숙사 전체 야간 소음 민원이 증가해 22시 이후 공동구역 사용을 자제해 주세요.'
              : 'Noise reports increased. Please limit common-area use after 10 PM.',
          date: language === 'ko' ? '상시' : 'Ongoing',
          status: language === 'ko' ? '중요' : 'Important',
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
    dormNotices,
    selectedRoommateId,
    setSelectedRoommateId,
  };
}


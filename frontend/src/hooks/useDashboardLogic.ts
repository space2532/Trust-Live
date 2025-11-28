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
        .sort((a, b) => b.id - a.id)
        .slice(0, 4),
    [posts],
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


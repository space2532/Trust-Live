import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface MarketProduct {
  id: number;
  image: string;
  title: string;
  categoryId: string;
  location: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  currentParticipants: number;
  targetParticipants: number;
  timeLeft: string;
  isHot: boolean;
}

const parseTimeLeftToMinutes = (timeLeft: string) => {
  const hours = timeLeft.match(/(\d+)h/i);
  const minutes = timeLeft.match(/(\d+)m/i);
  const hourValue = hours ? parseInt(hours[1], 10) : 0;
  const minuteValue = minutes ? parseInt(minutes[1], 10) : 0;
  return hourValue * 60 + minuteValue;
};

interface MarketContextValue {
  language: string;
  categories: { id: string; label: string }[];
  sortOptions: { id: string; label: string }[];
  products: MarketProduct[];
  displayedProducts: MarketProduct[];
  selectedCategories: string[];
  selectedCategory: string;
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  toggleCategory: (categoryId: string) => void;
  selectCategory: (categoryId: string) => void;
}

const MarketContext = createContext<MarketContextValue | undefined>(undefined);

export function MarketProvider({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);
  const [sortBy, setSortBy] = useState('popular');

  const categories = useMemo(
    () => [
      { id: 'all', label: language === 'ko' ? '전체' : 'All' },
      { id: 'groceries', label: language === 'ko' ? '식료품' : 'Groceries' },
      { id: 'snacks', label: language === 'ko' ? '간식' : 'Snacks' },
      { id: 'daily', label: language === 'ko' ? '생활용품' : 'Daily Essentials' },
      { id: 'electronics', label: language === 'ko' ? '전자기기' : 'Electronics' },
      { id: 'books', label: language === 'ko' ? '교재/문구' : 'Books & Supplies' },
    ],
    [language],
  );

  const sortOptions = useMemo(
    () => [
      { id: 'popular', label: language === 'ko' ? '인기순' : 'Most Popular' },
      { id: 'ending', label: language === 'ko' ? '마감임박순' : 'Ending Soon' },
      { id: 'discount', label: language === 'ko' ? '할인율순' : 'Highest Discount' },
      { id: 'newest', label: language === 'ko' ? '최신순' : 'Newest' },
    ],
    [language],
  );

  const products: MarketProduct[] = useMemo(
    () => [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1565151448704-33d96c51fff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
        title: language === 'ko' ? '제주 천연 미네랄워터 (20병)' : 'Jeju Natural Water (20 bottles)',
        originalPrice: 20000,
        discountedPrice: 14000,
        discount: 30,
        currentParticipants: 4,
        targetParticipants: 5,
        timeLeft: '2h 15m',
        isHot: true,
        categoryId: 'groceries',
        location: language === 'ko' ? 'A동 로비' : 'Dorm A Lobby',
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
        title: language === 'ko' ? '인기 과자 믹스팩 (15개)' : 'Popular Snack Mix (15pcs)',
        originalPrice: 18000,
        discountedPrice: 12600,
        discount: 30,
        currentParticipants: 5,
        targetParticipants: 6,
        timeLeft: '5h 30m',
        isHot: true,
        categoryId: 'snacks',
        location: language === 'ko' ? 'B동 로비' : 'Dorm B Lobby',
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
        title: language === 'ko' ? '세탁세제 리필팩 (3개)' : 'Laundry Detergent Refill (3pcs)',
        originalPrice: 25000,
        discountedPrice: 18750,
        discount: 25,
        currentParticipants: 2,
        targetParticipants: 4,
        timeLeft: '1h 45m',
        isHot: false,
        categoryId: 'daily',
        location: language === 'ko' ? 'A동 로비' : 'Dorm A Lobby',
      },
      {
        id: 4,
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
        title: language === 'ko' ? '신선 과일 박스 (혼합)' : 'Fresh Fruit Box (Mixed)',
        originalPrice: 30000,
        discountedPrice: 21000,
        discount: 30,
        currentParticipants: 6,
        targetParticipants: 8,
        timeLeft: '8h 20m',
        isHot: false,
        categoryId: 'groceries',
        location: language === 'ko' ? 'C동 로비' : 'Dorm C Lobby',
      },
      {
        id: 5,
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
        title: language === 'ko' ? '노트북 스탠드 (접이식)' : 'Laptop Stand (Foldable)',
        originalPrice: 35000,
        discountedPrice: 24500,
        discount: 30,
        currentParticipants: 3,
        targetParticipants: 5,
        timeLeft: '3h 10m',
        isHot: true,
        categoryId: 'electronics',
        location: language === 'ko' ? 'B동 로비' : 'Dorm B Lobby',
      },
      {
        id: 6,
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
        title: language === 'ko' ? '경제학 원론 교재' : 'Economics Principles',
        originalPrice: 40000,
        discountedPrice: 28000,
        discount: 30,
        currentParticipants: 7,
        targetParticipants: 10,
        timeLeft: '12h 5m',
        isHot: false,
        categoryId: 'books',
        location: language === 'ko' ? 'A동 로비' : 'Dorm A Lobby',
      },
      {
        id: 7,
        image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
        title: language === 'ko' ? '친환경 대나무 칫솔 (10개)' : 'Eco Bamboo Toothbrush (10pcs)',
        originalPrice: 15000,
        discountedPrice: 10500,
        discount: 30,
        currentParticipants: 4,
        targetParticipants: 5,
        timeLeft: '4h 50m',
        isHot: false,
        categoryId: 'daily',
        location: language === 'ko' ? 'D동 로비' : 'Dorm D Lobby',
      },
      {
        id: 8,
        image: 'https://images.unsplash.com/photo-1585435421671-0c16764a9c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
        title: language === 'ko' ? '유기농 커피 원두 (500g)' : 'Organic Coffee Beans (500g)',
        originalPrice: 22000,
        discountedPrice: 15400,
        discount: 30,
        currentParticipants: 3,
        targetParticipants: 6,
        timeLeft: '6h 30m',
        isHot: true,
        categoryId: 'daily',
        location: language === 'ko' ? '카페 라운지' : 'Cafe Lounge',
      },
    ],
    [language],
  );

  const filteredProducts = useMemo(() => {
    if (selectedCategories.includes('all')) {
      return products;
    }
    return products.filter((product) => selectedCategories.includes(product.categoryId));
  }, [products, selectedCategories]);

  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];

    switch (sortBy) {
      case 'discount':
        return list.sort((a, b) => b.discount - a.discount);
      case 'ending':
        return list.sort((a, b) => parseTimeLeftToMinutes(a.timeLeft) - parseTimeLeftToMinutes(b.timeLeft));
      case 'newest':
        return list.sort((a, b) => b.id - a.id);
      case 'popular':
      default:
        return list.sort((a, b) => Number(b.isHot) - Number(a.isHot));
    }
  }, [filteredProducts, sortBy]);

  const toggleCategory = useCallback((categoryId: string) => {
    setSelectedCategories((prev) => {
      if (categoryId === 'all') {
        return ['all'];
      }

      const withoutAll = prev.filter((id) => id !== 'all');

      if (withoutAll.includes(categoryId)) {
        const next = withoutAll.filter((id) => id !== categoryId);
        return next.length === 0 ? ['all'] : next;
      }

      return [...withoutAll, categoryId];
    });
  }, []);

  const selectCategory = useCallback((categoryId: string) => {
    setSelectedCategories(categoryId === 'all' ? ['all'] : [categoryId]);
  }, []);

  const value = useMemo<MarketContextValue>(
    () => ({
      language,
      categories,
      sortOptions,
      products,
      displayedProducts: sortedProducts,
      selectedCategories,
      selectedCategory: selectedCategories[0] ?? 'all',
      setSelectedCategories,
      sortBy,
      setSortBy,
      toggleCategory,
      selectCategory,
    }),
    [
      language,
      categories,
      sortOptions,
      products,
      sortedProducts,
      selectedCategories,
      setSelectedCategories,
      sortBy,
      setSortBy,
      toggleCategory,
      selectCategory,
    ],
  );

  return <MarketContext.Provider value={value}>{children}</MarketContext.Provider>;
}

export function useMarket() {
  const context = useContext(MarketContext);

  if (!context) {
    throw new Error('useMarket must be used within a MarketProvider');
  }

  return context;
}


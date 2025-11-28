import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ko: {
    // Bottom Navigation
    'nav.home': '홈',
    'nav.matching': '매칭',
    'nav.lifestyle': '라이프스타일',
    'nav.market': '마켓',
    'nav.community': '커뮤니티',
    'nav.mypage': '마이페이지',
    
    // Dashboard
    'dashboard.title': 'Trust-Live',
    'dashboard.subtitle': '학생 주거 허브',
    'dashboard.myRoommate': '내 룸메이트',
    'dashboard.nearbyDeals': '주변 공동구매',
    'dashboard.seeAll': '전체보기',
    'dashboard.off': '할인',
    'dashboard.joined': '참여',
    'dashboard.joinDeal': '참여하기',
    'dashboard.findRoommate': '룸메이트 찾기',
    'dashboard.findRoommateDesc': 'AI 기반 매칭',
    'dashboard.localDeals': '지역 특가',
    'dashboard.localDealsDesc': '이웃과 함께 절약',
    'dashboard.livingTip': '생활 팁',
    'dashboard.tipMessage': '기숙사 이웃들과 공동구매에 참여하여 돈을 절약하고 커뮤니티를 만드세요!',
    
    // Roommate Matching
    'matching.title': 'AI 룸메이트 매칭',
    'matching.subtitle': '당신의 완벽한 룸메이트를 찾아보세요',
    'matching.match': '매칭',
    'matching.moveIn': '입주',
    'matching.interests': '공통 관심사',
    'matching.viewProfile': '프로필 보기',
    'matching.chat': '채팅하기',
    'matching.perfectMatch': '완벽한 매칭입니다!',
    'matching.swipeLeft': '왼쪽으로 스와이프하여 건너뛰기',
    'matching.swipeRight': '오른쪽으로 스와이프하여 좋아요',
    'matching.sleepSchedule': '수면 시간',
    'matching.cleanliness': '청결도',
    'matching.noiseLevel': '소음 수준',
    'matching.socialHabits': '사교 습관',
    'matching.studyHabits': '학습 습관',
    'matching.yourPreference': '당신의 선호',
    'matching.theirPreference': '상대방 선호',
    'matching.compatibilityBreakdown': '호환성 분석',
    'matching.overallMatch': '전체 매칭도',
    'matching.close': '닫기',
    
    // Group Buy
    'groupbuy.title': '공동구매 상세',
    'groupbuy.off': '할인',
    'groupbuy.left': '남음',
    'groupbuy.delivery': '배송지',
    'groupbuy.lobbyPickup': '로비 픽업',
    'groupbuy.groupPrice': '공동구매 가격',
    'groupbuy.originalPrice': '정가',
    'groupbuy.discount': '할인',
    'groupbuy.progress': '진행 상황',
    'groupbuy.joined': '참여',
    'groupbuy.target': '목표',
    'groupbuy.timeLeft': '남은 시간',
    'groupbuy.participants': '참여자',
    'groupbuy.joinNow': '지금 참여하기',
    'groupbuy.productDetails': '상품 상세정보',
    'groupbuy.hours': '시간',
    'groupbuy.description': '이 프리미엄 생수 팩은 기숙사 룸메이트들과 함께 구매할 수 있는 완벽한 상품입니다. 일반 소매가보다 30% 할인된 가격으로 신선하고 깨끗한 생수를 즐기세요.',
    
    // Community
    'community.title': '커뮤니티',
    'community.all': '전체',
    'community.roommates': '룸메이트',
    'community.housing': '주거',
    'community.marketplace': '마켓플레이스',
    'community.loadMore': '더 보기',
    'community.likes': '좋아요',
    'community.comments': '댓글',
    
    // My Page
    'mypage.title': '마이페이지',
    'mypage.verified': '인증된 대학생',
    'mypage.trustScore': '신뢰 점수',
    'mypage.dealsJoined': '참여한 딜',
    'mypage.member': '회원',
    'mypage.viewFullReport': '전체 리포트 보기',
    'mypage.savingsThisMonth': '이번 달 절약 금액',
    'mypage.totalSavings': '총 절약 금액',
    'mypage.dealsCompleted': '완료된 딜',
    'mypage.activityBadges': '활동 배지',
    'mypage.achievements': '업적',
    'mypage.early': '얼리버드',
    'mypage.saver': '절약왕',
    'mypage.social': '사교왕',
    'mypage.green': '친환경',
    'mypage.lifestyleDNA': '라이프스타일 DNA',
    'mypage.morningPerson': '아침형 인간',
    'mypage.cleanFreak': '청결주의자',
    'mypage.socialButterfly': '사교적',
    'mypage.budgetConscious': '예산 의식',
    'mypage.editProfile': '프로필 수정',
    
    // Settings
    'settings.title': '설정',
    'settings.accountTrust': '계정 및 신뢰',
    'settings.editProfile': '프로필 수정',
    'settings.verification': '대학교 인증 상태',
    'settings.verified': '인증됨',
    'settings.changePassword': '비밀번호 변경',
    'settings.matchingPreferences': '매칭 설정',
    'settings.searchingRoommate': '룸메이트 찾기',
    'settings.retakeSurvey': '라이프스타일 설문 다시하기',
    'settings.notifications': '알림',
    'settings.newMatchAlerts': '새로운 매칭 알림',
    'settings.groupBuyDeadlines': '공동구매 마감 알림',
    'settings.chatMessages': '채팅 메시지',
    'settings.paymentLocation': '결제 및 위치',
    'settings.paymentMethods': '결제 수단 관리',
    'settings.dormLocation': '기숙사 위치',
    'settings.generalSupport': '일반 및 지원',
    'settings.appLanguage': '앱 언어',
    'settings.notice': '공지사항',
    'settings.helpCenter': '고객센터',
    'settings.termsOfService': '이용약관',
    'settings.appVersion': '앱 버전',
    'settings.logout': '로그아웃',
    'settings.deleteAccount': '계정 삭제',
    'settings.selectLanguage': '언어 선택',
    'settings.korean': '한국어',
    'settings.english': 'English',
    'settings.cancel': '취소',
  },
  en: {
    // Bottom Navigation
    'nav.home': 'Home',
    'nav.matching': 'Matching',
    'nav.lifestyle': 'Lifestyle',
    'nav.market': 'Market',
    'nav.community': 'Community',
    'nav.mypage': 'My Page',
    
    // Dashboard
    'dashboard.title': 'Trust-Live',
    'dashboard.subtitle': 'Student Housing Hub',
    'dashboard.myRoommate': 'My Roommate',
    'dashboard.nearbyDeals': 'Nearby Group Deals',
    'dashboard.seeAll': 'See all',
    'dashboard.off': 'OFF',
    'dashboard.joined': 'joined',
    'dashboard.joinDeal': 'Join Deal',
    'dashboard.findRoommate': 'Find Roommate',
    'dashboard.findRoommateDesc': 'AI-powered matching',
    'dashboard.localDeals': 'Local Deals',
    'dashboard.localDealsDesc': 'Save with neighbors',
    'dashboard.livingTip': 'Living Tip',
    'dashboard.tipMessage': 'Join group buys with your dorm neighbors to save money and build community!',
    
    // Roommate Matching
    'matching.title': 'AI Roommate Matching',
    'matching.subtitle': 'Find your perfect roommate match',
    'matching.match': 'Match',
    'matching.moveIn': 'Move-in',
    'matching.interests': 'Shared Interests',
    'matching.viewProfile': 'View Profile',
    'matching.chat': 'Chat',
    'matching.perfectMatch': 'Perfect Match!',
    'matching.swipeLeft': 'Swipe left to pass',
    'matching.swipeRight': 'Swipe right to like',
    'matching.sleepSchedule': 'Sleep Schedule',
    'matching.cleanliness': 'Cleanliness',
    'matching.noiseLevel': 'Noise Level',
    'matching.socialHabits': 'Social Habits',
    'matching.studyHabits': 'Study Habits',
    'matching.yourPreference': 'Your Preference',
    'matching.theirPreference': 'Their Preference',
    'matching.compatibilityBreakdown': 'Compatibility Breakdown',
    'matching.overallMatch': 'Overall Match',
    'matching.close': 'Close',
    
    // Group Buy
    'groupbuy.title': 'Group Buy Details',
    'groupbuy.off': 'OFF',
    'groupbuy.left': 'left',
    'groupbuy.delivery': 'Delivery',
    'groupbuy.lobbyPickup': 'Lobby Pickup',
    'groupbuy.groupPrice': 'Group Price',
    'groupbuy.originalPrice': 'Original Price',
    'groupbuy.discount': 'Discount',
    'groupbuy.progress': 'Progress',
    'groupbuy.joined': 'joined',
    'groupbuy.target': 'target',
    'groupbuy.timeLeft': 'Time Left',
    'groupbuy.participants': 'Participants',
    'groupbuy.joinNow': 'Join Now',
    'groupbuy.productDetails': 'Product Details',
    'groupbuy.hours': 'hours',
    'groupbuy.description': 'This premium water pack is perfect for sharing with your dorm mates. Enjoy fresh, clean water at 30% off the regular retail price.',
    
    // Community
    'community.title': 'Community',
    'community.all': 'All',
    'community.roommates': 'Roommates',
    'community.housing': 'Housing',
    'community.marketplace': 'Marketplace',
    'community.loadMore': 'Load More Posts',
    'community.likes': 'likes',
    'community.comments': 'comments',
    
    // My Page
    'mypage.title': 'My Page',
    'mypage.verified': 'Verified University Student',
    'mypage.trustScore': 'Trust Score',
    'mypage.dealsJoined': 'Deals Joined',
    'mypage.member': 'Member',
    'mypage.viewFullReport': 'View Full Report',
    'mypage.savingsThisMonth': 'Savings This Month',
    'mypage.totalSavings': 'Total Savings',
    'mypage.dealsCompleted': 'Deals Completed',
    'mypage.activityBadges': 'Activity Badges',
    'mypage.achievements': 'Achievements',
    'mypage.early': 'Early Bird',
    'mypage.saver': 'Super Saver',
    'mypage.social': 'Social Butterfly',
    'mypage.green': 'Green Warrior',
    'mypage.lifestyleDNA': 'Lifestyle DNA',
    'mypage.morningPerson': 'Morning Person',
    'mypage.cleanFreak': 'Clean Freak',
    'mypage.socialButterfly': 'Social Butterfly',
    'mypage.budgetConscious': 'Budget Conscious',
    'mypage.editProfile': 'Edit Profile',
    
    // Settings
    'settings.title': 'Settings',
    'settings.accountTrust': 'Account & Trust',
    'settings.editProfile': 'Edit Profile',
    'settings.verification': 'University Verification Status',
    'settings.verified': 'Verified',
    'settings.changePassword': 'Change Password',
    'settings.matchingPreferences': 'Matching Preferences',
    'settings.searchingRoommate': 'Searching for Roommate',
    'settings.retakeSurvey': 'Retake Lifestyle Survey',
    'settings.notifications': 'Notifications',
    'settings.newMatchAlerts': 'New Match Alerts',
    'settings.groupBuyDeadlines': 'Group Buy Deadlines',
    'settings.chatMessages': 'Chat Messages',
    'settings.paymentLocation': 'Payment & Location',
    'settings.paymentMethods': 'Manage Payment Methods',
    'settings.dormLocation': 'My Dorm Location',
    'settings.generalSupport': 'General & Support',
    'settings.appLanguage': 'App Language',
    'settings.notice': 'Notice',
    'settings.helpCenter': 'Help Center',
    'settings.termsOfService': 'Terms of Service',
    'settings.appVersion': 'App Version',
    'settings.logout': 'Log Out',
    'settings.deleteAccount': 'Delete Account',
    'settings.selectLanguage': 'Select Language',
    'settings.korean': '한국어',
    'settings.english': 'English',
    'settings.cancel': 'Cancel',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
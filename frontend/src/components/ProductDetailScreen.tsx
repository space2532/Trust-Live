import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, MapPin, Calendar, ChevronLeft, ChevronRight, Star, Shield, Flame } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

interface ProductDetailScreenProps {
  onBack: () => void;
}

export function ProductDetailScreen({ onBack }: ProductDetailScreenProps) {
  const { language } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 15, seconds: 30 });

  // Product images carousel
  const productImages = [
    'https://images.unsplash.com/photo-1565151448704-33d96c51fff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    'https://images.unsplash.com/photo-1523362628745-0c100150b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  ];

  const product = {
    name: language === 'ko' ? '제주 천연 미네랄워터 (20병 패키지)' : 'Jeju Natural Mineral Water (20-bottle Pack)',
    description: language === 'ko' 
      ? '제주도 천연 지하수원에서 채수한 프리미엄 미네랄워터입니다. BPA-프리 친환경 페트병을 사용하며, 1회 500ml로 언제 어디서나 편리하게 즐기실 수 있습니다. 그룹바이로 최저가에 만나보세요!'
      : 'Premium mineral water sourced from Jeju Island\'s natural underground springs. Uses BPA-free eco-friendly PET bottles, 500ml per serving for convenient enjoyment anywhere. Get the best price through group buying!',
    originalPrice: 20000,
    discountedPrice: 14000,
    discount: 30,
    savings: 6000,
    currentParticipants: 4,
    targetParticipants: 5,
    rating: 4.8,
    reviews: 342,
    features: [
      {
        icon: '💧',
        title: language === 'ko' ? '100% 천연 미네랄워터' : '100% Natural Mineral Water',
        desc: language === 'ko' ? '제주 화산암반수 채수' : 'Sourced from Jeju volcanic rock aquifer'
      },
      {
        icon: '📦',
        title: language === 'ko' ? '20병 대용량 패키지' : '20-Bottle Large Pack',
        desc: language === 'ko' ? '500ml × 20병, 한 달 사용' : '500ml × 20 bottles, one month supply'
      },
      {
        icon: '🌱',
        title: language === 'ko' ? '친환경 포장' : 'Eco-Friendly Packaging',
        desc: language === 'ko' ? 'BPA-프리, 재활용 가능' : 'BPA-free, recyclable materials'
      },
    ],
    pickupLocation: language === 'ko' ? '대학교 B동 기숙사 메인 입구' : 'University Dorm B, Main Entrance',
    pickupDate: language === 'ko' ? '11월 28일 (목)' : 'Nov 28 (Thu)',
    pickupTime: language === 'ko' ? '오후 6:00' : '6:00 PM',
  };

  // Mock participants data
  const participants = [
    { id: 1, name: language === 'ko' ? '민수' : 'Minsu', avatar: '👨‍🎓', color: 'from-blue-400 to-blue-600' },
    { id: 2, name: language === 'ko' ? '지은' : 'Jieun', avatar: '👩‍🎓', color: 'from-pink-400 to-pink-600' },
    { id: 3, name: language === 'ko' ? '준호' : 'Junho', avatar: '👨‍💼', color: 'from-green-400 to-green-600' },
    { id: 4, name: language === 'ko' ? '수진' : 'Sujin', avatar: '👩‍💻', color: 'from-purple-400 to-purple-600' },
  ];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const progressPercentage = (product.currentParticipants / product.targetParticipants) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 pb-32">
      {/* Header Image Carousel */}
      <div className="relative w-full h-[400px] bg-white">
        <button
          onClick={onBack}
          className="absolute top-4 left-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>

        {/* Discount Badge */}
        <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg">
          <span className="text-sm">{product.discount}% OFF</span>
        </div>

        {/* Image */}
        <img
          src={productImages[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Image Navigation */}
        {productImages.length > 1 && (
          <>
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : productImages.length - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev < productImages.length - 1 ? prev + 1 : 0))}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </>
        )}

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {productImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 max-w-md mx-auto space-y-4">
        {/* Vital Info Card - Countdown & Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-[24px] shadow-lg p-6"
        >
          {/* Countdown Timer */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-sm text-foreground">
                {language === 'ko' ? '주문 마감까지' : 'Time Left to Order'}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
              <Clock className="w-4 h-4 text-orange-500" />
              <span className="text-foreground">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground">
                {language === 'ko' ? '목표 달성률' : 'Recruitment Status'}
              </span>
              <span className="text-foreground">
                {Math.round(progressPercentage)}% {language === 'ko' ? '달성!' : 'reached!'}
              </span>
            </div>
            <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-secondary via-emerald-400 to-emerald-500 shadow-lg"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {product.currentParticipants}/{product.targetParticipants} {language === 'ko' ? '명 참여 중' : 'participants joined'}
            </p>
          </div>

          {/* Participants Avatars */}
          <div className="flex items-center justify-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <div className="flex -space-x-2">
              {participants.map((participant) => (
                <div
                  key={participant.id}
                  className={`w-10 h-10 bg-gradient-to-br ${participant.color} rounded-full border-3 border-white flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer`}
                  title={participant.name}
                >
                  <span className="text-lg">{participant.avatar}</span>
                </div>
              ))}
              <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full border-3 border-white flex items-center justify-center shadow-md">
                <span className="text-white text-xs">+1</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-6"
        >
          <h1 className="text-foreground mb-3">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm text-foreground">{product.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews} {language === 'ko' ? '리뷰' : 'reviews'})</span>
          </div>

          {/* Price Section */}
          <div className="bg-gradient-to-br from-secondary/10 to-emerald-50 rounded-[20px] p-5 mb-4 border-2 border-secondary/30">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">
                  {language === 'ko' ? '그룹바이 특가' : 'Group Buy Price'}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl text-secondary">₩{product.discountedPrice.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground line-through">₩{product.originalPrice.toLocaleString()}</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-secondary to-emerald-500 text-white px-4 py-3 rounded-[16px] shadow-lg">
                <p className="text-xs opacity-90">{language === 'ko' ? '절약' : 'Save'}</p>
                <p className="text-lg">₩{product.savings.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <h3 className="text-foreground mb-2">{language === 'ko' ? '상품 설명' : 'Product Description'}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-muted rounded-[16px] p-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <div>
                  <p className="text-sm text-foreground">{feature.title}</p>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Delivery Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-primary/10 to-blue-50 border-2 border-primary/30 rounded-[24px] shadow-md p-6"
        >
          <h3 className="text-foreground mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            {language === 'ko' ? '픽업 정보' : 'Pickup Information'}
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{language === 'ko' ? '픽업 장소' : 'Pick-up Location'}</p>
                <p className="text-sm text-foreground">{product.pickupLocation}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{language === 'ko' ? '픽업 날짜' : 'Pick-up Date'}</p>
                <p className="text-sm text-foreground">{product.pickupDate}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{language === 'ko' ? '픽업 시간' : 'Pick-up Time'}</p>
                <p className="text-sm text-foreground">{product.pickupTime}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[20px] shadow-md p-4 flex items-center gap-3"
        >
          <Shield className="w-8 h-8 text-primary flex-shrink-0" />
          <div>
            <p className="text-sm text-foreground">
              {language === 'ko' ? '신뢰 보장 거래' : 'Trust Guaranteed Transaction'}
            </p>
            <p className="text-xs text-muted-foreground">
              {language === 'ko' ? '안전한 결제 및 품질 보증' : 'Secure payment & quality guarantee'}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Sticky Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-[0_-4px_16px_rgba(0,0,0,0.08)] z-50">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            {/* Quantity Selector */}
            <div className="flex items-center bg-muted rounded-[16px] p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 bg-white rounded-[12px] flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
              >
                <span className="text-xl">−</span>
              </button>
              <span className="text-lg text-foreground min-w-[3rem] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
                className="w-10 h-10 bg-white rounded-[12px] flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
              >
                <span className="text-xl">+</span>
              </button>
            </div>

            {/* Purchase Button */}
            <button className="flex-1 bg-gradient-to-r from-secondary via-emerald-400 to-emerald-500 text-white py-4 rounded-[16px] flex flex-col items-center justify-center hover:shadow-[0_8px_24px_rgba(61,214,140,0.4)] transition-all active:scale-95">
              <span className="text-xs opacity-90">{language === 'ko' ? '총' : 'Total'} ₩{(product.discountedPrice * quantity).toLocaleString()}</span>
              <span className="text-lg">{language === 'ko' ? '딜 참여하기' : 'Join Deal Now'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, MapPin, Calendar, Star, Minus, Plus, ShoppingCart, Shield, Flame, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

interface ProductDetailDesktopProps {
  onBack: () => void;
}

export function ProductDetailDesktop({ onBack }: ProductDetailDesktopProps) {
  const { language } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 15, seconds: 30 });

  const productImages = [
    'https://images.unsplash.com/photo-1565151448704-33d96c51fff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    'https://images.unsplash.com/photo-1523362628745-0c100150b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    'https://images.unsplash.com/photo-1602143407151-7111542de6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  ];

  const product = {
    name: language === 'ko' ? '제주 천연 미네랄워터 (20병 패키지)' : 'Jeju Natural Mineral Water (20-bottle Pack)',
    description: language === 'ko'
      ? '제주도 천연 지하수원에서 채수한 프리미엄 미네랄워터입니다. BPA-프리 친환경 페트병을 사용하며, 1회 500ml로 언제 어디서나 편리하게 즐기실 수 있습니다. 화산암반수로 천연 미네랄이 풍부하여 건강에 좋으며, 그룹바이로 최저가에 만나보세요! 기숙사 생활 필수 아이템으로 친구들과 함께 구매하면 더욱 저렴하게 구입할 수 있습니다.'
      : 'Premium mineral water sourced from Jeju Island\'s natural underground springs. Uses BPA-free eco-friendly PET bottles, 500ml per serving for convenient enjoyment anywhere. Rich in natural minerals from volcanic rock aquifer, beneficial for health. Get the best price through group buying! A must-have for dorm life - buy together with friends for even better prices.',
    originalPrice: 20000,
    discountedPrice: 14000,
    discount: 30,
    savings: 6000,
    currentParticipants: 4,
    targetParticipants: 5,
    rating: 4.8,
    reviews: 342,
    pickupLocation: language === 'ko' ? '대학교 A동 기숙사 로비' : 'University Dorm A Lobby',
    pickupDate: language === 'ko' ? '11월 28일 (목)' : 'Nov 28 (Thu)',
    pickupTime: language === 'ko' ? '오후 6:00' : '6:00 PM',
  };

  const participants = [
    { id: 1, name: 'Minsu K.', avatar: '👨‍🎓', color: 'from-blue-400 to-blue-600' },
    { id: 2, name: 'Jieun L.', avatar: '👩‍🎓', color: 'from-pink-400 to-pink-600' },
    { id: 3, name: 'Junho P.', avatar: '👨‍💼', color: 'from-green-400 to-green-600' },
    { id: 4, name: 'Sujin C.', avatar: '👩‍💻', color: 'from-purple-400 to-purple-600' },
  ];

  const features = [
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
    {
      icon: '⭐',
      title: language === 'ko' ? '품질 보증' : 'Quality Guaranteed',
      desc: language === 'ko' ? '식품안전인증 완료' : 'Food safety certified'
    },
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
    <div className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 min-h-screen">
      {/* Back Button */}
      <div className="w-full max-w-[1440px] mx-auto px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>{language === 'ko' ? '목록으로 돌아가기' : 'Back to Market'}</span>
        </button>
      </div>

      {/* Main 2-Column Layout */}
      <div className="w-full max-w-[1440px] mx-auto px-8 pb-40">
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column - Visuals */}
          <div className="space-y-6">
            {/* Main Product Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-border"
            >
              <div className="relative aspect-square">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Discount Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-2xl shadow-xl">
                  <span className="text-lg">{product.discount}% OFF</span>
                </div>
                {/* Hot Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-orange-500 px-5 py-2.5 rounded-2xl shadow-lg flex items-center gap-2">
                  <Flame className="w-5 h-5" />
                  <span className="text-sm">Hot Deal</span>
                </div>
              </div>
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all hover:scale-105 ${
                    selectedImage === index
                      ? 'border-primary shadow-lg'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Product Features */}
            <div className="bg-white rounded-3xl shadow-lg border border-border p-8">
              <h3 className="text-foreground mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                {language === 'ko' ? '제품 특징' : 'Product Features'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-muted rounded-2xl p-4 flex items-start gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground mb-1">{feature.title}</p>
                      <p className="text-xs text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Info & Action */}
          <div className="space-y-6">
            {/* Product Header */}
            <div className="bg-white rounded-3xl shadow-lg border border-border p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-foreground mb-3">{product.name}</h1>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="text-foreground">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} {language === 'ko' ? '리뷰' : 'reviews'})
                    </span>
                  </div>
                </div>
              </div>

              {/* Countdown Timer - Urgency */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Flame className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {language === 'ko' ? '주문 마감까지' : 'Time Left to Order'}
                      </p>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-500" />
                        <span className="text-xl text-foreground">
                          {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar with Avatars */}
              <div className="bg-muted rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-foreground">
                    {language === 'ko' ? '목표 달성률' : 'Recruitment Status'}
                  </span>
                  <span className="text-lg text-primary">
                    {Math.round(progressPercentage)}% {language === 'ko' ? '달성!' : 'reached!'}
                  </span>
                </div>
                <div className="h-4 bg-white rounded-full overflow-hidden shadow-inner mb-4">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-secondary to-emerald-500 shadow-lg"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {product.currentParticipants}/{product.targetParticipants} {language === 'ko' ? '명 참여 중' : 'participants joined'}
                </p>
                {/* Participant Avatars */}
                <div className="flex items-center justify-center gap-2">
                  <Users className="w-5 h-5 text-muted-foreground" />
                  <div className="flex -space-x-3">
                    {participants.map((participant) => (
                      <div
                        key={participant.id}
                        className={`w-12 h-12 bg-gradient-to-br ${participant.color} rounded-full border-3 border-white flex items-center justify-center shadow-lg hover:scale-110 hover:z-10 transition-transform cursor-pointer`}
                        title={participant.name}
                      >
                        <span className="text-xl">{participant.avatar}</span>
                      </div>
                    ))}
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full border-3 border-white flex items-center justify-center shadow-lg hover:scale-110 hover:z-10 transition-transform cursor-pointer">
                      <span className="text-white text-sm">+1</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-br from-secondary/10 to-emerald-50 rounded-2xl p-8 mb-6 border-2 border-secondary/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {language === 'ko' ? '그룹바이 특가' : 'Group Buy Price'}
                    </p>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl text-secondary">₩{product.discountedPrice.toLocaleString()}</span>
                      <span className="text-lg text-muted-foreground line-through">₩{product.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-secondary to-emerald-500 text-white px-6 py-4 rounded-2xl shadow-lg">
                    <p className="text-xs opacity-90 mb-1">{language === 'ko' ? '절약' : 'Save'}</p>
                    <p className="text-2xl">₩{product.savings.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-foreground mb-3">{language === 'ko' ? '상품 설명' : 'Product Description'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-gradient-to-br from-primary/10 to-blue-50 border-2 border-primary/30 rounded-3xl shadow-lg p-8">
              <h3 className="text-foreground mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                {language === 'ko' ? '픽업 정보' : 'Pickup Information'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{language === 'ko' ? '픽업 장소' : 'Pick-up Location'}</p>
                    <p className="text-sm text-foreground">{product.pickupLocation}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{language === 'ko' ? '픽업 날짜 및 시간' : 'Pick-up Date & Time'}</p>
                    <p className="text-sm text-foreground">{product.pickupDate} • {product.pickupTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary/20 shadow-2xl z-50">
        <div className="max-w-[1440px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between gap-8">
            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <label className="text-sm text-foreground whitespace-nowrap">{language === 'ko' ? '수량 선택' : 'Quantity'}</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-xl text-foreground min-w-[2.5rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Total Price Summary */}
            <div className="flex items-center gap-8">
              <div className="text-right">
                <div className="text-sm text-muted-foreground mb-1">{language === 'ko' ? '총 상품금액' : 'Subtotal'}</div>
                <div className="text-2xl text-foreground">₩{(product.discountedPrice * quantity).toLocaleString()}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-secondary mb-1">{language === 'ko' ? '총 절약금액' : 'Total Savings'}</div>
                <div className="text-2xl text-secondary">₩{(product.savings * quantity).toLocaleString()}</div>
              </div>
            </div>

            {/* Purchase Button */}
            <button className="bg-gradient-to-r from-secondary via-emerald-400 to-emerald-500 text-white px-12 py-5 rounded-2xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-secondary/50 transition-all active:scale-95 text-lg group whitespace-nowrap">
              <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>{language === 'ko' ? '딜 참여하기' : 'Join Deal Now'}</span>
            </button>

            {/* Trust Badge */}
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
              <p className="text-sm text-muted-foreground whitespace-nowrap">
                {language === 'ko' ? '안전한 결제 및 품질 보증' : 'Secure payment & quality guarantee'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
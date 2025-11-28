import { Search, MapPin, Clock, Users, ChevronRight, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { useMarket } from '../hooks/useMarket';

interface MarketHomeScreenProps {
  onProductClick: () => void;
}

export function MarketHomeScreen({ onProductClick }: MarketHomeScreenProps) {
  const { language, categories, displayedProducts, selectedCategory, selectCategory } = useMarket();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="px-4 py-4 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-primary">{language === 'ko' ? '그룹바이 마켓' : 'Group Buy Market'}</h1>
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Category Chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => selectCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all flex-shrink-0 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Group Buy Feed */}
      <main className="px-4 py-6 max-w-md mx-auto pb-24">
        <div className="space-y-4">
          {displayedProducts.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all cursor-pointer group"
            >
              <div className="flex gap-4 p-4">
                {/* Thumbnail Image */}
                <div className="relative flex-shrink-0 w-28 h-28 rounded-[16px] overflow-hidden">
                  <img 
                    src={deal.image} 
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
                    {deal.discount}% OFF
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  {/* Product Name & Location */}
                  <div>
                    <h3 className="text-foreground text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {deal.title}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <MapPin className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{deal.location}</span>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="mb-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg text-secondary">
                        ₩{deal.discountedPrice.toLocaleString()}
                      </span>
                      <span className="text-xs text-muted-foreground line-through">
                        ₩{deal.originalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Progress & Timer */}
                  <div className="space-y-2">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-primary" />
                          <span className="text-xs text-foreground">
                            {deal.currentParticipants}/{deal.targetParticipants} {language === 'ko' ? '명 모집' : 'joined'}
                          </span>
                        </div>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: 0 }}
                          animate={{ width: `${(deal.currentParticipants / deal.targetParticipants) * 100}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                        />
                      </div>
                    </div>

                    {/* Time Left & CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {deal.isHot && <Flame className="w-3 h-3 text-orange-500" />}
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className={`text-xs ${deal.isHot ? 'text-orange-500' : 'text-muted-foreground'}`}>
                          {deal.timeLeft} {language === 'ko' ? '남음' : 'left'}
                        </span>
                      </div>
                      <button className="bg-gradient-to-r from-secondary to-emerald-500 text-white text-xs px-4 py-1.5 rounded-full hover:shadow-lg transition-all flex items-center gap-1 group-hover:scale-105" onClick={onProductClick}>
                        {language === 'ko' ? '참여' : 'Join'}
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State Message */}
        {displayedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">
              {language === 'ko' ? '진행 중인 딜이 없습니다' : 'No active deals available'}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
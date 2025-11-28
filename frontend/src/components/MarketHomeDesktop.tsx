import { Clock, Users, Flame, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useMarket } from '../hooks/useMarket';

interface MarketHomeDesktopProps {
  onProductClick: () => void;
}

export function MarketHomeDesktop({ onProductClick }: MarketHomeDesktopProps) {
  const {
    language,
    categories,
    sortOptions,
    displayedProducts,
    selectedCategories,
    sortBy,
    setSortBy,
    toggleCategory,
  } = useMarket();

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto px-8 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <aside className="w-[250px] flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Category Filter */}
              <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
                <h3 className="text-foreground mb-4 flex items-center gap-2">
                  <span>📁</span>
                  {language === 'ko' ? '카테고리' : 'Categories'}
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => toggleCategory(category.id)}
                        className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                      />
                      <span className="text-sm text-foreground">{category.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
                <h3 className="text-foreground mb-4 flex items-center gap-2">
                  <span>🔄</span>
                  {language === 'ko' ? '정렬' : 'Sort By'}
                </h3>
                <div className="space-y-2">
                  {sortOptions.map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name="sort"
                        checked={sortBy === option.id}
                        onChange={() => setSortBy(option.id)}
                        className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                      />
                      <span className="text-sm text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Active Filters Summary */}
              <div className="bg-gradient-to-br from-secondary/10 to-emerald-50 rounded-2xl border-2 border-secondary/30 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-foreground">
                    {language === 'ko' ? '활성 딜' : 'Active Deals'}
                  </span>
                </div>
                <p className="text-2xl text-primary">{displayedProducts.length}</p>
              </div>
            </div>
          </aside>

          {/* Main Content - Product Grid */}
          <main className="flex-1">
            <div className="mb-6">
              <h2 className="text-foreground mb-2">
                {language === 'ko' ? '그룹바이 진행중' : 'Active Group Deals'}
              </h2>
              <p className="text-sm text-muted-foreground">
                {language === 'ko' ? '친구들과 함께 구매하고 최대 30% 절약하세요' : 'Buy together and save up to 30%'}
              </p>
            </div>

            {/* Product Grid - 4 columns */}
            <div className="grid grid-cols-4 gap-6">
              {displayedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={onProductClick}
                  className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer group"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Discount Badge */}
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">
                      {product.discount}% OFF
                    </div>
                    {/* Hot Badge */}
                    {product.isHot && (
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-orange-500 text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        Hot
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4 space-y-3">
                    {/* Title */}
                    <h3 className="text-sm text-foreground line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>

                    {/* Price */}
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl text-secondary">
                          ₩{product.discountedPrice.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground line-through">
                        ₩{product.originalPrice.toLocaleString()}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-primary" />
                          <span className="text-xs text-foreground">
                            {product.currentParticipants}/{product.targetParticipants}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {Math.round((product.currentParticipants / product.targetParticipants) * 100)}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: 0 }}
                          animate={{ width: `${(product.currentParticipants / product.targetParticipants) * 100}%` }}
                          transition={{ duration: 0.8, delay: index * 0.05 + 0.2 }}
                        />
                      </div>
                    </div>

                    {/* Timer & CTA */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{product.timeLeft}</span>
                      </div>
                    </div>

                    {/* Join Button */}
                    <button className="w-full bg-gradient-to-r from-secondary to-emerald-500 text-white text-sm py-2.5 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:scale-105">
                      {language === 'ko' ? '딜 참여' : 'Join Deal'}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

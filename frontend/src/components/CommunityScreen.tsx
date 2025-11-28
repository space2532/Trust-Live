import { Plus, Heart, MessageCircle, Share2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useCommunity } from '../hooks/useCommunity';

export function CommunityScreen() {
  const { t, language, categories, filteredPosts, selectedCategory, setSelectedCategory } = useCommunity();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="px-4 py-4 flex items-center justify-between max-w-md mx-auto">
          <h1 className="text-primary">{t('community.title')}</h1>
          <button className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Category Filter */}
      <div className="bg-white border-b border-border sticky top-[72px] z-30">
        <div className="px-4 py-3 max-w-md mx-auto overflow-x-auto">
          <div className="flex gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-white text-foreground border-border hover:bg-muted'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <main className="pt-4 px-4 max-w-md mx-auto space-y-4 pb-24">
        {/* Posts */}
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow"
          >
            {/* Author Info */}
            <div className="p-4 pb-3">
              <div className="flex items-center gap-3 mb-3">
                <ImageWithFallback
                  src={post.author.avatar}
                  alt={post.isAnonymous ? (language === 'ko' ? '익명' : 'Anonymous') : post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground">
                      {post.isAnonymous ? (language === 'ko' ? '익명' : 'Anonymous') : post.author.name}
                    </span>
                    {!post.isAnonymous && post.author.verified && (
                      <span className="text-xs text-primary">✓</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
                </div>
                <span className={`${post.categoryColor} text-white text-xs px-3 py-1 rounded-full`}>
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="mb-3">
                <h3 className="text-foreground mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.content}
                </p>
              </div>
            </div>

            {/* Image if exists */}
            {post.image && (
              <div className="w-full">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            )}

            {/* Actions */}
            <div className="px-4 py-3 border-t border-border flex items-center gap-6">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors ml-auto">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}

        {/* Load More */}
        <button className="w-full bg-white text-foreground border border-border py-3 rounded-[20px] hover:bg-muted transition-colors">
          {t('community.loadMore')}
        </button>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-4 w-14 h-14 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(30,58,138,0.4)] hover:scale-110 transition-transform z-40">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}
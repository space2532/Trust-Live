import { Plus, Heart, MessageCircle, Share2, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useCommunity } from '../hooks/useCommunity';

export function CommunityDesktop() {
  const { t, language, categories, filteredPosts, trendingTopics, stats, selectedCategory, setSelectedCategory } =
    useCommunity();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 pt-24">
      <div className="w-full max-w-[1440px] mx-auto px-8 pb-12">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-foreground mb-2">{t('community.title')}</h1>
              <p className="text-muted-foreground">
                {language === 'ko' ? '학생들과 정보를 공유하고 소통하세요' : 'Connect and share with fellow students'}
              </p>
            </div>
            <button className="bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:shadow-xl hover:shadow-primary/30 transition-all">
              <Plus className="w-5 h-5" />
              <span>{language === 'ko' ? '새 글 작성' : 'New Post'}</span>
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl border-2 transition-all ${
                    isActive
                      ? 'bg-primary text-white border-primary shadow-lg'
                      : 'bg-white text-foreground border-border hover:border-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Posts Feed */}
          <div className="col-span-8 space-y-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Author Info */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <ImageWithFallback
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-foreground">{post.author.name}</span>
                        {post.author.verified && (
                          <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-xs text-white">✓</span>
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{post.timeAgo}</p>
                    </div>
                    <span className={`${post.categoryColor} text-white text-sm px-4 py-2 rounded-full`}>
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <h2 className="text-foreground mb-3">{post.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">
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
                      className="w-full h-80 object-cover"
                    />
                  </div>
                )}

                {/* Actions */}
                <div className="px-6 py-4 border-t border-border flex items-center gap-8">
                  <button className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                      <Heart className="w-5 h-5" />
                    </div>
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors ml-auto group">
                    <div className="w-10 h-10 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                      <Share2 className="w-5 h-5" />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Load More */}
            <button className="w-full bg-white text-foreground border-2 border-border py-4 rounded-2xl hover:bg-primary hover:text-white hover:border-primary transition-colors">
              {t('community.loadMore')}
            </button>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4 space-y-6">
            {/* Trending Topics */}
            <div className="bg-white rounded-3xl shadow-lg border border-border p-6 sticky top-24">
              <h3 className="text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                {language === 'ko' ? '인기 토픽' : 'Trending Topics'}
              </h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <button
                    key={index}
                    className="w-full bg-muted hover:bg-primary/10 rounded-xl p-4 flex items-center justify-between transition-colors group"
                  >
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      #{topic.tag}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {topic.count} {language === 'ko' ? '게시물' : 'posts'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-primary/10 to-blue-50 rounded-3xl border-2 border-primary/30 p-6">
              <h3 className="text-foreground mb-4">
                {language === 'ko' ? '커뮤니티 통계' : 'Community Stats'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{language === 'ko' ? '활성 사용자' : 'Active Users'}</span>
                  <span className="text-xl text-primary">{stats.activeUsers.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{language === 'ko' ? '오늘의 게시물' : 'Posts Today'}</span>
                  <span className="text-xl text-primary">{stats.postsToday}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{language === 'ko' ? '진행 중인 그룹바이' : 'Active Group Buys'}</span>
                  <span className="text-xl text-secondary">{stats.activeGroupBuys}</span>
                </div>
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-white rounded-3xl shadow-lg border border-border p-6">
              <h3 className="text-foreground mb-4">
                {language === 'ko' ? '커뮤니티 가이드' : 'Community Guidelines'}
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-0.5">✓</span>
                  <span>{language === 'ko' ? '서로 존중하고 배려해주세요' : 'Be respectful and considerate'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-0.5">✓</span>
                  <span>{language === 'ko' ? '개인정보를 공유하지 마세요' : 'Don\'t share personal information'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-0.5">✓</span>
                  <span>{language === 'ko' ? '스팸이나 광고는 금지됩니다' : 'No spam or advertising'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-0.5">✓</span>
                  <span>{language === 'ko' ? '관련 카테고리에 게시해주세요' : 'Post in relevant categories'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

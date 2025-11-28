import { Plus, Heart, MessageCircle, Share2, TrendingUp, Users, Home as HomeIcon, ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

interface Post {
  id: number;
  author: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  category: string;
  title: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timeAgo: string;
  categoryColor: string;
}

export function CommunityScreen() {
  const posts: Post[] = [
    {
      id: 1,
      author: {
        name: 'Sarah Kim',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
        verified: true,
      },
      category: 'Roommate Search',
      title: 'Looking for a clean roommate near campus!',
      content: 'Hi! I\'m looking for a roommate to share a 2BR apartment starting next month. I\'m a junior majoring in CS, quiet, and very clean. Rent is ₩450,000/month.',
      likes: 24,
      comments: 12,
      timeAgo: '2h ago',
      categoryColor: 'bg-primary',
    },
    {
      id: 2,
      author: {
        name: 'Alex Park',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
        verified: true,
      },
      category: 'Group Buy',
      title: 'Anyone want to join bulk rice purchase?',
      content: 'I\'m organizing a group buy for 20kg premium rice bags. If we get 10 people, we can save ₩15,000 each! DM me if interested.',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800',
      likes: 45,
      comments: 28,
      timeAgo: '5h ago',
      categoryColor: 'bg-secondary',
    },
    {
      id: 3,
      author: {
        name: 'Jamie Lee',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
        verified: true,
      },
      category: 'Housing Tips',
      title: 'Best neighborhoods for students on a budget',
      content: 'Just moved and wanted to share some tips! Sinchon area has great deals if you look carefully. Here are my top 3 picks...',
      likes: 67,
      comments: 19,
      timeAgo: '1d ago',
      categoryColor: 'bg-blue-500',
    },
    {
      id: 4,
      author: {
        name: 'Chris Choi',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
        verified: false,
      },
      category: 'Marketplace',
      title: 'Selling desk and chair - great condition!',
      content: 'Moving out soon, selling my study desk (₩80,000) and ergonomic chair (₩60,000). Both less than 1 year old. Pickup only.',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800',
      likes: 12,
      comments: 8,
      timeAgo: '2d ago',
      categoryColor: 'bg-orange-500',
    },
  ];

  const categories = [
    { name: 'All', icon: TrendingUp, color: 'text-primary' },
    { name: 'Roommates', icon: Users, color: 'text-primary' },
    { name: 'Housing', icon: HomeIcon, color: 'text-blue-500' },
    { name: 'Marketplace', icon: ShoppingCart, color: 'text-orange-500' },
  ];

  const { t } = useLanguage();

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
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
                    index === 0
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
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow"
          >
            {/* Author Info */}
            <div className="p-4 pb-3">
              <div className="flex items-center gap-3 mb-3">
                <ImageWithFallback
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground">{post.author.name}</span>
                    {post.author.verified && (
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
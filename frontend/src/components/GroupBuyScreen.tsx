import { useState } from 'react';
import { ProductImageHeader } from './ProductImageHeader';
import { CountdownTimer } from './CountdownTimer';
import { ParticipantProgress } from './ParticipantProgress';
import { DeliveryInfo } from './DeliveryInfo';
import { ShoppingCart, Star, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function GroupBuyScreen() {
  const { t } = useLanguage();
  const [quantity, setQuantity] = useState(1);

  // Set end time to 3 hours from now
  const dealEndTime = new Date(Date.now() + 3 * 60 * 60 * 1000);

  const product = {
    name: 'Premium Bottled Water Pack',
    description: 'Jeju Natural Mineral Water - 20 Bottles (500ml each)',
    image: 'https://images.unsplash.com/photo-1565151448704-33d96c51fff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3R0bGVkJTIwd2F0ZXIlMjBwYWNrfGVufDF8fHx8MTc2NDE0MjY5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    originalPrice: 20000,
    groupPrice: 15000,
    discount: 30,
    savings: 5000,
    currentParticipants: 3,
    targetParticipants: 5,
    rating: 4.8,
    reviews: 342,
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Product Image Header */}
      <ProductImageHeader 
        image={product.image}
        discount={product.discount}
      />

      {/* Content */}
      <div className="px-4 py-6 max-w-md mx-auto space-y-5">
        {/* Product Info */}
        <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h1 className="text-foreground mb-2">{product.name}</h1>
              <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm text-foreground">{product.rating}</span>
                </div>
                <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>
          </div>

          {/* Price Section */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-[20px] p-4 border-2 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Group Buy Price</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl text-primary">₩{product.groupPrice.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground line-through">₩{product.originalPrice.toLocaleString()}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full">
                  <span className="text-sm">Save ₩{product.savings.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer endTime={dealEndTime} />

        {/* Participant Progress */}
        <ParticipantProgress 
          current={product.currentParticipants}
          target={product.targetParticipants}
        />

        {/* Delivery Info */}
        <DeliveryInfo 
          location="Dorm A Lobby"
          pickupDate="Nov 28, 2025"
          pickupTime="6:00 PM"
        />

        {/* Product Details */}
        <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-5">
          <h3 className="text-foreground mb-4">Product Details</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">💧</span>
              </div>
              <div>
                <p className="text-sm text-foreground">100% Natural Mineral Water</p>
                <p className="text-xs text-muted-foreground">Sourced from Jeju Island springs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">📦</span>
              </div>
              <div>
                <p className="text-sm text-foreground">20 Bottles per Pack</p>
                <p className="text-xs text-muted-foreground">500ml each, perfect for daily hydration</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-foreground">Quality Guaranteed</p>
                <p className="text-xs text-muted-foreground">BPA-free bottles, eco-friendly packaging</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Group Buy */}
        <div className="bg-gradient-to-br from-secondary/10 to-emerald-50 rounded-[20px] p-5 border-2 border-secondary/30">
          <h3 className="text-foreground mb-3">Why Join Group Buy?</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs text-white">✓</span>
              </div>
              <p className="text-sm text-foreground">Save up to 30% on regular prices</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs text-white">✓</span>
              </div>
              <p className="text-sm text-foreground">Free delivery to your dorm lobby</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs text-white">✓</span>
              </div>
              <p className="text-sm text-foreground">Meet and connect with neighbors</p>
            </div>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-5">
          <div className="flex items-center justify-between">
            <p className="text-foreground">Quantity</p>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <span className="text-xl">−</span>
              </button>
              <span className="text-xl text-foreground min-w-[2rem] text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <span className="text-xl">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50 px-4 py-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Total Price</p>
              <p className="text-xl text-foreground">₩{(product.groupPrice * quantity).toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-secondary">You save</p>
              <p className="text-lg text-secondary">₩{(product.savings * quantity).toLocaleString()}</p>
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-secondary via-emerald-400 to-emerald-500 text-white py-4 rounded-[20px] flex items-center justify-center gap-2 hover:shadow-[0_8px_24px_rgba(61,214,140,0.4)] transition-all active:scale-95 animate-pulse-subtle">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-lg">Join Deal & Save ₩{(product.savings * quantity).toLocaleString()}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
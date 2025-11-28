import { Package, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function OrderHistory() {
  const { language } = useLanguage();

  const orders = [
    { 
      name: language === 'ko' ? '프리미엄 생수 팩' : 'Premium Water Pack', 
      amount: 24000, 
      status: language === 'ko' ? '배송중' : 'In Transit',
      date: language === 'ko' ? '11월 25일' : 'Nov 25'
    },
    { 
      name: language === 'ko' ? '세탁 세제' : 'Laundry Detergent', 
      amount: 18500, 
      status: language === 'ko' ? '배송완료' : 'Delivered',
      date: language === 'ko' ? '11월 20일' : 'Nov 20'
    },
    { 
      name: language === 'ko' ? '청소용품 세트' : 'Cleaning Supplies', 
      amount: 32000, 
      status: language === 'ko' ? '배송완료' : 'Delivered',
      date: language === 'ko' ? '11월 18일' : 'Nov 18'
    },
  ];

  const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

  return (
    <div className="bg-teal-50 rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-5 border-2 border-teal-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-foreground">{language === 'ko' ? '내 주문' : 'My Orders'}</h3>
        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
          <Package className="w-4 h-4 text-teal-600" />
        </div>
      </div>

      {/* Total Amount This Month */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-2">{language === 'ko' ? '이번 달 구매 금액' : 'This Month\'s Purchases'}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl text-foreground">₩{totalAmount.toLocaleString()}</span>
        </div>
      </div>

      {/* Recent Orders */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Package className="w-4 h-4 text-teal-600" />
          <p className="text-sm text-foreground">{language === 'ko' ? '최근 주문' : 'Recent Orders'}</p>
        </div>
        
        <div className="space-y-2">
          {orders.map((order, index) => (
            <div 
              key={index}
              className="bg-white/60 backdrop-blur rounded-[12px] p-3 border border-teal-100"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm text-foreground">{order.name}</p>
                <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">
                  {order.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-foreground">₩{order.amount.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">{order.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button className="w-full bg-teal-600 text-white py-3 rounded-[12px] mt-4 hover:bg-teal-700 transition-all flex items-center justify-center gap-2">
        {language === 'ko' ? '주문 내역 확인' : 'View Order History'}
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
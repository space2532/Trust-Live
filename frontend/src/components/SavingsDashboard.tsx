import { TrendingUp, Package } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function SavingsDashboard() {
  const { language } = useLanguage();
  
  const activeDeals = [
    { 
      name: language === 'ko' ? '프리미엄 생수 팩' : 'Premium Water Pack', 
      saved: 5000, 
      status: language === 'ko' ? '진행 중' : 'In Progress' 
    },
    { 
      name: language === 'ko' ? '세탁 세제' : 'Laundry Detergent', 
      saved: 5400, 
      status: language === 'ko' ? '진행 중' : 'In Progress' 
    },
    { 
      name: language === 'ko' ? '청소 용품' : 'Cleaning Supplies', 
      saved: 7500, 
      status: language === 'ko' ? '완료' : 'Completed' 
    },
  ];

  const totalSaved = activeDeals.reduce((sum, deal) => sum + deal.saved, 0);

  return (
    <div className="bg-gradient-to-br from-secondary via-emerald-400 to-emerald-500 rounded-[20px] shadow-[0_4px_16px_rgba(61,214,140,0.3)] p-5 text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white">{language === 'ko' ? '나의 절약' : 'My Savings'}</h3>
        <div className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Total Saved */}
      <div className="mb-6">
        <p className="text-sm text-white/80 mb-2">{language === 'ko' ? '공동구매로 절약한 총액' : 'Total Saved from Group Buys'}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl">₩{totalSaved.toLocaleString()}</span>
          <span className="text-lg text-white/80">{language === 'ko' ? '절약' : 'saved'}</span>
        </div>
      </div>

      {/* Active Deals */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Package className="w-4 h-4" />
          <p className="text-sm text-white/90">{language === 'ko' ? '활성 공동구매' : 'Active Group Buys'}</p>
        </div>
        
        <div className="space-y-2">
          {activeDeals.map((deal, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur rounded-[12px] p-3 border border-white/20"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm text-white">{deal.name}</p>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                  {deal.status}
                </span>
              </div>
              <p className="text-xs text-white/80">{language === 'ko' ? '절약액' : 'Saved'}: ₩{deal.saved.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button className="w-full bg-white text-secondary py-3 rounded-[12px] mt-4 hover:bg-white/90 transition-all">
        {language === 'ko' ? '모든 딜 보기' : 'View All Deals'}
      </button>
    </div>
  );
}

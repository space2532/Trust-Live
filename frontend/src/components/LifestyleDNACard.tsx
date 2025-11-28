import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function LifestyleDNACard() {
  const { language } = useLanguage();
  
  const categoryLabels = {
    sleep: language === 'ko' ? '수면' : 'Sleep',
    clean: language === 'ko' ? '청결' : 'Clean',
    social: language === 'ko' ? '사교' : 'Social',
    quiet: language === 'ko' ? '조용함' : 'Quiet',
    share: language === 'ko' ? '공유' : 'Share',
  };

  const data = [
    { category: categoryLabels.sleep, value: 90 },
    { category: categoryLabels.clean, value: 85 },
    { category: categoryLabels.social, value: 60 },
    { category: categoryLabels.quiet, value: 80 },
    { category: categoryLabels.share, value: 75 },
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 via-purple-50 to-pink-50 rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-5 border-2 border-primary/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧬</span>
          <h3 className="text-foreground">{language === 'ko' ? '내 라이프스타일 DNA' : 'My Lifestyle DNA'}</h3>
        </div>
        <button className="p-2 hover:bg-white/50 rounded-full transition-colors">
          <Eye className="w-4 h-4 text-primary" />
        </button>
      </div>

      {/* Radar Chart */}
      <div className="bg-white/60 backdrop-blur rounded-[16px] p-4 h-[280px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height={280}>
          <RadarChart data={data}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis 
              dataKey="category" 
              tick={{ fill: '#6b7280', fontSize: 12 }}
            />
            <Radar
              dataKey="value"
              stroke="#1e40af"
              fill="#3b82f6"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {data.map((item, index) => (
          <div key={index} className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs text-foreground">
            {item.category}: {item.value}%
          </div>
        ))}
      </div>
    </div>
  );
}
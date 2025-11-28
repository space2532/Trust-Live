import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

interface LifestyleRadarChartProps {
  userData: number[];
  roommateData: number[];
  categories: string[];
}

export function LifestyleRadarChart({ userData, roommateData, categories }: LifestyleRadarChartProps) {
  const data = categories.map((category, index) => ({
    category,
    you: userData[index],
    roommate: roommateData[index],
  }));

  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-foreground">Lifestyle Compatibility Analysis</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">You</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <span className="text-xs text-muted-foreground">Sarah Johnson</span>
          </div>
        </div>
      </div>

      <div className="w-full h-80 flex items-center justify-center">
        <ResponsiveContainer width="100%" height={320}>
          <RadarChart data={data}>
            <PolarGrid stroke="#e5e7eb" strokeWidth={1} />
            <PolarAngleAxis 
              dataKey="category" 
              tick={{ fill: '#64748b', fontSize: 12 }}
              stroke="#94a3b8"
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 10]} 
              tick={{ fill: '#94a3b8', fontSize: 10 }}
              stroke="#cbd5e1"
            />
            <Radar
              name="You"
              dataKey="you"
              stroke="#1e3a8a"
              fill="#1e3a8a"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Radar
              name="Sarah Johnson"
              dataKey="roommate"
              stroke="#3dd68c"
              fill="#3dd68c"
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          Scale: 0 (Low) to 10 (High) • Data based on lifestyle preferences survey
        </p>
      </div>
    </div>
  );
}
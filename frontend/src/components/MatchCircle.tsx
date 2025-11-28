import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface MatchCircleProps {
  percentage: number;
  size?: 'small' | 'large';
}

export function MatchCircle({ percentage, size = 'small' }: MatchCircleProps) {
  const data = [
    { name: 'Match', value: percentage },
    { name: 'Remaining', value: 100 - percentage },
  ];

  const COLORS = ['#3dd68c', '#e5e7eb'];
  const dimensions = size === 'large' ? 140 : 80;
  const innerRadius = size === 'large' ? 50 : 28;
  const outerRadius = size === 'large' ? 60 : 35;

  return (
    <div className="relative flex-shrink-0" style={{ width: dimensions, height: dimensions }}>
      <ResponsiveContainer width={dimensions} height={dimensions}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            strokeWidth={0}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`${size === 'large' ? 'text-3xl' : 'text-xl'} text-foreground`}>
          {percentage}%
        </span>
        <span className="text-xs text-muted-foreground">Match</span>
      </div>
    </div>
  );
}
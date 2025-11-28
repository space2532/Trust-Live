import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageCircle, Calendar } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface RoommateCardProps {
  name: string;
  avatar: string;
  matchPercentage: number;
  moveInDate: string;
  sharedInterests: string[];
}

export function RoommateCard({ name, avatar, matchPercentage, moveInDate, sharedInterests }: RoommateCardProps) {
  const data = [
    { name: 'Match', value: matchPercentage },
    { name: 'Remaining', value: 100 - matchPercentage },
  ];

  const COLORS = ['#3dd68c', '#f1f5f9'];

  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-foreground">My Roommate</h3>
        <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs">Active</span>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-20 aspect-square">
          <ImageWithFallback 
            src={avatar}
            alt={name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="text-foreground mb-1">{name}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="w-4 h-4" />
            <span>Move-in: {moveInDate}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {sharedInterests.slice(0, 2).map((interest, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-muted text-muted-foreground rounded-full text-xs">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-muted rounded-[20px] p-4">
        <div className="relative w-24 h-24 flex-shrink-0">
          <ResponsiveContainer width={96} height={96}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={40}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary">{matchPercentage}%</span>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm text-foreground mb-1">Match Score</p>
          <p className="text-xs text-muted-foreground mb-3">Based on lifestyle preferences</p>
          <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span>Message</span>
          </button>
        </div>
      </div>
    </div>
  );
}
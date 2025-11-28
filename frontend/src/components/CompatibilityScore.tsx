import { motion } from 'motion/react';

interface CompatibilityScoreProps {
  score: number;
}

export function CompatibilityScore({ score }: CompatibilityScoreProps) {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-gradient-to-br from-primary to-secondary rounded-[20px] shadow-[0_4px_16px_rgba(30,58,138,0.2)] p-6 text-white">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-white/80 mb-2">Overall Compatibility</p>
          <p className="text-4xl text-white mb-1">{score}%</p>
          <p className="text-sm text-white/80">Excellent Match</p>
        </div>
        <div className="relative w-28 h-28">
          <svg className="transform -rotate-90" width="112" height="112">
            {/* Background circle */}
            <circle
              cx="56"
              cy="56"
              r="45"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <motion.circle
              cx="56"
              cy="56"
              r="45"
              stroke="white"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl text-white">✓</span>
          </div>
        </div>
      </div>
    </div>
  );
}

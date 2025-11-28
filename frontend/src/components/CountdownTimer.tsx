import { Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  endTime: Date;
}

export function CountdownTimer({ endTime }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="bg-gradient-to-r from-destructive to-orange-500 text-white rounded-[20px] p-4 flex items-center gap-3">
      <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center flex-shrink-0">
        <Clock className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-white/90 mb-1">Time Left to Join</p>
        <div className="flex items-center gap-2">
          <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-lg min-w-[3rem] text-center">
            <span className="text-xl">{String(timeLeft.hours).padStart(2, '0')}</span>
          </div>
          <span className="text-xl">:</span>
          <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-lg min-w-[3rem] text-center">
            <span className="text-xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
          </div>
          <span className="text-xl">:</span>
          <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-lg min-w-[3rem] text-center">
            <span className="text-xl">{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

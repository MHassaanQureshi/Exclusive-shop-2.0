
"use client";
import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date; 
}

const Timer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    seconds: 0,
  });

  
  const formatTime = (time: number) => (time < 10 ? `0${time}` : time.toString());

  useEffect(() => {
    const calculateTimeLeft = () => {
      const currentDate = new Date();
      const totalSeconds = (targetDate.getTime() - currentDate.getTime()) / 1000;

      if (totalSeconds < 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const mins = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds) % 60;

      setTimeLeft({ days, hours, mins, seconds });
    };

    calculateTimeLeft(); 
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex  gap-3 items-center">
      <div className="flex flex-col items-center">
      <span className="text-sm "> Days</span>
        <span className="text-lg">{timeLeft.days}  </span>
        
      </div>
      <span className="text-red-500 text-2xl font-bold">:</span>
      <div className="flex flex-col items-center">
      <span className="txt-sm"> Hours</span>
        <span className="hours">{formatTime(timeLeft.hours)}</span>
        
      </div>
      <span className="text-red-500 text-2xl font-bold">:</span>
      <div className="flex flex-col items-center">
      <span className="text-sm"> Minutes</span>
        <span className="mins">{formatTime(timeLeft.mins)}</span>
        
      </div>
      <span className="text-red-500 text-2xl font-bold">:</span>
      <div className="flex flex-col items-center">
      <span className="text-sm">  Seconds</span>
        <span className="seconds">{formatTime(timeLeft.seconds)}</span>
        
      </div>
    </div>
  );
};

export default Timer;

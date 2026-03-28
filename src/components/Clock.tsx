'use client';

import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB'));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Return a placeholder or null during SSR to avoid hydration mismatch
  if (time === null) return <span>--:--:--</span>;

  return <span>{time}</span>;
}

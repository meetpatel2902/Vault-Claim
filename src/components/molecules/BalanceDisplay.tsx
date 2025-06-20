import React, { useEffect, useState } from 'react';
import Text from '../atoms/Text';

interface BalanceDisplayProps {
  balance: number;
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ balance }) => {
  const [displayBalance, setDisplayBalance] = useState(balance);
  const [triggerShake, setTriggerShake] = useState(false);

  useEffect(() => {
    if (balance !== displayBalance) {
      setTriggerShake(true);
      setTimeout(() => setTriggerShake(false), 800); 
    }

    let start = displayBalance;
    const end = balance;
    if (start === end) return;

    const duration = 1500; 
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3); 
      const newBalance = Math.floor(start + (end - start) * easedProgress);
      setDisplayBalance(newBalance);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [balance, displayBalance]);

  return (
    <div className={`bg-gray-900 rounded-xl p-4 mb-6 border border-yellow-600/20 ${triggerShake ? 'animate-shake-smooth' : ''}`}>
      <Text variant="label">ST Balance</Text>
      <Text variant="value">{displayBalance.toLocaleString()} ST</Text>
    </div>
  );
};

export default BalanceDisplay;
import React from 'react';
import Text from '../atoms/Text';

interface CountdownTimerProps {
  timeLeft: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeLeft }) => {
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-900 rounded-xl p-4 mb-6 border border-yellow-600/20 text-center">
      <Text variant="label">Next Claim In</Text>
      <Text className="text-5xl font-mono text-yellow-400 tracking-tight">
        {formatTime(timeLeft)}
      </Text>
    </div>
  );
};

export default CountdownTimer;
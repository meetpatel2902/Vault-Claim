import React from 'react';
import Text from '../atoms/Text';

interface ClaimLog {
  id: string;
  amount: number;
  timestamp: string;
}

interface ClaimLogItemProps {
  log: ClaimLog;
  index: number;
}

const ClaimLogItem: React.FC<ClaimLogItemProps> = ({ log, index }) => {
  return (
    <div
      className="bg-gray-900/50 rounded-lg p-3 flex justify-between items-center border border-gray-700/50 animate-flip-in-smooth"
      style={{ animationDelay: `${index * 200}ms`, transition: 'all 0.5s ease-out' }}
    >
      <Text variant="log">
        Claimed <span className="text-yellow-400 font-bold">{log.amount} ST</span>
      </Text>
      <Text variant="timestamp">{log.timestamp}</Text>
    </div>
  );
};

export default ClaimLogItem;
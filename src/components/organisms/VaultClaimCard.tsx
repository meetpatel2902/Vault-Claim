import React from 'react';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import BalanceDisplay from '../molecules/BalanceDisplay';
import CountdownTimer from '../molecules/CountdownTimer';
import ClaimLogItem from '../molecules/ClaimLogItem';
import { ClaimLog } from '../../types';

interface VaultClaimCardProps {
  balance: number;
  timeLeft: number;
  isClaimDisabled: boolean;
  claimLogs: ClaimLog[];
  onClaim: () => void;
}

const VaultClaimCard: React.FC<VaultClaimCardProps> = ({
  balance,
  timeLeft,
  isClaimDisabled,
  claimLogs,
  onClaim,
}) => {
  return (
    <div className="w-full max-w-md bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl border border-yellow-500/30 p-6 animate-zoom-in-smooth hover:scale-102 transition-transform duration-500 ease-out">
      <Text variant="h2" className="text-center mb-6">
        Vault Claim
      </Text>
      <BalanceDisplay balance={balance} />
      <CountdownTimer timeLeft={timeLeft} />
      <Button onClick={onClaim} disabled={isClaimDisabled}>
        {isClaimDisabled ? 'Locked' : 'Claim Now'}
      </Button>
      <div className="mt-8">
        <Text className="text-xl mb-4">Recent Claims</Text>
        <div className="space-y-3">
          {claimLogs.map((log, index) => (
            <ClaimLogItem key={log.id} log={log} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VaultClaimCard;
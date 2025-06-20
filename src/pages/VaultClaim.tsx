import React, { useState, useEffect } from 'react';
import VaultClaimCard from '../components/organisms/VaultClaimCard';
import { MockWebSocketService } from '../utils/mockWebSocketService';
import { ClaimLog } from '../types';

const VaultClaim: React.FC = () => {
  const [stBalance, setStBalance] = useState<number>(2500);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [isClaimDisabled, setIsClaimDisabled] = useState<boolean>(true);
  const [claimLogs, setClaimLogs] = useState<ClaimLog[]>([]);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [hasClaimed, setHasClaimed] = useState<boolean>(false);
  const [webSocketService, setWebSocketService] = useState<MockWebSocketService | null>(null);

  useEffect(() => {
    const service = new MockWebSocketService({
      onBalanceUpdate: (balance) => setStBalance(balance),
      onClaimLogUpdate: (logs) => setClaimLogs(logs),
    });
    setWebSocketService(service);
    service.connect();
    setClaimLogs(service['logs']);

    return () => service.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (!hasClaimed) {
            setIsClaimDisabled(false);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hasClaimed]);

  const handleClaim = () => {
    if (!isClaimDisabled && webSocketService && !hasClaimed) {
      setShowSuccess(true);
      webSocketService.claim(100);
      setHasClaimed(true);
      setTimeLeft(60);
      setIsClaimDisabled(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  };

  useEffect(() => {
    if (timeLeft === 0 && hasClaimed) {
      const resetTimer = setTimeout(() => {
        setHasClaimed(false);
        setIsClaimDisabled(false);
      }, 1000);
      return () => clearTimeout(resetTimer);
    }
  }, [timeLeft, hasClaimed]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black animate-neon-pulse relative overflow-hidden flex items-center justify-center">
      {showSuccess && (
        <div className="absolute inset-0 pointer-events-none animate-success-particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-particle-disperse-smooth"
              style={{
                top: `${50 + Math.random() * 30 - 15}%`,
                left: `${50 + Math.random() * 30 - 15}%`,
                animationDelay: `${i * 100}ms`,
                animationDuration: `${1.5 + Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}
      <div className="w-full h-full flex items-center justify-center">
        <VaultClaimCard
          balance={stBalance}
          timeLeft={timeLeft}
          isClaimDisabled={isClaimDisabled}
          claimLogs={claimLogs}
          onClaim={handleClaim}
        />
      </div>
    </div>
  );
};

export default VaultClaim;  
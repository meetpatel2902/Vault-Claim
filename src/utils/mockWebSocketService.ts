import { ClaimLog } from '../types';

interface MockWebSocketCallbacks {
  onBalanceUpdate: (balance: number) => void;
  onClaimLogUpdate: (logs: ClaimLog[]) => void;
}

export class MockWebSocketService {
  private callbacks: MockWebSocketCallbacks;
  private balance: number = 2500;
  private logs: ClaimLog[] = [
    { id: 'log-1', amount: 50, timestamp: '2025-06-19 01:40 PM' },
    { id: 'log-2', amount: 75, timestamp: '2025-06-19 01:35 PM' },
    { id: 'log-3', amount: 30, timestamp: '2025-06-19 01:30 PM' },
    { id: 'log-4', amount: 100, timestamp: '2025-06-19 01:25 PM' },
    { id: 'log-5', amount: 25, timestamp: '2025-06-19 01:20 PM' },
  ];
  private intervalId: NodeJS.Timeout | null = null;

  constructor(callbacks: MockWebSocketCallbacks) {
    this.callbacks = callbacks;
  }

  private generateUniqueId(): string {
    return `log-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
  }

  connect() {
    this.intervalId = setInterval(() => {
      const balanceChange = Math.floor(Math.random() * 50) - 25;
      this.balance = Math.max(0, this.balance + balanceChange);
      this.callbacks.onBalanceUpdate(this.balance);

      if (Math.random() < 0.2) {
        const newLog: ClaimLog = {
          id: this.generateUniqueId(),
          amount: Math.floor(Math.random() * 100) + 10,
          timestamp: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Asia/Kolkata' }),
        };
        this.logs = [newLog, ...this.logs].slice(0, 5);
        this.callbacks.onClaimLogUpdate(this.logs);
      }
    }, Math.random() * 10000 + 10000);
  }

  disconnect() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  claim(amount: number) {
    this.balance += amount;
    const newLog: ClaimLog = {
      id: this.generateUniqueId(),
      amount,
      timestamp: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Asia/Kolkata' }),
    };
    this.logs = [newLog, ...this.logs].slice(0, 5);
    this.callbacks.onBalanceUpdate(this.balance);
    this.callbacks.onClaimLogUpdate(this.logs);
  }
}
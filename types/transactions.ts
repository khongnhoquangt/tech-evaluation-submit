export type TransactionType = 'Stake' | 'Borrow' | 'Lend';

export interface Transaction {
  id: number;
  username: string;
  type: TransactionType;
  token: string;
  amount: string;
  date: string;
} 
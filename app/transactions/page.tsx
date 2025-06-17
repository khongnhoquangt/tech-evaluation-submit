'use client';

import { useState } from 'react';
import { TransactionType } from '@/types/transactions';
import Button from '@/app/components/Button';

const FILTER_BUTTON: Array<TransactionType | 'All'> = [
  'All', 'Stake', 'Borrow', 'Lend'
]

const mockTransactions = [
  {
    id: 1,
    username: 'alice.eth',
    type: 'Stake' as TransactionType,
    token: 'ETH',
    amount: '2.5',
    date: '2024-03-20T10:30:00Z',
  },
  {
    id: 2,
    username: 'bob.eth',
    type: 'Borrow' as TransactionType,
    token: 'USDC',
    amount: '1000',
    date: '2024-03-20T09:15:00Z',
  },
  {
    id: 3,
    username: 'carol.eth',
    type: 'Lend' as TransactionType,
    token: 'DAI',
    amount: '5000',
    date: '2024-03-19T15:45:00Z',
  },
  {
    id: 4,
    username: 'dave.eth',
    type: 'Stake' as TransactionType,
    token: 'ETH',
    amount: '5.75',
    date: '2024-03-19T14:20:00Z',
  },
  {
    id: 5,
    username: 'eve.eth',
    type: 'Borrow' as TransactionType,
    token: 'USDT',
    amount: '2500',
    date: '2024-03-19T11:05:00Z',
  },
  {
    id: 6,
    username: 'frank.eth',
    type: 'Lend' as TransactionType,
    token: 'USDC',
    amount: '7500',
    date: '2024-03-18T16:30:00Z',
  },
  {
    id: 7,
    username: 'grace.eth',
    type: 'Stake' as TransactionType,
    token: 'ETH',
    amount: '1.25',
    date: '2024-03-18T13:45:00Z',
  },
  {
    id: 8,
    username: 'henry.eth',
    type: 'Borrow' as TransactionType,
    token: 'DAI',
    amount: '3000',
    date: '2024-03-18T10:15:00Z',
  },
  {
    id: 9,
    username: 'ivy.eth',
    type: 'Lend' as TransactionType,
    token: 'ETH',
    amount: '3.5',
    date: '2024-03-17T17:20:00Z',
  },
  {
    id: 10,
    username: 'jack.eth',
    type: 'Stake' as TransactionType,
    token: 'ETH',
    amount: '4.2',
    date: '2024-03-17T15:10:00Z',
  },
  {
    id: 11,
    username: 'kate.eth',
    type: 'Borrow' as TransactionType,
    token: 'USDC',
    amount: '4500',
    date: '2024-03-17T12:30:00Z',
  },
  {
    id: 12,
    username: 'luke.eth',
    type: 'Lend' as TransactionType,
    token: 'USDT',
    amount: '6000',
    date: '2024-03-16T18:45:00Z',
  },
  {
    id: 13,
    username: 'mike.eth',
    type: 'Stake' as TransactionType,
    token: 'ETH',
    amount: '6.8',
    date: '2024-03-16T14:25:00Z',
  },
  {
    id: 14,
    username: 'nina.eth',
    type: 'Borrow' as TransactionType,
    token: 'DAI',
    amount: '8000',
    date: '2024-03-16T11:50:00Z',
  },
  {
    id: 15,
    username: 'oliver.eth',
    type: 'Lend' as TransactionType,
    token: 'ETH',
    amount: '2.1',
    date: '2024-03-15T19:15:00Z',
  }
];

export default function TransactionsPage() {
  const [selectedType, setSelectedType] = useState<TransactionType | 'All'>('All');

  const filteredTransactions = selectedType === 'All'
    ? mockTransactions
    : mockTransactions.filter(tx => tx.type === selectedType);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Recent Transactions</h1>
      
      <div className="mb-6 flex gap-4">
        {FILTER_BUTTON.map((item, index) => {
          const isActive = selectedType === item
          return <Button
              key={index}
              className='text-white hover:text-black'
              onClick={() => setSelectedType(item)}
              variant={isActive ? 'primary' : 'outline'}
              size="medium"
          >
            {item}
          </Button>
        })}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full overflow-hidden rounded-lg bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Username
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Token
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredTransactions.map((transaction, index) => (
              <tr key={transaction.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {transaction.username}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {transaction.type}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {transaction.token}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {transaction.amount}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {new Date(transaction.date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 
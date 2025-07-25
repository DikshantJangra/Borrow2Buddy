import React from 'react';

const transactions = [
  { id: 1, type: 'Payable', to: 'Amit Sharma', amount: 800, date: '2024-06-01' },
  { id: 2, type: 'Receivable', from: 'Priya Singh', amount: 1200, date: '2024-05-28' },
  { id: 3, type: 'Payable', to: 'Rahul Verma', amount: 400, date: '2024-05-25' },
  { id: 4, type: 'Receivable', from: 'Sneha Patel', amount: 1400, date: '2024-05-20' },
];

const Transactions = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Recent Transactions</h2>
      <table className="w-full bg-white shadow rounded-lg border">
        <thead>
          <tr className="text-zinc-500 text-sm border-b">
            <th className="py-2">Type</th>
            <th className="py-2">Name</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-b last:border-b-0">
              <td className="py-2">{tx.type}</td>
              <td className="py-2">{tx.type === 'Payable' ? tx.to : tx.from}</td>
              <td className={`py-2 font-medium ${tx.type === 'Payable' ? 'text-red-500' : 'text-green-500'}`}>
                INR {tx.amount.toLocaleString()}
              </td>
              <td className="py-2 text-zinc-400">{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
import React from 'react'

const user = {
  name: 'Dikshant Jangra',
  avatar: 'https://ui-avatars.com/api/?name=Dikshant+Jangra',
};

const summary = [
  { label: 'Payable', amount: 1600, color: 'text-red-500' },
  { label: 'Receivable', amount: 2600, color: 'text-green-500' },
];

const transactions = [
  { id: 1, type: 'Payable', to: 'Amit Sharma', amount: 800, date: '2024-06-01' },
  { id: 2, type: 'Receivable', from: 'Priya Singh', amount: 1200, date: '2024-05-28' },
  { id: 3, type: 'Payable', to: 'Rahul Verma', amount: 400, date: '2024-05-25' },
  { id: 4, type: 'Receivable', from: 'Sneha Patel', amount: 1400, date: '2024-05-20' },
];

const Dashboard = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* User Info */}
      <div className="flex items-center gap-4 mb-8">
        <img src={user.avatar} alt="User Avatar" className="w-14 h-14 rounded-full border" />
  <div>
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-zinc-500 text-sm">Welcome back!</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {summary.map((item) => (
          <div
            key={item.label}
            className="bg-white shadow rounded-lg p-6 flex flex-col items-start border"
          >
            <p className="text-xl text-zinc-500 mb-2">{item.label}</p>
            <p className={`text-3xl font-bold ${item.color}`}>INR {item.amount.toLocaleString()}</p>
          </div>
        ))}
  </div>

      {/* Recent Transactions */}
      <div className="bg-white shadow rounded-lg p-6 border">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <table className="w-full text-left">
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
                <td className="py-2">
                  {tx.type === 'Payable' ? tx.to : tx.from}
                </td>
                <td className="py-2 font-medium {tx.type === 'Payable' ? 'text-red-500' : 'text-green-500'}">
                  INR {tx.amount.toLocaleString()}
                </td>
                <td className="py-2 text-zinc-400">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </div>
  );
};

export default Dashboard;
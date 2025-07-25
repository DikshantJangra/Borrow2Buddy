import React, { useState } from 'react';

const friends = [
  { id: 1, name: 'Amit Sharma' },
  { id: 2, name: 'Priya Singh' },
  { id: 3, name: 'Rahul Verma' },
];

const mockRequests = [
  { id: 1, friend: 'Amit Sharma', amount: 500, reason: 'Book purchase', status: 'Pending' },
  { id: 2, friend: 'Priya Singh', amount: 1200, reason: 'Rent', status: 'Approved' },
];

const Borrow = () => {
  const [form, setForm] = useState({ amount: '', reason: '', friend: friends[0].id });
  const [requests, setRequests] = useState(mockRequests);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const friendObj = friends.find(f => f.id === parseInt(form.friend));
    setRequests([
      ...requests,
      {
        id: requests.length + 1,
        friend: friendObj.name,
        amount: form.amount,
        reason: form.reason,
        status: 'Pending',
      },
    ]);
    setForm({ amount: '', reason: '', friend: friends[0].id });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Request to Borrow</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 mb-8 border space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Amount (INR)</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Reason</label>
          <input
            type="text"
            name="reason"
            value={form.reason}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Select Friend</label>
          <select
            name="friend"
            value={form.friend}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
          >
            {friends.map(f => (
              <option key={f.id} value={f.id}>{f.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-[#00AC06] text-white px-4 py-2 rounded hover:bg-[#008f05]">Request</button>
      </form>
      <h3 className="text-xl font-semibold mb-4">Current Borrow Requests</h3>
      <table className="w-full bg-white shadow rounded-lg border">
        <thead>
          <tr className="text-zinc-500 text-sm border-b">
            <th className="py-2">Friend</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Reason</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(req => (
            <tr key={req.id} className="border-b last:border-b-0">
              <td className="py-2">{req.friend}</td>
              <td className="py-2">INR {req.amount}</td>
              <td className="py-2">{req.reason}</td>
              <td className="py-2">
                <span className={`px-2 py-1 rounded text-xs ${req.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{req.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Borrow;
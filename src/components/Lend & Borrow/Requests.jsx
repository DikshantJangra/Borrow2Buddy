import React, { useState } from 'react';

const mockIncoming = [
  { id: 1, from: 'Rahul Verma', amount: 700, reason: 'Groceries', status: 'Pending' },
  { id: 2, from: 'Sneha Patel', amount: 300, reason: 'Snacks', status: 'Pending' },
];
const mockOutgoing = [
  { id: 1, to: 'Amit Sharma', amount: 500, reason: 'Book purchase', status: 'Approved' },
];

const Requests = () => {
  const [incoming, setIncoming] = useState(mockIncoming);
  const [outgoing] = useState(mockOutgoing);

  const handleAction = (id, action) => {
    setIncoming(incoming.map(req => req.id === id ? { ...req, status: action } : req));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Requests</h2>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Incoming Requests</h3>
        <table className="w-full bg-white shadow rounded-lg border mb-6">
          <thead>
            <tr className="text-zinc-500 text-sm border-b">
              <th className="py-2">From</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Reason</th>
              <th className="py-2">Status</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {incoming.map(req => (
              <tr key={req.id} className="border-b last:border-b-0">
                <td className="py-2">{req.from}</td>
                <td className="py-2">INR {req.amount}</td>
                <td className="py-2">{req.reason}</td>
                <td className="py-2">
                  <span className={`px-2 py-1 rounded text-xs ${req.status === 'Approved' ? 'bg-green-100 text-green-700' : req.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{req.status}</span>
                </td>
                <td className="py-2 space-x-2">
                  {req.status === 'Pending' && (
                    <>
                      <button onClick={() => handleAction(req.id, 'Approved')} className="bg-green-500 text-white px-2 py-1 rounded text-xs">Approve</button>
                      <button onClick={() => handleAction(req.id, 'Rejected')} className="bg-red-500 text-white px-2 py-1 rounded text-xs">Reject</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Outgoing Requests</h3>
        <table className="w-full bg-white shadow rounded-lg border">
          <thead>
            <tr className="text-zinc-500 text-sm border-b">
              <th className="py-2">To</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Reason</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {outgoing.map(req => (
              <tr key={req.id} className="border-b last:border-b-0">
                <td className="py-2">{req.to}</td>
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
    </div>
  );
};

export default Requests;
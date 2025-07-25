import React, { useState, useRef, useEffect } from 'react';

// Mock data
const mockThreads = [
  {
    id: 1,
    name: 'Amit Sharma',
    avatar: 'https://ui-avatars.com/api/?name=Amit+Sharma',
    unread: 2,
    messages: [
      { from: 'Amit Sharma', text: 'Hey, did you get the money?', time: '2024-06-10T10:00:00' },
      { from: 'You', text: 'Yes, thanks!', time: '2024-06-10T10:01:00' },
      { from: 'Amit Sharma', text: 'Let me know if you need more.', time: '2024-06-10T10:02:00' },
    ],
  },
  {
    id: 2,
    name: 'Priya Singh',
    avatar: 'https://ui-avatars.com/api/?name=Priya+Singh',
    unread: 0,
    messages: [
      { from: 'You', text: 'Can you send the rent?', time: '2024-06-09T09:00:00' },
      { from: 'Priya Singh', text: 'Sure, sending now.', time: '2024-06-09T09:05:00' },
    ],
  },
];

// Thread List Component
function ThreadList({ threads, selectedId, onSelect }) {
  return (
    <div className="w-1/3 bg-white shadow rounded-lg border p-4">
      <h2 className="text-lg font-semibold mb-4">Messages</h2>
      <ul>
        {threads.map(thread => (
          <li
            key={thread.id}
            className={`flex items-center gap-3 p-3 rounded cursor-pointer mb-2 ${selectedId === thread.id ? 'bg-[#00AC06]/10 text-[#00AC06]' : 'hover:bg-gray-100'}`}
            onClick={() => onSelect(thread.id)}
          >
            <img src={thread.avatar} alt={thread.name} className="w-8 h-8 rounded-full border" />
            <span className="flex-1">{thread.name}</span>
            {thread.unread > 0 && (
              <span className="bg-[#00AC06] text-white text-xs px-2 py-0.5 rounded-full">{thread.unread}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Conversation Component
function Conversation({ thread, messagesEndRef }) {
  return (
    <div className="flex-1 bg-white shadow rounded-lg border p-4 flex flex-col">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <img src={thread.avatar} alt={thread.name} className="w-8 h-8 rounded-full border" />
        Conversation with {thread.name}
      </h3>
      <div className="space-y-2 mb-4 flex-1 overflow-y-auto" style={{ maxHeight: 350 }}>
        {thread.messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.from === 'You' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-4 py-2 rounded-lg max-w-xs ${msg.from === 'You' ? 'bg-[#00AC06] text-white' : 'bg-gray-100 text-gray-800'}`}>
              <div className="text-sm">{msg.text}</div>
              <div className="text-xs text-right opacity-60 mt-1">
                {new Date(msg.time).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

// Message Input Component
function MessageInput({ value, onChange, onSend }) {
  return (
    <form className="flex gap-2 mt-2" onSubmit={onSend}>
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring"
        value={value}
        onChange={e => onChange(e.target.value)}
        autoFocus
      />
      <button type="submit" className="bg-[#00AC06] text-white px-4 py-2 rounded">Send</button>
    </form>
  );
}

// Main Messages Component
const Messages = () => {
  const [threads, setThreads] = useState(mockThreads);
  const [selectedId, setSelectedId] = useState(threads[0].id);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const selectedThread = threads.find(t => t.id === selectedId);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedThread]);

  const handleSelect = (id) => {
    setThreads(prev => prev.map(t => t.id === id ? { ...t, unread: 0 } : t));
    setSelectedId(id);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const now = new Date();
    const newMessage = {
      from: 'You',
      text: input,
      time: now.toISOString(),
    };
    setThreads(prev =>
      prev.map(t =>
        t.id === selectedId
          ? { ...t, messages: [...t.messages, newMessage] }
          : t
      )
    );
    setInput('');
    setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 flex gap-8">
      <ThreadList threads={threads} selectedId={selectedId} onSelect={handleSelect} />
      <div className="flex-1 flex flex-col">
        <Conversation thread={selectedThread} messagesEndRef={messagesEndRef} />
        <MessageInput value={input} onChange={setInput} onSend={handleSend} />
      </div>
    </div>
  );
};

export default Messages;
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineDashboardCustomize, MdOutlineRequestPage } from 'react-icons/md';
import { GrTransaction } from 'react-icons/gr';
import { FiPocket } from 'react-icons/fi';
import { FaRegMessage } from 'react-icons/fa6';
import { TbLogout2 } from 'react-icons/tb';
import { signOut } from 'firebase/auth';
import { auth } from '../LoginSignup/firebase';

const navLinks = [
  { name: 'Dashboard', path: '/dashboard', icon: <MdOutlineDashboardCustomize /> },
  { name: 'Requests', path: '/requests', icon: <MdOutlineRequestPage /> },
  { name: 'Borrow', path: '/borrow', icon: <FiPocket /> },
  { name: 'Transactions', path: '/transactions', icon: <GrTransaction /> },
  { name: 'Messages', path: '/messages', icon: <FaRegMessage /> },
];

const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      alert('Logout failed.');
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50 font-Popins">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col p-6 border-r min-h-screen">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-[#00AC06] tracking-tight">Borrow2Buddy</h1>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors font-medium text-gray-700 hover:bg-[#00AC06]/10 hover:text-[#00AC06] ${
                    location.pathname === link.path ? 'bg-[#00AC06]/10 text-[#00AC06]' : ''
                  }`}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto pt-6">
          <button onClick={handleLogout} className="flex items-center gap-2 text-gray-500 hover:text-red-600 text-base font-medium w-full text-left">
            <TbLogout2 className="text-xl" /> Logout
          </button>
          <div className="text-xs text-gray-400 pt-6">© 2024 Borrow2Buddy</div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
};

export default DashboardLayout; 
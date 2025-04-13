import React from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineDashboardCustomize, MdOutlineRequestPage } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FiPocket } from "react-icons/fi";
import { FaRegMessage } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import Dashboard from '../Dashboard/Dashboard';

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing auth state)
    navigate('/');
  };
  return (
    <div className='font-Popins flex flex-col h-screen'>
      {/* Fixed Header */}
      <div className='flex-none flex justify-between items-center p-4 bg-white shadow-sm'>
        <div className='flex items-center gap-3 text-[#00AC06]'>
          <span className='text-[5vmax]'><FaMoneyBillTransfer /></span>
          <h1 className='font-bold text-[2vmax] sm:text-[3vmax]'>Borrow2Buddy</h1>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <p className='font-normal text-[2vmax]'>Dikshant</p>
          <div className='h-15 w-15 rounded-full bg-zinc-400'></div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className='flex flex-1 overflow-hidden'>
        {/* Fixed Sidebar */}
        <div className='flex-none w-64 bg-gray-50 flex flex-col justify-between py-10 text-left'>
          <div className='flex flex-col gap-2 text-[1.5vmax]'>
            <Link className='bg-[#00AC06] px-6 py-2 rounded-2xl text-white'><MdOutlineDashboardCustomize className='inline' /> Dashboard</Link>
            <Link className='px-6 py-2 rounded-2xl hover:bg-gray-200'><MdOutlineRequestPage className='inline' /> Requests</Link>
            <Link className='px-6 py-2 rounded-2xl hover:bg-gray-200'><FiPocket className='inline' /> Borrow</Link>
            <Link className='px-6 py-2 rounded-2xl hover:bg-gray-200'><GrTransaction className='inline' /> Transactions</Link>
            <Link className='px-6 py-2 rounded-2xl hover:bg-gray-200'><FaRegMessage className='inline' /> Messages</Link>
          </div>
          <div>
            <button 
              onClick={handleLogout}
              className='text-[1.2vmax] mx-4 hover:cursor-pointer hover:scale-110 hover:text-[#00AC06] duration-300'
            >
              <TbLogout2 className='inline' /> Logout
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className='flex-1 overflow-y-auto py-10 px-10'>
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default Layout
import React, { useState } from 'react';
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { MdOutlineDashboardCustomize, MdOutlineRequestPage } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FiPocket } from "react-icons/fi";
import { FaRegMessage } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import Dashboard from '../Dashboard/Dashboard';
import Messages from '../Messages/Messages';
import Requests from '../Lend & Borrow/Requests';
import Borrow from '../Lend & Borrow/Borrow';
import Transactions from '../Transactions/Transactions';


const Layout = () => {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState(<Dashboard />);
  const [active, setActive] = useState('dashboard')

  const handleNavClick = (component) => {
    switch(component) {
      case 'dashboard':
        setActiveComponent(<Dashboard />);
        setActive('dashboard')
        break;
      case 'requests':
        setActiveComponent(<Requests />);
        setActive('requests')
        break;
      case 'borrow':
        setActiveComponent(<Borrow />);
        setActive('borrow')
        break;
      case 'Transactions':
        setActiveComponent(<Transactions />);
        setActive('Transactions')
        break;
      case 'messages':
        setActiveComponent(<Messages />);
        setActive('messages')
        break;
      default:
        setActiveComponent(<Dashboard />);

    }
  };
  

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
        {/* Collapsible Sidebar */}
        <div className='group flex-none w-20 hover:w-64 bg-gray-50 flex flex-col justify-between py-10 transition-all duration-300 ease-in-out overflow-hidden'>
          <div className='flex flex-col gap-4 px-2'>
            <button 
              onClick={() => handleNavClick('dashboard')}
              className={`${(active == 'dashboard')&& 'bg-[#00AC06]/80 && text-white'} hover:cursor-pointer p-3 rounded-2xl flex items-center gap-3`}
            >
              <MdOutlineDashboardCustomize className='text-[1.5vmax] min-w-[1.5vmax]' />
              <span className='text-[1.5vmax] opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Dashboard</span>
            </button>
            <button 
              onClick={() => handleNavClick('requests')}
              className={`${(active == 'requests')&& 'bg-[#00AC06]/80  && text-white'} hover:cursor-pointer p-3 rounded-2xl flex items-center gap-3`}
            >
              <MdOutlineRequestPage className='text-[1.5vmax] min-w-[1.5vmax]' />
              <span className='text-[1.5vmax] opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Requests</span>
            </button>
            <button 
              onClick={() => handleNavClick('borrow')}
              className={`${(active == 'borrow')&& 'bg-[#00AC06]/80  && text-white'} hover:cursor-pointer p-3 rounded-2xl flex items-center gap-3 duration-300`}
            >
              <FiPocket className='text-[1.5vmax] min-w-[1.5vmax]' />
              <span className='text-[1.5vmax] opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Borrow</span>
            </button>
            <button 
              onClick={() => handleNavClick('Transactions')}
              className={`${(active == 'Transactions')&& 'bg-[#00AC06]/80  && text-white'} hover:cursor-pointer p-3 rounded-2xl flex items-center gap-3 duration-300`}
            >
              <GrTransaction className='text-[1.5vmax] min-w-[1.5vmax]' />
              <span className='text-[1.5vmax] opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Transactions</span>
            </button>
            <button 
              onClick={() => handleNavClick('messages')}
              className={`${(active == 'messages')&& 'bg-[#00AC06]/80  && text-white'} hover:cursor-pointer p-3 rounded-2xl flex items-center gap-3 duration-300`}
            >
              <FaRegMessage className='text-[1.5vmax] min-w-[1.5vmax]' />
              <span className='text-[1.5vmax] opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Messages</span>
            </button>
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
          {activeComponent}
        </div>
      </div>
    </div>
  )
}

export default Layout
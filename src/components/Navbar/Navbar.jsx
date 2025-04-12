import React from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { Router, Link, NavLink  } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <>
        <div className='flex justify-between items-center font-Popins p-4'>
            <div className='flex items-center gap-3 text-[#00AC06]'>
                <span className='text-[5vmax] '><FaMoneyBillTransfer /></span>
                <h1 className='font-bold text-[2vmax] sm:text-[3vmax] '>Borrow2Buddy</h1>
            </div>
            <div className='flex gap-4'>
                <Link to={'/Login'} className='bg-[#00AC06] text-[1.3vmax] text-white px-5 py-2 rounded-lg hover:cursor-pointer hover:scale-110 duration-200'>Log in</Link>
                <Link to={'/SignUp'} className='text-[1.2vmax] px-5 py-2 rounded-lg hover:cursor-pointer hover:scale-110 duration-200'>Sign up</Link>
            </div>
        </div>
    </>
  )
}

export default Navbar
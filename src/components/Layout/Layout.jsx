import React from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <div className='flex justify-between items-center font-Popins p-4'>
            <div className='flex items-center gap-3 text-[#00AC06]'>
                <span className='text-[5vmax] '><FaMoneyBillTransfer /></span>
                <h1 className='font-bold text-[2vmax] sm:text-[3vmax] '>Borrow2Buddy</h1>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <p className='font-normal text-[2vmax]'>Dikshant</p>
                <div className='h-15 w-15 rounded-full bg-zinc-400'></div>
            </div>
        </div>

        <div className=' py-15'>
            <div className='flex text-white justify-self-center text-[1.8vmax]'>
                <Link className='bg-[#00AC06]/80 rounded-3xl px-7 py-3'>Dashboard</Link>
                <Link>Requests</Link>
                <Link>Requests</Link>
            </div>
            <div className='col-span-4 row-span-4 bg-red-600'>

            </div>
        </div>
    </div>
  )
}

export default Layout
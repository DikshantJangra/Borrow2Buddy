import React from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import {Link  } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='p-4'>
        <div className='flex justify-between items-center font-Popins'>
            <div className='flex items-center gap-3 text-[#00AC06]'>
                <span className='text-[5vmax] '><FaMoneyBillTransfer /></span>
                <h1 className='font-bold text-[2vmax] sm:text-[3vmax] '>Borrow2Buddy</h1>
            </div>
        </div>

        <p className='py-10'>The page you're looking for does not exist, head back to <Link className='text-blue-600 underline' to={'/'}>Homepage</Link></p>
    </div>
  )
}

export default PageNotFound
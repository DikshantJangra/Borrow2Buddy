import React from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='h-100 font-Popins flex gap-15  w-full bg-[#00AC06]/50'>
        <div className='h-full w-1/3 bg-no-repeat bg-center bg-[url(/src/assets/footerImg.png)]'></div>
        <div>
            <div className='flex items-center gap-3 text-[#00AC06]'>
                <span className='text-[5vmax] '><FaMoneyBillTransfer /></span>
                <h1 className='font-bold text-[2vmax] sm:text-[3vmax] '>Borrow2Buddy</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer
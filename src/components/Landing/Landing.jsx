import React from 'react'
import Navbar from '../Navbar/Navbar';
import { GiTakeMyMoney } from "react-icons/gi";
import { FaLongArrowAltRight } from "react-icons/fa";


const Landing = () => {
  return (
    <>
    <Navbar />
    <div className='flex flex-col items-center text-center pt-50'>
        <p className='font-bold text-[4vmax] leading-none'>Your buddy ain’t your buddy <br />if you don’t borrow <GiTakeMyMoney className='inline text-[#00AC06] text-[4.5vmax]' /> from your buddy!</p>
        <p className='pt-5 text-[#00AC06] text-[1.5vmax]'>"Lend or Borrow Instantly – No Paperwork, Just Trust!"</p>

        <div className='flex gap-5 pt-5'>
            <button className='px-5 py-2 border-[#00AC06] rounded-lg border-1 text-lg hover:cursor-pointer hover:scale-110 duration-200'>Lend</button>
            <button className='px-5 py-2 rounded-lg text-white text-lg bg-[#0084FF] hover:cursor-pointer  hover:scale-110 duration-200'>Borrow</button>
        </div>
    </div>
    <p className='opacity-50 text-center pt-80'>Explore <FaLongArrowAltRight className='text-lg inline opacity-50' /></p>
    </>
  )
}

export default Landing
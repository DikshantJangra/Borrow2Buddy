import React from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { AiOutlineUserSwitch, AiOutlineLock } from "react-icons/ai";
import { BiRename } from "react-icons/bi";
import { CgRename } from "react-icons/cg";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';


const SignUp = () => {
  return (
    <>
        {/* Parent Div */}
        <div className='h-screen w-full bg-black/90 flex justify-center items-center'>
            {/* Login form page */}
            <div className='sm:h-160 h-130 w-90 sm:w-120 bg-white/8 font-Popins mb-20 rounded-2xl text-white p-5'>
                <div className='flex flex-col items-center justify-center'>
                    <span className='text-[5vmax] text-[#00AC06]'><FaMoneyBillTransfer /></span>
                    <h1 className='text-center font-bold text-[3vmax] leading-none text-[#00AC06]'>Borrow2Buddy</h1>
                </div>
                {/* Inputs and buttons */}
                <div className='flex flex-col justify-center items-center gap-3 h-full'>
                    <div className='flex items-center gap-2 w-75 bg-white/10 px-4 py-2 required rounded-lg'><span className='opacity-50 text-lg'><BiRename /></span><input className='focus:outline-none' type="text" placeholder='Name' /></div>
                    <div className='flex items-center gap-2 w-75 bg-white/10 px-4 py-2 required rounded-lg'><span className='opacity-50 text-lg'><AiOutlineUserSwitch /></span><input className='focus:outline-none' type="text" placeholder='Username' /></div>
                    <div className='flex items-center gap-2 w-75 bg-white/10 px-4 py-2 required rounded-lg'><span className='opacity-50 text-lg'><MdOutlineMail /></span><input className='focus:outline-none' type="email" placeholder='Email' /></div>
                    <div className='flex items-center gap-2 w-75 bg-white/10 px-4 py-2 required rounded-lg'><span className='opacity-50 text-lg'><AiOutlineLock /></span><input className='focus:outline-none' type="password" placeholder='New Password' /></div>
                    <div className='pt-15 pb-2'>
                        {/* Buttons */}
                        <button className='bg-[#00AC06] px-4 py-2 rounded-lg mr-3 cursor-pointer'>Sign up</button>
                        <button className='bg-black px-4 py-2 rounded-lg cursor-pointer'><img className='inline' src="/GoogleIco.png" alt="Google Icon" />  Sign up with Google</button>
                    </div>

                    <p>Already a user? <Link to={'/Login'}> Log in</Link></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp
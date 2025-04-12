import React from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { AiOutlineUserSwitch, AiOutlineLock } from "react-icons/ai";

const LoginSignup = () => {
  return (
    <>
        {/* Parent Div */}
        <div className='h-screen w-full bg-black flex justify-center items-center'>
            {/* Login form page */}
            <div className='sm:h-150 h-130 w-90 sm:w-120 bg-white/8 font-Popins mb-20 rounded-2xl text-white p-5'>
                <div className='flex flex-col items-center justify-center'>
                    <span className='text-[5vmax] text-[#51902D]'><FaMoneyBillTransfer /></span>
                    <h1 className='text-center font-bold text-[3vmax] leading-none text-[#51902D]'>Borrow2Buddy</h1>
                </div>
                {/* Inputs and buttons */}
                <div className='flex flex-col justify-center items-center gap-3 h-full'>
                    <div className='flex items-center gap-2 w-75 bg-white/10 px-4 py-2 required rounded-lg'><span className='opacity-50 text-lg'><AiOutlineUserSwitch /></span><input className='focus:outline-none' type="text" placeholder='Username' /></div>
                    <div className='flex items-center gap-2 w-75 bg-white/10 px-4 py-2 required rounded-lg'><span className='opacity-50 text-lg'><AiOutlineLock /></span><input className='focus:outline-none' type="password" placeholder='Password' /></div>
                    <div className='pt-15 pb-2'>
                        {/* Buttons */}
                        <button className='bg-[#51902D] px-4 py-2 rounded-lg mr-3 cursor-pointer'>Log in</button>
                        <button className='bg-black px-4 py-2 rounded-lg cursor-pointer'><img className='inline' src="/src/assets/GoogleIco.png" alt="Google Icon" />  Sign in with Google</button>
                    </div>

                    <p>Not a user? <a href="#"> Sign up</a></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginSignup
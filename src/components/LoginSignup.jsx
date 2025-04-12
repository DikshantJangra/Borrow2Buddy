import React from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";

const LoginSignup = () => {
  return (
    <>
        {/* Parent Div */}
        <div className='h-screen w-full bg-black flex justify-center items-center'>
            {/* Login form page */}
            <div className='h-150 w-120 bg-white/8 font-Popins mb-20 rounded-2xl text-white p-5'>
                <div className='flex flex-col items-center justify-center'>
                    <span className='text-[5vmax] text-[#51902D]'><FaMoneyBillTransfer /></span>
                    <h1 className='text-center font-bold text-[3vmax] leading-none text-[#51902D]'>Borrow2Buddy</h1>
                </div>
                {/* Inputs and buttons */}
                <div className='flex flex-col justify-center items-center gap-3 h-full'>
                    <div className='w-70 bg-white/10 px-4 py-2 rounded-lg'><input className='focus:outline-none' type="text" placeholder='Username' /></div>
                    <div className='w-70 bg-white/10 px-4 py-2 rounded-lg'><input className='focus:outline-none' type="password" placeholder='Password' /></div>
                    <div className='pt-15 pb-2'>
                        {/* Buttons */}
                        <button className='bg-[#51902D] px-4 py-2 rounded-lg mr-3'>Log in</button>
                        <button className='bg-black px-4 py-2 rounded-lg'><img className='inline' src="/src/assets/GoogleIco.png" alt="Google Icon" />  Sign in with Google</button>
                    </div>

                    <p>Not a user? <a href="#"> Sign up</a></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginSignup
import React from 'react'

const LoginSignup = () => {
  return (
    <>
        <div className='h-screen w-full bg-black flex justify-center items-center'>
            <div className='h-160 w-120 bg-white/8 font-Popins mb-20 rounded-2xl text-white p-5'>
                <h1 className='text-center font-bold text-[3vmax] leading-none text-[#51902D]'>Borrow2Buddy</h1>
                
                <div className='flex flex-col justify-center items-center gap-3 h-1/2'>
                    <div className='w-70 bg-white/10 px-4 py-2 rounded-lg'><input className='focus:outline-none' type="text" placeholder='Username' /></div>
                    <div className='w-70 bg-white/10 px-4 py-2 rounded-lg'><input className='focus:outline-none' type="password" placeholder='Password' /></div>
                    <div>
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
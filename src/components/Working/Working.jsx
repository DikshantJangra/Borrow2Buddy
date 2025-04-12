import React from 'react'

const Working = () => {
  return (
    <div className='h-screen py-15 px-20 font-Popins'>
        <p className='text-center text-[4vmax] font-bold'>How it works?</p>

        <p className='text-[#0084FF] font-bold text-[2.5vmax] uppercase'>It's Simple</p>
        <div className=''>
            <div className='flex'>
                <img src="/src/assets/react-icons/AiOutlineUserSwitch.png" alt="User Sending money" />
                <div className='text-[#0084FF] font-semibold text-[2.5vmax] leading-10 pt-4'>
                    <p>You got extra money?</p>
                    <p>You lend it to earn more money</p>
                    <p className='text-black text-lg text-right pt-10 underline hover:cursor-pointer'>View More</p>
                </div>
            </div>
            
            <div className='pt-35'>
                <p className='text-[#00AC06] font-bold text-right text-[2.5vmax] uppercase'>& Secure</p>
                <div className='flex justify-end text-left'>
                    <div className='text-[#00AC06] font-semibold text-[2.5vmax] leading-10 pt-4'>
                        <p>You got extra money?</p>
                        <p>You lend it to earn more money</p>
                        <p className='text-black text-lg text-right pt-10 underline hover:cursor-pointer'>View More</p>
                    </div>
                    <img src="/src/assets/react-icons/AiOutlineUserSwitchGreen.png" alt="User Sending money" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Working
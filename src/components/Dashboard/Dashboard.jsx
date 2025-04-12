import React from 'react'


const Dashboard = () => {
  return (
    <div className='h-screen grid grid-cols-4 font-Popins'>
        <div className='px-5 py-10 h-full bg-[#EBEBEB]'>
            <div className='h-25 rounded-full bg-zinc-300 w-25'></div>
            <p className='text-[2vmax] py-4 leading-none font-semibold'>User</p>

            
        </div>
        <div className='h-full p-7 col-span-3'>
            <div className='flex justify-between items-start'>
                <p className='text-[5vmax]'>Dashboard</p>
                <button to={'/Login'} className='bg-[#249100] text-[1.3vmax] text-white px-5 py-2 rounded-lg hover:cursor-pointer hover:scale-110 duration-200'>Logout</button>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default Dashboard
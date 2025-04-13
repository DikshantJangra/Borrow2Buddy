import React from 'react'


const Dashboard = () => {
  return (
  <>
  <div>
    <p>User: Dikshant Jangra</p>
  </div>
  <div className='flex gap-15'>
    <div>
      <p className='text-2xl text-zinc-500'>Payable</p>
      <p className='text-4xl'>INR 1,600</p>
    </div>
    <div>
      <p className='text-2xl text-zinc-500'>Receivable</p>
      <p className='text-4xl'>INR 2,600</p>
    </div>
  </div>
  </>
  )
}

export default Dashboard
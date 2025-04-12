import React from 'react'
import { MdVerified } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsTransparency } from "react-icons/bs";
import { RiEmotionLaughFill } from "react-icons/ri";

const WhyBorrow2Buddy = () => {
    const whyus  = [
        {icon:MdVerified, why:'Certified',us:'Available certificates of authenticity!'},
        {icon:VscWorkspaceTrusted, why:'Secure',us:'Secure payments with utmost security!'},
        {icon:RiEmotionLaughFill, why:'Trusted',us:'"Buddy" feels personal and trustworthy!'},
        {icon:BsTransparency, why:'Transparent',us:'Totally transparent with no hidden charges!'},
    ]
  return (
    <div className='my-30 font-Popins'>
        <p className='font-bold text-center text-[3vmax]'>Why Borrow2Buddy?</p>
        <div className='flex justify-center gap-10 sm:gap-30 py-20 flex-wrap'>
            {whyus.map((data, idx)=>{
                return(  
                <div key={idx}>
                    <div className='flex flex-col justify-center items-center gap-5 bg-white w-50'>
                        <data.icon className='text-[#00AC06] text-[6vmax]' />
                        <div className='text-center text-[#4C4C4C]'>
                            <p className='font-semibold text-[2vmax]'>{data.why}</p>
                            <p className='text-xs '>{data.us}</p>
                        </div>
                    </div>
                </div>
            )})}
        </div>
    </div>
  )
}

export default WhyBorrow2Buddy
import React, { useState } from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { AiOutlineUserSwitch, AiOutlineLock } from "react-icons/ai";
import { BiRename } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (value.trim()) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with sign-up logic
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
      {/* Parent Div */}
      <div className='h-screen w-full bg-black/90 flex justify-center items-center'>
        {/* Sign up form page */}
        <div className='sm:h-160 h-130 w-90 sm:w-120 bg-white/8 font-Popins mb-20 rounded-2xl text-white p-5'>
          <div className='flex flex-col items-center justify-center'>
            <span className='text-[5vmax] text-[#00AC06]'><FaMoneyBillTransfer /></span>
            <h1 className='text-center font-bold text-[3vmax] leading-none text-[#00AC06]'>Borrow2Buddy</h1>
          </div>
          {/* Inputs and buttons */}
          <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3 h-full'>
            <div className='w-75'>
              <div className='flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg'>
                <span className='opacity-50 text-lg'><BiRename /></span>
                <input
                  name="name"
                  className='focus:outline-none w-full bg-transparent'
                  type="text"
                  placeholder='Name'
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className='w-75'>
              <div className='flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg'>
                <span className='opacity-50 text-lg'><AiOutlineUserSwitch /></span>
                <input
                  name="username"
                  className='focus:outline-none w-full bg-transparent'
                  type="text"
                  placeholder='Username'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
            </div>
            <div className='w-75'>
              <div className='flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg'>
                <span className='opacity-50 text-lg'><MdOutlineMail /></span>
                <input
                  name="email"
                  className='focus:outline-none w-full bg-transparent'
                  type="email"
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className='w-75'>
              <div className='flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg'>
                <span className='opacity-50 text-lg'><AiOutlineLock /></span>
                <input
                  name="password"
                  className='focus:outline-none w-full bg-transparent'
                  type="password"
                  placeholder='New Password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <div className='pt-15 pb-2'>
              {/* Buttons */}
              <button type="submit" className='bg-[#00AC06] px-4 py-2 rounded-lg mr-3 cursor-pointer'>Sign up</button>
              <button type="button" className='bg-black px-4 py-2 rounded-lg cursor-pointer'>
                <img className='inline' src="/src/assets/GoogleIco.png" alt="Google Icon" /> Sign up with Google
              </button>
            </div>
            <p>Already a user? <Link to={'/Login'}> Log in</Link></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp;

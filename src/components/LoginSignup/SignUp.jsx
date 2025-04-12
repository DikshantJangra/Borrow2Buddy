// import React, { useState, useEffect } from 'react';
// import { FaMoneyBillTransfer } from "react-icons/fa6";
// import { AiOutlineUserSwitch, AiOutlineLock } from "react-icons/ai";
// import { BiRename } from "react-icons/bi";
// import { MdOutlineMail } from "react-icons/md";
// import { Link } from 'react-router-dom';
// import { auth } from './firebase';
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithPopup,
//   GoogleAuthProvider
// } from 'firebase/auth';

// const googleProvider = new GoogleAuthProvider();
// googleProvider.setCustomParameters({ prompt: "select_account" });

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     username: '',
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (value.trim()) setErrors(prev => ({ ...prev, [name]: '' }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//       isValid = false;
//     }
//     if (!formData.username.trim()) {
//       newErrors.username = 'Username is required';
//       isValid = false;
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//       isValid = false;
//     }
//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required';
//       isValid = false;
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       try {
//         await createUserWithEmailAndPassword(auth, formData.email, formData.password);
//         console.log("User created successfully");
//       } catch (error) {
//         console.error("Sign-up error:", error.message);
//       }
//     }
//   };

//   const signUpWithGoogle = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       console.log("Google Sign-Up Successful");
//     } catch (error) {
//       console.error("Google Sign-Up Error:", error.message);
//     }
//   };

//   return (
//     <div className='h-screen w-full bg-black/90 flex justify-center items-center'>
//       <div className='sm:h-160 h-130 w-90 sm:w-120 bg-white/8 font-Popins mb-20 rounded-2xl text-white p-5'>
//         <div className='flex flex-col items-center justify-center'>
//           <span className='text-[5vmax] text-[#00AC06]'><FaMoneyBillTransfer /></span>
//           <h1 className='text-center font-bold text-[3vmax] leading-none text-[#00AC06]'>Borrow2Buddy</h1>
//         </div>

//         <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3 h-full'>
//           {[
//             { icon: <BiRename />, name: "name", placeholder: "Name" },
//             { icon: <AiOutlineUserSwitch />, name: "username", placeholder: "Username" },
//             { icon: <MdOutlineMail />, name: "email", placeholder: "Email" },
//             { icon: <AiOutlineLock />, name: "password", placeholder: "Password", type: "password" }
//           ].map(({ icon, name, placeholder, type = "text" }) => (
//             <div className='w-75' key={name}>
//               <div className='flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg'>
//                 <span className='opacity-50 text-lg'>{icon}</span>
//                 <input
//                   name={name}
//                   type={type}
//                   placeholder={placeholder}
//                   value={formData[name]}
//                   onChange={handleChange}
//                   className='focus:outline-none w-full bg-transparent'
//                 />
//               </div>
//               {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
//             </div>
//           ))}

//           <div className='pt-5 pb-2'>
//             <button type="submit" className='bg-[#00AC06] px-4 py-2 rounded-lg mr-3'>Sign up</button>
//             <button type="button" className='bg-black px-4 py-2 rounded-lg' onClick={signUpWithGoogle}>
//               <img className='inline mr-2' src="/src/assets/GoogleIco.png" alt="Google Icon" /> Sign up with Google
//             </button>
//           </div>
//           <p>Already a user? <Link to={'/Login'}>Log in</Link></p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



import React, { useState, useEffect } from 'react';
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { AiOutlineUserSwitch, AiOutlineLock } from "react-icons/ai";
import { BiRename } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (value.trim()) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        console.log("User created successfully");
      } catch (error) {
        console.error("Sign-up error:", error.message);
      }
    }
  };

  const signUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("Google Sign-Up Successful");
    } catch (error) {
      console.error("Google Sign-Up Error:", error.message);
    }
  };

  return (
    <div className='h-screen w-full bg-black/90 flex justify-center items-center'>
      <div className='sm:h-160 h-130 w-90 sm:w-120 bg-white/8 font-Popins mb-20 rounded-2xl text-white p-5'>
        <div className='flex flex-col items-center justify-center'>
          <span className='text-[5vmax] text-[#00AC06]'><FaMoneyBillTransfer /></span>
          <h1 className='text-center font-bold text-[3vmax] leading-none text-[#00AC06]'>Borrow2Buddy</h1>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3 h-full'>
          {[
            { icon: <BiRename />, name: "name", placeholder: "Name" },
            { icon: <AiOutlineUserSwitch />, name: "username", placeholder: "Username" },
            { icon: <MdOutlineMail />, name: "email", placeholder: "Email" },
            { icon: <AiOutlineLock />, name: "password", placeholder: "Password", type: "password" }
          ].map(({ icon, name, placeholder, type = "text" }) => (
            <div className='w-75' key={name}>
              <div className='flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg'>
                <span className='opacity-50 text-lg'>{icon}</span>
                <input
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  className='focus:outline-none w-full bg-transparent'
                />
              </div>
              {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
            </div>
          ))}

          <div className='pt-5 pb-2'>
            <button type="submit" className='bg-[#00AC06] px-4 py-2 rounded-lg mr-3'>Sign up</button>
            <button type="button" className='bg-black px-4 py-2 rounded-lg' onClick={signUpWithGoogle}>
              <img className='inline mr-2' src="/src/assets/GoogleIco.png" alt="Google Icon" /> Sign up with Google
            </button>
          </div>
          <p>Already a user? <Link to={'/Login'}>Log in</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

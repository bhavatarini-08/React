// import React from 'react'
// import { Link } from 'react-router-dom'

// const NavBar = () => {
//   return (
//     <div className='w-full h-[4rem] flex justify-center items-center bg-purple-500'>
//         <div className='w-[80%] h-full flex justify-center items-center flex-row'>
//             <div className='w-1/2 flex h-full justify-start items-center font-bold text-black'>Bhavatarini A S</div>
//             <div className='w-1/2 flex h-full justify-end items-center'>
//             <ul className='w-full list-none flex flex-row justify-center gap-6'>
//               <Link to={'/'}>
//               <li className='font-bold  text-black'>Home</li>
//               </Link>
//               <Link to={'/projects'}>
//               <li className='font-bold  text-black'>Projects</li> 
//               </Link>
//               <Link to={'/contact'}>
//               <li className='font-bold  text-black'>Contact</li>
//               </Link>
//             </ul>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default NavBar

import { User2 } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    const emailref = useRef(null)
    const passwordref = useRef(null)
   
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(emailref.current.value , passwordref.current.value)
    }

    const [visible, setvisible] = useState(false)
    return (
        <>
             <div className='w-full h-[4rem] flex justify-center items-center bg-purple-500'>
     <div className='w-[80%] h-full flex justify-center items-center flex-row'>
             <div className='w-1/2 flex h-full justify-start items-center font-bold text-black'>Bhavatarini A S</div>
             <div className='w-1/2 flex h-full justify-end items-center'>
             <ul className='w-full list-none flex flex-row justify-center gap-6'>
               <Link to={'/'}>
               <li className='font-bold  text-black'>Home</li>
               </Link>
               <Link to={'/projects'}>
               <li className='font-bold  text-black'>Projects</li> 
               </Link>
               <Link to={'/contact'}>
               <li className='font-bold  text-black'>Contact</li>
               </Link>
             </ul>

             </div>
     <User2 className='h-9 w-10 text-white rounded-full border-2 border-white hover:bg-white  hover:border-purple-500 hover:text-purple-500' onClick={() => setvisible(true)} />
         </div>
    </div>
            {
                visible && (
                    <>
                        <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
                            <div className=" h-[40%] w-[30%] bg-red z-50 flex flex-col  bg-white  shadow-lg ">
                                <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-white bg-purple-500 text-xl font-bold ">
                                    <div className="w-1/2">
                                        Login
                                    </div>
                                    <div className="w-1/2 flex justify-end">
                                        <Cross onClick={() => setvisible(!visible)} />
                                    </div>
                                </div>
                                <div className="w-full h-[85%] flex flex-row justify-center items-center">
                                    <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleLogin}>
                                        <input type="email" ref={emailref} name="" id="email" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required />
                                        <input type="password" ref={passwordref} name="" id="password" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required />
                                      
                                        <button type="submit" className="bg-green-500 p-3 text-white w-full rounded-sm text-lg font-bold">   Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </>
                )
            }
        </>
    )
}

export default Navbar
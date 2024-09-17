import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full h-[4rem] flex justify-center items-center bg-purple-500'>
        <div className='w-[80%] h-full flex justify-center items-center flex-row'>
            <div className='w-1/2 flex h-full justify-start items-center font-bold'>
            <div className='w-1/2 flex h-full justify-end items-center'>
            <ul className='w-full list-none flex flex-row justify-center gap-6'></ul>
            <li>Home</li>

<li>Projects</li>            </div></div>
        </div>
    </div>
  )
}

export default NavBar
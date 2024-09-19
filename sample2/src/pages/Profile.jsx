import React from 'react'
import NavBar from '../components/NavBar'
import Profilex from '../assets/img/profile.jpeg'
const Profile = () => {
  return (
    <>
    <NavBar/>
    <div className='bg-gray-100 h-screen p-4 flex flex-row justify-between items-center'>
        <div className='flex flex-col w-1/2 text-left p-6'>
          <div className='font-bold text-purple-500 text-5xl mb-4'>
            Hi, I am Bhavatarini A S
          </div>
          <div className='text-purple-500 font-semibold'>
            A passionate and detail-oriented individual with a keen interest in SQL, front-end development, and data analytical tools such as Power BI and Excel, I am eager to leverage my skills to drive data-driven decision-making and create user-friendly, dynamic interfaces. My goal is to blend analytical insights with intuitive design to deliver impactful solutions, streamline workflows, and enhance business intelligence for organizations.
          </div>
        </div>
        <div className='flex flex-col justify-center items-center w-1/2'>
          <img src={Profilex} alt="profile" className="rounded-full h-56 w-56" />
        </div>
      </div>

    </>
  )
  
}

export default Profile
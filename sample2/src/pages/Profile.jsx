import React from 'react'
import NavBar from '../components/NavBar'
import Profilex from '../assets/img/profile.jpeg'
import { Database, FileSpreadsheet } from 'lucide-react'
const Profile = () => {
  return (
    <>
    <NavBar/>
    <div className='bg-gray-100 h-screen p-4 flex flex-row justify-between items-center'>
        <div className='flex flex-col w-[55%] text-left p-6'>
          <div className='font-bold text-pink-600 text-6xl mb-4'>
            Hi, I am Bhavatarini A S
          </div>
          <div className='text-pink-600 font-semibold text-lg'>
            A passionate and detail-oriented individual with a keen interest in SQL, front-end development, and data analytical tools such as Power BI and Excel, I am eager to leverage my skills to drive data-driven decision-making and create user-friendly, dynamic interfaces. My goal is to blend analytical insights with intuitive design to deliver impactful solutions, streamline workflows, and enhance business intelligence for organizations.
          </div>
        </div>
        <div className='flex flex-col justify-center items-center w-1/2'>
          <img src={Profilex} alt="profile" className="rounded-full h-52 w-56" />
        </div>
      </div>
      {/* <div className='flex  justify-center items-center bg-gray-100'></div>
      <Database className='text-blue-800'/>
    <FileSpreadsheet className='text-green-700'></FileSpreadsheet>
     */}
    </>
  )
  
}

export default Profile
// import React from 'react';
// import NavBar from '../components/NavBar';
// import Profilex from '../assets/img/profile.jpeg';

// const Profile = () => {
//   return (
//     <>
//       <NavBar />
//       <div className='bg-gradient-to-r from-purple-500 to-blue-500 h-screen p-8 flex flex-row justify-between items-center'>
//         <div className='flex flex-col w-1/2 text-left p-8'>
//           <div className='font-bold text-white text-6xl mb-6'>
//             Hi, I am Bhavatarini A S
//           </div>
//           <div className='text-white font-medium text-lg leading-relaxed'>
//             A passionate and detail-oriented individual with a keen interest in SQL, front-end development, and data analytical tools such as Power BI and Excel. I am eager to leverage my skills to drive data-driven decision-making and create user-friendly, dynamic interfaces. My goal is to blend analytical insights with intuitive design to deliver impactful solutions, streamline workflows, and enhance business intelligence for organizations.
//           </div>
//         </div>
//         <div className='flex justify-center items-center w-1/2'>
//           <img src={Profilex} alt="profile" className="rounded-full h-64 w-64 shadow-lg border-4 border-white" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;


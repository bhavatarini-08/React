import React from 'react'

  import NavBar from '../components/NavBar'
const Projects = () => {
  return (
    <>
    <NavBar/>
     <div className=' flex justify-center items-center h-screen w-screen bg-black gap-6 p-5'>
      <div className='flex flex-col justify-center items-center bg-purple-500 h-[60%] w-[45%]  '>
        <div className='flex flex-col font-bold justify-center items-center h-[10%] w-[74%] text-black px-9 '>
          Gesture Recognition Using Machine Learning
        </div>
        <div className='flex flex-col justify-center items-center h-[25%] px-9'>Gesture recognition is a technology that allows users to interact with devices without touching them by using hand gestures to perform actions</div>
        <div className='flex flex-col justify-start items-start h-[25%] px-9 font-bold '>
          <ul>Technology Used 
            <li>Python</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-row bg-purple-500 h-[60%] w-[45%]'>
        
      </div>
     </div>
    </>
  )
}

export default Projects
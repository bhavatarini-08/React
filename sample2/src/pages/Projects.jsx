// import React from 'react'
// import AddComponent from "../components/AddComponent"
// import { getProjects } from "../services/api"
// import NavBar from '../components/NavBar'
// const Projects = () => {
//   return (
//     <>
    
    
//     <NavBar/>
    
//         <div className="w-full h-[10%] flex justify-center items-center">
//           <AddComponent/>
//                   </div>
     
//       <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
//         <div className="bg-purple-500 text-center text-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
//           <h2 className="text-xl font-bold mb-4">Gesture Recognition Using Machine Learning</h2>
//           <p className="mb-6">Gesture recognition is a technology that allows users to interact with devices without touching them by using hand gestures to perform actions.</p>
//           <p className="font-semibold">Technology Used</p>
//           <p className="font-bold">Python</p>
//         </div>
//         <div className="bg-purple-500 text-center text-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
//           <h2 className="text-xl font-bold mb-4">Student Access Application</h2>
//           <p className="mb-6">A student access app allows students to view academic information such as schedules, grades, and assignments, providing easy access to resources and communication tools </p>
//           <p className="font-semibold">Technology Used</p>
//           <p className="font-bold">Flutter</p>
//         </div>
//         <div className="bg-purple-500 text-center text-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
//           <h2 className="text-xl font-bold mb-4">Gesture Recognition Using Machine Learning</h2>
//           <p className="mb-6">YouTube summarizer project automates the extraction of key points from YouTube video content generating concise text summaries by analyzing transcripts or audio helping users quickly grasp essential information without watching the full video </p>
//           <p className="mb-6"></p>
//           <p className="font-semibold">Technology Used</p>
//           <p className="font-bold">Python</p>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Projects

import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard"
import { getProjects } from "../services/api"
import AddComponent from "../components/AddComponent"

const Projects = () => {
  const [projectdata, setProjectdata] = useState(null)
  const fetchprojects = async () => {
    // const {}
    try {
      const { data } = await getProjects()
      setProjectdata(data)
    } catch (error) {
      console.warn(error);

    }
  }
  console.log(projectdata)
  useEffect(() => {
    fetchprojects()
  }, [])
  if (!projectdata) {
    return "No data available";
  }
  return (
    <>
    <Navbar/>
      <div className="w-full h-full flex flex-row flex-wrap gap-8 justify-center items-center">
        <div className="w-full h-[10%] flex justify-center items-center">
          <AddComponent />
        </div>

        {
          projectdata.map((data, index) => (
            <ProjectCard title={data.title} desc={data.desc} key={index} pid={index} cover={data.coverimg} id={data.id} />
          ))
        }
      </div>
    </>
  )
}

export default Projects
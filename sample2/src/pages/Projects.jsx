import React from 'react'

import NavBar from '../components/NavBar'
const Projects = () => {
  return (
    <>
    <NavBar/>
     
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-purple-500 text-center text-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-bold mb-4">Gesture Recognition Using Machine Learning</h2>
          <p className="mb-6">Gesture recognition is a technology that allows users to interact with devices without touching them by using hand gestures to perform actions.</p>
          <p className="font-semibold">Technology Used</p>
          <p className="font-bold">Python</p>
        </div>
        <div className="bg-purple-500 text-center text-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-bold mb-4">Student Access Application</h2>
          <p className="mb-6">A student access app allows students to view academic information such as schedules, grades, and assignments, providing easy access to resources and communication tools </p>
          <p className="font-semibold">Technology Used</p>
          <p className="font-bold">Flutter</p>
        </div>
        <div className="bg-purple-500 text-center text-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-bold mb-4">Gesture Recognition Using Machine Learning</h2>
          <p className="mb-6">YouTube summarizer project automates the extraction of key points from YouTube video content generating concise text summaries by analyzing transcripts or audio helping users quickly grasp essential information without watching the full video </p>
          <p className="mb-6"></p>
          <p className="font-semibold">Technology Used</p>
          <p className="font-bold">Python</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Projects
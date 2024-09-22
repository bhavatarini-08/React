import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { FileText, Github, Linkedin } from 'lucide-react';


const Contact = () => {
  // const [visible, setVisible] = useState(false);

  return (
    <>
    <NavBar/>
      {/* {visible && (
        <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
          <div className="h-[40%] w-[30%] bg-red z-50 flex flex-col bg-white">
            
            <div className="w-full h-[20%] flex flex-row justify-center items-center border-2">
              Delete ?
            </div>
            <div className="w-full h-[60%] flex flex-row justify-center items-center">
              Are you sure?
            </div>
            <div className="w-full h-[20%] flex flex-row justify-center items-center">
              <button 
                onClick={() => setVisible(false)} 
                className="bg-red-500 p-3 text-white w-1/2 h-full rounded-sm">
                No
              </button>
              <button 
                onClick={() => setVisible(false)} 
                className="bg-green-500 p-3 text-white w-1/2 h-full rounded-sm">
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="h-[80vh] w-screen flex justify-center items-center -z-10">
        <button 
          onClick={() => setVisible(true)} 
          className="bg-red-500 p-3 text-white w-32 rounded-sm"
        >
          Delete
        </button>
      </div> */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gradient-to-b from-purple-500 to-purple-600 text-white rounded-xl shadow-xl p-10 max-w-sm w-full h-96 flex flex-col justify-between items-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Bhavatarini A S</h2>
          <p>
            <a href="mailto:bhavatariniselvan@gmail.com" className="underline hover:text-gray-300 transition">
              bhavatariniselvan@gmail.com
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center space-y-8 mt-6">
          <a
            href="https://www.linkedin.com/in/bhavatarini-selvan-62aaa1274/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300 transform hover:scale-110"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/bhavatarini-08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300 transform hover:scale-110"
          >
            <Github size={32} />
          </a>
          <a
            href="https://bhavatarini-08.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300 transform hover:scale-110 text-3xl"
          >
            <FileText size={32} />
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;

import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { FileText, Github, Linkedin } from 'lucide-react';


const Contact = () => {
  // const [visible, setVisible] = useState(false);

  return (
    <>
    <NavBar/>
      {visible && (
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
      </div>
         {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-purple-500 text-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Bhavatarini A S</h2>
        <p className="text-center mb-4">
          <a href="mailto:bhavatariniselvan@gmail.com" className="underline">
            bhavatariniselvan@gmail.com
          </a>
        </p>
        <div className="flex justify-around items-center space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/your-linkedin/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Github size={32} />
          </a>
          <a
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FileText size={32} />
          </a>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Contact;

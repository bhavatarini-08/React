import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'


const Contact = () => {
  const [visible, setVisible] = useState(false);

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
    </>
  );
};

export default Contact;

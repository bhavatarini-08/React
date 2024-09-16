// import React from 'react'

import NavBar from "./components/NavBar";

const App = () => {
  const Appname="Navigation"
  return (
    <>
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <NavBar appname={Appname}/>

    </div>

    <div className="h-screen w-screen bg-purple-600 flex justify-center items-center">
      <div className="h-3/4 w-1/4 bg-white rounded-lg flex justify-center items-center">
      <form action="" className="w-[80%] h-[80%] flex flex-col items-center justify-center gap-4">
      <h1 className="text-purple-600 text-xl p-2 font-bold">Registration Form</h1>
        <input type="text" name="" id="" placeholder="Name" className="p-3 outline-none active:outline-none focus:border-b-2 hover:border-purple-500 "/>
        <input type="number" name="" id="" placeholder="Age" className="p-3 outline-none active:outline-none focus:border-b-2 hover:border-purple-500 " />
        <input type="email" placeholder="Email" className="p-3 outline-none active:outline-none focus:border-b-2 hover:border-purple-500 " />
        <input type="password" name="" id="" placeholder="Password" className="p-3 outline-none active:outline-none focus:border-b-2 hover:border-purple-500 "/>
        <input type="submit" value="Register" className="bg-purple-600 text-white rounded-lg w-full p-3 hover:bg-green-500" />
        
        </form>
        </div>
        
    </div>



   </>
  )
}

export default App;
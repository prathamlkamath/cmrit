import React, { useState } from 'react'
import Chart from './Chart';
import Hi from './Hi';
import Camp from './Camp';

const Sidebar=({onOptionClick})=> {
   
    return (
        <div className="bg-gray-800 text-white h-full w-64 flex flex-col justify-between">
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
    <ul>
      <li className="mb-2 cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-lg" onClick={() => { onOptionClick('chart') }}>Chart</li>
      <li className="mb-2 cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-lg" onClick={() => { onOptionClick('hi') }}>Users</li>
      <li className="mb-2 cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-lg" onClick={() => { onOptionClick('camp') }}>Camp</li>
     
    </ul>
  </div>
</div>

    );
}


const  RightPanel=({selectedOption})=> {
    return (
      <div>
          {selectedOption==='chart'&& <div><Chart/></div> }
          {selectedOption==='hi'&& <div><Hi/></div> }
          {selectedOption==='camp'&& <div><Camp/></div> }
      </div>
    )
  }

function Adashboard() {
   const [selectedOption,setselectedOption]=useState('chart');

   const handleOnClick=(option)=>{
    setselectedOption(option)
   }
  return (
 

    <div className="flex h-screen">
      <Sidebar onOptionClick={handleOnClick} />
      <div className="flex flex-col flex-1">
        <div className="bg-gray-100 py-6 px-8">
          <h1 className="text-2xl font-bold text-gray-800">Welcome to the Admin Dashboard</h1>
        </div>
        <div className="flex-1 p-8">
          <RightPanel selectedOption={selectedOption}/>
        </div>
      </div>
    </div>
   
  )
}

export default Adashboard
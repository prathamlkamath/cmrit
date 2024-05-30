import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar=()=> {
   

    return (
        <div className="bg-gray-800 text-white h-full w-64 flex flex-col justify-between">
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
            <ul>
          <li className="mb-2">
            <Link to="/admin/chart" className="block py-2 px-4 rounded-lg hover:bg-gray-700">Chart</Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/hi" className="block py-2 px-4 rounded-lg hover:bg-gray-700">Hi</Link>
          </li>
          
           
        </ul>
        </div>
       
    </div>
    );
}

export default Sidebar;

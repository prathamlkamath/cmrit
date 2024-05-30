import { useState,useEffect } from "react";
import React from 'react'

function Hi() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
          try {
            const response = await fetch('http://localhost:5000/api/users');
            if (!response.ok) {
              throw new Error('Failed to fetch user list');
            }
            const data = await response.json();
            setUsers(data);
          } catch (error) {
            console.error('Error fetching user list:', error);
          }
        }
      
        fetchUsers();
      }, []);
      
  
    return (
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        <div className="grid grid-cols-3 gap-4">
          {users.map(user => (
            <div key={user._id} className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-lg font-semibold">Name: {user.name}</h2>
              <p className="text-gray-600">E-mail: {user.email}</p>

                {user.role==="admin"&&(
              <p className="text-gray-600">{user.role}</p>
                )}
             
            </div>
          ))}
        </div>
      </div>
    );
  
}

export default Hi
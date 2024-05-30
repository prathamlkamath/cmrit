import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Register from './Register';

function Login() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "", age: "" });
  const [message, setMessage] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault(); 
    // console.log('Form Data:', formData);
    try {
      const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        // window.alert(data.role)
        if(data.role === "admin"){
        
          window.location.href="/adminpanel"
          // console.log("admin "+data.role)
        }
        else{
          
          // console.log("normal"+data.role)
          window.location.href="/dashboard"
        }

        // window.alert(message,data.role)
          // You can redirect the user or perform any other actions upon successful login
         
      } else {
          setMessage(data.message);
      }
  } catch (error) {
      console.error('Error:', error);
      setMessage("An error occurred. Please try again later.");
  }
  };

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
        <div className="w-full max-w-md px-6">
          <div className="bg-white shadow-md rounded px-8 py-8 mb-4">
            <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>
            {message && <p className="text-red-500 mb-4">{message}</p>}
                        
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email"
                  
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
                  Sign In
                </button>
                <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                 New User
                </Link>
              </div>
            </form>
          </div>
          <p className="text-center text-gray-500 text-xs">
            &copy;2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

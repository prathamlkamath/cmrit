import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "user", age: "",location:"",blood:"",phone:"" });
  
const reg=async()=>{
   
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      
//   if (contentType && contentType.includes('application/json')) {
    
    const data = await response.json();
    console.log('Registration successful:', data.message);
    window.alert(data.message);
    setFormData({name:"",password:"",age:"",role:"",email:"",location:"",blood:"",phone:""});
    window.location.href='/login'
// } 
// else {
    
//     const text = await response.text();
//     console.log('Registration successful:', text);
//     setFormData({});
    
   
//   }
    } catch (error) {
      console.error('Error during registration:', error.message);
     
    }
}


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault(); 
    console.log('Form Data:', formData);
    reg();
  };

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
        <div className="w-full max-w-md px-6">
          <div className="bg-white shadow-md rounded px-8 py-8 mb-4">
            <h1 className="text-2xl font-semibold mb-6 text-center">Register</h1>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email"
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

              {/* Role bydefault consider it as Normal if it only admin we have to chnge it by ourself */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Age</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="age"
                  type="age"
                  name="age"
                  placeholder="age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Blood Group</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="blood"
                  type="text"
                  name="blood"
                  placeholder="Blood group"
                  value={formData.blood}
                  onChange={handleInputChange}
                />
                
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Phone</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="number"
                  name="phone"
                  placeholder="Contact number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                
              </div>
              
              <div className="mb-6">
              <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
                                <select
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    className="rounded-md border border-gray-300 p-2 focus:ring-1 focus:ring-blue-500 w-full"
                                >
                            <option value="">Select location...</option>
                            <option value="Bengaluru Urban">Bengaluru Urban</option>
                            <option value="Bengaluru Rural">Bengaluru Rural</option>
                            <option value="Bidar">Bidar</option>
                            <option value="Chikkamagaluru">Chikkamagaluru</option>
                            <option value="Dharwad">Dharwad</option>
                            <option value="Haveri">Haveri</option>
                            <option value="Mandya">Mandya</option>
                            <option value="Shivamogga">Shivamogga</option>
                            <option value="Vijayanagara">Vijayanagara</option>
                            <option value="Yadgiri">Yadgiri</option>
                            <option value="Ramanagara">Ramanagara</option>
                            <option value="Koppala">Koppala</option>
                            <option value="Hassan">Hassan</option>
                            <option value="Davanagere">Davanagere</option>
                            <option value="Chikkaballapura">Chikkaballapura</option>
                            <option value="Ballary">Ballary</option>
                            <option value="Bagalkote">Bagalkote</option>
                            <option value="Belagavi">Belagavi</option>
                            <option value="Chamarajanagara">Chamarajanagara</option>
                            <option value="Dakshina Kannada">Dakshina Kannada</option>
                            <option value="Kalaburagi">Kalaburagi</option>
                            <option value="Kolara">Kolara</option>
                            <option value="Raichur">Raichur</option>
                            <option value="Udupi">Udupi</option>
                            <option value="Uttara Kannada">Uttara Kannada</option>
                            <option value="Tumakuru">Tumakuru</option>
                            <option value="Mysuru">Mysuru</option>
                            <option value="Kodagu">Kodagu</option>
                            <option value="Gadag">Gadag</option>
                            <option value="Chitradurga">Chitradurga</option>
                            <option value="Vijayapura">Vijayapura</option>
                            {/* Add more options as needed */}
                        </select>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
                  Register
                </button>
                <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Login page
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

export default Register;

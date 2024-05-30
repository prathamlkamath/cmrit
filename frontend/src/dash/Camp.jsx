import React from 'react'
import { useState, useEffect } from 'react'

function Camp() {
    const [location, setLocation] = useState('');
    const [timing, setTiming] = useState('');
    const [date, setDate] = useState('');
    const [docname,setdocname]=useState('');
    const [desc,setdesc]=useState('');

    const [camps, setCamps] = useState([]);

    useEffect(() => {
        // Fetch data from server using fetch
        fetch('https://api.example.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });

            fetchCamps();
    }, []);

    const fetchCamps = async () => {
        try {
            const response = await fetch('http://localhost:5000/getcamp');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const campsData = await response.json();
            setCamps(campsData);
        } catch (error) {
            console.error('Error fetching camps:', error);
            // Handle error accordingly, e.g., set an error state
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(location, timing, date,docname,desc);

        const formData = {
            location: location,
            timing: timing,
            date: date,
            docname:docname,
            desc:desc
        };
        try {
            const response = await fetch('http://localhost:5000/addcamp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }

            const data = await response.json();


            if (data.error === 'Duplicate data found') {

                window.alert('Data already exists!');
            } else {
                window.alert('Data saved successfully!');
                fetchCamps();
            }
        } catch (error) {
            window.alert('Error saving data: ' + error.message);
            console.error('Error sending form data:', error);
        }

        // Clear the input fields
        setLocation('');
        setDate('');
        setTiming('');
        setdocname('');
        setdesc('');
    };


    const handleDeleteCamp = async (campId) => {
        try {
            const response = await fetch(`http://localhost:5000/deletecamp/${campId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                
                throw new Error('Network response was not ok');
            }

            // Remove the deleted camp from the camps state
            setCamps(prevCamps => prevCamps.filter(camp => camp.id !== campId));
            window.alert("Data deleted successfully!!");
            fetchCamps();
        } catch (error) {
            console.error('Error deleting camp:', error);
           
            // Handle error accordingly, e.g., show an error message
        }
    };
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col gap-4 mb-4">
                <h1 className="text-2xl font-bold">Add Camp</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">

                        <label htmlFor="location" className="text-sm font-medium">Location:</label>
                        <select
                            id="location"
                            name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="rounded-md border border-gray-300 p-2 focus:ring-1 focus:ring-blue-500"
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
                        <label htmlFor="Date" className="text-sm font-medium">Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}

                            className="rounded-md border border-gray-300 p-2 focus:ring-1 focus:ring-blue-500"
                        />
                        <label htmlFor="timing" className="text-sm font-medium">Timing:</label>
                        <input
                            type="text"
                            id="timing"
                            name="timing"
                            value={timing}
                            onChange={(e) => setTiming(e.target.value)}
                            className="rounded-md border border-gray-300 p-2 focus:ring-1 focus:ring-blue-500"
                        />
                        <label htmlFor="docname" className="text-sm font-medium">Doctor Name:</label>
                        <input
                            type="text"
                            id="docname"
                            name="docname"
                            value={docname}
                            onChange={(e) => setdocname(e.target.value)}
                            className="rounded-md border border-gray-300 p-2 focus:ring-1 focus:ring-blue-500"
                        />
                        <label htmlFor="desc" className="text-sm font-medium">Description about the camp: </label>
                        <input
                            type="text"
                            id="desc"
                            name="desc"
                            value={desc}
                            onChange={(e) => setdesc(e.target.value)}
                            className="rounded-md border border-gray-300 p-2 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">
                        Submit
                    </button>
                </form>
            </div>

            <div className="overflow-auto rounded-md border border-gray-300 p-4">
                <h2 className="text-xl font-bold mb-2">All Camps</h2>
                <ul>
                    {camps.map((camp) => (
                        <li key={camp._id} className="flex items-center justify-between p-2 border-b border-gray-200 hover:bg-gray-100">
                            <div className="flex-grow">
                                <h3 className="text-base font-medium">{camp.location}</h3>
                                <p className="text-sm text-gray-500">{camp.time}</p>
                            </div>
                            <div className="text-sm font-medium">{camp.date}</div>
                            <button onClick={() => handleDeleteCamp(camp._id)} className="mt-4 bg-red-500 hover:bg-red-700 m-2 ml-3 text-white font-medium py-2 px-4 rounded-md">Delete</button>
                        </li>
                    ))}
                </ul>
                {camps.length === 0 && <p className="text-center text-gray-500">No camps found.</p>}
            </div>
        </div>
    )
}

export default Camp
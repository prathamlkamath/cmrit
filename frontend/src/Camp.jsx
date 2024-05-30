import React from 'react'
import { useState, useEffect } from 'react'

function Camp() {
    const [location, setLocation] = useState('');
    const [timing, setTiming] = useState('');
    const [date, setDate] = useState('');
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
        console.log(location, timing, date);

        const formData = {
            location: location,
            timing: timing,
            date: date
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
                            {/* <button onClick={() => handleDeleteCamp(camp._id)} className="mt-4 bg-red-500 hover:bg-red-700 m-2 ml-3 text-white font-medium py-2 px-4 rounded-md">Delete</button> */}
                        </li>
                    ))}
                </ul>
                {camps.length === 0 && <p className="text-center text-gray-500">No camps found.</p>}
            </div>
        </div>
    )
}

export default Camp
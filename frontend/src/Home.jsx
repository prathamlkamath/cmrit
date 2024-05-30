import React from 'react'


function Home() {
  return (
    <>
    <div>
      <div className="bg-gray-900 text-white py-20 px-4 md:px-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to X to Infinity</h1>
        <p className="text-lg md:text-xl mb-8">Discover amazing features and services</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" ><a href="http://localhost:5173/login"> Get Started</a></button>
      </div>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex quis velit feugiat vestibulum.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
              <p>Vestibulum nec augue ac magna fringilla euismod. Nulla facilisi.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
              <p>Integer tempus magna et augue suscipit, eget fermentum libero viverra.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex quis velit feugiat vestibulum."</p>
              <p className="text-gray-600 mt-2">- John Doe</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <p>"Vestibulum nec augue ac magna fringilla euismod. Nulla facilisi."</p>
              <p className="text-gray-600 mt-2">- Jane Doe</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <p>"Integer tempus magna et augue suscipit, eget fermentum libero viverra."</p>
              <p className="text-gray-600 mt-2">- John Smith</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-300 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg md:text-xl mb-8">If you have any questions or inquiries, feel free to reach out to us.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Contact Us</button>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 X to Infinity. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Home
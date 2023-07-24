import React from 'react';

const Homepage = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-blue-800 mb-8">
            Welcome to Notes App
          </h1>
          <p className="text-center text-gray-600 text-lg mb-8">
            Store and organize your notes with ease. Access them anytime, anywhere.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage;
import React from 'react';
import {Link } from "react-router-dom"

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
            <Link to="/register" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-md">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      
      {/* Hero Section */}
      <section className="bg-blue-400 w-4/5 mx-auto py-20 rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-4xl font-bold mb-6">Organize your notes with ease</h2>
          <p className="text-white text-lg mb-8">Keep all your important notes in one place and access them anytime, anywhere.</p>
          <Link to="/login" className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold shadow-md">LogIn Now</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-blue-500 text-xl font-semibold mb-4">Note Taking</h3>
              <p>Quickly jot down your thoughts and ideas.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-blue-500 text-xl font-semibold mb-4">Organize</h3>
              <p>Organize your notes into categories or tags.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-blue-500 text-xl font-semibold mb-4">Access Anywhere</h3>
              <p>Access your notes on any device with an internet connection.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Homepage;
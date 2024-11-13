import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left Side: Image */}
      <div
        className="w-1/2 bg-cover bg-center h-full"
      >
        <img src="/practical.jpg" alt="" />
      </div>
      
      {/* Right Side: Signup/Login Card */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg text-center max-w-md w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our Platform</h1>
          <p className="text-gray-600 mb-8">Explore the features and get started by logging in or signing up.</p>
          
          <Link
            to="/login"
            className="block w-full bg-blue-500 text-white py-3 rounded-lg mb-4 text-lg font-semibold hover:bg-blue-600 transition duration-200"
          >
            Login
          </Link>
          
          <Link
            to="/signup"
            className="block w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-200"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

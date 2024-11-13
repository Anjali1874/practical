// src/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Initialize the navigate function

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', { username, password });
      alert(response.data.message);
      navigate('/');  // Navigate to the home page on successful signup
    } catch (error) {
      console.error('Error signing up:', error.response?.data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSignup} className="p-8 bg-white shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <center><a href="/signup" className='text-blue-500'>Already Registered? </a></center>
        <button
          type="submit"
          className="w-full m-2 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Sign Up
        </button>
        <center><a href="/" className='text-blue-500'>Back to home page</a></center>
      </form>
    </div>
  );
};

export default Signup;

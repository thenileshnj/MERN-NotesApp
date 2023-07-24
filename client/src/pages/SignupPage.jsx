import React from 'react';
import { useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/config";
import { getUser } from "../Redux/users/user.actions";

const SignupPage = () => {


  const nav = useNavigate()
  const [email,setEmail] =useState("")
  const [password,setPassword] =useState("")
  const [name,setName] =useState("")

  const handleSignup =async()=>{
      let data = await axios.post(BASE_URL+"/user/register",{
          name,email,password
      })
      let  {message,status} = data.data
      if(status==1){
          alert(message)
          nav("/login")
      }else{
          alert(message)
      }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-8">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              User Name
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="off"
            />
          </div>
          <div className="flex items-center justify-between">
            <div
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
              type="submit"
              onClick={handleSignup}
            >
              Sign Up
            </div>
            <a
              className="text-blue-500 hover:text-blue-600 font-semibold"
              href="/login"
            >
              Already have an account? Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

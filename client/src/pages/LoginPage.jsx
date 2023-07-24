import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getUser } from "../Redux/users/user.actions"

const LoginPage = () => {


  const nav = useNavigate()
    const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
    console.log(auth,token)
    if(auth){
        nav("/notes")
    }

    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const dispatch = useDispatch()

    const handleLogin =()=>{
      dispatch(getUser({email,password}))
    }



  return (
    loading? <><h1>Loading...</h1></>:
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
        <form>
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
              onClick={handleLogin}
            >
              Login
            </div>
            <a
              className="text-blue-500 hover:text-blue-600 font-semibold"
              href="#forgotpassword"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

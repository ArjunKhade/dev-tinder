import axios from "axios";
import React, { useState } from "react";
import { BASE_URL, LOGIN_URL } from "./api.config";

const Login = () => {

   const [email, setEmail]= useState('');
   const [password, setPassword]= useState('');

   const handleLogin = async () => {

   try {
     const res = await axios.post(LOGIN_URL,{ email, password
    })
    console.log(res);
    
   } catch (error) {
     console.log(error);
   }

   };


  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-100 shadow-lg w-96 rounded-lg overflow-hidden">
        <div className="card-body p-6">
          <h2 className="card-title text-center text-2xl font-bold mb-4">Login</h2>
          <label>
            <span className="text-sm font-medium">Email</span>
            <input
              type="text"
              placeholder="mail@site.com"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              className="input input-md border rounded-md p-2 w-full mt-1"
            />
          </label>
          <label className="mt-4">
            <span className="text-sm font-medium">Password</span>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              className="input input-md border rounded-md p-2 w-full mt-1"
            />
          </label>
          <button onClick={handleLogin} className="btn btn-primary w-full mt-6">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

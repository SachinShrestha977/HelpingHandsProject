import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  return (
    <div className="text-center mt-8">
      <h1 className="text-2xl font-semibold mb-4">Who are you?</h1>
      <button
        className="bg-blue text-white px-4 py-2 rounded mr-4 hover:bg-blue-600 focus:outline-none"
        onClick={() => {
          navigate("/employerLogin");
        }}
      >
        Employer
      </button>
      <button
        className="bg-blue text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        onClick={() => {
          navigate("/employeeLogin");
        }}
      >
        Employee
      </button>
    </div>

    // <div className="flex items-center justify-center h-screen">
    //   <div className="w-96 bg-white p-8 rounded shadow-md">
    //     <h2 className="text-2xl font-semibold mb-4">Login</h2>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="email"
    //         className="block text-gray-600 text-sm font-medium mb-2"
    //       >
    //         Email
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         className="w-full border rounded px-3 py-2 outline-none"
    //         placeholder="Enter your email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="password"
    //         className="block text-gray-600 text-sm font-medium mb-2"
    //       >
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         id="password"
    //         className="w-full border rounded px-3 py-2 outline-none"
    //         placeholder="Enter your password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <button
    //       className="w-full bg-blue text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
    //       onClick={handleLogin}
    //     >
    //       Login
    //     </button>
    //     <div className="mt-4 text-center">
    //       <a
    //         href="#"
    //         className="text-blue-500 text-sm"
    //         onClick={handleForgotPassword}
    //       >
    //         Forgot Password?
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;

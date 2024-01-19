import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeSignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleSignup = () => {
    // Perform your signup logic here
    console.log("Signing up with:", { fullName, email, password });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 bg-[#FAFAFA] p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Employee Sign Up</h2>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full border rounded px-3 py-2 outline-none"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded px-3 py-2 outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border rounded px-3 py-2 outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default EmployeeSignUp;

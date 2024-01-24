import axios from "axios";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Components/Navbar";
import { MyContext } from "../../ContextApi/MyContext";
import EmployerLogin from "./EmployerLogin";

const EmployerSignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      fullName: fullName,
      email: email,
      password: password,
    };
    console.log(formData);
    formData = { ...formData, role: "employer" };
    try {
      let result = await axios({
        url: "http://localhost:4000/employer",
        method: "POST",
        data: formData,
      });
      console.log(result);
      toast.success(
        "Registered!! Check mail for further verification process."
      );
      setRegistrationSuccess(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 bg-[#FAFAFA] p-8 rounded shadow-md">
        <ToastContainer />
        <h2 className="text-2xl font-semibold mb-4">Employer Sign Up</h2>
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
          onClick={handleSubmit}
          className="w-full bg-blue text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Sign Up
        </button>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default EmployerSignUp;

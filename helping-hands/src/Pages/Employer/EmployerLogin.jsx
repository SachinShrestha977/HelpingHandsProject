import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmployerLogin = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    let formData = {
      email: email,
      password: password,
      role: "employer",
    };
    setData(formData);

    try {
      let result = await axios({
        url: "http://localhost:4000/employer/login",
        method: "POST",
        data: formData,
      });
      // console.log(result.data.token);
      toast.success("Login Successful");

      navigate("/employerProfile");
      window.location.reload();

      console.log(result.data.token);

      localStorage.setItem("token", result.data.token);
    } catch (error) {
      toast.error("Email and password do not match");
    }
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log("Forgot password clicked");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 bg-white p-8 rounded shadow-md">
        <ToastContainer></ToastContainer>
        <h2 className="text-2xl font-semibold mb-4">Employer Login</h2>
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
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-blue-500 text-sm"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmployerLogin;

// // EmployerProfile.js

// import React from "react";

// const EmployerProfile = ({ name, email, onLogout }) => {
//   return (
//     <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
//       <div>
//         <p className="text-lg font-semibold">{name}</p>
//         <p className="text-sm">{email}</p>
//       </div>
//       <button
//         onClick={onLogout}
//         className="px-4 py-2 text-sm font-semibold bg-red-500 rounded-md"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default EmployerProfile;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const EmployerProfile = () => {
  let navigate = useNavigate();
  const [myProfile, setMyProfile] = useState(null); // Initialize as null

  const getProfile = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const result = await axios({
          url: "http://localhost:4000/employer/my-profile",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(result);
        setMyProfile(result.data.result);
      } catch (error) {
        console.log("Error fetching profile:", error);
        setMyProfile(null); // Set profile to null if there's an error
      }
    } else {
      console.log("not a valid token");
      setMyProfile(null); // Set profile to null if token is invalid
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/employerLogin");
    window.location.reload();
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      {myProfile ? (
        <div className="bg-[#FAFAFA] p-8 rounded-md shadow-md">
          <p className="text-xl font-semibold mb-4">Employer Profile</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Full Name:</p>
              <p className="font-semibold">{myProfile.fullName}</p>
            </div>
            <div>
              <p className="text-gray-600">Email:</p>
              <p className="font-semibold">{myProfile.email}</p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-600">Role:</p>
              <p className="font-semibold">{myProfile.role}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-red-500">
            Please Login First
          </h1>
        </div>
      )}
    </div>
  );
};

export default EmployerProfile;

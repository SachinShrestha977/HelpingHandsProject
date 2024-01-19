import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const EmployerVerifyEmail = () => {
  let [query] = useSearchParams();
  let token = query.get("token");
  console.log(token);

  let navigate = useNavigate();

  let verify = async () => {
    try {
      let result = await axios({
        url: "http://localhost:4000/employer/verify-email",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate(`/employerLogin`);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    verify();
  }, []);
  return <div>EmployerVerifyEmail</div>;
};

export default EmployerVerifyEmail;

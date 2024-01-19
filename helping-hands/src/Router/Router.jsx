import { Route, Routes, createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import CreateJob from "../Pages/CreateJob.jsx";
import MyJobs from "../Pages/MyJobs.jsx";
import Login from "../Pages/Login.jsx";
import SignUp from "../Pages/SignUp.jsx";
import EmployerLogin from "../Pages/EmployerLogin.jsx";
import EmployeeLogin from "../Pages/EmployeeLogin.jsx";
import EmployerSignUp from "../Pages/EmployerSignUp.jsx";
import EmployeeSignUp from "../Pages/EmployeeSignUp.jsx";
import VerifyEmail from "../Pages/VerifyEmail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "post-job",
        element: <CreateJob></CreateJob>,
      },
      {
        path: "my-job",
        element: <MyJobs></MyJobs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "employerLogin",
        element: <EmployerLogin></EmployerLogin>,
      },
      {
        path: "employeeLogin",
        element: <EmployeeLogin></EmployeeLogin>,
      },

      {
        path: "sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "employerSignUp",
        element: <EmployerSignUp></EmployerSignUp>,
      },
      {
        path: "employeeSignUp",
        element: <EmployeeSignUp></EmployeeSignUp>,
      },
      {
        path: "verify-email",
        element: <VerifyEmail></VerifyEmail>,
      },
    ],
  },
]);

export default router;

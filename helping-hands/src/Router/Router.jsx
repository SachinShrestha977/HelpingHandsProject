import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import About from "../Pages/About.jsx";
import CreateJob from "../Pages/CreateJob.jsx";
import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx";
import MyJobs from "../Pages/MyJobs.jsx";
import SignUp from "../Pages/SignUp.jsx";
import EmployeeLogin from "../Pages/Employee/EmployeeLogin.jsx";
import EmployerSignUp from "../Pages/Employer/EmployerSignUp.jsx";
import EmployeeSignUp from "../Pages/Employee/EmployeeSignUp.jsx";
import VerifyEmail from "../Pages/Employee/VerifyEmail.jsx";
import EmployerVerifyEmail from "../Pages/Employer/EmployerVerifyEmail.jsx";
import EmployerLogin from "../Pages/Employer/EmployerLogin.jsx";
import EmployerProfile from "../Pages/Employer/EmployerProfile.jsx";

const Router = createBrowserRouter([
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
        path: "employerProfile",
        element: <EmployerProfile></EmployerProfile>,
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
      {
        path: "employerVerify-email",
        element: <EmployerVerifyEmail></EmployerVerifyEmail>,
      },
    ],
  },
]);

export default Router;

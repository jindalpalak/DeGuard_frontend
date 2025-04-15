import { Navigate } from "react-router";
import Login from './../pages/login';
import ForgotPassword from './../components/ForgetPassword';
import Home from "../pages/Home";

export const routeData = (auth, userType) => {
  return [
    {
      path: "/",
      element: auth ? <Home/> : <Navigate to="/login" />
    },
    {
      path: "/user",
      element: auth ? <Home/> : <Navigate to="/login" />
    },
    {
      path: "/approval",
      element: auth ? <Home/> : <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: auth ? <Navigate to="/user" /> : <Login />,
    },
    {
      path: "/forgot-password",
      element: auth ? <Navigate to="/user" /> : <ForgotPassword />,
    },
    {
      path: "*", // Catch All Invalid Routes
      element: <>Not Found</>,
    },
  ];
};
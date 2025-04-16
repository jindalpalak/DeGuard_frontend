import { Navigate } from "react-router";
import Login from './../pages/login';
import ForgotPassword from './../components/ForgetPassword';
import Home from "../pages/Home";
import UserList from "../pages/UserList";
import UserEditFields from "../components/userEditFields";

const nestedRoutes = () => {
  return [
    {
      path: '/user',
      element: <UserList/>
    },
    {
      path: '/user/:id',
      element: <UserEditFields/>
    },
    {
      path: "approval",
      element: <>Approval</>
    }
  ]
}

export const routeData = (auth, userType) => {
  return [
    {
      path: "/",
      element: auth ? <Home/> : <Navigate to="/login" />,
      nestedRoutes: nestedRoutes()
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
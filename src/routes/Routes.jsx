import { Navigate } from "react-router";
import Login from './../pages/login';
import ForgotPassword from './../components/ForgetPassword';
import Home from "../pages/Home";
import UserList from "../pages/UserList";
import UserEditFields from "../components/userEditFields";
import NotFound from './../components/NotFoundPage';

const nestedRoutes = (allowedPaths = []) => {
  const allNested = [
    {
      path: '/user',
      element: <UserList />
    },
    {
      path: '/user/:id',
      element: <UserEditFields />
    },
    {
      path: '/approval',
      element: <>Approval</>
    }
  ];

  // Only include nested routes if their full path is allowed
  return allNested.filter(route => 
    allowedPaths.some(path => route.path.startsWith(path))
  );
};

export const routeData = (auth, services) => {
  const allowedPaths = services?.map(service => service.helpUrl) ?? [];
  
  return [
    {
      path: "/",
      element: auth ? <Home /> : <Navigate to="/login" />,
      nestedRoutes: nestedRoutes(allowedPaths),
    },
    {
      path: "/login",
      element: auth ? <Navigate to={`${allowedPaths[0] ?? "/"}`} /> : <Login />,
    },
    {
      path: "/forgot-password",
      element: auth ? <Navigate to={`${allowedPaths[0] ?? "/"}`} /> : <ForgotPassword />,
    },
    {
      path: "*", // Catch All Invalid Routes
      element: <NotFound/>,
    },
  ];
};
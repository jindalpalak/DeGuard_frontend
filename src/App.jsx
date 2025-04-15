import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { routeData } from "./routes/Routes";


const App = () => {
  const navigate = useNavigate();
  const {userDetail} = useSelector((state) => state?.user);
  const userRole = userDetail ? userDetail?.userType : "";
  const [routes, setRoutes] = useState(routeData(userDetail?.token, userRole));
  const location = useLocation();

  useEffect(() => {
    setRoutes(routeData(userDetail?.token, userRole));
    if (location.pathname === "/") {
      navigate("/user");
    }
    // eslint-disable-next-line
  }, [userDetail?.token, navigate]);

  return (
    <>
      <Routes>
        {routes?.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}></Route>
        ))}
        {/* Catch Invalid Routes */}
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </>
  );
};

export default App;
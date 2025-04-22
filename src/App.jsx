import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { routeData } from "./routes/Routes";
import { _logOut } from "./redux/action/user.action";
import { persistor } from "./redux/store";


const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {userDetail, loginTime} = useSelector((state) => state?.user);
  const {services, accessToken} = userDetail ?? {};
  const [routes, setRoutes] = useState(routeData(accessToken, services));

  useEffect(() => {
    setRoutes(routeData(accessToken, services));
    // eslint-disable-next-line
  }, [accessToken, navigate]);

  useEffect(() => {  
    if (loginTime) {
      const timeDiff = Date.now() - new Date(loginTime).getTime();
  
      const oneDay = 24 * 60 * 60 * 1000;
  
      if (timeDiff > oneDay) {
        dispatch(_logOut());
        persistor.purge();
        navigate("/login");
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Routes>
        {routes?.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.nestedRoutes &&
              route.nestedRoutes.map((nestedRoute, nestedIndex) => (
                <Route
                  key={nestedIndex}
                  path={nestedRoute.path}
                  element={nestedRoute.element}
                />
              ))
            }
          </Route>
        ))}
        {/* Catch Invalid Routes */}
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </>
  );
};

export default App;
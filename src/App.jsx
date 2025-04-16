import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { routeData } from "./routes/Routes";


const App = () => {
  const navigate = useNavigate();
  const {userDetail} = useSelector((state) => state?.user);
  const {services, accessToken} = userDetail ?? {};
  const [routes, setRoutes] = useState(routeData(accessToken, services));

  useEffect(() => {
    setRoutes(routeData(accessToken, services));
    // eslint-disable-next-line
  }, [accessToken, navigate]);

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
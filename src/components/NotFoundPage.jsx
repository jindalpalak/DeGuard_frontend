import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { _logOut } from "../redux/action/user.action";
import { useDispatch } from "react-redux";
import { persistor } from "../redux/store";
import { toast } from "react-toastify";

const NotFound = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoHome = async () => {
    try {
      dispatch(_logOut());
      persistor.purge();
      navigate("/login");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="not_found_wrapper">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not allow for you.</p>
      <p>You cannot access this page.</p>
      <Button theme={"Alert"} onClick={handleGoHome} label="Go to Login Page" />
    </div>
  );
};

export default NotFound;
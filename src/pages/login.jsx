import InputField from "../components/InputField";
import { Button } from "../components/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import { useDispatch } from "react-redux";
import { login } from "../redux/action/user.action";
import { loginService } from "../services/loginServices";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const logIn = async () => {
    setLoader(true);
    try {
      const res = await loginService.logIn(loginData);
      dispatch(login(res?.data?.result))
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <div className="login-wrapper">
        {loader && <Loader/>}
        <div className="container">
          <div className="top-container">
            <span className="logo"></span>
            <InputField
              label="Email"
              type="email"
              name="email"
              placeholder="Example@gmail.com"
              value={loginData?.email}
              onChange={onChange}
            />
            <PasswordInput
              label="Password"
              name="password"
              placeholder="********"
              value={loginData?.password}
              onChange={onChange}
            />
            <div className="login-footer">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <Button
              label="Login"
              onClick={() => logIn()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

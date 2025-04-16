
import { useState } from "react";
import InputField from "./InputField";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import PasswordInput from "./PasswordInput";

const ForgotPassword = () => {
  const [formData, setFormData] = useState(null);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value
    })
  }

  // const handleSubmit = async () => {
  //   if (!formData?.email) {
  //     toast?.error("Email is required!");
  //     return;
  //   } else if (formData?.confirmPassword !== formData?.password) {
  //     toast?.error("New Password and Confirm Password is not matched!");
  //     return;
  //   }
  //   setLoader(true);
  //   try {
  //     const payload = {
  //       email: formData?.email,
  //       confirmationCode: formData?.otp,
  //       newPassword: formData?.confirmPassword
  //     }
  //     const res = await authService.forgetPassword(payload);
  //     toast.success(res?.data?.message);
  //     navigate('/login');
  //   } catch (err) {
  //     toast.error(err?.message);
  //   } finally {
  //     setLoader(false);
  //   }
  // }

  // const resendOtp = async () => {
  //   setLoader(true);
  //   try {
  //     const payload = {
  //       email: formData?.email
  //     }
  //     const res = await authService.forgetPasswordOtp(payload);
  //     toast.success(res?.data?.message);
  //   } catch (err) {
  //     toast.error(err?.message);
  //   } finally {
  //     setLoader(false);
  //   }
  // }

  return (
    <>
      <div className="login-wrapper">
        {/* {loader && <Loader/>} */}
        <div className="container">
          <div className="top-container">
            <span className="logo"></span>
            <InputField
              label="Email"
              type="email"
              name="email"
              placeholder="Example@gmail.com"
              onChange={onChange}
            />
            <PasswordInput
              label="New Password"
              name="password"
              placeholder="New Password"
              onChange={onChange}
            />
            <PasswordInput
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={onChange}
            />
            <div className="otp_wapper">
              <InputField
                label="OTP"
                type="number"
                name="otp"
                placeholder="******"
                onChange={onChange}
              />
              <span
              // onClick={resendOtp}
              >Resend Otp</span>
            </div>
            <Button
              label="Confirm"
            // onClick={handleSubmit}
            />
            <div className="login-footer" style={{ display: "flex", justifyContent: "center" }}>
              <Link to="/login">Back to Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

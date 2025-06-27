import React, { useState } from "react";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlinePhone,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    otp: "",
  });
  const [useOtp, setUseOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (useOtp) {
      // Handle OTP verification here
      console.log("Verifying OTP:", formData.otp);
    } else {
      // Handle password login here
      console.log("Logging in with password", formData);
    }
  };

  const sendOtp = () => {
    if (!formData.identifier) {
      alert("Please enter phone or email to receive OTP.");
      return;
    }
    // Simulate sending OTP
    setOtpSent(true);
    console.log("OTP sent to:", formData.identifier);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-indigo-100 to-purple-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {useOtp ? "Login with OTP" : "Welcome Back"}
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Phone or Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Phone or Email
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
              <AiOutlinePhone className="text-gray-400 mr-2" />
              <input
                type="text"
                name="identifier"
                value={formData.identifier}
                onChange={handleChange}
                required
                placeholder="Enter phone or email"
                className="w-full bg-transparent focus:outline-none text-gray-800"
              />
            </div>
          </div>

          {!useOtp ? (
            // Password Login
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                <AiOutlineLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter password"
                  className="w-full bg-transparent focus:outline-none text-gray-800"
                />
              </div>
            </div>
          ) : (
            // OTP Login
            <>
              <button
                type="button"
                onClick={sendOtp}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-medium transition duration-200"
              >
                {otpSent ? "Resend OTP" : "Send OTP"}
              </button>

              {otpSent && (
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Enter OTP
                  </label>
                  <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                    <AiOutlineLock className="text-gray-400 mr-2" />
                    <input
                      type="text"
                      name="otp"
                      value={formData.otp}
                      onChange={handleChange}
                      required
                      placeholder="Enter OTP"
                      className="w-full bg-transparent focus:outline-none text-gray-800"
                    />
                  </div>
                </div>
              )}
            </>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition duration-200"
          >
            {useOtp ? "Verify & Login" : "Login"}
          </button>
        </form>

        {/* Toggle Login Method */}
        <button
          onClick={() => {
            setUseOtp(!useOtp);
            setOtpSent(false);
            setFormData({ identifier: "", password: "", otp: "" });
          }}
          className="mt-4 text-sm flex items-center justify-center text-indigo-600 hover:underline w-full"
        >
          {useOtp ? (
            <>
              <AiOutlineArrowLeft className="mr-1" /> Use Password Instead
            </>
          ) : (
            <>
              <AiOutlineArrowRight className="mr-1" /> Login with OTP
            </>
          )}
        </button>

        <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

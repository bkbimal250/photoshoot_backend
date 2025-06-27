import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock, AiOutlinePhone } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendOtp = () => {
    if (!formData.phone) {
      alert("Please enter your phone number to receive OTP");
      return;
    }
    // Simulate sending OTP
    setOtpSent(true);
    alert(`OTP sent to ${formData.phone}`);
  };

  const verifyOtp = () => {
    if (!formData.otp) {
      alert("Please enter the OTP");
      return;
    }
    // Simulate OTP verification
    setOtpVerified(true);
    alert("OTP verified!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpVerified) {
      alert("Please verify your phone number with OTP before registering.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Registration logic here
    console.log("Registering user", formData);
    alert("Registration successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-green-100 to-blue-200 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
              <AiOutlineMail className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email (optional)"
                className="w-full bg-transparent focus:outline-none text-gray-800"
              />
            </div>
          </div>

          {/* Phone & OTP */}
      {/* Phone & OTP Section */}
<div className="space-y-2">
  <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
    <AiOutlinePhone className="text-gray-400 mr-2" />
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      required={!otpVerified}
      disabled={otpVerified}
      placeholder="Phone Number"
      className="w-full bg-transparent focus:outline-none text-gray-800"
    />
    {!otpVerified && (
      <button
        type="button"
        onClick={sendOtp}
        className="ml-3 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg font-medium transition"
      >
        {otpSent ? "Resend OTP" : "Send OTP"}
      </button>
    )}
  </div>

  {otpSent && !otpVerified && (
    <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 mt-2">
      <AiOutlineLock className="text-gray-400 mr-2" />
      <input
        type="text"
        name="otp"
        value={formData.otp}
        onChange={handleChange}
        placeholder="Enter OTP"
        className="w-full bg-transparent focus:outline-none text-gray-800"
      />
      <button
        type="button"
        onClick={verifyOtp}
        className="ml-3 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg font-medium transition"
      >
        Verify OTP
      </button>
    </div>
  )}

  {otpVerified && (
    <p className="text-green-600 font-semibold text-sm mt-1">
      Phone number verified ✔️
    </p>
  )}
</div>


          {/* Password */}
          <div>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
              <AiOutlineLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Password"
                className="w-full bg-transparent focus:outline-none text-gray-800"
                minLength={6}
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
              <AiOutlineLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm Password"
                className="w-full bg-transparent focus:outline-none text-gray-800"
                minLength={6}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition duration-200"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500">OR</div>

        <button
          onClick={() => alert("Google Sign-In clicked!")}
          className="mt-6 w-full border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
          aria-label="Sign in with Google"
        >
          <FcGoogle size={24} />
          Sign up with Google
        </button>

        <p className="mt-6 text-sm text-center text-gray-500">
          Already have an account?{" "}
          <a href="#" className="text-green-600 hover:underline">
            Login here
          </a>
        </p>
      </div>


    </div>
  );
};

export default RegistrationPage;

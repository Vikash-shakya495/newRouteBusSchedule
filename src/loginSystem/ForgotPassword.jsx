import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey, faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  const [step, setStep] = useState("email"); // 'email', 'otp', 'new-password', 'success'
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRequestOTP = (e) => {
    e.preventDefault();
    console.log("Sending OTP to:", email);
    setStep("otp");
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    console.log("Verifying OTP for:", email, "OTP:", otp);
    setStep("new-password");
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      console.log("Resetting password for:", email, "New Password:", newPassword);
      setStep("success");
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-16 rounded-xl shadow-xl w-full max-w-md mx-auto text-center text-white">
        <h2 className="text-2xl font-semibold mb-6">
          {step === "success"
            ? "Password Reset Successful"
            : step === "new-password"
            ? "Set New Password"
            : step === "otp"
            ? "Verify OTP"
            : "Forgot Password"}
        </h2>
        <div>
          {step === "email" && (
            <form onSubmit={handleRequestOTP}>
              <div className="relative mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-10 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="relative w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg overflow-hidden focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 rounded-lg transition-transform duration-300 transform -translate-x-full hover:translate-x-0"></span>
                <span className="relative z-10">Send OTP</span>
              </button>
              <div className="text-sm text-gray-400 mt-4">
                Remembered? <NavLink to="/login" className="text-blue-400 hover:underline">Back to Login</NavLink>
              </div>
            </form>
          )}

          {step === "otp" && (
            <form onSubmit={handleVerifyOTP}>
              <div className="relative mb-4">
                <FontAwesomeIcon icon={faKey} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter OTP"
                  maxLength="4"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-10 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="relative w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg overflow-hidden focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 rounded-lg transition-transform duration-300 transform -translate-x-full hover:translate-x-0"></span>
                <span className="relative z-10">Verify OTP</span>
              </button>
              <div className="text-sm text-gray-400 mt-4">
                <NavLink to="/forgot-password" className="text-blue-400 hover:underline">Back to Forgot Password</NavLink>
              </div>
            </form>
          )}

          {step === "new-password" && (
            <form onSubmit={handleResetPassword}>
              <div className="relative mb-4">
                <FontAwesomeIcon icon={faLock} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full px-10 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative mb-4">
                <FontAwesomeIcon icon={faLock} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-10 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="relative w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg overflow-hidden focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 rounded-lg transition-transform duration-300 transform -translate-x-full hover:translate-x-0"></span>
                <span className="relative z-10">Reset Password</span>
              </button>
              <div className="text-sm text-gray-400 mt-4">
                <NavLink to="/forgot-password" className="text-blue-400 hover:underline">Back to Forgot Password</NavLink>
              </div>
            </form>
          )}

          {step === "success" && (
            <div className="text-lg text-gray-100 mt-4">
              Your password has been reset successfully. <NavLink to="/login" className="text-blue-400 hover:underline">Login</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <h2 className={`text-3xl font-bold text-white transition-all duration-500 transform ${isSignup ? "scale-110" : "scale-100"}`}>
            {isSignup ? "Sign up with us" : "Welcome"}
          </h2>
        </div>
        <div className="flex justify-center mb-4 space-x-2">
          <button
            className={`py-2 px-4 rounded-l-lg transform transition-all duration-300 ${!isSignup ? 'bg-blue-600 text-white scale-110' : 'bg-gray-600 text-gray-400 scale-100'}`}
            onClick={() => setIsSignup(false)}
          >
            Login
          </button>
          <button
            className={`py-2 px-4 rounded-r-lg transform transition-all duration-300 ${isSignup ? 'bg-blue-600 text-white scale-110' : 'bg-gray-600 text-gray-400 scale-100'}`}
            onClick={() => setIsSignup(true)}
          >
            Signup
          </button>
        </div>
        <div>
          {!isSignup ? <LoginForm navigate={navigate} /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
}

const LoginForm = ({ navigate }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., validation, API call)
    // If login is successful:
    navigate('/home'); // Redirect to home page
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="flex flex-col">
        <input type="text" placeholder="Email Address" required className="p-3 rounded-lg border bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
      </div>
      <div className="flex flex-col">
        <input type="password" placeholder="Password" required className="p-3 rounded-lg border bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
      </div>
      <div className="text-right mb-4">
        <NavLink to="/forgot" className="text-blue-400 hover:underline">Forgot password?</NavLink>
      </div>
      <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Login
      </button>
    </form>
  );
};

const SignupForm = () => {
  return (
    <form className="space-y-4">
      <div className="flex flex-col">
        <input type="text" placeholder="Email Address" required className="p-3 rounded-lg border bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
      </div>
      <div className="flex flex-col">
        <input type="password" placeholder="Password" required className="p-3 rounded-lg border bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
      </div>
      <div className="flex flex-col">
        <input type="password" placeholder="Confirm password" required className="p-3 rounded-lg border bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
      </div>
      <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Signup
      </button>
    </form>
  );
};

export default Login;

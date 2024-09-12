import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showImage, setShowImage] = useState(true); // Control the image visibility

  const handleLogin = () => {
    setIsAnimating(true);
    setShowImage(false); // Hide the image initially
    setTimeout(() => {
      setIsLoggedIn(true); // Login happens after animation
      setShowImage(true); // Show image after 2 seconds
    }, 2000); // Duration of the animation (2 seconds)
  };

  const handleReturn = () => {
    setIsAnimating(true);
    setShowImage(false); // Hide image before returning to login
    setTimeout(() => {
      setIsLoggedIn(false); // Go back to the login form
      setIsAnimating(false); // Stop animation after return
      setShowImage(true); // Ensure image is back when form is visible
    }, 2000);
  };

  return (
    <div className="flex h-screen">
      {/* Left section: Form */}
      {!isLoggedIn && (
        <div
          className={`flex flex-col justify-start w-1/2 px-12 py-8 bg-white transition-opacity duration-1000 ${
            isAnimating ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="flex justify-between items-center mb-10">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/Screenshot 2024-09-09 at 12.57.01 PM.png"
                alt="Regions Mortgage Logo"
                className="h-10 w-10"
              />
              <div className="ml-3">
                <span className="block text-lg font-semibold text-gray-800">
                  REGIONS
                </span>
                <span className="block text-sm text-gray-500">Mortgage</span>
              </div>
            </div>

            {/* Navigation: Are you a new customer? */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600 ml-16">
                Are you a new customer?
              </p>
              <button className="px-4 py-2 ml-4 text-sm font-semibold text-green-600 border border-gray-300 rounded-full hover:bg-green-600 hover:text-white transition">
                Enroll Now
              </button>
            </div>
          </div>

          {/* Title */}
          <h1 className="flex justify-center text-4xl font-semibold text-gray-800">
            Welcome Back
          </h1>
          <p className="flex justify-center mt-2 text-gray-500">
            Sign in to your Regions MyMortgage account.
          </p>

          {/* Form */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Online ID"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <div className="mt-4">
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="absolute right-2 top-2 text-green-600">
                  Show
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>

            {/* Login button */}
            <button
              onClick={handleLogin}
              className="w-full mt-6 p-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Login
            </button>

            {/* Links */}
            <div className="flex justify-between mt-4 text-sm text-green-600">
              <a href="#">Forgot Online ID?</a>
              <a href="#">Forgot Password?</a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-xs text-gray-500 text-center">
            <p>© 2023 Regions Financial Corporation. All Rights Reserved.</p>
            <p>Equal Housing Lender · Member FDIC</p>
          </div>
        </div>
      )}

      {/* Right section: Image */}
      <div
        className={`w-1/2 transition-all duration-1000 ${
          showImage ? "w-full" : "w-1/2"
        }`}
      >
        {showImage ? (
          <img
            src="/Screenshot 2024-09-09 at 12.44.27 PM.png"
            alt="House"
            className="h-full w-full object-cover transition-all duration-1000"
          />
        ) : null}
        {isLoggedIn && (
          <button
            onClick={handleReturn}
            className="absolute bottom-8 right-8 px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default App;

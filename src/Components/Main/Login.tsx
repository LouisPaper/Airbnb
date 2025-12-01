import React, { useState, useEffect } from "react";

import facebook from "../../assets/icons/Facebook.svg";
import Google from "../../assets/icons/google.png";
import Apple from "../../assets/icons/apple.png";
import Email from "../../assets/icons/mails.png";

function Login() {
  const [visible, setVisible] = useState(false);

  // Show when URL hash is #login
  useEffect(() => {
    const checkHash = () => {
      if (typeof window !== 'undefined' && window.location.hash === '#login') {
        setVisible(true);
      }
    };
    
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  if (!visible) return null;

  const handleClose = () => {
    setVisible(false);
    if (typeof window !== 'undefined') {
      try {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      } catch {
        // ignore error
      }
    }
  };

  return (
    <div id="login" className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 py-4 overflow-y-auto">
      <div className="h-auto sm:h-[550px] md:h-[600px] w-full sm:w-[90%] md:w-[500px] mx-auto bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6">
        {/* Header */}
        <div className="flex border-b border-gray-300 pb-2 sm:pb-3 md:pb-4 mb-2 sm:mb-3 md:mb-4 justify-between items-center font-bold text-sm sm:text-base">
          <button onClick={handleClose} className="hover:opacity-70 transition text-lg sm:text-xl" aria-label="Close login">❌</button>
          <p>Log in or sign up</p>
          <div className="w-6 sm:w-7" />
        </div>

        {/* Welcome */}
        <div className="text-base sm:text-lg md:text-xl font-bold border-b border-gray-100 pb-2 sm:pb-3 md:pb-4 mb-3 sm:mb-4 md:mb-5">
          <p>Welcome to Airbnb</p>
        </div>

        {/* Form */}
        <input
          type="email"
          placeholder="Email"
          className="w-full h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl border-2 border-gray-300 mb-3 sm:mb-4 md:mb-5 px-3 text-xs sm:text-sm focus:outline-none focus:border-red-600 transition"
        />

        <button className="w-full h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-5 transition">
          Continue
        </button>

        {/* Social Buttons */}
        <button className="w-full h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl border-2 border-gray-300 mb-2 sm:mb-3 md:mb-4 flex items-center gap-2 sm:gap-3 px-2 sm:px-3 hover:bg-gray-50 transition text-xs sm:text-sm md:text-base">
          <img src={facebook} className="h-5 sm:h-6 md:h-7 flex-shrink-0" alt="facebook" />
          <p className="font-semibold hidden sm:inline">Continue with Facebook</p>
          <p className="sm:hidden font-semibold">Facebook</p>
        </button>

        <button className="w-full h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl border-2 border-gray-300 mb-2 sm:mb-3 md:mb-4 flex items-center gap-2 sm:gap-3 px-2 sm:px-3 hover:bg-gray-50 transition text-xs sm:text-sm md:text-base">
          <img src={Google} className="h-5 sm:h-6 md:h-7 flex-shrink-0" alt="google" />
          <p className="font-semibold hidden sm:inline">Continue with Google</p>
          <p className="sm:hidden font-semibold">Google</p>
        </button>

        <button className="w-full h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl border-2 border-gray-300 mb-2 sm:mb-3 md:mb-4 flex items-center gap-2 sm:gap-3 px-2 sm:px-3 hover:bg-gray-50 transition text-xs sm:text-sm md:text-base">
          <img src={Apple} className="h-5 sm:h-6 md:h-7 flex-shrink-0" alt="apple" />
          <p className="font-semibold hidden sm:inline">Continue with Apple</p>
          <p className="sm:hidden font-semibold">Apple</p>
        </button>

        <button className="w-full h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl border-2 border-gray-300 mb-2 sm:mb-3 md:mb-4 flex items-center gap-2 sm:gap-3 px-2 sm:px-3 hover:bg-gray-50 transition text-xs sm:text-sm md:text-base">
          <img src={Email} className="h-5 sm:h-6 md:h-7 flex-shrink-0" alt="email" />
          <p className="font-semibold hidden sm:inline">Continue with email</p>
          <p className="sm:hidden font-semibold">Email</p>
        </button>
      </div>
    </div>
  );
}

export default Login;
import React, { useState, useEffect } from 'react'

import facebook from "../../assets/icons/Facebook.svg"
import Google from "../../assets/icons/google.png"
import Apple from "../../assets/icons/apple.png"
import Email from "../../assets/icons/mails.png"
// import cancel from "../../assets/icons/Vector.png"

function Log2() {
  const [country, setCountry] = useState("NG");
  const [visible, setVisible] = useState(false);

  // Show when URL hash is #signup
  useEffect(() => {
    const checkHash = () => {
      if (typeof window !== 'undefined' && window.location.hash === '#signup') {
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
      } catch (e) {
        // ignore
      }
    }
  };

  return (
    <div id="signup" className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 py-4 overflow-y-auto'>
<p className='ml-4 md:ml-8 mt-4 md:mt-8 text-xs sm:text-sm md:text-base text-gray-700'>Log in or sign up</p>
{/* the box */}
    <div id="signup" className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 py-4 overflow-y-auto'>
<p className='ml-4 md:ml-8 mt-4 md:mt-8 text-xs sm:text-sm md:text-base text-gray-700'>Log in or sign up</p>
{/* the box */}
      <div className='h-auto sm:h-[800px] w-full sm:w-[90%] md:w-[500px] mx-auto mb-8 sm:mb-16 md:mb-32 bg-white rounded-lg sm:rounded-2xl shadow-lg'>
        <div className='mx-3 sm:mx-5 py-4 sm:py-6'>
{/* log text */}
<div className='flex border-b border-gray-300 my-2 sm:my-3 justify-between items-start'>
 <div className='flex gap-4 sm:gap-8 font-bold text-sm sm:text-base'>
  <button onClick={handleClose} className='hover:opacity-70 transition text-lg sm:text-xl' aria-label="Close signup" title="Close">❌</button>
<p className='text-sm sm:text-base'>Log in or sign up</p>

  </div>
  
</div>
{/* welcome note */}
<div className='text-lg sm:text-xl md:text-2xl font-bold border-b border-gray-100 my-2 sm:my-3 py-2'>
  <p>welcome to Airbnb</p>
</div>

{/* form */}
<div className='py-2 sm:py-4'>
  {/* email */}
<label className='text-xs sm:text-sm font-semibold text-gray-700 block mb-2'>
    Country/Region
</label>
<select value={country} onChange={(e) =>
setCountry(e.target.value)} className='w-full h-10 sm:h-12 rounded-lg sm:rounded-xl border-2 border-gray-300 mb-4 sm:mb-5 px-3 text-sm focus:outline-none focus:border-red-600'>
    <option value="NG">Nigeria (+234)</option>
    <option value="UK">United Kingdom (+44)</option>
    <option value="US">United State (+1)</option>
    <option value="CA">Canada (+1)</option>
    <option value="DE">Germany (+49)</option>
    <option value="IN">India (+91)</option>
    <option value="JP">Japan (+81)</option>
    <option value="ZA">South Africa (+27)</option>
    <option value="AU">Australia (+61)</option>
</select>

   {/* phone number */}
  <input type="text" placeholder='Phone Number' className='w-full h-10 sm:h-12 rounded-lg sm:rounded-xl border-2 border-gray-300 mb-4 sm:mb-5 px-3 text-sm focus:outline-none focus:border-red-600' />

  {/* continue */}
  <button className='w-full h-10 sm:h-12 rounded-lg sm:rounded-xl border-2 border-gray-300 mb-4 sm:mb-5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base text-center transition duration-200'>
<p>Continue</p>
  </button>
  
        </div>  
        {/* or line */}
        <div className='my-3 sm:my-4 flex items-center gap-3'>
<div className='flex-1 h-px bg-gray-300'></div>
<p className='text-xs sm:text-sm text-gray-500'>or</p>
<div className='flex-1 h-px bg-gray-300'></div>
        </div>
        {/* social medias */}
 {/* facebook */}
  <button className='w-full h-10 sm:h-12 rounded-lg sm:rounded-xl border-2 border-gray-300 mb-3 sm:mb-5 flex items-center justify-start sm:justify-center gap-3 sm:gap-6 md:gap-8 bg-white hover:bg-gray-50 text-black font-bold text-xs sm:text-sm transition duration-200'>
<img src={facebook} alt="Facebook" className='h-5 sm:h-7 ml-2 sm:ml-0'/>
<p className='hidden sm:inline'>Continue with Facebook</p>
<p className='sm:hidden text-xs'>Facebook</p>
  </button>
  
       

        {/* google */}
        
    <button className='w-full h-10 sm:h-12 rounded-lg sm:rounded-xl border-2 border-gray-300 mb-3 sm:mb-5 flex items-center justify-start sm:justify-center gap-3 sm:gap-6 md:gap-8 bg-white hover:bg-gray-50 text-black font-bold text-xs sm:text-sm transition duration-200'>
<img src={Google} alt="Google" className='h-5 sm:h-7 ml-2 sm:ml-0'/>
<p className='hidden sm:inline'>Continue with Google</p>
<p className='sm:hidden text-xs'>Google</p>
  </button>
  
        

 {/* Apple */}
    <button className='w-full h-10 sm:h-12 rounded-lg sm:rounded-xl border-2 border-gray-300 mb-3 sm:mb-5 flex items-center justify-start sm:justify-center gap-3 sm:gap-6 md:gap-8 bg-white hover:bg-gray-50 text-black font-bold text-xs sm:text-sm transition duration-200'>
<img src={Apple} alt="Apple" className='h-5 sm:h-7 ml-2 sm:ml-0'/>
<p className='hidden sm:inline'>Continue with Apple</p>
<p className='sm:hidden text-xs'>Apple</p>
  </button>
  
        
         {/* Email */}
  <button className='w-full h-10 sm:h-12 rounded-lg sm:rounded-xl border-2 border-gray-300 mb-3 sm:mb-5 flex items-center justify-start sm:justify-center gap-3 sm:gap-6 md:gap-8 bg-white hover:bg-gray-50 text-black font-bold text-xs sm:text-sm transition duration-200'>
<img src={Email} alt="Email" className='h-5 sm:h-7 ml-2 sm:ml-0'/>
<p className='hidden sm:inline'>Continue with email</p>
<p className='sm:hidden text-xs'>Email</p>
  </button>
  
    </div>
    </div>
      </div>
    </div>
  )
}

export default Log2
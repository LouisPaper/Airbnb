import React, { useState } from 'react'

import facebook from "../../assets/icons/Facebook.svg"
import Google from "../../assets/icons/google.png"
import Apple from "../../assets/icons/apple.png"
import Email from "../../assets/icons/mails.png"
// import cancel from "../../assets/icons/Vector.png"

function SignupLogin() {
 const [country, setCountry] = useState("NG");

  return (
    <div className='bg-gray-300'>
<p className='ml-8 mt-8 text-sm text-gray-700'>Log in or sign up</p>
{/* the box */}
      <div className='h-[600px] w-[500px] mx-auto mb-32 bg-white rounded-2xl'>
        <div className='mx-5'>
{/* log text */}
<div className='flex border-b border-gray-300 my-3'>
 <div className='mt-5 flex space-x-32 mb-4 font-bold'>
  <p>❌</p>
<p>Log in or sign up</p>

  </div> 
  
</div>
{/* welcome note */}
<div className='text-xl font-bold border-b border-gray-100 my-3'>
  <p>welcome to Airbnb</p>
</div>

{/* form */}
<div>
  {/* email */}
<label>
    Country/Region
</label>
<select value={country} onChange={(e) =>
setCountry(e.target.value)}>
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
  <input type="text" placeholder='Phone Number' className='w-full h-12 rounded-xl border-2 border-gray-300 mb-5 ' />

  {/* continue */}
  <button className='w-full h-12 rounded-xl border-2 border-gray-300 mb-5 bg-red-600 text-white font-bold text-center'>
<p>Continue</p>
  </button>
  
        </div>  
        {/* or line */}
        <div>
<p> for line</p>
<p></p>
        </div>
        {/* social medias */}
 {/* facebook */}
  <button className='w-full h-12 rounded-xl border-2 border-gray-300 mb-5 flex items-center space-x-28 bg-white text-black font-bold '>
<img src={facebook} alt=""  className='h-7 ml-2'/>
<p className=''>Continue with Facebook</p>
  </button>
  
       

        {/* google */}
        
    <button className='w-full h-12 rounded-xl border-2 border-gray-300 mb-5 flex items-center space-x-30 bg-white text-black font-bold '>
<img src={Google} alt=""  className='h-7 ml-2'/>
<p className=''>Continue with Google</p>
  </button>
  
        

 {/* Apple */}
    <button className='w-full h-12 rounded-xl border-2 border-gray-300 mb-5 flex items-center space-x-31 bg-white text-black font-bold '>
<img src={Apple} alt=""  className='h-7 ml-2'/>
<p className=''>Continue with Apple</p>
  </button>
  
        
         {/* Email */}
  <button className='w-full h-12 rounded-xl border-2 border-gray-300 mb-5 flex items-center space-x-31 bg-white text-black font-bold '>
<img src={Email} alt=""  className='h-7 ml-2'/>
<p className=''>Continue with email</p>
  </button>
  
    </div>
    </div>
</div>
  )
}


export default SignupLogin

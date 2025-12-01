import React from 'react'
import faceBook from "../../assets/icons/Facebook.svg"
import twitter from "../../assets/icons/Twitter.svg"
import instagram from "../../assets/icons/Instagram.svg"

function LastFooter() {
    const support = ["Help centre","AirCover", "Anti-discrimination", "disabilities support", "Cancellation options", "Report neighborhood concern"]
    const host = ["Airbnb your home", "AirCover for hosts", "Hosting resources", "Community forum", "Hosting responsibly"]
    const airBNB = ["Newsroom", "New features", "Careers", "Investors", "Gift cards", "Airbnb.org emergency stays"]
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12'>
      <div className=' mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12'>
      {/* support */}
      <div>
          <p className='font-bold text-base sm:text-lg md:text-xl mb-3'>Support</p>
{support.map((item, index) => (
  <a key={index} href="../" className='block text-xs sm:text-sm text-gray-700 hover:text-black hover:underline transition mb-2'>{item}</a>
))}
<hr className='my-4 sm:my-5 md:hidden border-gray-200' />
      </div>
      {/* hosting */}
      <div>
        <p className='font-bold text-base sm:text-lg md:text-xl mb-3'>Hosting</p>
{host.map((item2, index) =>(
  <a key={index} className='block text-xs sm:text-sm text-gray-700 hover:text-black hover:underline transition mb-2' href="../">{item2}</a>
))}
<hr className='my-4 sm:my-5 bg-gray-200 md:hidden' />
      </div>
      {/* Airbnb */}
      <div>
<p className='font-bold text-base sm:text-lg md:text-xl mb-3'>Airbnb</p>
{airBNB.map((item3, index) => (
  <a key={index} className='block text-xs sm:text-sm text-gray-700 hover:text-black hover:underline transition mb-2' href="../">{item3}</a>
))}
      </div>

    </div>
    {/*show map, last test and icons */}
    <div className='flex justify-center mb-12'>
      <button className='px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-black text-white text-xs sm:text-sm font-semibold hover:bg-gray-800 transition'>
        show map 📍
      </button>
    </div>
    <div className='border-t border-gray-200 pt-6 sm:pt-8 md:pt-10'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6'>
        <p className='text-xs sm:text-sm text-gray-700'>© 2023 Airbnb, Inc. • Privacy • Terms • Sitemap • UK Modern Slavery Act • Company details</p>
       
        {/* social media icon */}
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center'>
          
          <div className='flex items-center gap-2 sm:gap-3'>
            <button className='hover:opacity-70 transition text-lg'>⨂</button>
            <p className='text-xs sm:text-sm text-gray-700 whitespace-nowrap'>English (GB) £ GBP</p>
          </div>
          <div className='flex gap-3 sm:gap-4'>
            <button className='hover:opacity-70 transition'><img src={faceBook} alt="facebook" className='h-5 w-5 sm:h-6 sm:w-6' /></button>
            <button className='hover:opacity-70 transition'><img src={twitter} alt="twitter" className='h-5 w-5 sm:h-6 sm:w-6' /></button>
            <button className='hover:opacity-70 transition'><img src={instagram} alt="instagram" className='h-5 w-5 sm:h-6 sm:w-6' /></button>
          </div>
        </div>
      </div>
    </div>
     </div>
  )
}

export default LastFooter
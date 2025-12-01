import React from 'react'
import logo from '../../assets/icons/logo.svg'
import search from '../../assets/icons/search.svg'
import globe from '../../assets/icons/globe.svg'
import photo from '../../assets/icons/photo.svg'
import menu from '../../assets/icons/menu-01.svg'
import ProfileMenu from './ProfileMenu'

function Logo() {

    return (
        <section className='px-3 sm:px-4 md:px-6'>
            <nav>
                <div className='bg-white fixed top-0 right-0 left-0 h-auto sm:h-20 md:h-24 w-full flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 shadow-sm z-50'>
                    {/* logo and first line */}
                    <div className='flex-shrink-0'>
                        <img src={logo} alt="logo" className='hidden md:block h-8 md:h-10' />
                        <p className='md:hidden text-lg sm:text-xl font-bold'>airbnb</p>
                    </div>
                    <div className='h-10 sm:h-11 md:h-12 w-full sm:w-auto flex-1 md:flex-none md:w-[450px] lg:w-[550px] grid grid-cols-2 sm:grid-cols-3 gap-0.5 sm:gap-1 border border-gray-300 sm:border-2 rounded-2xl sm:rounded-3xl justify-items-center items-center hover:shadow-lg transition-shadow'>
                        <p className='text-xs sm:text-sm md:text-base font-semibold border-r border-gray-300 px-1 sm:px-2 md:px-3 hidden md:block'>Anywhere</p>
                        <p className='text-xs sm:text-sm md:text-base font-semibold border-r border-gray-300 px-1 sm:px-2 md:px-3 hidden md:block'>Any week</p>
                        <div className='flex items-center gap-1 sm:gap-2 md:gap-3 px-1 sm:px-2 md:px-3 col-span-2 sm:col-span-1'>
                            <p className='text-xs sm:text-sm font-medium hidden md:block'>Add guests</p>
                            <img className='h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6' src={search} alt="Search" />
                            <p className='md:hidden text-xs sm:text-sm font-medium'>Search</p>
                        </div>
                    </div>
                    {/* Airbnb your home and co */}
                    <div className='hidden md:flex items-center gap-3 lg:gap-6 flex-shrink-0'>
                        <p className='text-sm md:text-base font-semibold cursor-pointer hover:text-gray-700 transition'>Airbnb your home</p>
                        <img src={globe} alt="globe" className='h-5 md:h-6 cursor-pointer hover:opacity-70 transition' />
                        <div className='flex gap-2 md:gap-3 border-2 border-gray-300 rounded-full px-2 md:px-3 py-1 md:py-2 hover:shadow-lg transition-shadow items-center'>
                            <ProfileMenu menu={menu} />
                            <button>
                                <img className='h-4 md:h-5 w-4 md:w-5 cursor-pointer hover:opacity-70 transition' src={photo} alt="login" />
                            </button>
                        </div>
                    </div>
                    {/* Mobile menu icon */}
                    <div className='md:hidden flex-shrink-0'>
                        <div className='flex gap-1.5 border border-gray-300 rounded-full px-2 py-1 hover:shadow-md transition items-center'>
                            <ProfileMenu menu={menu} />
                            <button>
                                <img className='h-4 w-4' src={photo} alt="profile" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>


        </section>
    )
}

export default Logo
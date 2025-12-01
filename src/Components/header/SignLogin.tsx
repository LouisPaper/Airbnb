import React from 'react'
import logo from '../../assets/icons/logo.svg'
import search from '../../assets/icons/search.svg'
import globe from '../../assets/icons/globe.svg'
import photo from '../../assets/icons/photo.svg'
import menu from '../../assets/icons/menu-01.svg'


// const [form, setForm] = useState(true)
function SignLogin() {
    return (
        <section className='mx-6'>
            <nav>
                <div className='m-3 flex justify-between items-center'>
                    {/* logo and first line */}
                    <div>
                        <img src={logo} alt="logo" className='hidden md:block' />
                        {/* Anywhere and co */}
                    </div>
                    <div className='h-9 w-[500px] grid md:grid-cols-3 gap-1 border-gray-400 border rounded-3xl justify-items-center items-center mt-2 md:'>
                        <p className='w-32 text-2xl font-bold border-r-2 mt-1 mb-2 text-center hidden md:block'>Anywhere</p>
                        <p className='w-32 text-center text-2xl font-bold border-r-2 mt-1 mb-2 hidden md:block '>Any week</p>
                        <div className='flex items-center md:mb-2 gap-2'>
                            <p className='mt-1 ml-1 text hidden md:block'>Add guests</p>
                            <img className='md:ml-10  h-6 w-6 md:mt-1.5' src={search} alt="Search" />
                            <p className='md:hidden'>Start your search</p>
                        </div>
                    </div>
                    {/* Airbnb your home and co */}
                    <div className='hidden md:flex items-center space-x-6'>
                        <p className='font-bold'>Airbnb your home</p>
                        <img src={globe} alt="globe" />
                        <div className='flex space-x-2 border-2 border-gray-400 rounded-3xl w-20 justify-around'>
                            <img className='' src={menu} alt="menu" />
                            
                            <button >
                                <img className='cursor-pointer' src={photo} alt="login" />
                            </button>


                            {/* <button >
                                <img className='cursor-pointer' onClick={() => setForm(!true)}  src={photo} alt="login" />
                            </button>
                            {form && (
                                <Login/>
                            )} */}
                        </div>
                    </div>
                </div>
            </nav>


        </section>
    )
}

export default SignLogin 
  



import React from 'react'
import { useState } from 'react'

import amazingViews from '../../assets/icons/Amazing views.png'
import lakeFront from '../../assets/icons/Lakefrontt.svg'
import amazingPools from '../../assets/icons/Amazing pools.png'
import cabin from '../../assets/icons/Cabins.svg'
import boats1 from '../../assets/icons/Boats (1).svg'
import beachFront from '../../assets/icons//Beachfronts.png'
import filter from '../../assets/icons/Vector.png'
import luxe from '../../assets/icons/Luxe.svg'
import piano from '../../assets/icons/Grand pianos.png'
import mansion from '../../assets/icons/Mansions.png'
import tree from '../../assets/icons/Treehouses.svg'
import next from '../../assets/icons/next icon.svg'
import omg from '../../assets/icons/OMG!.png'
import skiing from '../../assets/icons/Skiing.png'

function Nav() {
    // use state function
    const [lineB, setLineB] = useState("Amazing views");

    // list of icons and their text
    const iconsAndText = [
        { image: amazingViews, text: "Amazing views" },
        { image: cabin, text: "Cabins" },
        { image: beachFront, text: "Beachfront" },
        { image: skiing, text: "Skiing" },
        { image: piano, text: "Grand piano" },
        { image: mansion, text: "mansion" },
        { image: omg, text: "omg" },
        { image: amazingPools, text: "Amazing Pools" },
        { image: luxe, text: "Luxe" },
        { image: boats1, text: "Boats" },
        { image: lakeFront, text: "Lakefront" },
        { image: tree, text: "TreeHouses" },

    ];

    return (
        <div className='bg-white text-sm sm:text-base md:text-lg flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-between sm:justify-around items-center border-t border-b sm:border-t-2 sm:border-b-2 border-gray-300 sm:border-gray-500 mt-16 sm:mt-20 md:mt-24 pt-3 sm:pt-6 md:pt-8 px-2 sm:px-4 md:px-6'>
            <ul className='w-full sm:w-auto'>
                <div className='gap-3 sm:gap-6 md:gap-8 lg:gap-12 hidden md:flex items-center justify-start overflow-x-auto pb-2'>
                    {iconsAndText.map((icon, index) => (
                        <figure 
                            key={index}
                            className={`${lineB === icon.text && "border-b-4 border-black"} items-center flex flex-col cursor-pointer transition hover:opacity-70 flex-shrink-0`} 
                            onClick={() => { setLineB(icon.text) }} 
                        >
                            <img src={`${icon.image}`} alt={icon.text} className='h-6 sm:h-8 md:h-10 object-contain' />
                            <figcaption className='text-center text-xs sm:text-sm md:text-base font-medium mt-1 whitespace-nowrap'>
                                {icon.text}
                            </figcaption>
                        </figure>
                    ))}
                </div>
                {/* Mobile/Tablet version - Show only first 3 */}
                <div className='gap-2 sm:gap-4 md:gap-6 flex items-center md:hidden w-full overflow-x-auto pb-2'>
                    {iconsAndText.slice(0, 3).map((icon, index) => (
                        <figure 
                            key={index}
                            className={`${lineB === icon.text && "border-b-4 border-black"} items-center flex flex-col cursor-pointer transition hover:opacity-70 flex-shrink-0`} 
                            onClick={() => { setLineB(icon.text) }} 
                        >
                            <img src={`${icon.image}`} alt={icon.text} className='h-5 sm:h-7 md:h-9 object-contain' />
                            <figcaption className='text-center text-xs sm:text-sm font-medium mt-1 whitespace-nowrap'>
                                {icon.text}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </ul>
            {/* Next and filters */}
            <div className='hidden md:flex gap-6 lg:gap-8 justify-around items-center flex-shrink-0'>
                {/* next */}
                <button className='h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 rounded-full border border-gray-400 flex items-center justify-center hover:shadow-md transition hover:border-gray-600'>
                    <img src={next} alt="next" className='h-4 sm:h-5 md:h-6 object-contain' />
                </button>
                <button className='h-9 sm:h-10 md:h-11 px-3 sm:px-4 md:px-5 border border-gray-400 rounded-lg sm:rounded-md flex gap-2 items-center hover:shadow-md transition hover:border-gray-600'>
                    <img src={filter} alt="filter" className='h-4 sm:h-5 md:h-6 object-contain' />
                    <p className='text-xs sm:text-sm md:text-base font-medium'>Filters</p>
                </button>
            </div>
        </div>
    )
}

export default Nav
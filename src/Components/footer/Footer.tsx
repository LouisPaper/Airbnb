import React, { useState } from 'react'

function Footer() {
    const categories = [
        "Popular", "Historic", "Coastal", "Islands", "Lakes", "Unique stays", "Categories", "Things to do"
    ]

    const destinations = [
        "Holiday rentals", "Flat rentals", "Villa rentals", "Cottage rentals", "Beachfront homes", 
        "Luxury villas", "Budget stays", "Family homes", "Modern apartments", "Country cottages",
        "City apartments", "Mountain cabins", "Lake houses", "Desert homes", "Coastal villas",
        "Historic mansions", "Eco lodges"
    ]

    const [activeCategory, setActiveCategory] = useState("Popular")

    return (
        <div className='mb-7 px-4 sm:px-6 md:px-8 lg:px-12'>
            {/* Title */}
            <div className='text-2xl font-bold mb-6 mt-8'>Inspiration for future gateways</div>
    
            {/* Category Tabs */}
            <div className='flex gap-4 sm:gap-6 md:gap-10 overflow-x-auto pb-3 mb-6'>
                {categories.map((category, index) => (
                    <button 
                        key={index}
                        onClick={() => setActiveCategory(category)}
                        className={`
                            whitespace-nowrap font-medium transition text-sm md:text-base
                            ${activeCategory === category ? 'border-b-4 border-black text-black' : 'text-gray-700 hover:text-black'}
                        `}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Destinations Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-8'>
                {destinations.map((destination, index) => (
                    <a 
                        key={index} 
                        href="#" 
                        className='group hover:opacity-70 transition'
                    >
                        <p className='font-bold text-sm sm:text-base md:text-lg group-hover:underline'>Aberfeldy</p>
                        <p className='text-xs md:text-sm text-gray-600'>{destination}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Footer
import React from 'react'

import image1 from '../../assets/all image/Image 1.png'
import image2 from '../../assets/all image/Image  2.jpg'
import image3 from '../../assets/all image/Image  3.png'
import image4 from '../../assets/all image/Image  4.png'
import image5 from '../../assets/all image/Image 5.jpg'
import image6 from '../../assets/all image/Image  6.png'
import image7 from '../../assets/all image/Image 7.png'
import image8 from '../../assets/all image/Image 8.png'
import image9 from '../../assets/all image/Image 9.png'
import image10 from '../../assets/all image/Image 10.png'
import image11 from '../../assets/all image/Image 11.png'
import image12 from '../../assets/all image/Image 12.png'
import image13 from '../../assets/all image/Image 13.png'
import image14 from '../../assets/all image/Image 14.png'
import image15 from '../../assets/all image/Image 15.png'
import image16 from '../../assets/all image/Image 16.png'
import image17 from '../../assets/all image/Image 17.png'
import image18 from '../../assets/all image/Image 18.png'
import image19 from '../../assets/all image/Image 19.png'
import image20 from '../../assets/all image/Image 20.png'
import star from '../../assets/icons/star.png'



function Body() {
    const imageAndCaption = [
        { photo: image1, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image2, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image3, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image4, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image5, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image6, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image7, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image8, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image9, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image10, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image11, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image12, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image13, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image14, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image15, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image16, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image17, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image18, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image19, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" },
        { photo: image20, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individual Host", price: "€1,634 total" }
    ]
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-12'>

            {/* image mapping */}
            <div className='mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center w-full' >
                {
                    imageAndCaption.map((photos, index) => (
                        <figure key={index} className='mt-2 sm:mt-4 mb-6 sm:mb-8 w-full max-w-xs sm:max-w-sm md:max-w-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden'>
                            <img src={photos.photo} alt="property image" className='w-full h-40 sm:h-56 md:h-64 object-cover rounded-lg' />

                            <figcaption className='px-2 sm:px-3 py-2 sm:py-3'>
                                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2'>

                                    <p className='font-bold text-sm sm:text-base my-1 sm:my-2 line-clamp-2'>{photos.text1}</p>
                                    <div className='flex items-center gap-1'>
                                        <img src={photos.icon} alt="star rating" className='h-4 sm:h-5' />
                                        <p className='text-xs sm:text-sm font-semibold'>{photos.textNum}</p>
                                    </div>
                                </div>
                                <p className='text-xs sm:text-sm text-gray-700 mb-1'>{photos.text2}</p>
                                <p className='text-xs sm:text-sm text-gray-600 mb-2'>{photos.text3}</p>
                                <p className='font-bold text-xs sm:text-sm border-b-2 border-gray-300 pb-1 inline-block'>{photos.price}</p>
                            </figcaption>
                        </figure>
                        
                    ))
                }
                
            </div>
            <div className='flex flex-col items-center mt-8 sm:mt-12 md:mt-16 mb-6 sm:mb-10'>
                    <p className="text-black mb-4 text-base sm:text-lg md:text-xl font-bold text-center px-2">Continue exploring amazing views</p>
                    <button className="px-6 sm:px-8 py-2 sm:py-3 bg-black text-white rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold hover:bg-gray-800 transition duration-200">Show more</button>
                </div>
        </div>
    )
}

export default Body
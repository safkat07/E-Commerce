import Image from 'next/image'
import React from 'react'
import img2 from '../../public/polly-alexandra-iu2VZLlzf1o-unsplash.jpg'
const TrendingCard = ({ name, titleTag, discount, image, btnText }) => {
    return (
        <div className='w-full cursor-pointer group h-full rounded-lg relative mx-auto '>
            <Image className='brightness-50 rounded-md w-full object-cover h-[400px] transition-all duration-500' src={image} alt='' />
            <div className='bg-black/50 absolute rounded-md transition-all duration-500 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 inset-0 flex justify-center items-center w-full h-full group-hover:z-[99] text-white text-2xl'>
                <button className='bg-blue-500 px-2.5 py-2 rounded-md'>
                    {btnText}
                </button>
            </div>
            <div className='flex flex-col  top-36 md:top-1/3 text-neutral-100 left-10 absolute justify-start'>
                <p className='uppercase font-medium text-4xl '>
                    {titleTag}
                </p>
                <p className='md:w-3/4 pt-2.5 font-bold font-sans uppercase text-4xl md:text-6xl'>
                    {name}
                </p>
                <p className='text-2xl font-semibold pt-3.5'>
                    {discount}
                </p>

            </div>
        </div>
    )
}

export default TrendingCard
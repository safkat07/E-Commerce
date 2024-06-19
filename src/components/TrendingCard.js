import Image from 'next/image'
import React from 'react'
import img2 from '../../public/polly-alexandra-iu2VZLlzf1o-unsplash.jpg'
const TrendingCard = ({ name, titleTag, discount, image }) => {
    return (
        <div className='w-full cursor-pointer group h-full rounded-lg relative mx-auto '>
            <Image className='brightness-50 w-full h-[400px] scale-95 group-hover:scale-100 transition-all duration-500' src={image} alt='' />
            <div className='flex flex-col  top-20 nd:top-1/3 text-neutral-100 left-10 absolute justify-start'>
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
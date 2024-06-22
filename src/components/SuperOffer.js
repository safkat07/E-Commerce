import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import HeadingTitle from './HeadingTitle'
import img from '../../public/supperoffer.jpg'
import Image from 'next/image'
const SuperOffer = () => {
    return (
        <div className='py-10'>
            <div className='h-full  flex-col w-full mx-auto flex justify-center relative items-center'>
                <Image className='xl:h-[550px] bg-fixed brightness-50 object-cover' src={img} alt='' />
                <div className='absolute lg:top-20  xl:right-32 right-10 text-right'>
                    <p className='lg"text-7xl text-5xl text-blue-500 font-bold tracking-widest uppercase'>
                        sunglasses
                    </p>
                    <p className='uppercase lg:text-5xl text-3xl text-blue-300  lg:py-5 py-2'>
                        Supper Offer
                    </p>
                    <p className='lg:text-4xl text-2xl font-bold text-neutral-300'>
                        Acetate Frame Sunglasses
                    </p>
                    <p className='text-neutral-100 lg:py-5 py-2 lg:text-4xl font-extrabold'>
                        $40.00 Only
                    </p>
                    <button className='bg-blue-500 text-white px-5 py-2 rounded-none'>
                        Shop Now
                    </button>

                </div>
            </div>
        </div>
    )
}

export default SuperOffer
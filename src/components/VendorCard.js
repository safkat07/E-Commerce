import Image from 'next/image'
import React from 'react'
import img from '../../public/adidas.jpg'
import img1 from '../../public/vendor1.jpg'
import img2 from '../../public/vendor2.jpg'
import img3 from '../../public/vendor3.jpg'
import img4 from '../../public/vendor4.jpg'
const VendorCard = () => {
    return (
        <div className='flex flex-col py-5 cursor-pointer relative w-full h-full border justify-center items-center'>
            <div className='flex w-full p-3 items-center justify-start gap-3'>
                <Image className='w-1/4' src={img} alt='adidas' />
                <div className='flex w-full text-sm flex-col '>
                    <p className='font-semibold'>Adidas</p>
                    <p className='text-gray-500'>154 Products</p>
                    <div className='flex text-gray-500 items-center justify-between'>
                        <p>Ratings</p>
                        <p className=''>Sales 954</p>
                    </div>
                </div>
            </div>
            <div className='grid p-3 gap-2.5 grid-cols-2'>
                <Image src={img1} alt='vendor' />
                <Image src={img2} alt='vendor' />
                <Image src={img3} alt='vendor' />
                <Image src={img4} alt='vendor' />
            </div>
        </div>
    )
}

export default VendorCard

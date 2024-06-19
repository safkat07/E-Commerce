import React from 'react'
import HeadingTitle from './HeadingTitle'
import MaxwidthWrapper from './MaxwidthWrapper'
import PragraphText from './PragraphText'
import MainProductCard from './MainProductCard'
import img1 from '../../public/productimg1.jpg'
import img2 from '../../public/productimg2.jpg'
import img3 from '../../public/productimg3.jpg'
import img4 from '../../public/productimg4.jpg'
import img5 from '../../public/productimg5.jpg'
import img6 from '../../public/productimg6.jpg'
import img7 from '../../public/productimg7.jpg'
import img8 from '../../public/girl-with-happy-expression.jpg'

const TopCollection = () => {
    const products = [
        {
            "name": "Round Neck T-Shirt",
            "old_price": "$27.00",
            "new_price": "$22.00",
            "discount": "20%",
            "rating": 4,
            "badge": "",
            "image": img1
        },
        {
            "name": "Full Sleeve Shirt",
            "old_price": "$12.00",
            "new_price": "$10.00",
            "discount": "SALE",
            "rating": 4,
            "badge": "",
            "image": img2
        },
        {
            "name": "Cute Baby Toy's",
            "old_price": "$40.00",
            "new_price": "$30.00",
            "discount": "",
            "rating": 4,
            "badge": "",
            "image": img8
        },
        {
            "name": "Jumbo Carry Bag",
            "old_price": "$50.00",
            "new_price": "$40.00",
            "discount": "",
            "rating": 4,
            "badge": "NEW",
            "image": img3
        },
        {
            "name": "Round Neck T-Shirt",
            "old_price": "$27.00",
            "new_price": "$22.00",
            "discount": "20%",
            "rating": 4,
            "badge": "",
            "image": img4
        },
        {
            "name": "Full Sleeve Shirt",
            "old_price": "$12.00",
            "new_price": "$10.00",
            "discount": "SALE",
            "rating": 4,
            "badge": "",
            "image": img5
        },
        {
            "name": "Cute Baby Toy's",
            "old_price": "$40.00",
            "new_price": "$30.00",
            "discount": "",
            "rating": 4,
            "badge": "",
            "image": img6
        },
        {
            "name": "Jumbo Carry Bag",
            "old_price": "$50.00",
            "new_price": "$40.00",
            "discount": "",
            "rating": 4,
            "badge": "NEW",
            "image": img7
        }
    ];

    return (
        <div className=' sm:py-7 py-10'>
            <MaxwidthWrapper>
                <HeadingTitle title={"Our Top Collection"} />
                <PragraphText text={"Brows The Collection of Top Products"} />
                <div>
                    <ul className='flex sm:text-base text-xs justify-center items-center pt-5 sm:gap-x-10 gap-x-5 font-semibold'>
                        <li className='uppercase text-blue-600 cursor-pointer'>
                            for all
                        </li>
                        <li className='uppercase cursor-pointer'>
                            for men
                        </li>
                        <li className='uppercase cursor-pointer'>
                            for women
                        </li>
                        <li className='uppercase cursor-pointer'>
                            for children
                        </li>
                    </ul>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-10 gap-7 justify-center items-center'>
                        {products.map((product, index) => (
                            <MainProductCard
                                key={index}
                                {...product}
                            />
                        ))}
                    </div>
                </div>
                <div className='flex flex-col text-xl font-semibold  cursor-pointer justify-center items-center'>
                    Shop All Collection
                    <div className='border-b-2 border-black md:w-[30%] w-1/2 lg:w-[15%] '>

                    </div>
                </div>
            </MaxwidthWrapper>
        </div>
    )
}

export default TopCollection

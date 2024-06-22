import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import HeadingTitle from './HeadingTitle'
import PragraphText from './PragraphText'
import img1 from '../../public/productimg1.jpg'
import img2 from '../../public/productimg2.jpg'
import img3 from '../../public/productimg3.jpg'
import img4 from '../../public/productimg4.jpg'
import MainProductCard from './MainProductCard'
const NewTrending = () => {
    const data = [
        {
            "name": "Round Neck T-Shirt",
            "old_price": "",
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
            "image": img4
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
    ]
    return (
        <div className='py-10'>
            <MaxwidthWrapper>
                <HeadingTitle title={"New Arrival"} />
                <PragraphText text={"Browse The Collection of Top Products"} />
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10 gap-7 justify-center items-center'>
                    {data.map((product, index) => (
                        <MainProductCard
                            key={index}
                            {...product}
                        />
                    ))}
                </div>
                <div className='flex flex-col text-xl font-semibold  cursor-pointer justify-center items-center'>
                    Shop All Collection
                    <div className='border-b-2 border-black md:w-[30%]  w-1/2 lg:w-[15%] '>

                    </div>
                </div>
            </MaxwidthWrapper>
        </div>
    )
}

export default NewTrending
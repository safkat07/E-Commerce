import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import HeadingTitle from './HeadingTitle'
import Slider from './Slider'
import limimg1 from '../../public/limited3.jpg'
import limimg2 from '../../public/limited4.jpg'
import limimg3 from '../../public/limitied1.jpg'
import limimg4 from '../../public/limited2.jpg'
import img1 from '../../public/bagssCategory.jpg'
import img2 from '../../public/chuttersnap-4JHMt29fvj8-unsplash.jpg'
import img3 from '../../public/shoesCategory.jpg'


const products = [
    {
        id: 1,
        title: 'Baby Toy Teddybear',
        price: 480.00,
        originalPrice: 540.00,
        reviews: 4,
        bookings: 25,
        image: limimg3,
        targetDate: '2024-12-31T23:59:59'
    },
    {
        id: 2,
        title: 'Stuffed Animal Elephant',
        price: 300.00,
        originalPrice: 350.00,
        reviews: 5,
        bookings: 15,
        image: limimg4,
        targetDate: '2024-10-15T12:00:00'
    },
    {
        id: 3,
        title: 'Stuffed Animal Elephant',
        price: 300.00,
        originalPrice: 350.00,
        reviews: 5,
        bookings: 15,
        image: img3,
        targetDate: '2024-10-15T12:00:00'
    },
    {
        id: 3,
        title: 'Stuffed Animal Elephant',
        price: 300.00,
        originalPrice: 350.00,
        reviews: 5,
        bookings: 15,
        image: img2,
        targetDate: '2024-10-15T12:00:00'
    },

];

const limitedOffer = [
    {
        id: 1,
        title: 'Rolex Watch',
        price: 480.00,
        originalPrice: 540.00,
        reviews: 4,
        bookings: 25,
        image: limimg1,
        targetDate: '2024-09-30T18:30:00'
    },
    {
        id: 2,
        title: 'Premium Watch',
        price: 300.00,
        originalPrice: 350.00,
        reviews: 5,
        bookings: 15,
        image: limimg2,
        targetDate: '2024-11-01T10:00:00'
    },
];
const LimitedOffers = () => {
    return (
        <div>
            <MaxwidthWrapper>
                <div className='flex xl:flex-row flex-col justify-between items-center'>
                    <Slider sliderTitle={"Limited Offer"} products={products} />
                    <Slider sliderTitle={"Featured Items"} products={limitedOffer} />
                </div>
            </MaxwidthWrapper>
        </div>
    )
}

export default LimitedOffers

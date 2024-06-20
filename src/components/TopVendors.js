import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import HeadingTitle from './HeadingTitle'
import PragraphText from './PragraphText'
import VendorCard from './VendorCard'
import img1 from '../../public/adidas.jpg'
import img2 from '../../public/keren_111.jpg'
import img3 from '../../public/434.jpg'
import img4 from '../../public/vendor4.jpg'

const vendors = [
    {
        "name": "Adidas",
        "totalProducts": 156,
        "ratings": 4,
        "sales": 453,
        "image": img1
    },
    {
        "name": "Puma",
        "totalProducts": 346,
        "ratings": 3,
        "sales": 453,
        "image": img2
    },
    {
        "name": "Apex",
        "totalProducts": 246,
        "ratings": 2,
        "sales": 453,
        "image": img3
    },
    {
        "name": "Bata",
        "totalProducts": 146,
        "ratings": 1,
        "sales": 453,
        "image": img4
    }
]


const TopVendors = () => {
    return (
        <div className='py-10'>
            <MaxwidthWrapper>
                <HeadingTitle title={"Top Vendors"} />
                <PragraphText text={"Browse  The Collection of All Vendors"} />
                <div className='grid   py-7 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between gap-5 items-center '>
                    {
                        vendors.map((vendor, index) => <VendorCard key={index} {...vendor}></VendorCard>)
                    }
                </div>
            </MaxwidthWrapper>
        </div>
    )
}

export default TopVendors
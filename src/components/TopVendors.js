import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import HeadingTitle from './HeadingTitle'
import PragraphText from './PragraphText'
import VendorCard from './VendorCard'

const TopVendors = () => {
    return (
        <div className='py-10'>
            <MaxwidthWrapper>
                <HeadingTitle title={"Top Vendors"} />
                <PragraphText text={"Browse  The Collection of All Vendors"} />
                <div className='grid   py-7 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between gap-5 items-center '>
                    <VendorCard />
                    <VendorCard />
                    <VendorCard />
                    <VendorCard />
                </div>
            </MaxwidthWrapper>
        </div>
    )
}

export default TopVendors
import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import HeadingTitle from './HeadingTitle'
import img1 from '../../public/chuttersnap-4JHMt29fvj8-unsplash.jpg'
import img2 from '../../public/polly-alexandra-iu2VZLlzf1o-unsplash.jpg'
import TrendingCard from './TrendingCard'

const NewArrivals = () => {
    const newArrival = [
        {
            "name": "Mens Sport shoes",
            "titleTag": "new arrival",
            "discount": "30% discount",
            "image": img1,

        },
        {
            "name": "smart watches",
            "titleTag": "new trending",
            "discount": "buy any 3 items & get 30% discount",
            "image": img2,

        }
    ]
    return (
        <div className='sm:py-7 py-10'>
            <MaxwidthWrapper >
                <div className='grid  lg:grid-cols-2 grid-cols-1 gap-2'>
                    {
                        newArrival.map((prodcust, index) => <TrendingCard key={index} {...prodcust}></TrendingCard>)
                    }
                </div>
            </MaxwidthWrapper>
        </div>
    )
}

export default NewArrivals
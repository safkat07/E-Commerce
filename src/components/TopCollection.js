import React from 'react'
import HeadingTitle from './HeadingTitle'
import MaxwidthWrapper from './MaxwidthWrapper'

const TopCollection = () => {
    return (
        <div className='border-2 py-5 '>
            <MaxwidthWrapper>
                <HeadingTitle title={"Our Top Collection"} />
            </MaxwidthWrapper>
        </div>
    )
}

export default TopCollection
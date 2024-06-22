import React from 'react';
import MaxwidthWrapper from './MaxwidthWrapper';
import HeadingTitle from './HeadingTitle';
import PragraphText from './PragraphText';
import img1 from '../../public/productimg1.jpg';
import img2 from '../../public/productimg2.jpg';
import img3 from '../../public/productimg3.jpg';
import img4 from '../../public/productimg4.jpg';
import img5 from '../../public/productimg5.jpg';
import img6 from '../../public/productimg6.jpg';
import img7 from '../../public/productimg7.jpg';
import img8 from '../../public/girl-with-happy-expression.jpg';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const InstagramFeeds = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

    return (
        <div className='py-10'>
            <MaxwidthWrapper>
                <HeadingTitle title={"Instagram Feeds"} />
                <PragraphText text={"Share Your Story With US"} />
                <Marquee
                    
                    gradient={false}
                    speed={50}

                    className='flex mt-7 gap-5'>
                    {images.map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt={`Instagram feed ${index + 1}`}
                            className='size-60 cursor-pointer ml-10 object-cover object-top'
                        />
                    ))}
                </Marquee>
            </MaxwidthWrapper>
        </div>
    );
}

export default InstagramFeeds;

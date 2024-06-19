"use client"

import React, { useState } from 'react';
import MaxwidthWrapper from './MaxwidthWrapper';
import HeadingTitle from './HeadingTitle';
import PragraphText from './PragraphText';
import TrendingCard from './TrendingCard'; // Import the TrendingCard component
import { GiClothes, GiRunningShoe } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import clothImg from '../../public/clothesCategory.jpg';
import watchImg from '../../public/watchesCategory.jpg';
import bagImg from '../../public/bagssCategory.jpg';
import shoeImg from '../../public/shoesCategory.jpg';

const categories = [
    {
        id: 1,
        categoryName: "Clothes",
        productCount: "440",
        icon: <GiClothes />,
        categoryImage: clothImg,
        description: "Explore a wide range of clothes including shirts, pants, jackets, and more."
    },
    {
        id: 2,
        categoryName: "Watches",
        productCount: "510",
        icon: <BsSmartwatch />,
        categoryImage: watchImg,
        description: "Find the best watches from top brands and designers."
    },
    {
        id: 3,
        categoryName: "Bags",
        productCount: "620",
        icon: <FaBagShopping />,
        categoryImage: bagImg,
        description: "Browse our collection of stylish and functional bags."
    },
    {
        id: 4,
        categoryName: "Shoes",
        productCount: "320",
        icon: <GiRunningShoe />,
        categoryImage: shoeImg,
        description: "Discover our range of shoes for every occasion."
    }
];

const TopCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
        <div className="py-10">
            <MaxwidthWrapper>
                <HeadingTitle title="Top Categories" />
                <PragraphText text="Browse The Collection of Top Categories" />

                <div className="flex py-7 flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3 space-y-7">
                        {categories.map(category => (
                            <div
                                key={category.id}
                                className={`p-4 flex items-center space-x-4 rounded-lg cursor-pointer transition-all duration-300 ${selectedCategory.id === category.id ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                <div className="text-3xl">{category.icon}</div>
                                <div>
                                    <div className="font-bold text-lg">{category.categoryName}</div>
                                    <div className="text-sm">{category.productCount} Products</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex-grow">
                        <TrendingCard
                            name={selectedCategory.categoryName}
                            btnText={"View All"}
                            discount={selectedCategory.description}
                            image={selectedCategory.categoryImage}
                        />
                    </div>
                </div>
            </MaxwidthWrapper>
        </div>
    );
};

export default TopCategories;

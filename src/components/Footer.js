import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import HeadingTitle from './HeadingTitle'

const Footer = () => {
    return (
        <div className='pt-10'>
            <div className='w-full py-5 text-center text-lg bg-neutral-700 text-white'>
                <p>
                    Win a contest! Get this limited-edition <span className='underline '>
                        View Detail
                    </span>
                </p>
            </div>
            <MaxwidthWrapper>
                <div className="w-full py-4 sm:py-6 lg:py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        <div className="col-span-1">
                            <h2 className="text-3xl text-blue-500 font-bold ">Elevate Mart</h2>
                            <p className="mt-4 text-gray-600">
                                71 Pilgrim Avenue Chevy Chase,<br />
                                East California.
                            </p>
                            <p className="mt-2 text-gray-600">Call Us: +44 0123 456 789</p>
                            <p className="mt-2 text-gray-600">
                                Email: <a href="mailto:example@ec-email.com" className="text-blue-600">example@ec-email.com</a>
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Information</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">About us</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Delivery Information</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Account</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">My Account</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Order History</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Wish List</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Specials</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Services</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Discount Returns</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Policy & Policy</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Customer Service</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Term & Condition</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
                            <p className="mt-4 text-gray-600">
                                Get instant updates about our new products and special promos!
                            </p>
                            <form className="mt-4 flex">
                                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email" />
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="mt-10 border-t border-gray-300 pt-6 flex flex-col sm:flex-row items-center justify-between">
                        <p className="text-gray-600">© 2023 Ekka. All Rights Reserved</p>
                        <div className="flex mt-4 sm:mt-0">
                            <a href="#" className="text-gray-600 hover:text-gray-900 mx-2">Facebook</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 mx-2">Twitter</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 mx-2">Instagram</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 mx-2">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </MaxwidthWrapper>
        </div>
    )
}

export default Footer
import React from 'react'
import TopNavbarPart from './TopNavbarPart'
import MiddleNavbar from './MiddleNavbar'
import MainNavLinks from './MainNavLinks'

const Navbar = () => {
    return (
        <div>
            <TopNavbarPart />
            <MiddleNavbar />
            <MainNavLinks />
        </div>
    )
}

export default Navbar
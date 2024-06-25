"use client"
import React, { useEffect, useState } from 'react'
import { auth } from '../../auth'
import UserContext from '@/context/UserContext'

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            const session = await auth()
            setUser(session?.user || null)
        }
        fetchUser()
    })
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
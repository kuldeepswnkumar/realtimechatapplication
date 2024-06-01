import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
// import MessageContact from './Components/MessageContact'

function Layout() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="w-5/6 rounded-2xl bg-[rgb(1,22,61)] border-3 border-black m-2 text-white p-2">
                <Outlet />
            </div>

        </div>
    )
}

export default Layout
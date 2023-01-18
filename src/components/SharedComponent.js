import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import Sidebar from '../shared/Sidebar'

const SharedComponent = () => {
    return (
        <>
        <Sidebar/>
        <Footer/>
         <Outlet/>
        </>
        )
}

export default SharedComponent
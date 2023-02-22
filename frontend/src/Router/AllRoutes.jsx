import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Admin from '../Admin/Admin'
import AdminSignin from '../Admin/AdminSignin'
// import Dashboard from '../Admin/Dashboard'


export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/Admin' element={<Admin />} ></Route>
            <Route path='/AdminSignin' element={<AdminSignin />} ></Route>
            {/* <Route path='/Dashboard' element={<Dashboard />} ></Route> */}

        </Routes>
    )
}

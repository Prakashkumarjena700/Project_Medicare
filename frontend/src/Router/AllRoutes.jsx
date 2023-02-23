import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Components/Home/Home'


export default function AllRoutes() {
    return (
        <Routes>
             <Route path='/' element={<Home />} ></Route>
        

        </Routes>
    )
}
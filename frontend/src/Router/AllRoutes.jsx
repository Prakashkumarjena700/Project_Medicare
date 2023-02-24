import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import { Products } from "../Components/ProductPage/Products";
import ProductDetails from "../Components/ProductsDetailsPage/ProductsDetails";


import Admin from "../Admin/Admin"
import AdminSignin from '../Admin/AdminSignin'
export default function AllRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route> 
            <Route path='/admin' element={<Admin />} ></Route>
            <Route path='/adminsignin' element={<AdminSignin />} ></Route>
            <Route path="/product" element={<Products />}></Route>
            <Route path="/product/:id" element={<ProductDetails />}></Route>

        </Routes>
    )
}

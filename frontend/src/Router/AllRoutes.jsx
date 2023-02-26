import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import { Products } from "../Components/ProductPage/Products";
import ProductDetails from "../Components/ProductsDetailsPage/ProductsDetails";

import AdminSignin from '../Admin/AdminSignin'

import Inventory from '../Admin/Inventory'

import Signup from "../Components/Pages/Signup";
import Login from "../Components/Pages/Login";


export default function AllRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route>
          
            <Route path='/adminsignin' element={<AdminSignin />} ></Route>
            <Route path='/inventory' element={<Inventory />} ></Route>
            <Route path="/product" element={<Products />}></Route>
            <Route path="/product/:id" element={<ProductDetails />}></Route>
            <Route path="/allProducts" element={<Products/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
           


        </Routes>
    )
}

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import { Products } from "../Components/ProductPage/Products";
import ProductDetails from "../Components/ProductsDetailsPage/ProductsDetails";


import Signup from "../Components/Pages/Signup";
import Login from "../Components/Pages/Login"

import Inventory from '../Admin/Inventory'

import { Cart } from "../Components/CartPage/Cart";
import { Address } from "../Components/CartPage/Addresspage";
import { Summary } from "../Components/CartPage/Summarypage";
import { Payment } from "../Components/CartPage/Payment";

import AdminSignin from "../Admin/AdminSignin";
import LabTests from "../Components/LabTests/LabTests";
import Ayurveda from "../Components/Ayurveda/Ayurveda";
import CarePlan from "../Components/CarePlan/CarePlan";
import ConsultDoctor from "../Components/ConsultDoctor/ConsultDoctor";
import Covid19 from "../Components/Covid19/Covid19";
import Admin from "../Admin/Admin";




export default function AllRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route>

            <Route path='/adminsignin' element={<AdminSignin />} ></Route>
            <Route path='/inventory' element={<Inventory />} ></Route>
            <Route path="/product" element={<Products />}></Route>
            <Route path="/product/:id" element={<ProductDetails />}></Route>
            <Route path="/admin" element={<Admin/>} ></Route>
            <Route path="/allProducts" element={<Products />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/covid19" element={<Covid19 />} ></Route>
            <Route path="/consultdoctor" element={<ConsultDoctor />} ></Route>
            <Route path="/labtests" element={<LabTests />} ></Route>
            <Route path="/ayurveda" element={<Ayurveda />} ></Route>
            <Route path="/careplan" element={<CarePlan />} ></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/addresspage" element={<Address />}></Route>
            <Route path="summarypage" element={<Summary />}></Route>
            <Route path="/payment" element={<Payment />}></Route>

        </Routes>
    )

}

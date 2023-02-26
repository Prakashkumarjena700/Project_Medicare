import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

import "./CarePlan.css"

export default function CarePlan() {
    return (
        <div>
            <Navbar />
            <div className='CPfirstDiv' >
                <div>
                    <img width='100px' src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png" alt="" />
                    <h2>Reduce your medical expenses by HALF</h2>
                    <p>Save for things that make you happy</p>
                    <button>Explor Plans</button>
                    <p>Plan Starting at Rs 46/month</p>
                </div>
                <div>
                    <img src="https://onemg.gumlet.io/image/upload/q_auto,f_auto/v1579675864/marketing/gek7gtlcjca85q0l3ees.jpg" alt="" />
                </div>
            </div>
            <h3 className='CPHeadings' >Benefits</h3>
            <div className='CPsixGrid' >
                <div>
                    <img src="https://onemg.gumlet.io/image/upload/v1617168913/marketing/viz4ybkh6wfq9sjbu4ze.png" alt="" />
                    <div>
                        <h2>Get extra 2% discounts</h2>
                        <p>Guaranteed savings over & above promotional offers. Extra 2% discounts on all prescription medicine purchases.</p>
                    </div>
                </div>
                <div>
                    <img src="https://onemg.gumlet.io/image/upload/v1617168743/marketing/dmkbmj7zdcumqhvloswv.png" alt="" />
                    <div>
                        <h2>Get Lab Test</h2>
                        <p>Get a free CBC or HbA1C test or upgrade to any one of our premium tests</p>
                    </div>
                </div>
                <div>
                    <img src="https://onemg.gumlet.io/image/upload/v1634725062/l0fohtgqpv9k2ozhsypi.png" alt="" />
                    <div>
                        <h2>Extra 3% NeuCoins on all orders</h2>
                        <p>Earn extra 3% NeuCoins on all your pharmacy orders, lab tests and doctor consultations. Use these NeuCoins freely across all brands on TataNeu, online or offline. </p>
                    </div>
                </div>
                <div>
                    <img src="https://onemg.gumlet.io/image/upload/v1617168863/marketing/ll8w1jwk0yjkbcx1dpcw.png" alt="" />
                    <div>
                        <h2>Free E-Consultation</h2>
                        <p>Get a free E-consultation from experts around 26 different specialities including dieticians and nutritionist</p>
                    </div>
                </div>
                <div>
                    <img src="https://onemg.gumlet.io/image/upload/v1617168794/marketing/xrrbnozjyplezqml6crx.png" alt="" />
                    <div>
                        <h2>No Shipping Charges</h2>
                        <p>No shipping charges on orders above Rs.149. Unlimited Free shipping on orders above Rs.500. Free shipping on 20 orders below Rs.500</p>
                    </div>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dusqx2w0c/image/upload/v1617086307/marketing/jee7thstqouh0m4xflgp.png" alt="" />
                    <div>
                        <h2>Introducing Rapid Delivery</h2>
                        <p>Now get all your products delivered to you quicker than before. Same day or next day delivery on available medicines in selected cities and expanding soon to all cities</p>
                    </div>
                </div>
            </div>
            <div style={{ border: "5px solid #F0F0F0", marginBottom: "20px" }} ></div>
            <h3 className='CPHeadings' >Additional Benefits</h3>
            <div className='CPthreeflex' >
                <div>
                    <img src="https://onemg.gumlet.io/image/upload/v1617169138/marketing/q2xl4gwlyw55awctv1lk.png" alt="" />
                    <h2>Early Sale Access</h2>
                    <p>Be among the first ones to shop during our sale days. Get exclusive deals across all categories.</p>
                </div>
                <div>
                    <img src="https://onemg.gumlet.io/image/upload/v1617169094/marketing/rciejxt8uupxvkdoztx1.png" alt="" />
                    <h2>Priority Processing</h2>
                    <p>Care Plan members enjoy priority processing of their orders. As our premium members, your orders are prioritise by pushing your prescriptions to the front of the line for validation.</p>
                </div>
                <div>
                    <img src="https://onemg.gumlet.io/image/upload/v1617169138/marketing/q2xl4gwlyw55awctv1lk.png" alt="" />
                    <h2>Premium Customer Support</h2>
                    <p>Members would be entitled to our dedicated customer support experts. We are committed to providing you with responsive assistance and resolution. Your queries are our priority. Fastest support to our premium members.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

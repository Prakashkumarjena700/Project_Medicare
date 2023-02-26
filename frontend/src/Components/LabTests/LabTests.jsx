import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./LabTests.css"
import { LabTests1stSlider } from './LabTestsSliders'

import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { MdOutlineDisabledVisible, MdOutlineHealthAndSafety } from 'react-icons/md'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'

export default function LabTests() {
    return (
        <div>
            <Navbar />
            <div className="Ltfirstdiv" >
                <LabTests1stSlider />
                <div>
                    <h1>Lab Test From The Comfort Of Your Home</h1>
                    <p>50,00,000+ lab tests booked | 20,00,000+ satisfied customers</p>
                    <div className='fiveBoxLT' >
                        <div>
                            <img src="https://onemg.gumlet.io/Safe_38x38_labs_oe5ieq.png?format=auto" alt="" />
                            <p>100% Safe & Hygienic</p>
                        </div>
                        <div>
                            <img src="https://onemg.gumlet.io/new_color_images/Lab_delivery_2x.png?format=auto" alt="" />
                            <p>Home Sample Pick Up</p>
                        </div>
                        <div>
                            <img src="https://onemg.gumlet.io/new_color_images/Lab_online_report_2x.png?format=auto" alt="" />
                            <p>View Reports Online</p>
                        </div>
                        <div>
                            <img src="https://onemg.gumlet.io/new_color_images/Lab_doctor_2x.png?format=auto" alt="" />
                            <p>Free Doctor Consultation</p>
                        </div>
                        <div>
                            <img src="https://onemg.gumlet.io/new_color_images/Lab_offer_2x.png?format=auto" alt="" />
                            <p>Best Prices Guaranteed</p>
                        </div>

                    </div>
                    <button>VIEW POPULAR PACKAGES</button>
                </div>
            </div>
            <div className='LTsecondDiv' >
                <h2>Popular lab tests & profiles</h2>
                <div>
                    <div>
                        <h3> <AiOutlineHome fontSize='25px' /> HEALTH TEST AT YOUR HOME</h3>
                        <div>
                            <p><IoIosAddCircleOutline fontSize='25px' />Complete Blood Count</p>
                            <p><IoIosAddCircleOutline fontSize='25px' />Thyroid profile Total</p>
                            <p><IoIosAddCircleOutline fontSize='25px' />Diabetes Screening</p>
                            <p><IoIosAddCircleOutline fontSize='25px' />Liver Function Test</p>
                            <p><IoIosAddCircleOutline fontSize='25px' />COVID-RTPCR</p>
                            <p><IoIosAddCircleOutline fontSize='25px' />Lipid Profile</p>
                        </div>
                    </div>
                    <div>
                        <h3> <MdOutlineDisabledVisible fontSize='25px' /> VISIT A LAB NEAR YOU</h3>
                        <div>
                            <p><IoIosAddCircleOutline fontSize='25px' />Complete Blood Count</p>
                            <p><IoIosAddCircleOutline fontSize='25px' />Thyroid profile Total</p>
                            <p><IoIosAddCircleOutline fontSize='25px' />Diabetes Screening</p>
                            <p><IoIosAddCircleOutline fontSize='25px' />Liver Function Test</p>
                            <p><IoIosAddCircleOutline fontSize='25px' />COVID-RTPCR</p>
                            <p><IoIosAddCircleOutline fontSize='25px' />Lipid Profile</p>
                        </div>
                    </div>

                </div>
                <button><FiSearch /> FIND YOUR TESTS</button>
            </div>
            <img style={{ width: '80%', margin: 'auto', marginTop: "-30px" }} src="https://onemg.gumlet.io/marketing/64acdb55-3fa0-4e67-8291-c7eaf21730da.png" alt="" />
            <div className='LTviewall' >
                <h1>Popular health checkups</h1>
                <div>
                    <p>Popular Packages</p>
                    <p>Fever</p>
                    <p>Women Health</p>
                    <p>Diabetes</p>
                    <p>Fitness</p>
                    <p>Covid 19</p>
                    <p>Senior Citizen</p>
                    <p>Allergy Profiles</p>
                    <p>Lifestyle Habits</p>
                    <p>VIEW ALL</p>
                </div>
            </div>
            <div className='fourFlex' >
                <div>
                    <h2>Comprehen.. <p><MdOutlineHealthAndSafety fontSize='20px' /> SAFE</p> </h2>
                    <p>Includes 78 Tests</p>
                    <div>
                        <img src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto" alt="" />
                        <div>
                            <p>4.9 <AiFillStar /></p>
                            <h4>ISO</h4>
                        </div>
                    </div>
                    <p>Erythrocyte Sedimentation Rate HBsAg Screening (Rapid) Urine Routine & Microscopy</p>
                    <b>+ More</b>
                    <br /><br />
                    <h3>₹2099 <h3>₹4198</h3></h3>
                    <h6>50% off</h6>
                    <button>ADD TO CART</button>
                    <p><input type="checkbox" />Compare now</p>
                </div>
                <div>
                    <h2>Good H.. <p><MdOutlineHealthAndSafety fontSize='20px' /> SAFE</p> </h2>
                    <p>Includes 3 Tests</p>
                    <div>
                        <img src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto" alt="" />
                        <div>
                            <p>4.9 <AiFillStar /></p>
                            <h4>ISO</h4>
                        </div>
                    </div>
                    <p>Cholesterol - Total Thyroid Stimulating Hormone, Ultrasensitive Glycosylated </p>
                    <b>+ More</b>
                    <br /><br />
                    <h3>₹399 <h3>₹800</h3></h3>
                    <h6>50% off</h6>
                    <button>ADD TO CART</button>
                    <p><input type="checkbox" />Compare now</p>
                </div>
                <div>
                    <h2>Good H..<p><MdOutlineHealthAndSafety fontSize='20px' /> SAFE</p> </h2>
                    <p>Includes 58 Tests</p>
                    <div>
                        <img src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto" alt="" />
                        <div>
                            <p>4.9 <AiFillStar /></p>
                            <h4>ISO</h4>
                        </div>
                    </div>
                    <p>Urine Routine & Microscopy Lipid Profile Blood Urea and all your</p>
                    <b>+ More</b>
                    <br /><br />
                    <h3>₹649 <h3>₹1298</h3></h3>
                    <h6>50% off</h6>
                    <button>ADD TO CART</button>
                    <p><input type="checkbox" />Compare now</p>
                </div>
                <div>
                    <h2>Find the right health package for you</h2>

                    <button>{`VIEW NOW ${' >'}`}</button>
                    <img width='185px' src="https://www.1mg.com/images/popular_package.svg" alt="" />
                </div>


            </div>
            <div className='LTSixFlex' >
                <div>
                    <p>Featured Labs</p>
                    <p>VIEW ALL</p>
                </div>
                <div>
                    <div>
                        <img src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto" alt="" />
                        <div>
                            <p>4.9 <AiFillStar /> </p>
                            <p>ISO</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

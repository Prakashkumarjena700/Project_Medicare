import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./LabTests.css"
import { LabTests1stSlider, LabTests2ndSlider, LabTests3rdSlider } from './LabTestsSliders'

import { AiFillStar, AiOutlineArrowRight, AiOutlineHome } from "react-icons/ai";
import { MdOutlineDisabledVisible, MdOutlineHealthAndSafety } from 'react-icons/md'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'

import Upperfooter from "../Home/UpperFooter"
import Footer from '../Footer/Footer';

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
                    <h1>Featured Labs</h1>
                    <p>VIEW ALL</p>
                </div>
                <br />
                <div>
                    <div>
                        <img src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto" alt="" />
                        <div>
                            <p>4.9 <AiFillStar /> </p>
                            <p>ISO</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://onemg.gumlet.io/diagnostics/mlkrsnvxj3yqtbzxo4wj_new.png?format=auto" alt="" />
                        <div>
                            <p>4.9 <AiFillStar /> </p>
                            <p>ISO</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://onemg.gumlet.io/diagnostics/9a1a8b6a-0430-11ed-a791-02f62d44fe04.png?format=auto" alt="" />
                        <div>
                            <p>4.9 <AiFillStar /> </p>
                            <p>ISO</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://onemg.gumlet.io/diagnostics/Metropolis-logo_new.png?format=auto" alt="" />
                        <div>
                            <p>4.9 <AiFillStar /> </p>
                            <p>ISO</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://onemg.gumlet.io/diagnostics/af9ae47c-e473-11eb-8bd0-028ca395ba2a.png?format=auto" alt="" />
                        <div>
                            <p>4.9 <AiFillStar /> </p>
                            <p>ISO</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://onemg.gumlet.io/diagnostics/8d2584e0-fde7-11ec-bb3f-023cc772570e.png?format=auto" alt="" />
                        <div>
                            <p>4.9 <AiFillStar /> </p>
                            <p>ISO</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='LTvdodiv' >
                <div>
                    <h2>UNCOMPROMISED QUALITY. RELIABLE RESULTS. ALWAYS.</h2>
                    <p>Spending hours in a queue at a diagnostic lab or a hospital is now a thing of the past. With Tata 1mg you can get your lab tests done from the comfort of your home. Our highly qualified phlebotomist will collect the samples at your preferred time. Watch this video to see steps taken by us to ensure quality and hygiene in sample collection. Book your next lab test with Tata 1mg at the lowest price guaranteed!</p>
                </div>
                <div>
                    <iframe className='vdo' src="https://www.youtube.com/embed/_Bk2_nFVRI0" title="Tata 1mg Labs - India&#39;s trusted diagnostics lab chain" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className='LTreviewSlider' >
                <h2>Our Happy Customers</h2>
                <LabTests2ndSlider />
            </div>
            <h2 className='labpartnerHeading' style={{ fontSize: "25px", marginLeft: '10%', fontWeight: '700', textAlign: 'left' }} >Our Satisfied Lab Partners</h2>
            <LabTests3rdSlider />
            <div className='LTcontactus' >
                <h2>Want to book lab tests in bulk?</h2>
                <p>Get customized health packages at best prices</p>
                <button>CONTACT US <AiOutlineArrowRight /> </button>
            </div>
            <div className='LTlastdiv' >
                <div>
                    <img src="https://onemg.gumlet.io/image/upload/v1572602488/store_creatives_mccvjq.png" alt="" />
                </div>
                <div>
                    <h2>Download the TATA 1mg APP</h2>
                    <p>Book diagnostics tests online with certified labs at best prices</p>
                    <div className='playstoreBtn' >
                        <img width='150px'  src="https://onemg.gumlet.io/search_widget/google-badge_3x.png?format=auto" alt="" />
                        <img  width='150px' src="https://onemg.gumlet.io/search_widget/appstore-badge_3x.png?format=auto" alt="" />
                    </div>
                </div>
            </div>
            <Upperfooter/>
            <Footer/>
        </div>
    )
}

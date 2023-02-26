import React from 'react'
import "./LabTests.css"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const LabTests1stSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        arrows: false,
        autoplaySpeed: 2000,
    };
    return (
        <div className='LabTests1stSlider' >
            <Slider {...settings}>
                <div>
                    <img src="https://tpc.googlesyndication.com/simgad/16542661523791268187" alt="" />
                </div>
                <div>
                    <img src="https://tpc.googlesyndication.com/simgad/3718361489187288881" alt="" />
                </div>
                <div>
                    <img src="https://tpc.googlesyndication.com/simgad/4471357781581309399" alt="" />
                </div>
                <div>
                    <img src="https://tpc.googlesyndication.com/simgad/13407525655701978014" alt="" />
                </div>
                <div>
                    <img src="https://tpc.googlesyndication.com/simgad/13167634021786171304" alt="" />
                </div>
                <div>
                    <img src="https://tpc.googlesyndication.com/simgad/9674163125053183610" alt="" />
                </div>
            </Slider>
        </div>
    )
}
export const LabTests2ndSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        arrows: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className='LabTests2ndSlider' >
            <Slider {...settings}>
                <div>
                    <p>I got my wife's pregnancy tests done from 1mg. A trained technical visited to collect samples and all reports were delivered on time before her doctor's appointment. Will surely choose 1mg for the upcoming tests.</p>
                    <b>Vijay</b>
                </div>
                <div>
                    <p>My first booking experience with 1mg was simple and hassle-free. Selected sample collection slot on their app and the technician arrived right on time in the morning. Very impressive</p>
                    <b>Nikita</b>
                </div>
                <div>
                    <p>I regularly get tests done for my father, who is a diabetic patient. I like the convenience of home sample collection and quick delivery of test reports on my email.</p>
                    <b>Smriti</b>
                </div>
                <div>
                    <p>I was surprised to see the wide selection of labs and tests on 1mg. Now I can compare tests and packages based on prices and lab ratings and choose the best one for me and my family.</p>
                    <b>Chirg</b>

                </div>
                <div>
                    <p>I had to get an MRI done for my mother and a relative recommended 1mg. Booked the test online with a reputed lab near my home. Received a call from 1mg's radiology expert who helped us with test preparation instructions and appointment details. The experience inside lab was very good.</p>
                    <p>Anesha</p>
                </div>

            </Slider>
        </div>
    )
}
export const LabTests3rdSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 1000,
        arrows: false,
        autoplaySpeed: 2000,
    };
    return (
        <div className='LabTests3rdSlider' >
            <Slider {...settings}>
                <div className='firstDiv'  >
                    <div>
                        <h2>Strand Life Sciences Pvt. Ltd.</h2>
                        <p>"With a prompt and enthusiastic team, 1mg is a healthcare platform that genuinely cares about their customers. The diagnostic team of 1mg takes extra efforts to communicate and ..."</p>
                    </div>
                    <div>
                        <img src="https://onemg.gumlet.io/search_widget/strandls_logonew.png?format=auto" alt="" />
                    </div>
                </div>
                <div className='firstDiv' >
                    <div>
                        <h2>City X Ray And Scan Clinic</h2>
                        <p>"We are happy to collaborate with India’s most trusted healthcare online portal. They have an excellent customer support system which is approachable, trustworthy and knowledgeable."</p>
                    </div>
                    <div>
                        <img src="https://onemg.gumlet.io/search_widget/city-logo-option.png?format=auto" alt="" />
                    </div>
                </div>
                <div className='firstDiv' >
                    <div>
                        <h2>Thyrocare Laboratories</h2>
                        <p>"We wanted to collaborate with a diagnostic platform that shares our values of maintaining high quality at every step of the patient journey. From choosing the lab tests to deliverin.."</p>
                    </div>
                    <div>
                        <img src="https://onemg.gumlet.io/search_widget/thyrocare-logo.png?format=auto" alt="" />
                    </div>
                </div>
                <div className='firstDiv' >
                    <div>
                        <h2>Pathcare Laboratories Ltd.</h2>
                        <p>"1mg is an excellent patient-centric portal. It utilizes a panel of skilled phlebotomists who take blood samples in a hygienic way. 1mg makes constructive effort to ensure customer/ .."</p>
                    </div>
                    <div>
                        <img src="https://onemg.gumlet.io/search_widget/pathcare-labs-logo.png?format=auto" alt="" />
                    </div>
                </div>
                <div className='firstDiv' >
                    <div>
                        <h2>Mahajan Imaging Centre</h2>
                        <p>"Immensely impressed with 1mg’s outstanding professionalism and the quality of work. We recommend 1mg as a preferred destination for labs seeking a highly competent and trustworthy partner."</p>
                         </div>
                    <div>
                        <img src="https://onemg.gumlet.io/search_widget/logo.png?format=auto" alt="" />
                    </div>
                </div>

            </Slider>
        </div>
    )
}

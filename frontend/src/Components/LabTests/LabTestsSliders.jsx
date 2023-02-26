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
    return (
        <div>LabTestsSliders</div>
    )
}
export const LabTests3rdSlider = () => {
    return (
        <div>LabTestsSliders</div>
    )
}

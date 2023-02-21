import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Productpage.module.css";
const Productpage = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  let healthConcern = [
    {
      link: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png",
      title: "Diabetes Care",
    },
    {
      link: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png",
      title: "Cardiac Care",
    },
    {
      link: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/702457a8-ff7d-43a6-bd1d-6bcb278ce686.png",
      title: "Stomach Care",
    },
    {
      link: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/995e64ba-5bd9-42bc-8db6-5dc0b821c89d.png",
      title: "Liver Care",
    },
    {
      link: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png",
      title: "Joint & Muscle Care",
    },
    {
      link: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e77d5099-d905-4462-ab9d-b51802e3739b.png",
      title: "Kidney Care",
    },
    {
      link: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/6f9a726a-4a98-42e6-a834-67381be5e330.png",
      title: "Derma Care",
    },
    {
      link: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/4a788b46-97f3-460e-afb6-428368f779ee.png",
      title: "Respiratory Care",
    },
    {
      link: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/631e3dca-3d5b-49f8-832b-8341ec4784e7.png",
      title: "Eye Care",
    },
  ];
  return (
    <div>
      {/* swiper */}
      <div>
        <Slider {...settings}>
          <div>
            <img
              className={styles.swiperImg}
              src="https://onemg.gumlet.io/a_ignore,w_1270,h_250,c_fit,q_auto,f_auto/2611a3a5-7607-4f88-8bab-87f32ad41123.png"
              alt=""
            />
          </div>
          <div>
            <img
              className={styles.swiperImg}
              src="https://onemg.gumlet.io/b3a36498-4a1d-462f-8acd-f290e8ac324e_1676446245.jpg?w=1270&h=250&format=auto"
              alt=""
            />
          </div>
          <div>
            <img
              className={styles.swiperImg}
              src="https://onemg.gumlet.io/a_ignore,w_1270,h_250,c_fit,q_auto,f_auto/0131c789-e1f0-4920-8f8d-4b71760e32fc.png"
              alt=""
            />
          </div>
          <div>
            <img
              className={styles.swiperImg}
              src="https://onemg.gumlet.io/a_ignore,w_1270,h_250,c_fit,q_auto,f_auto/3be19880-8951-4ca5-b799-ae7cf661a13a.png"
              alt=""
            />
          </div>
          <div>
            <img
              className={styles.swiperImg}
              src="https://onemg.gumlet.io/a_ignore,w_1270,h_250,c_fit,q_auto,f_auto/290b5970-99ed-4022-b29e-095ad9b40199.png"
              alt=""
            />
          </div>
          <div>
            <img
              className={styles.swiperImg}
              src="https://onemg.gumlet.io/a_ignore,w_1270,h_250,c_fit,q_auto,f_auto/2778b93e-b1e6-43e0-a340-77779ba8cdd9.png"
              alt=""
            />
          </div>
        </Slider>
      </div>
      <p className={styles.swiperP}>
        Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
      </p>
      <img
        className={styles.carePlan}
        src="https://onemg.gumlet.io/marketing/29087450-0f25-4856-96fc-62f4ea81bbd3.png"
        alt=""
      />
      <div>
        <div className={styles.productSwiper}>
          <p>Shop by health concerns</p>
          <button>SEE ALL</button>
        </div>
        <div className={styles.productSwiper}>
          <div>
            <Slider {...settings1}>
              <div>
                {healthConcern.map((el) => (
                  <div>
                    {/* <img src={el.link} /> */}
                    <p style={{ marginLeft: "50px" }}>{el.title}</p>
                    {console.log(el)}
                  </div>
                ))}
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;

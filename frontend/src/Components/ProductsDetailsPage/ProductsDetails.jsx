import React, { useState } from "react";

import "./propductDel.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import CategoryBar from "../Navbar/CategoryBar";
import Footer from "../Footer/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  // console.log("id", id);

  const fetchData = () => {
    return axios.get(`https://glamorous-jumpsuit.cyclic.app/data/${id}`);
  };

  const setImg = (url) => {
    setImage(url);
  };

  const hendelADDToCart = (data) => {
    const objData = {
      name: data.name,
      highlights: data.highlights,
      price: data.price,
      brand: data.brand,
      uses: data.uses,
      form: data.form,
      rating: data.rating,
      img1: data.img1,
      img2: data.img2,
      img3: data.img3,
      img4: data.img4,
      img5: data.img5,
    };

    fetch("https://glamorous-jumpsuit.cyclic.app/cart/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(objData),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    alert("Product Added To Cart").catch((err) => console.log(err));

    console.log("cart", data);
    // navigate("/cart");
  };

  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res.data[0]);
        // console.log(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const [image, setImage] = useState(data.img1);

  // console.log("data", image);

  // console.log(id)

  return (
    <>
      <Navbar />
      <CategoryBar />
      <div id="product">
        <div className="productdel">
          <div style={{  border:"1px solid gray" ,height:"500px",borderRadius:"10px" }}>
            <div className="productimg">
              <img
                onClick={() => setImg(data?.img1)}
                src={
                  data?.img1 ||
                  "https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg"
                }
                alt="a"
              />
              <img
                onClick={() => setImage(data?.img2)}
                src={
                  data?.img2 ||
                  "https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg"
                }
                alt="a"
              />
              <img
                onClick={() => setImage(data?.img3)}
                src={
                  data?.img3 ||
                  "https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg"
                }
                alt="a"
              />
              <img
                onClick={() => setImage(data?.img4)}
                src={
                  data?.img4 ||
                  "https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg"
                }
                alt="a"
              />
              <img
                onClick={() => setImage(data?.img5)}
                src={
                  data?.img5 ||
                  "https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg"
                }
                alt="a"
              />
            </div>

            <div className="producttop">
              <img
                src={
                  image ||
                  "https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg"
                }
                alt="products_id"
              />
            </div>
          </div>
          <div className="productheding">
            <h1>
              {data?.name ||
                "Tata 1mg Women's Multivitamin, Zinc, Vitamin C, Calcium, Vitamin D, and Iron Immunity Booster Tablet"}
            </h1>

            <div
              style={{
                margin: "10px",
                fontSize: "15px",
                lineHeight: "17px",
                
              }}
            >
              {data?.brand || "Tata 1mg Healthcare Solutions Private Limited"}
            </div>
            <div
              className="rating"
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: "2x",
                backgroundColor: "#1aab2a",
                // color:black
                fontWeight: "bold",
                fontSize: "19px",
                margin: "10px",
              }}
            >
              {data?.rating || "3.5"}
            </div>
            <p
              style={{
                marginLeft: "80px",
                fontSize: "15px",
                marginTop: "-38px",
                color: "#ff6f61",
              }}
            >
              {data?.numberOfRatings || "1023 Ratings & 185 Reviews"}
            </p>
            <div
              style={{
                margin: "15px",
                marginTop:"30px",
                fontSize: "15px",
                lineHeight: "17px",
                
              }}
            >
              <img
                style={{ width: "30px", height: "30" }}
                src="https://onemg.gumlet.io/marketing/qubet60eokwth4ki5btj.png"
              />
              <p
                style={{
                  marginTop: "-25px",
                  fontSize: "15px",
                  lineHeight: "17px",
                 
                  marginLeft: "40px",
                }}
              >
                {data?.highlights ||
                  "Tata 1mg Healthcare Solutions Private Limited"}
              </p>
            </div>
            <div
              style={{
                marginTop: "30px",
                fontSize: "20px",
                marginLeft: "10px",
              }}
            >
              <h3>Pack Size (2)</h3>
              <div
                style={{
                  fontSize: "15px",
                  marginLeft: "10px",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <div className="bottel">
                  <p>30 tablets</p>
                  <p>{data?.price || "₹225"}</p>
                </div>
                <div className="bottel">
                  <p>30 tablets</p>
                  <p>₹415</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "10px" }}>
              <h4>Product highlights</h4>
              <ul style={{ fontSize: "15px" }}>{data.longdesc}</ul>
            </div>
          </div>

          <div className="produ">
            <div className="productcard">
              <div
                className="div1"
                style={{
                  width: "100%",
                  height: "40px",
                  alignItems: "center",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  border:"0px solid red"
                }}
              >
                <img
                  style={{ marginLeft: "10px", width: "20px", height: "20px"}}
                  src="https://www.1mg.com/images/social_cue.svg"
                />
                <p
                  style={{
                    fontWeight: "400px",
                    fontSize: "15px",
                    lineHeight: "17px",
                    marginLeft: "50px",
                    marginTop: "-10px",
                  }}
                >
                  385 people bought this recently
                </p>
              </div>

              <div style={{ fontSize: "20px", margin: "20px" }}>
                <input
                  style={{
                    marginLeft: "15px",
                    height: "20px",
                    width: "20px",
                  }}
                  name="pcheck"
                  value={data?.price || "₹500"}
                  type="radio"
                />
                &nbsp;&nbsp;
                <label htmlFor="price">₹ {data?.price || "₹500"}</label>
                {/* <p
                  style={{
                    color: "#666666",
                    textDecoration: "line-through",
                    fontSize: "18px",
                    lineHeight: "23px",
                    marginTop: "-28px",
                    marginLeft: "110px",
                  }}
                >
                  ₹ {data?.strikedPrice || "999"}
                </p> */}
                <p
                  style={{
                    fontWeight: "400",
                    color: "#42ba4f",
                    fontSize: "18px",
                    marginTop: "-25px",
                    marginLeft: "250px",
                  }}
                >
                  {data?.discount || "50"}% off
                </p>
              </div>

              <div style={{ fontSize: "20px", margin: "20px" }}>
                <input
                  style={{
                    marginLeft: "15px",
                    height: "20px",
                    width: "20px",
                  }}
                  name="pcheck"
                  value="500"
                  type="radio"
                />
                &nbsp;&nbsp;
                <label htmlFor="price">₹ 700</label>
                <img
                  style={{
                    fontWeight: "500",
                    color: "#42ba4f",
                    fontSize: "16px",
                    marginTop: "-25px",
                    marginLeft: "100px",
                  }}
                  src="https://res.cloudinary.com/du8msdgbj/image/upload/v1613645053/marketing/phb2bz61etrdmuurfdoq.png"
                  alt=""
                />
                {/* <p
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    
                    marginLeft: "180px",
                    border:"1px solid red"
                  }}
                >
                  member price free shipping and 5% Extra cashback
                </p> */}
              </div>
              <div style={{ fontSize: "15px",border:"0px solid red",display:"flex",margin:"5px"}}>
                <div style={{ width:"40%",border:"0px solid red" }}>Inclusive of all taxes</div>
                <div style={{ width:"60%",border:"0px solid red" }}>  member price free shipping and 5% Extra cashback</div>
                  
              </div>
              <div className="btn">
                <button
                 style={{width:"100%",height:"40px",borderRadius:"10px", backgroundColor:" #ee4a3c",color:"white"}}
                  className="btn1"
                  // type="submit"
                  onClick={() => hendelADDToCart(data)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="dates1">
              <p>
                <span>Earliest delivery by</span>{" "}
                <span className="contain"> 5pm, Tomorrow</span>{" "}
              </p>
              <p>
                Delivering to: <span> 110020, New Delhi </span>
              </p>
            </div>

            <div style={{ marginTop: "20px" }}>
              <img
                style={{ width: "500px" }}
                src="https://onemg.gumlet.io/58aeea63-bdc4-48ce-be10-0f5d31a99dfe_1667671530.jpg?w=410&h=94&format=auto"
              />
            </div>
            <div className="offer">
              <p>
                <span>Amazon Pay :</span> Pay with Amazon Pay and win up to ₹500
                cashback.
                <br />
                Valid only on minimum order value of ₹399. Valid till
                <br />
                28th Feburary 2023.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;

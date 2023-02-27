import React, { useState } from "react";
import "./Cart.css";
// import { Item } from "./Item";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import CategoryBar from "../Navbar/CategoryBar";

export const Cart = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [state, setState] = useState(true);
  const [sum, setSum] = useState(0);

  const hendelDelete = (id) => {
    fetch(`https://glamorous-jumpsuit.cyclic.app/cart/delete/${id}`, {
      method: "Delete",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setState(!state);
        // getTotal(data);
      })
      .catch((err) => console.log(err));

    // console.log("cart", data);
    // navigate("/cart");
    // Delete();
    console.log("id", id);
  };

  const hendelADDToCart = async () => {
    let alldata = await fetch(
      "https://glamorous-jumpsuit.cyclic.app/cart/usercart",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    let res = await alldata.json();
    setData(res);
    await getTotal(res);
    // .then((res) => res.json())
    // .then((res) => {
    //   setData(res);
    //   // getTotal(res);
    // })
    // .catch((err) => console.log(err));

    console.log("cart", data);
    navigate("/cart");
  };

  function getTotal(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i].price;
    }
    setSum(total);
    localStorage.setItem("total", total);
  }

  useEffect(() => {
    hendelADDToCart();
  }, [state, setState]);

  const discountPrice = 0;

  const handleChange = (id, change) => { };

  return (
    <>
     <Navbar />
      <CategoryBar />
      <div className={"container"}>
        <div className="left-container">
          <p>Items NOT Requiring Prescription</p>
          <div>
            {data !== undefined ? (
              data.map((item) => {
                return (
                  <div className="Item-conatiner">
                    <div className="left-item-container">
                      <h6>{item.name}</h6>
                      <p>{item.highlights}</p>
                    </div>
                    <div className="right-item-container">
                      <div
                        className="remove-div"
                        onClick={() => {
                          hendelDelete(item._id);
                        }}
                      >
                        <img
                          src="https://img.1mg.com/images/delete_icon.svg"
                          alt="remove"
                        />{" "}
                        <p>Remove</p>
                      </div>
                      <div className="removeh6">
                        <h6 style={{ marginTop: "20px" }}>₹ {item.price}</h6>
                      </div>
                      {/* <div className="quantity-div">
                      <div
                      // disabled={quantity === 1}
                      // onClick={}
                      >
                        <img
                          src="https://www.1mg.com/images/minus-cart.svg"
                          alt="minus"
                          width={"70px"}
                        />
                      </div>
                      <div>
                        <p>{item.rating}</p>
                      </div>
                      <div
                      // onClick={}
                      >
                        <img
                          src="https://www.1mg.com/images/plus-cart.svg"
                          alt="plus"
                          width={"70px"}
                        />
                      </div>
                    </div> */}
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>Null</h1>
            )}
          </div>
          {/* <p>Deals from Dettol</p> */}
        </div>
        <div className="right-container">
          <div className="coupon-div">
            <img
              src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png"
              alt="care-logo"
              width="90px"
            />
            <p>You can save extra ₹27 on this order</p>
            <p>Become a member</p>
            <p>
              Care plan membership ₹ 165{" "}
              <span style={{ "text-decoration": "line-through" }}>₹ 549</span> / 3
              months
            </p>
            <div className="coupon-button">
              <button>Know More</button>
              <button>Add to cart</button>
            </div>
            <hr />
            <div className="apply-coupon">
              <h4>Apply Coupon</h4>
            </div>
          </div>
          <div className="health-div">
            <div className="health-div1">
              <p>Check the health of your vital organs</p>
            </div>
            <div className="health-child">
              <div>
                <input type="checkbox" />
              </div>
              <div>
                <p>Book Good Health Silver Package for just ₹649</p>
                <p>
                  Get the tests done easily from your home. This package will help
                  you in identifying potential disorders and deficiencies at an
                  early stage.
                </p>
                <p>Pay later on home sample collection</p>
              </div>
            </div>
          </div>
          <div className="neocoins">
            <div className="neocoin-div1">
              <div className="left-neocoin-div1">
                <img
                  src="https://res.cloudinary.com/du8msdgbj/image/upload/v1645088829/210921_TataNeu_appicon_light_24px_circle_3_1x_vxwibw.png"
                  alt="neocoin"
                  width="30px"
                />
                <p>My NeuCoins</p>
              </div>
              <div className="right-neocoin-div1">
                <p>
                  Balance: <b>0 NeuCoin</b>
                </p>
              </div>
            </div>
            <hr />
            <div className="neocoin-div2">
              <h6>
                <b> 5.49 </b>NeuCoins to be earned on this order*
              </h6>
              <div className="neocoin-div2-div1">
                <img
                  src="https://onemg.gumlet.io/image/upload/v1632494429/jyjhkjmghzvoxovlqmli.png"
                  alt="icon"
                  width="20px"
                  background-color="#FFE0CC"
                />
                <p>Extra 27.45 NeuCoins for care Plan members cp</p>
                <img
                  src="https://onemg.gumlet.io/image/upload/v1632494457/sleif8m2hf1wj1jp0ylp.png"
                  alt="icon"
                  width="20px"
                />
              </div>
              <h4>Add care plan to cart</h4>
            </div>
          </div>
          <div className="payment-div">
            <div className="pay-div">
              <p>Item Total(MRP)</p>
              <p>₹ {sum}</p>
            </div>
            <div className="pay-div">
              <p>Price Discount</p>
              <p>-₹ {discountPrice}</p>
            </div>
            <hr />
            <div className="pay-div">
              <p>Shipping Fee</p>
              <p>₹0</p>
            </div>
            <hr />
            <div className="pay-div fs-14">
              <p>To be paid</p>
              <p>₹ {sum - discountPrice}</p>
            </div>
            <hr />
            <div className="pay-div bg-grey fs-14 col-grn">
              <p>Total Savings</p>
              <p>₹ {discountPrice}</p>
            </div>
          </div>
          <div className="checkout">
            {/* <div className="checkout-div">
            <p>Your delivery location</p>
            <h6>Latur</h6>
          </div> */}
            <Link to={"/addresspage"}>
              <button
                onClick={(sum) =>
                  localStorage.setItem("total", JSON.stringify(sum))
                }
              >
                CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";
import "./Cart.css";
import { useEffect } from "react";
import { useState } from "react";
import upiImage from "./images/upi.png";
import walletsImage from "./images/wallets.png";
import cardsImage from "./images/cards.png";
import netbankingImage from "./images/netbanking.png";
import payondeliveryImage from "./images/payondelivery.png";
import { useNavigate } from "react-router";
import CategoryBar from "../Navbar/CategoryBar";
import Navbar from "../Navbar/Navbar";

export const Payment = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => { }, []);

  useEffect(() => {
    setImage(upiImage);
  }, []);

  const totalPrice =
    data?.reduce(
      (acc, item) => acc + Number(item.strikedPrice * item.quantity),
      0
    ) || 0;

  const discountPrice =
    data?.reduce(
      (acc, item) =>
        acc +
        Number([(item.discount / 100) * item.strikedPrice] * item.quantity),
      0
    ) || 0;

  const handleImage = (name) => {
    if (name === "upi") setImage(upiImage);
    else if (name === "wallets") setImage(walletsImage);
    else if (name === "cards") setImage(cardsImage);
    else if (name === "netbanking") setImage(netbankingImage);
    else if (name === "payondelivery") setImage(payondeliveryImage);
    else setImage(upiImage);
  };

  return (
    <>
     <Navbar />
      <CategoryBar />
    <div className={"container"}>
      <div className="left-payment">
        <div className="pay-left">
          <div onClick={() => handleImage("upi")}>
            <img
              src="https://onemg.gumlet.io/image/upload/zf0de2srckrhx3fk8blm.png"
              width={"40px"}
              alt="logo"
            />
            <p>UPI</p>
          </div>
          <div className="pay-right">
            <img src={image} alt="payment-logos" />
          </div>
        </div>
        <div className="right-container">
          <div className="payment-div">
            <div className="pay-div">
              <p>Item Total(MRP)</p>
              <p>₹ {localStorage.getItem("total")}</p>
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
              <p>₹ {localStorage.getItem("total") - discountPrice}</p>
            </div>
            <hr />
            <div className="pay-div bg-grey fs-14 col-grn">
              <p>Total Savings</p>
              <p>₹ {discountPrice}</p>
            </div>
          </div>
          <div className="checkout">
            <button
              onClick={() => {
                alert("Order Placed Successfully...");
                navigate("/");
              }}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="payment-div">
          <div className="pay-div">
            <p>Item Total(MRP)</p>
            <p>₹ {localStorage.getItem("total")}</p>
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
            <p>₹ {localStorage.getItem("total") - discountPrice}</p>
          </div>
          <hr />
          <div className="pay-div bg-grey fs-14 col-grn">
            <p>Total Savings</p>
            <p>₹ {discountPrice}</p>
          </div>
        </div>
        <div className="checkout">
          <button
            onClick={() => {
              alert("Order Placed Successfully...");
              navigate("/");
            }}
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

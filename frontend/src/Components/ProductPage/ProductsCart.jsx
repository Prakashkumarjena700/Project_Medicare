import { Flex } from "@chakra-ui/react";
import React from "react";
import "./Products.css";
import { ImStarEmpty } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";

export const ProductsCart = ({ product }) => {
  const navigate = useNavigate();

  const trucncateString = (str) => {
    if (str?.length > 50) {
      return str.slice(0, 100) + "...";
    } else {
      return str;
    }
  };

  const handleDetails = (id) => {
    navigate(`/product/${id}`);
    // console.log(id, "id");
  };

  return (
    <div className="productCart_container" style={{ backgroundColor: "white" }}>
      <div
        className="product_image"
        style={{ backgroundColor: "white" }}
        onClick={() => handleDetails(product._id)}
      >
        <img src={product.img1} alt="product" />
      </div>

      <div className="product_details">
        <div
          className="product_header"
          style={{
            height: "50px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <h3 style={{ color: "#213253", fontSize: "14px" }}>{product.name}</h3>
        </div>
        <div
          className="product_quantity"
          style={{ width: "100%", padding: "0 0 5px 0" }}
        >
          <p style={{ color: "#757575", fontSize: "12px" }}>
            {trucncateString(product.highlights)}
          </p>
        </div>
        <div className="product_rating">
          <Flex gap={2}>
            <div
              style={{
                background: "#1AAB2A",
                padding: "2px 7px",
                borderRadius: "2px",
              }}
            >
              <Flex gap={1} ptb={1} style={{ fontWeight: "800" }}>
                <p style={{ color: "#FFFFFF", fontSize: "12px" }}>
                  {product.ratings}
                </p>
                <div style={{ color: "#FFFFFF", fontSize: "12px" }}>
                  <ImStarEmpty />
                </div>
              </Flex>
            </div>
            <p style={{ color: "#00000094", fontSize: "12px" }}>
              {product.numberOfRatings}
            </p>
          </Flex>

          <Flex
            gap={2}
            style={{
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            <div style={{ color: "#1AAB2A" }}>{product.discount}% OFF</div>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            style={{
              // border: "1px solid red",
              width: "100%",
              fontWeight: "600",
            }}
          >
            <h2>₹{product.price}</h2>
            <Flex
              gap={1}
              alignItems="center"
              className="add_btn"
              //   onClick={() => handleAddToCart(product._id)}
            >
              <FaCartPlus />
              ADD
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
};

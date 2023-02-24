import React, { useEffect, useState } from "react";
import "./Products.css";
import { ProductsCart } from "./ProductsCart";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import "./Sidebar.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import CategoryBar from "../Navbar/CategoryBar";

export const Products = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const fetchData = () => {
    return axios.get(`https://glamorous-jumpsuit.cyclic.app/data/`);
  };


  const handleOnChange = (e) => {

    console.log(e.target.value, "val");
    console.log(e.target.checked, "checked");
    console.log(e, "e");
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <CategoryBar />
      <div className="main_container">
        <div className="sidebar">
          <div className="sidebar_container">
            <div className="filter">
              <div style={{ fontWeight: "700" }}>FILTERS</div>
              <div
                style={{
                  fontWeight: "700",
                  padding: "10px 0px",
                  borderTop: "1px solid grey",
                  marginTop: "10px",
                }}
              >
                BRANDS
              </div>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    type="checkbox"
                    value="Tata 1mg"
                    // checked={isChecked}
                    onChange={(e) => handleOnChange(e)}
                  />
                  <label>Tata 1mg</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    type="checkbox"
                    value="Other"
                    onChange={(e) => handleOnChange(e)}
                  />
                  <label>Other</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    type="checkbox"
                    value="Mom & World"
                    onChange={(e) => handleOnChange(e)}
                  />
                  <label>Mom & World</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    type="checkbox"
                    value="MuscleXP"
                    checked={isChecked}
                    onChange={(e) => handleOnChange(e.target.value)}
                  />
                  <label>MuscleXP</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    type="checkbox"
                    value="Horlicks"
                    checked={isChecked}
                    onChange={(e) => handleOnChange(e.target.value)}
                  />
                  <label>Horlicks</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    type="checkbox"
                    value="Jiva"
                    checked={isChecked}
                    onChange={(e) => handleOnChange(e.target.value)}
                  />
                  <label>Jiva</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    type="checkbox"
                    value="Optimum Nutrition"
                    checked={isChecked}
                    onChange={(e) => handleOnChange(e.target.value)}
                  />
                  <label>Optimum Nutrition</label>
                </div>
              </Flex>
            </div>

            {/* ----------------------------Filter by discount---------------------------------------------- */}

            <div className="discount">
              <div
                style={{
                  fontWeight: "700",
                  padding: "10px 0px",
                  borderTop: "1px solid grey",
                  marginTop: "10px",
                }}
              >
                DISCOUNTS
              </div>
              <div>
                <Flex>
                  <input
                    type="checkbox"
                    value="0"
                    checked={isChecked}
                    onChange={(e) => handleOnChange(e.target.value)}
                  />
                  <label>Reset Filter</label>
                </Flex>
              </div>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    type="checkbox"
                    value="10"
                    checked={isChecked}
                    onChange={(e) => handleOnChange(e.target.value)}
                  />
                  <label>10% and above</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    type="checkbox"
                    value="20"
                    checked={isChecked}
                    onChange={(e) => handleOnChange(e.target.value)}
                  />
                  <label>20% and above</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    type="checkbox"
                    value="30"
                    checked={isChecked}
                    onChange={(e) => handleOnChange(e.target.value)}
                  />
                  <label>30% and above</label>
                </div>
              </Flex>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="filter" style={{ padding: "20px" }}>
            <img
              style={{ width: "100%", marginBottom: "3%" }}
              src="https://onemg.gumlet.io/q_auto,h_124,f_auto,a_ignore,w_1062/d603bb37-eb4d-4293-8517-2831f6fbeb2a.jpg"
              alt=""
            />
            <img
              style={{ width: "100%", marginBottom: "3%" }}
              src="https://onemg.gumlet.io/q_auto,h_124,f_auto,a_ignore,w_1062/yssmzvksntwscd6njtjo.png"
              alt=""
            />
            <Flex className="flex" justifyContent={"space-between"}>
              <h1 style={{ fontWeight: "600", fontSize: "20px" }}>
                All Products
              </h1>
              <div>
                <Flex gap={2} className="flex">
                  <h2 className="flexH2" style={{ fontWeight: "700" }}>
                    Sort By
                  </h2>
                  <select
                    // onChange={(e) => handelSelect(e.target.value)}
                    style={{
                      border: "1px solid grey",
                      fontWeight: "600",
                      // width: "50%",
                    }}
                  >
                    <option value="rel">Relevance</option>
                    <option value="plth">Price: Low To High</option>
                    <option value="phtl">Price: High To Low</option>
                    <option value="rlth">Rating: Low To High</option>
                    <option value="rhtl">Rating: High To Low</option>
                  </select>
                </Flex>
              </div>
            </Flex>
          </div>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px">
            {data?.map((item) => {
              return <ProductsCart key={item._id} product={item} />;
            })}
          </SimpleGrid>
        </div>
      </div>
      <Footer />
    </>
  );
};

import React, { useEffect, useState } from "react";
import "./Products.css";
import { ProductsCart } from "./ProductsCart";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { Sidebar } from "./Sidebar";

export const Products = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    return axios.get(`https://glamorous-jumpsuit.cyclic.app/data/`);
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
      <div className="main_container">
        <div className="sidebar">{<Sidebar />}</div>
        <div className="product">
          <div style={{ padding: "20px" }}>
            <Flex justifyContent={"space-between"}>
              <h1 style={{ fontWeight: "600", fontSize: "20px" }}>
                All Products
              </h1>
              <div>
                <Flex gap={2}>
                  <h2 style={{ fontWeight: "700" }}>Sort By</h2>
                  <select
                    // onChange={(e) => handelSelect(e.target.value)}
                    style={{ border: "1px solid grey", fontWeight: "600" }}
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
    </>
  );
};

import React, { useEffect, useState } from "react";
import "./Products.css";
import { ProductsCart } from "./ProductsCart";
import { Flex, SimpleGrid, FormControl, Button } from "@chakra-ui/react";
import axios from "axios";
import "./Sidebar.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import CategoryBar from "../Navbar/CategoryBar";
import { useSearchParams } from "react-router-dom";

export const Products = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(true);
  const [page, setPage] = useState(0);

  const SortBy = (head, val, e) => {
    let searchobj = {};
    if (searchParams.get("sort")) {
      searchobj.sort = searchParams.get("sort");
    }
    if (searchParams.get("order")) {
      searchobj.order = searchParams.get("order");
    }
    if (searchParams.get("brand")) {
      searchobj.brand = searchParams.get("brand");
    }
    if (searchParams.get("uses")) {
      searchobj.uses = searchParams.get("uses");
    }

    if (head === "price" && val == 1) {
      searchobj.sort = "price";
      searchobj.order = 1;
    }
    if (head === "price" && val == -1) {
      searchobj.sort = "price";
      searchobj.order = -1;
    }
    if (head === "rating" && val == 1) {
      searchobj.sort = "rating";
      searchobj.order = 1;
    }
    if (head === "rating" && val == -1) {
      searchobj.sort = "rating";
      searchobj.order = -1;
    }

    if (e.target.checked === true) {
      if (head === "brand") {
        searchobj.brand = val;
      } else if (head === "uses") {
        searchobj.uses = val;
      }
    } else if (e.target.checked === false) {
      if (head === "brand") {
        if (searchobj.brand === val) {
          delete searchobj.brand;
        }
      } else if (head === "uses") {
        if (searchobj.uses === val) {
          delete searchobj.uses;
        }
      }
    }

    setSearchParams(searchobj);
    // console.log("searchobj", searchobj);
    setQuery(!query);
  };

  const handleOnChange = (e) => {
    // console.log(e.target.value, "val");
    // console.log(e.target.checked, "checked");
    // console.log(e, "e");
  };
  useEffect(() => {
    axios
      // https://glamorous-jumpsuit.cyclic.app/data/?sort=name&order=1
      .get(
        `https://glamorous-jumpsuit.cyclic.app/data/?limit=12&skip=${page}${
          searchParams.get("sort") ? `&sort=${searchParams.get("sort")}` : ``
        }${
          searchParams.get("order") ? `&order=${searchParams.get("order")}` : ``
        }${
          searchParams.get("brand") ? `&brand=${searchParams.get("brand")}` : ``
        }${searchParams.get("uses") ? `&uses=${searchParams.get("uses")}` : ``}`
      )
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [query, page]);

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
                    id="Tata 1mg"
                    type="checkbox"
                    onChange={(e) => SortBy("brand", "Tata 1mg", e)}
                  />
                  <label for="Tata 1mg">Tata 1mg</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Sugar Free"
                    type="checkbox"
                    onChange={(e) => SortBy("brand", "Sugar Free", e)}
                  />
                  <label for="Sugar Free">Sugar Free</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Protinex"
                    type="checkbox"
                    onChange={(e) => SortBy("brand", "Protinex", e)}
                  />
                  <label for="Protinex">Protinex</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Cetaphil"
                    type="checkbox"
                    onChange={(e) => SortBy("brand", "Cetaphil", e)}
                  />
                  <label for="Cetaphil">Cetaphil</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Oziva"
                    type="checkbox"
                    onChange={(e) => SortBy("brand", "Oziva", e)}
                  />
                  <label for="Oziva">Oziva</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Dr Morepen"
                    type="checkbox"
                    onChange={(e) => SortBy("brand", "Dr Morepen", e)}
                  />
                  <label for="Dr Morepen">Dr Morepen</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Dr Reddy's"
                    type="checkbox"
                    onChange={(e) => SortBy("brand", "Dr Reddy's", e)}
                  />
                  <label for="Dr Reddy's">Dr Reddy's</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Dabur"
                    type="checkbox"
                    onChange={(e) => SortBy("brand", "Dabur", e)}
                  />
                  <label for="Dabur">Dabur</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Baidyanath"
                    type="checkbox"
                    onChange={(e) => SortBy("brand", "Baidyanath", e)}
                  />
                  <label for="Baidyanath">Baidyanath</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Himalaya"
                    type="checkbox"
                    onChange={(e) => SortBy("brand", "Himalaya", e)}
                  />
                  <label for="Himalaya">Himalaya</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Zandu"
                    type="checkbox"
                    onChange={(e) => SortBy("brand", "Zandu", e)}
                  />
                  <label for="Zandu">Zandu</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Hamdard"
                    type="checkbox"
                    onChange={(e) => SortBy("brand", "Hamdard", e)}
                  />
                  <label for="Hamdard">Hamdard</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Wow"
                    type="checkbox"
                    onChange={(e) => SortBy("brand", "Wow", e)}
                  />
                  <label for="Wow">Wow</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Patanjali"
                    type="checkbox"
                    onChange={(e) => SortBy("brand", "Patanjali", e)}
                  />
                  <label for="Patanjali">Patanjali</label>
                </div>
              </Flex>
            </div>

            {/* ----------------------------Filter by speciality---------------------------------------------- */}

            <div className="discount">
              <div
                style={{
                  fontWeight: "700",
                  padding: "10px 0px",
                  borderTop: "1px solid grey",
                  marginTop: "10px",
                }}
              >
                SPECIALITY
              </div>

              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Eye Care"
                    type="checkbox"
                    onChange={(e) => SortBy("uses", "Eye Care", e)}
                  />
                  <label for="Eye Care">Eye Care</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Liver Care"
                    type="checkbox"
                    onChange={(e) => SortBy("uses", "Liver Care", e)}
                  />
                  <label for="Liver Care">Liver Care</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Derma Care"
                    type="checkbox"
                    onChange={(e) => SortBy("uses", "Derma Care", e)}
                  />
                  <label for="Derma Care">Derma Care</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Stomach Care"
                    type="checkbox"
                    onChange={(e) => SortBy("uses", "Stomach Care", e)}
                  />
                  <label for="Stomach Care">Stomach Care</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Diabetes Care"
                    type="checkbox"
                    onChange={(e) => SortBy("uses", "Diabetes Care", e)}
                  />
                  <label for="Diabetes Care">Diabetes Care</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Cardiac Care"
                    type="checkbox"
                    onChange={(e) => SortBy("uses", "Cardiac Care", e)}
                  />
                  <label for="Cardiac Care">Cardiac Care</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Bone, Joint and Muscle Care"
                    type="checkbox"
                    onChange={(e) =>
                      SortBy("uses", "Bone, Joint and Muscle Care", e)
                    }
                  />
                  <label for="Bone, Joint and Muscle Care">
                    Bone, Joint and Muscle Care
                  </label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Kidney Care"
                    type="checkbox"
                    onChange={(e) => SortBy("uses", "Kidney Care", e)}
                  />
                  <label for="Kidney Care">Kidney Care</label>
                </div>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <div>
                  <input
                    id="Respiratory Care"
                    type="checkbox"
                    onChange={(e) => SortBy("uses", "Respiratory Care", e)}
                  />
                  <label for="Respiratory Care">Respiratory Care</label>
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
                    onChange={(e) =>
                      //  SortBy(value,"PENCIL", e)
                      {
                        if (e.target.value == "plth") {
                          SortBy("price", 1, e);
                        } else if (e.target.value == "phtl") {
                          SortBy("price", -1, e);
                        } else if (e.target.value == "rlth") {
                          SortBy("rating", 1, e);
                        } else if (e.target.value == "rhtl") {
                          SortBy("rating", -1, e);
                        } else {
                          SortBy("", "", e);
                        }
                      }
                    }
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
      <button
        className="prevbtn"
        onClick={() => setPage(page - 12)}
        disabled={page < 12}
      >
        Prev
      </button>
      <button
        className="prevbtn"
        onClick={() => setPage(page + 12)}
        disabled={page >= 96}
      >
        Next
      </button>
      <Footer />
    </>
  );
};

import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Input,
  Flex
} from "@chakra-ui/react";

import "./styles/Inventory.css";

import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import {AiOutlineSortAscending,AiOutlineSortDescending} from "react-icons/ai"
import axios from "axios";

const Inventory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [name, setName] = useState("");
  const [img1, setImg1] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  
  const [update, setUpdate] = useState("");

  useEffect(() => {
    fetchData();
  }, [skip]);

  const fetchData = async () => {
    let res = await axios.get(
      `https://glamorous-jumpsuit.cyclic.app/data?limit=5&skip=${skip}`
    );
    //  console.log(res.data.length)
    setData(res.data);
  };

  async function UpdateData(id) {
    const payload = {
      name,
      img1,
      brand,
      price,
    };

    let res = await axios.patch(
      `https://glamorous-jumpsuit.cyclic.app/products/update/${id}`,
      payload
    );
    console.log(res);
    fetchData();
  }

  const Delete = async (id) => {
    let res = await axios.delete(
      `https://glamorous-jumpsuit.cyclic.app/products/delete/${id}`
    );
    console.log(res);
    fetchData();
  };

  // <-----------------sorting by brand -------------------->
  const ascendingbrand = async () => {
    let res = await axios.get(
      `https://glamorous-jumpsuit.cyclic.app/data/?sort=brand&order=1`
    );
    //  console.log(res.data.length)
    setData(res.data);
    fetchData();
  };

  const descendingbrand = async () => {
    let res = await axios.get(
      `https://glamorous-jumpsuit.cyclic.app/data/?sort=brand&order=-1`
    );
    //  console.log(res.data.length)
    setData(res.data);
    fetchData();
  };

// <-----------------sorting by price --------------->
  const ascendingprice = async () => {
    let res = await axios.get(
      `https://glamorous-jumpsuit.cyclic.app/data/?sort=price&order=1`
    );
    //  console.log(res.data.length)
    setData(res.data);
    fetchData();
  };

  const descendingprice = async () => {
    let res = await axios.get(
      `https://glamorous-jumpsuit.cyclic.app/data/?sort=price&order=-1`
    );
    //  console.log(res.data.length)
    setData(res.data);
    fetchData();
  };

  return (
    <>
      <TableContainer className="one">
        <Table>
          <Thead className="head">
            <Tr className="two">
              <Th fontSize={"18px"} className="three">
                Image
              </Th>
              <Th fontSize={"18px"} className="three">
              <Flex gap={"20px"}>
              <AiOutlineSortAscending id="fsize"  />
              Name
                <AiOutlineSortDescending  id="fsize"/>
                </Flex>

              </Th>
              <Th fontSize={"18px"} className="three">
                Product Id
              </Th>

              <Th fontSize={"18px"} className="three">
                <Flex gap={"20px"}>
                <AiOutlineSortAscending  onClick={()=>ascendingprice()} id="fsize" />
                Price
                <AiOutlineSortDescending onClick={()=>descendingprice()}  id="fsize"/>
                </Flex>
               
                 
              </Th>
              <Th fontSize={"18px"} className="three">
                <Flex gap={"20px"}>
              <AiOutlineSortAscending onClick={()=>ascendingbrand()} id="fsize" />
              Brand
                <AiOutlineSortDescending  onClick={()=>descendingbrand()}  id="fsize"/>
                </Flex>
              </Th>
              <Th fontSize={"18px"} className="three">
                Edit
              </Th>
              <Th fontSize={"18px"} className="three">
                Delete
              </Th>
            </Tr>
          </Thead>

          {data.map((ele) => {
            return (
              <Tbody>
                <Tr className="two">
                  <Td>
                    {" "}
                    <img src={ele.img1} alt="" />{" "}
                  </Td>

                  <Td>{ele.name.substring(0, 35)}</Td>
                  <Td>{ele._id}</Td>
                  <Td>₹ {ele.price}</Td>
                  <Td>{ele.brand}</Td>
                  <Td>
                    <button onClick={() => setUpdate(ele._id)}>
                      <AiFillEdit onClick={onOpen} fontSize={"30px"} />
                    </button>
                  </Td>
                  <Td>
                    <button>
                      <MdOutlineDeleteOutline
                        fontSize={"30px"}
                        onClick={() => Delete(ele._id)}
                      />
                    </button>{" "}
                  </Td>
                </Tr>
              </Tbody>
            );
          })}
        </Table>
      </TableContainer>

      <Box ml={"40%"} display={"flex"} gap={"20px"}>
        <Button className="btn1" onClick={() => setSkip(skip - 5)}>
          previous
        </Button>

        <Button className="btn2" onClick={() => setSkip(skip + 5)}>
          next
        </Button>
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Inventory Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                ref={initialRef}
                placeholder="Product Image"
                onChange={(e) => setImg1(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <Input
                placeholder="Product Name"
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <Input
                placeholder="Product Brand"
                onChange={(e) => setBrand(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <Input
                placeholder="Product Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => UpdateData(update)}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Inventory;

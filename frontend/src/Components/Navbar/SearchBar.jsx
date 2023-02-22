import {
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightElement,
    Select,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import { FaSearch, FaSearchLocation } from "react-icons/fa";
  
  function SearchBar() {
    return (
      <Box fontFamily={"Clear-Sans"} shadow={"sm"} bg="#fff">
        <Flex justify={"space-around"} minH={"40px"} py="10px" align={"center"}>
          <Flex
            gap={2}
            width={{base:"100%",md: "50%" }}
            flexDir={{ base: "column", md: "row" }}
            align={"center"}
          >
            <InputGroup size={"sm"} width={{ base: "90%", md: "30%" }}>
              <InputLeftAddon children={<FaSearchLocation color="gray.300" />} />
              <Select  bg={"#f1f4f6"}>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Goa">Goa</option>
                <option value="J&K">J&K</option>
                <option value="Odisha">Odisha</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
              </Select>
            </InputGroup>
            <InputGroup size={"sm"} width={{ base: "90%", md: "50%" }}>
              <Input
                placeholder="Search for Medical and Health Products"
                bg={"#f1f4f6"}
              />
              <InputRightElement
                children={<FaSearch color="green.500" />}
                pointerEvents={"auto"}
                cursor="pointer"
              />
            </InputGroup>
          </Flex>
  
          <Flex gap={2} align="center" display={{ base: "none", md: "flex" }}>
            <Text fontSize={"14px"}>QUICK BUY! Get 25% off on medicines*</Text>
            <Button
              px="30px"
              bg={"#ff6f61"}
              color="#fff"
              borderRadius={"5px"}
              fontSize={"16px"}
              fontWeight="300"
              _hover={{}}
              py="0px"
            >
              Quick Order
            </Button>
          </Flex>
        </Flex>
      </Box>
    );
  }
  
  export default SearchBar;
  
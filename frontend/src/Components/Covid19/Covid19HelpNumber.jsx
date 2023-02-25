import {
    Box,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from "@chakra-ui/react";
  import { Flex, Spacer } from '@chakra-ui/react'
  import React from "react";

  
  const Covid19HelpNumber = () => {


    const HelpLineNumber = [
        {
          State: "Andaman & Nicobar Islands",
          Number: "03192-232102",
          bgColor: "white",
        },
        {
          State: "Arunachal Pradesh",
          Number: "9436-055743",
          bgColor: "pink",
        },
        {
          State: "Andhra Pradesh",
          Number: "0866-2410978",
          bgColor: "white",
        },
        {
          State: "Assam",
          Number: "6913-347770",
          bgColor: "pink",
        },
        {
          State: "Bihar",
          Number: "104",
          bgColor: "white",
        },
        {
          State: "Chandigarh",
          Number: "9779-558282",
          bgColor: "pink",
        },
        {
          State: "Chhattisgarh",
          Number: "104",
          bgColor: "white",
        },
        {
          State: "Dadra & Nagar Haveli",
          Number: "104",
          bgColor: "pink",
        },
      
        {
          State: "Daman & Diu",
          Number: "104",
          bgColor: "white",
        },
        {
          State: "Delhi",
          Number: "011-22307145",
          bgColor: "pink",
        },
        {
          State: "Goa",
          Number: "104",
          bgColor: "white",
        },
       
       
      ];



    return (
      <Box p="2rem" bgColor={"#fdf0df"}>
        <Text
          fontSize={"2.5vw"}
          fontWeight="600"
          color="#3b3b3b"
          textAlign={"left"}
        >
          State Helpline Numbers for coronavirus in India
        </Text>
        <Box>
        <Flex>
          <Box p='4' >
            <Text textAlign={'left'}>Show</Text>
            <NumberInput>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            <Text textAlign={'left'}>entries</Text>
          </Box>
          <Spacer />
          <Box p='4' >
          <Text textAlign={'left'}>Search</Text>
            <input type={'text'} placeholder={'Enter State'}></input>
          </Box>
        </Flex>
        </Box>
        <Box>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th
                    bgColor={"#000"}
                    color="#ff6f61"
                    fontSize={"1.2vw"}
                    fontWeight="bold"
                  >
                    State/UT
                  </Th>
                  <Th
                    bgColor={"#000"}
                    color="#ff6f61"
                    fontSize={"1.2vw"}
                    fontWeight="bold"
                  >
                    State Helpline No.{" "}
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {HelpLineNumber.map((el) => {
                  return (
                    <Tr bgColor="white">
                      <Td>{el.State}</Td>
                      <Td>{el.Number}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    );
  };
  
  export default Covid19HelpNumber;
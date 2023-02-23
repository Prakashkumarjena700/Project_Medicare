import React, { useEffect } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Box
} from '@chakra-ui/react'
import './styles/Inventory.css'
const Inventory = () => {


 

  // useEffect(()=>{
    
  //   fetch("https://glamorous-jumpsuit.cyclic.app/data",{
  //     headers:{
  //         "Authorization":localStorage.getItem("token")
  //     },
     
  // })
  // },[])
  return (
    <>
     <TableContainer  className='one'>
    <Table  colorScheme='white'>
     
      <Thead  className='head'>
        <Tr className='two' >
        <Th className='three' >Image</Th>
          <Th className='three' >Name</Th>
          <Th  className='three' >Product Id</Th>
          <Th className='three' >Price</Th>
          <Th className='three' >Delete</Th>
          <Th className='three' >Edit</Th>

        </Tr>
      </Thead>
      <Tbody>
        <Tr className='two'>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td >25.4</Td>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td >25.4</Td>
        </Tr>
        <Tr className='two' >
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td >30.48</Td>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td >25.4</Td>
        </Tr>
        <Tr className='two' >
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td >0.91444</Td>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td >25.4</Td>
        </Tr>

        <Tr className='two' >
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td >0.91444</Td>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td >25.4</Td>
        </Tr>

        <Tr  className='two' >
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td >0.91444</Td>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td >25.4</Td>
        </Tr>

        <Tr className='two' >
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td >0.91444</Td>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td >25.4</Td>
        </Tr>

        <Tr className='two' >
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td >0.91444</Td>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td >25.4</Td>
        </Tr>
      </Tbody>
     
    </Table>
  </TableContainer>
    
    <Box ml={"35%"} display={"flex"} gap={"10px"}  mt={"20px"}>
    <Button  border={"1px solid black"}>Previous</Button>
  <Button border={"1px solid black"}>1</Button>
  <Button border={"1px solid black"}>2</Button>
  <Button border={"1px solid black"}>3</Button>
  <Button border={"1px solid black"}>4</Button>
  <Button border={"1px solid black"}>Next</Button>
    </Box> 
    <h1>all data</h1>
  </>
  )
}



export default Inventory
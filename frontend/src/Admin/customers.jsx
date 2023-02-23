import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Box
} from '@chakra-ui/react'
import './styles/Inventory.css'
const Customers = () => {
  return (
    <>
    <TableContainer  className='one'>
    <Table  colorScheme='white'>
     
      <Thead  className='head'>
        <Tr className='two' >
        
          <Th className='three' >Image</Th>
          <Th className='three' >Name</Th>
          <Th  className='three' >Phone NUmber</Th>
          <Th className='three' >Product</Th>
          <Th className='three' >Price</Th>
          <Th className='three' >Address</Th>
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
      {/* <Tfoot>
        <Tr backgroundColor={"white"}>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th >multiply by</Th>
          
        </Tr>
      </Tfoot> */}
    </Table>
  </TableContainer>
    
    <Box ml={"45%"} display={"flex"} gap={"10px"}  mt={"20px"}>
    <Button >Previous</Button>
  <Button >1</Button>
  <Button >2</Button>
  <Button >3</Button>
  <Button >4</Button>
  <Button >Next</Button>
    </Box>
  </>
  )
}

export default Customers
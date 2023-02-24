import React, { useEffect, useState } from 'react'
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



import axios from 'axios'





const Inventory = () => {

       
const [data,setData]= useState([])
const [skip, setSkip]=useState(0)
useEffect(() =>{
  async function fetchData(){
     let res= await axios.get(`https://glamorous-jumpsuit.cyclic.app/data?limit=5&skip=${skip}`)
     console.log(res.data.length)
     setData(res.data)
    }
    fetchData()
},[skip])
       
    


  return (
    <>
         
        
              
              <TableContainer   className='one'>
    <Table >
   
      <Thead  className='head'>
        <Tr className='two' >
          <Th className='three' >Image</Th>
          <Th className='three' >Name</Th>
          <Th className='three' >Product Id</Th>
          <Th className='three' >Price</Th>
          <Th className='three' >Brand</Th>
          <Th className='three' >Edit</Th>

        </Tr>
      </Thead>

      {data.map((ele)=>{
     return(

     <Tbody>
  <Tr className='two'>
    <Td>  <img src= {ele.img1} /> </Td>
 
    <Td  >{ele.name.substring(0, 35)}</Td>
    <Td >{ele._id}</Td>
    <Td>₹ {ele.price}</Td>
    <Td>{ele.brand}</Td>
    <Td >edit</Td>
  </Tr>
</Tbody>
 )

      })}
        
       

       
 

    </Table>
  </TableContainer>
  
  <Button onClick={()=>setSkip(skip-5)}>previous</Button>
           
  <Button onClick={()=>setSkip(skip+5)}>next</Button>
 
  {/* <Pagination current={page} total={data.totalPages} onChange={(value)=>setPage(value)}/> */}
  </>
  )
}

export default Inventory
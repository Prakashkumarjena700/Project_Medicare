
import './styles/Dashboard.css'
import { Box,Heading,Text} from '@chakra-ui/react';
import {RiShoppingCartFill} from 'react-icons/ri'
import {BsBag} from 'react-icons/bs'
import {FaUserFriends,FaRupeeSign} from 'react-icons/fa'
import Graph from './graph';
import React, { useState, useEffect } from "react";
import axios from 'axios';
const Dashboard = () => {
 
const [users,setUsers]=useState([])
const [data,setData]= useState([])

  useEffect(() =>{
    async function fetchData(){
       let res= await axios.get(`https://glamorous-jumpsuit.cyclic.app/data`)
       console.log("data",res.data.length)
       setData(res.data)
      }
      fetchData()

  },[])

  useEffect(() =>{
   

      async function fetchD(){
        let res= await axios.get(`https://glamorous-jumpsuit.cyclic.app/usersdata`)
        console.log("users",res.data.length)
        setUsers( res.data)
       }
       fetchD()
  },[])
 


  return (
    <>

   
        <>
         <Heading ml={["10px","10px","-100px"]}>DashBoard</Heading>
    <Box className='main'>
     
         <Box className='in' >
          <Box className='on1'>
            <Text className='text' >
              <RiShoppingCartFill /></Text>
          </Box>
          <Box  className='on2' >
          <Text className='text1' >Orders</Text>
          <Text className='text2' >1234</Text>
          </Box>
         </Box>


         <Box className='in' >
          <Box className='on1'>
            <Text className='text' >
              <BsBag /></Text>
          </Box>
          <Box  className='on2' >
          <Text className='text1' >Inventory</Text>
          <Text className='text2' >{data.length}</Text>
          </Box>
         </Box>


         <Box className='in' >
          <Box className='on1'>
            <Text className='text' >
              <FaUserFriends /></Text>
          </Box>
          <Box  className='on2' >
          <Text className='text1' >Customers</Text>
          <Text className='text2' >{users.length}</Text>
          </Box>
         </Box>

         <Box className='in' >
          <Box className='on1'>
            <Text className='text' >
              <FaRupeeSign /></Text>
          </Box>
          <Box  className='on2' >
          <Text className='text1' >Revenue</Text>
          <Text className='text2' >1234</Text>
          </Box>
         </Box>
          
    </Box>
        </>
     
   

    {/* <Graph /> */}
    </>
 )
}
 export default Dashboard


// import { ReactElement } from 'react';


import React from 'react'
import './styles/Dashboard.css'
import { Box,Heading,Text} from '@chakra-ui/react';
import {RiShoppingCartFill} from 'react-icons/ri'
import {BsBag} from 'react-icons/bs'
import {FaUserFriends,FaRupeeSign} from 'react-icons/fa'
import Graph from './graph';
const Dashboard = () => {
  return (
    <>
    <Heading ml={["10px","10px","0px"]}>DashBoard</Heading>
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
          <Text className='text2' >1234</Text>
          </Box>
         </Box>


         <Box className='in' >
          <Box className='on1'>
            <Text className='text' >
              <FaUserFriends /></Text>
          </Box>
          <Box  className='on2' >
          <Text className='text1' >Customers</Text>
          <Text className='text2' >1234</Text>
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

    {/* <Graph /> */}
    </>
 )
}
 export default Dashboard


// import { ReactElement } from 'react';


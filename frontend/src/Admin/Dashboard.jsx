import React from 'react'

import { Box} from '@chakra-ui/react';


const Dashboard = () => {
  return (
    <Box ml={"25%"}  border={"1px solid red"} width={"60%"} height={"200px"} display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
         <Box border={"1px solid blue"} width={"200px"} height={"150px"}></Box>
         <Box  border={"1px solid blue"} width={"200px"} height={"150px"}></Box>
         <Box  border={"1px solid blue"} width={"200px"} height={"150px"}></Box>
    </Box>
 )
}
 export default Dashboard


// import { ReactElement } from 'react';


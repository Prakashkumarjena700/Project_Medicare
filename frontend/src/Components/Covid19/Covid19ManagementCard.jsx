import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const Covid19ManagementCard = ({
  headText,
  color,
  bgColor,
  testPara,
  testDetail,
  testHead,
}) => {
    
  return (
    <Box bgColor={bgColor} mt="1rem" borderRadius={"8px"}>
      <Text
        fontSize={"1.8vw"}
        fontWeight="700"
        lineHeight={"1.4"}
        textColor={color}
        textAlign={'left'}
      >
        {headText}
      </Text>
      <hr
        style={{
          border: `2px solid ${color}`,
          margin: "0.5vw 1rem 1vw 1rem",
          padding: "1px",
          backgroundColor: color,
        }}
      />
      <Box p={'1rem'}>
        <Text fontSize={"16px"} lineHeight="1.4" color={color} textAlign={'left'}>
          {testPara}
        </Text>
      </Box>
      <hr
        style={{
          border: `2px solid ${color}`,
          margin: "0.6vw 1rem 1.5vw 1rem",
          padding: "0.1px",
          backgroundColor: "#993859",
        }}
      />
      <Box p={'0.5rem'}>
        <Text
          fontSize={"1.3vw"}
          fontWeight="600"
          lineHeight={1.4}
          mt="0.5vw"
          color={color}
          textAlign={'left'}
        >
          {testHead}
        </Text>
        {testDetail.map((el,i) => {
          return (
            <ul key={i} style={{ color: color, padding: " 0.1rem 0.2rem 0 1rem" }}>
              <li key={i} style={{ fontSize: "1vw ", paddingTop: "0.3vw" }}>
                {el.text}
              </li>
            </ul>
          );
        })}
      </Box>
      
      <Box  w='100%'>
        <Button
          w="100%"
          bgColor={color}
          color="white"
          _hover={{ bgColor: color, color: "#ff6f61" }}
          textAlign={'left'}
          p={'2rem'}
        >
          Book Now 
        </Button>
      </Box>
    </Box>
  );
};

export default Covid19ManagementCard;
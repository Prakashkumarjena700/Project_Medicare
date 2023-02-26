import { Box,  Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const ConsultDoctorCarousel = ({ something }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  return (
    <Box backgroundColor="#ffffff">
    <Box p="2" h="fitContent" mt="10px" mb={"10px"} bg="white" w="100%" m="auto">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="300ms"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {something.map((e, i) => (
          <Box
            key={i}
            h="95%"
            p="5rem"
            textAlign="center"
            borderRadius="5px"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            cursor="pointer"
            
          >
             <Box w={"70%"} m={"auto"} p={"4rem"}>
             <Text fontSize={"26px"} mb={"8px"}>{e.title}</Text>
             <Text>{e.desc}</Text>
             </Box>
            
          </Box>
        ))}
      </Carousel>
    </Box>
    </Box>
  );
};

export default ConsultDoctorCarousel;
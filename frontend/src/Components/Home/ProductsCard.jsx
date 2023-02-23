import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ProductsCard = ({ something, prodVal = 6 }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: prodVal,
      slidesToSlide: 3, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };


  const handleClick=(id)=>{
    console.log(id)
  }

  return (
    <Box backgroundColor="#ffffff">
    <Box bg="white" p="1rem" w="80%" m="auto" h="300px">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true} 
        infinite={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="300ms"
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {something.map((e, i) => (
          <Box
            p="0.5rem"
            key={i}
            textAlign="left"
            borderRadius="5px"
            ml={"1rem"}
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            cursor="pointer"
            onClick={()=>handleClick(e._id)}
          >
            <Image h={"50%"} w={"50%"} m="auto" src={e.img1} />
            <Box>
              <Text fontSize={"15px"}>{e.name}</Text>
              <Text fontSize={"13px"}>{e.form}</Text>
              <Text>
                {/* MRP{" "}
                <span style={{ textDecoration: "line-through" }}>
                  ₹{e.price}
                </span> */}
                <span style={{ color: "green", marginLeft: "1rem" }}>
                  {e.rating}
                </span>
              </Text>
              <Text fontWeight={"600"}>₹ {e.price}</Text>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
    </Box>
  );
};

export default ProductsCard;
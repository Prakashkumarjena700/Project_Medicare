import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StarIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();

  const handleClick=(id)=>{
    console.log(id)
    navigate(`/product/${id}`);
  }

  return (
    <Box backgroundColor="#ffffff">
    <Box bg="white" p="1rem" w="100%" m="auto" h="370px">
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
            <Box h={"175px"}>
              <Image h={"100%"} w={"80%"} m="auto" src={e.img1} />
            </Box>
            <Box h={"90px"} >
              <Text fontSize={"16px"}>{e.name.substring(0,35)}</Text>
              <Text fontSize={"16px"}>{e.form}</Text>
              
              </Box>
              <Box>

              {/* <Image h={"20%"} w={"20%"} m="auto" src={"https://img.freepik.com/free-vector/start_53876-25533.jpg?size=338&ext=jpg"} />
              {/* <Text>
                <span style={{ color: "green", marginLeft: "1rem" }}>
                  {e.rating}
                </span>
              </Text> */} 
              <Box display='flex' mt='2' alignItems='center'>
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < e.rating ? '#388E3C' : 'gray.300'}
                      />
                    ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {e.rating} 
          </Box>
        </Box>
             
               <Text fontWeight={"300"}>MRP ₹ {e.price}</Text>
              </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
    </Box>
  );
};

export default ProductsCard;
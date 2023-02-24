import React from 'react';
import { Box, Image, Link, Text } from "@chakra-ui/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import UpperFooter from "./UpperFooter"
import HomeProductBox from './HomeProductBox';


export default function Home() {

   const SlidingImage = [
    {
      img: "https://onemg.gumlet.io/ca196b25-d504-4dd7-bb47-115b9e547824_1667387832.jpg?w=1013&h=250&format=auto",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/912f861c-6250-47b6-b643-92e3b5e1fce0.png",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/56d71eb8-f343-417c-b3ea-7a9717e7303f.png",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/290b5970-99ed-4022-b29e-095ad9b40199.png",
    },
    {
      img: "https://onemg.gumlet.io/53198213-f03c-4cae-b249-9fa6c5d1ec80_1676007183.png?w=1013&h=250&format=auto",
    }
  ];

  return (
    <Box fontFamily="Clear Sans">
    {/*  carousel and image */}
    <Box display={"flex"} border="1px solid lightgrey" p="0.5">
      <Box w={"70%"}>
        <AliceCarousel
          autoPlay
          autoPlayInterval="1000"
          disableButtonsControls="true"
          disableDotsControls="true"
          infinite="true"
        >
          {SlidingImage.map((e, i) => (
            <Image w="100%" key={i} src={e.img} />
          ))}
        </AliceCarousel>
      </Box>
      <Box w="30%">
        <Link
          target="_blank"
          href="https://www.1mg.com/labs/test/advanced-cardiac-risk-markers-34953"
        >
          <Image
            h="100%"
            src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/1caa64c3-60f0-4c9d-ab85-4fc9a49769c3.png"
          />
        </Link>
      </Box>
    </Box>

    {/*  Carousel and image  */}

    <Box textAlign={"center"} p="2rem" border="1px solid lightgrey" mb={"2rem"}>
      <Text
        fontWeight={"400"}
        fontSize={"25px"}
        lineHeight={"31px"}
        color={"#666666"}
      >
        Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
      </Text>
    

      <HomeProductBox />
    </Box>
      <UpperFooter />
    
  </Box>
  )
}

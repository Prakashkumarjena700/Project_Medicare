import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import BrandsCard from "./BrandsCard";
import ProductsCard from "./ProductsCard";
import axios from "axios";




const HomeProductBox = () => {

  // https://glamorous-jumpsuit.cyclic.app/data/
  const [data,setData]=React.useState([])
  const[baidya,setBaidya]=React.useState([])
  const [dabur,setDabur]=React.useState([])
  const[eye,setEye]=React.useState([])
  const[liver,setLiver]=React.useState([])

  const fetchData=()=>{
    return axios.get(`https://glamorous-jumpsuit.cyclic.app/data`)
  }

  const fetchData1=()=>{
    return axios.get(`https://glamorous-jumpsuit.cyclic.app/data?brand=Baidyanath`)
  }

  const fetchData2=()=>{
    return axios.get(`https://glamorous-jumpsuit.cyclic.app/data?brand=Dabur`)
  }

  const fetchData3=()=>{
    return axios.get(`https://glamorous-jumpsuit.cyclic.app/data?uses=Eye Care`)
  }

  const fetchData4=()=>{
    return axios.get(`https://glamorous-jumpsuit.cyclic.app/data?uses=Liver Care`)
  }
  React.useEffect(()=>{
   fetchData().then((res)=>{
    setData(res.data)
    // console.log(res.data)

   }).catch((err)=>console.log(err))

   fetchData1().then((res)=>{
    setBaidya(res.data)
    // console.log(res.data)

   }).catch((err)=>console.log(err))

   fetchData2().then((res)=>{
    setDabur(res.data)
    // console.log(res.data)

   }).catch((err)=>console.log(err))

   fetchData3().then((res)=>{
    setEye(res.data)
    console.log(res.data)

   }).catch((err)=>console.log(err))

   fetchData4().then((res)=>{
    setLiver(res.data)
    console.log(res.data)

   }).catch((err)=>console.log(err))
   
  },[])




    return (
      <Box bg="#f6f6f6" >
        {/* Top image */}
        <Box p="1rem" w="95%" m="auto">
          <Image
            w="95%"
            m="auto"
            src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png"
          />
        </Box>
  
        {/* End */}
        <Box mt="2rem">
        <Box display="flex" justifyContent="space-between" px="2rem" w="90%" m="auto" mb="0.5rem">
          <Text
            pl="2rem"
            fontWeight={"400"}
            lineHeight={"26px"}
            fontSize={"18px"}
            textAlign="left"
          >
            Shop by health concerns
          </Text>
          {/* <Link href="http://localhost:3000/allProducts" target="_blank">
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                fontSize={"14px"}
              >
                SEE ALL
              </Button>
            </Link> */}
            </Box>
          <BrandsCard something={healthConcern} />
        </Box>

        <Box mt="2rem">
          <Box display="flex" justifyContent="space-between" px="2rem"  w="90%" m="auto" mb="0.5rem">
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"18px"}>
              Featured Brands
            </Text>
            <Link href="http://localhost:3000/product" target="_blank">
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                fontSize={"14px"}
              >
                SEE ALL
              </Button>
            </Link>
          </Box>
          <BrandsCard something={FeaturedBrands} />
        </Box>


        
        <Box mt="2rem">
          <Box
            display="flex"
            justifyContent="space-between"
            px="2rem"
            mb="0.5rem"
            w="90%" m="auto" 
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"18px"}>
              Baidyanath | supplement of the week
            </Text>
            <Link href="http://localhost:3000/product" target="_blank">
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                fontSize={"14px"}
                mb="0.5rem"
              >
                SEE ALL
              </Button>
            </Link>
          </Box>
          <ProductsCard something={baidya} />
        </Box>
  
        <Box mt="2rem">
        <Box display="flex" justifyContent="space-between" px="2rem"  w="90%" m="auto" mb="0.5rem">
          <Text
            pl="2rem"
            fontWeight={"400"}
            lineHeight={"26px"}
            fontSize={"18px"}
            textAlign="left"
          >
            Popular Categories
          </Text>
          <Link href="http://localhost:3000/product" target="_blank">
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                fontSize={"14px"}
              >
                SEE ALL
              </Button>
            </Link>
          </Box>
          <BrandsCard something={popularCards} />
        </Box>
  
       
  
        {/* Products */}
  
        <Box mt="2rem">
          <Box
            display="flex"
            justifyContent="space-between"
            px="2rem"
            mb="0.5rem"
            w="90%" m="auto" 
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"18px"}>
              Liver Care
            </Text>
            <Link href="http://localhost:3000/product" target="_blank">
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                fontSize={"14px"}
                mb="0.5rem"
              >
                SEE ALL
              </Button>
            </Link>
          </Box>
          <ProductsCard something={liver} />
        </Box>
       
  
        {/* brands */}
  
        <Box mt="2rem">
          <Box display="flex" justifyContent="space-between" px="2rem"  w="90%" m="auto" mb="0.5rem">
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"18px"}>
              HealthCare Devices -top brands
            </Text>
            <Link href="http://localhost:3000/product" target="_blank">
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                fontSize={"14px"}
              >
                SEE ALL
              </Button>
            </Link>
          </Box>
          <BrandsCard something={healthDevices} />
        </Box>
  
        {/* Products */}
  
        <Box mt="2rem">
          <Box
            display="flex"
            justifyContent="space-between"
            px="2rem"
            mb="0.5rem"
            w="90%" m="auto" 
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"18px"}>
              Top Sellers From Ensure
            </Text>
            <Link href="http://localhost:3000/product" target="_blank">
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                fontSize={"14px"}
                mb="0.5rem"
              >
                SEE ALL
              </Button>
            </Link>
          </Box>
          <ProductsCard something={data.slice(10,19)} />
        </Box>
  
        {/* Products */}
  
        <Box mt="2rem">
          <Box
            display="flex"
            justifyContent="space-between"
            px="2rem"
            mb="0.5rem"
            w="90%" m="auto"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"18px"}>
              Super Saving Deals
            </Text>
            <Link href="http://localhost:3000/product" target="_blank">
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                fontSize={"14px"}
                mb="0.5rem"
              >
                SEE ALL
              </Button>
            </Link>
          </Box>
          <ProductsCard something={data.slice(36,45)} />
        </Box>

        <Box mt="2rem">
          <Box
            display="flex"
            justifyContent="space-between"
            px="2rem"
            mb="0.5rem"
            w="90%" m="auto" 
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"18px"}>
              Eye Care
            </Text>
            <Link href="http://localhost:3000/product" target="_blank">
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                fontSize={"14px"}
                mb="0.5rem"
              >
                SEE ALL
              </Button>
            </Link>
          </Box>
          <ProductsCard something={eye} />
        </Box>
  
  
        {/* brands */}
        <Box mt="2rem">
          <Box display="flex" justifyContent="space-between" px="2rem"  w="90%" m="auto" mb="0.5rem">
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"18px"}>
              Baby Care
            </Text>
            <Link href="http://localhost:3000/product" target="_blank">
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                fontSize={"14px"}
              >
                SEE ALL
              </Button>
            </Link>
          </Box>
          <BrandsCard something={babyCare} />
        </Box>
  
        {/* Products */}

        <Box mt="2rem">
          <Box
            display="flex"
            justifyContent="space-between"
            px="2rem"
            mb="0.5rem"
            w="90%" m="auto" 
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"18px"}>
              Dabur | Deal of the Day
            </Text>
            <Link href="http://localhost:3000/product" target="_blank">
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                fontSize={"14px"}
                mb="0.5rem"
              >
                SEE ALL
              </Button>
            </Link>
          </Box>
          <ProductsCard something={dabur} />
        </Box>
  
      
      </Box>
    );
  };
  
  export default HomeProductBox;


  const healthConcern = [
    {
      title: "Diabetes Care",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png",
    },
    {
      title: "Cardiac Care",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png",
    },
    {
      title: "Stomach Care",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/702457a8-ff7d-43a6-bd1d-6bcb278ce686.png",
    },
    {
      title: "Liver Care",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/995e64ba-5bd9-42bc-8db6-5dc0b821c89d.png",
    },
    {
      title: "Kidney Care",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e77d5099-d905-4462-ab9d-b51802e3739b.png",
    },
    {
      title: "Derma Care",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/6f9a726a-4a98-42e6-a834-67381be5e330.png",
    },
    {
      title: "Respitary Care",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/4a788b46-97f3-460e-afb6-428368f779ee.png",
    },
    {
      title: "Eye Care",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/631e3dca-3d5b-49f8-832b-8341ec4784e7.png",
    },
    
  ];



   const popularCards = [
    {
      title: "Diabetes Care",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/h8qo5dk91lliwwihbwnf.png",
    },
    {
      title: "Nutrition Drinks",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/uq1gwxslqqrxxwv6zi6j.jpg",
    },
    {
      title: "Healthcare Devices",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/fbigjgxv2wquqqb3galn.png",
    },
    {
      title: "Homeopathy",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/j7ruar88gacbzksuadjn.png",
    },
    {
      title: "Sexual Wellness",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/p1blaka183nc1zlil8tq.png",
    },
    {
      title: "Skin Care",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/bkhusfgfiu9qedowph2i.png",
    },
    {
      title: "Vitamins & Supplements",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/cabpuknnlyyzgqfnb4x5.png",
    },
    {
      title: "Pain Relief",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/au6x9ngzsixzfzae9pyv.png",
    },
    {
      title: "Ayurveda",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/x2z8u1osqutmxvx56hlw.png",
    },
  ];
  

  
  

   const FeaturedBrands = [
    {
      title: "Baidyanath(Nagpur)",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/d6f04684-ecaf-454b-a11e-360abf4ff603.jpeg",
    },
    {
      title: "Veet",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png",
    },
    {
      title: "Nivea",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/dbcf099c-fcc2-4c84-abd9-df54e069364c.png",
    },
    {
      title: "Contour",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/49228ade-73dc-420e-8c66-5a9e4c521b2b.png",
    },
    {
      title: "Hansaplast",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/45215aa0-e0a5-40ef-9a0c-e46103e4a371.png",
    },
    {
      title: "Optimum Nutrition",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/52abeeb0-84c6-48ae-85f0-2c409cb11a84.jpg",
    },
    {
      title: "Durex",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/x4t7t0lyryd2cx9qsr0j.png",
    },
    {
      title: "Organic India",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/b62gq72fszjy0vqkavsq.png",
    },
    {
      title: "Stayfree",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/539a1389-b988-43fb-b8c7-d7ecd926144e.png",
    },
    {
      title: "Dr vaidyad's",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jk8ruwbfjbg17qteedfc.png",
    },
  ];
  
  const healthDevices = [
    {
      title: "Dr Morepen",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/25832f67-b59e-4c68-81a0-6b67ce0b1a6e.webp",
    },
    {
      title: "Accu Check",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/5b24fd4f-ddbe-4b53-b1d3-97107c44762b.webp",
    },
    {
      title: "Omron",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c3015a12-3ac7-48d2-92c9-072bc9113010.webp",
    },
    {
      title: "Contour",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c932de9c-ee8b-4edf-ae6b-8b9c882bcb79.webp",
    },
    {
      title: "OneTouch",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/751cc51d-a84e-499e-afe6-7f2197684471.webp",
    },
    {
      title: "Dr Trust",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/d6f2e4a2-1dd8-43fe-ae99-fe61777f478d.webp",
    },
    {
      title: "Tynor",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/32571bdc-487c-4ebe-98f9-9aa91464fd76.webp",
    },
    {
      title: "Hansaplast",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/02e74893-3203-4bd5-8b1e-375b28f62a62.webp",
    },
    {
      title: "Care View",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/295fa7a6-58c0-4ae5-8057-e33bef42b6f2.webp",
    },
  ];
  
  const babyCare = [
    {
      title: "Baby & Infant food",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/887a6ad5-010a-4eff-96f4-a7c8d715140d.webp",
    },
    {
      title: "Bath Essentials",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ac6bcf1c-7742-4a89-adad-f12c467efd69.webp",
    },
    {
      title: "Diaper Wipes & More",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/54ef2e82-9e5c-4707-b746-3330529c535e.webp",
    },
    {
      title: "Baby Skin Care",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/08d4d980-de5b-4ae2-858d-49e448089141.webp",
    },
    {
      title: "Gift Pack & Combos",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/a604c2aa-efef-47b7-8a33-a70ae18abac0.webp",
    },
    {
      title: "Oral health",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/930f6400-ee42-408a-ab5e-edda6c745c80.webp",
    },
    {
      title: "Baby proofing",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/aaa6f701-d37c-45af-a68c-36c00fd8f0cb.webp",
    },
    {
      title: "Nursing & Feeding",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/cbbd2374-2c22-45a7-a30d-ab17d1e16247.webp",
    },
    {
      title: "Baby health Care",
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/b937d7ce-b8ce-4d3a-845f-61871c1fa83b.webp",
    },
  ];
 

  
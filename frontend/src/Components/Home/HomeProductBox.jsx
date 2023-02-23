import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import BrandsCard from "./BrandsCard";
import ProductsCard from "./ProductsCard";
import axios from "axios";




const HomeProductBox = () => {

  // https://glamorous-jumpsuit.cyclic.app/data/
  const [data,setData]=React.useState([])


  const fetchData=()=>{
    return axios.get(`https://glamorous-jumpsuit.cyclic.app/data`)
  }

  React.useEffect(()=>{
   fetchData().then((res)=>{
    setData(res.data)
    console.log(res.data)

   }).catch((err)=>console.log(err))
   
  },[])




    return (
      <Box bg="#f6f6f6" >
        {/* Top image */}
        <Box p="1rem" w="80%" m="auto">
          <Image
            w="95%"
            m="auto"
            src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png"
          />
        </Box>
  
        {/* End */}
        <Box mt="2rem">
        <Box display="flex" justifyContent="space-between" px="2rem" w="80%" m="auto" mb="0.5rem">
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
          <Box display="flex" justifyContent="space-between" px="2rem"  w="80%" m="auto" mb="0.5rem">
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"18px"}>
              Featured Brands
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank">
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
            w="80%" m="auto" 
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"18px"}>
              Baidyanath | supplement of the week
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank">
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
          <ProductsCard something={data.slice(27,39)} />
        </Box>
  
        <Box mt="2rem">
        <Box display="flex" justifyContent="space-between" px="2rem"  w="80%" m="auto" mb="0.5rem">
          <Text
            pl="2rem"
            fontWeight={"400"}
            lineHeight={"26px"}
            fontSize={"18px"}
            textAlign="left"
          >
            Popular Categories
          </Text>
          <Link href="http://localhost:3000/allProducts" target="_blank">
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
            w="80%" m="auto" 
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"18px"}>
              Baidyanath | supplement of the week
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank">
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
          <ProductsCard something={data.slice(0,9)} />
        </Box>
  
        {/* brands */}
  
        <Box mt="2rem">
          <Box display="flex" justifyContent="space-between" px="2rem"  w="80%" m="auto" mb="0.5rem">
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"18px"}>
              HealthCare Devices -top brands
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank">
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
            w="80%" m="auto" 
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"18px"}>
              Top Sellers From Ensure
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank">
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
          <ProductsCard something={data.slice(10,19)} />
        </Box>
  
        {/* Products */}
  
        <Box mt="2rem">
          <Box
            display="flex"
            justifyContent="space-between"
            px="2rem"
            mb="0.5rem"
            w="80%" m="auto"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"18px"}>
              Top Sellers From Ensure
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank">
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
          <ProductsCard something={data.slice(19,27)} />
        </Box>
  
        {/* brands */}
        <Box mt="2rem">
          <Box display="flex" justifyContent="space-between" px="2rem"  w="80%" m="auto" mb="0.5rem">
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"18px"}>
              Baby Care
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank">
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
  

  
  //  const topSellingProducts = [
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-kamini-vidrawan-ras-keshar-yukta-tablet-otc560948",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/tlfgbykcqbhn5jieozfj.jpg",
  //     name: "Baidyanath Kamini Vidrawan Ras Keshar Yukta Tablet",
  //     qty: "bottle of 10 gm Tablet",
  //     strikePrice: "1698",
  //     discount: "20% off",
  //     price: "1358",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-vansaar-isabgol-psyllium-husk-powder-otc371516",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/hb574zgh9ypwmpel9mxz.jpg",
  //     name: "Baidyanath Vansaar Isabgol Psyllium Husk Powder",
  //     qty: "box of 200 gm Powder",
  //     strikePrice: "225",
  //     discount: "14% off",
  //     price: "193",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-kesari-kalp-royal-chyawanprash-promotes-vitality-strength-stamina-otc325914",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/wxcyaombrajpkyvcvnrm.jpg",
  //     name: "Baidyanath Kesari Kalp Royal Chyawanprash Promotes Vitality, Strength & Stamina",
  //     qty: "jar of 1 kg Paste",
  //     strikePrice: "740",
  //     discount: "30% off",
  //     price: "518",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-kanchnar-guggulu-tablet-otc325867",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/zd02vxwzldjojodryrbk.jpg",
  //     name: "Baidyanath Kanchnar Guggulu Tablet",
  //     qty: "bottle of 80 tablets",
  //     strikePrice: "140",
  //     discount: "14% off",
  //     price: "120",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-chyawanprash-special-immunity-booster-for-omniprotection-with-madhu-free-50gm-otc698062",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/r4q79nrsaa1tfaxfvbn7.jpg",
  //     name: "Baidyanath Chyawanprash Special Immunity Booster for OmniProtection with Madhu Free 50gm",
  //     qty: "jar of 950 gm Paste",
  //     strikePrice: "395",
  //     discount: "15% off",
  //     price: "336",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-vita-ex-massage-oil-otc349340",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/yrlsaq5pmpkpmu0u0cqd.jpg",
  //     name: "Baidyanath Vita EX Massage Oil",
  //     qty: "bottle of 15 ml Oil",
  //     strikePrice: "225",
  //     discount: "15% off",
  //     price: "191",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-kesari-kalp-royal-chyawanprash-promotes-vitality-strength-stamina-otc388303",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/sotrimm6r6qrtbt5qtmw.jpg",
  //     name: "Baidyanath Kesari Kalp Royal Chyawanprash Promotes Vitality, Strength & Stamina",
  //     qty: "jar of 500 gm Paste",
  //     strikePrice: "420",
  //     discount: "14% off",
  //     price: "361",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-chyawan-vit-sugarfree-chyawanprash-for-boosting-immunity-otc337211",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/crqoyzk9fbxvdpdk2efj.png",
  //     name: "Baidyanath Chyawan-Vit Sugarfree Chyawanprash for Boosting Immunity",
  //     qty: "jar of 500 gm Paste",
  //     strikePrice: "225",
  //     discount: "15% off",
  //     price: "191",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-vansaar-aloe-vera-juice-otc349149",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/lc0ysjyol0asm5eeoxut.jpg",
  //     name: "Baidyanath Vansaar Aloe Vera Juice",
  //     qty: "bottle of 1 Ltr Juice",
  //     strikePrice: "265",
  //     discount: "35% off",
  //     price: "172",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-vita-ex-gold-capsule-for-vitality-stamina-otc323951",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/ogypzm1jrh5y0gislnwm.jpg",
  //     name: "Baidyanath Vita-Ex Gold Capsule for Vitality & Stamina",
  //     qty: "bottle of 20 capsules",
  //     strikePrice: "475",
  //     discount: "15% off",
  //     price: "404",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-vansaar-shilajit-resin-otc671424",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/ttujayukq6mdk95t1aob.jpg",
  //     name: "Baidyanath Vansaar Shilajit Resin",
  //     qty: "bottle of 15 gm Pack",
  //     strikePrice: "1499",
  //     discount: "15% off",
  //     price: "1274",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-chitrakadi-bati-tablet-otc327001",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/zrphzczzrwe4o6hnqmqc.png",
  //     name: "Baidyanath Chitrakadi Bati Tablet",
  //     qty: "bottle of 80 tablets",
  //     strikePrice: "94",
  //     discount: "14% off",
  //     price: "81",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-vansaar-isabgol-psyllium-husk-powder-otc497819",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/dxxwizplopbwahvbcbb2.jpg",
  //     name: "Baidyanath Vansaar Isabgol Psyllium Husk Powder",
  //     qty: "box of 100 gm Powder",
  //     strikePrice: "120",
  //     discount: "15% off",
  //     price: "102",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-vansaar-triphala-juice-natural-herbal-laxative-otc349184",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/foeocdhjfl51ub5wafmg.jpg",
  //     name: "Baidyanath Vansaar Triphala Juice Natural Herbal Laxative",
  //     qty: "bottle of 1 Ltr Juice",
  //     strikePrice: "265",
  //     discount: "13% off",
  //     price: "230",
  //   },
  // ];

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
 

  // const himalayaProducts = [
  //   {
  //     link: "https://www.1mg.com/otc/himalaya-herbals-purifying-neem-face-wash-otc370058",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/nhu0rbh3wtdlr7pdhoq4.jpg",
  //     name: "Himalaya Herbals Purifying Neem Face Wash",
  //     qty: "pump bottle of 200ml",
  //     strikePrice: "250",
  //     discount: "12% off",
  //     price: "₹220",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/himalaya-cocoa-butter-intensive-body-lotion-otc326393",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/smpufwdh6hnpb8bzca01.jpg",
  //     name: "Himalaya Cocoa Butter Intensive Body Lotion",
  //     qty: "pump bottle of  400ml lotion",
  //     strikePrice: "300",
  //     discount: "18% off",
  //     price: "246",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/himalaya-herbals-purifying-neem-face-wash-otc546187",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/eywlzc1uguxsy3c6cxpo.jpg",
  //     name: "Himalaya Herbals Purifying Neem Face Wash",
  //     qty: "pump bottle of 400ml lotion ",
  //     strikePrice: "425",
  //     discount: "18% off",
  //     price: "340",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/himalaya-herbals-purifying-neem-face-wash-otc325809",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/cnndmskfmcldpwhljwcp.jpg",
  //     name: "Himalaya facewash",
  //     qty: "tube of 100ml",
  //     strikePrice: "140",
  //     discount: "14% off",
  //     price: "120",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-chyawanprash-special-immunity-booster-for-omniprotection-with-madhu-free-50gm-otc698062",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/8b05e7d4-9f78-480a-bff8-bc8267f8a56e.jpeg",
  //     name: "Himalaya neem and turmeric soap",
  //     qty: "packet of 125gm soap",
  //     strikePrice: "58",
  //     discount: "12% off",
  //     price: "51",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-vita-ex-massage-oil-otc349340",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/xsjfwil6pl5zuyrxaxkc.png",
  //     name: "Himalaya Anti dandruff Shampoo",
  //     qty: "bottle of 150 ml ",
  //     strikePrice: "250",
  //     discount: "15% off",
  //     price: "225",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/baidyanath-kesari-kalp-royal-chyawanprash-promotes-vitality-strength-stamina-otc388303",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/mxage34bx5xfak0gkoia.jpg",
  //     name: "Himalaya Men Facewash",
  //     qty: "tube of 100gm ",
  //     strikePrice: "180",
  //     discount: "14% off",
  //     price: "150",
  //   },
  //   {
  //     link: "https://www.1mg.com/otc/himalaya-personal-care-pure-hands-hand-wash-tulsi-lemon-deep-cleansing-otc580878",
  //     img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/k2snx8bn1a5rphbbflrw.png",
  //     name: "Himalaya Handwash",
  //     qty: "pump of 200ml",
  //     strikePrice: "150",
  //     discount: "15% off",
  //     price: "135",
  //   },
  // ];
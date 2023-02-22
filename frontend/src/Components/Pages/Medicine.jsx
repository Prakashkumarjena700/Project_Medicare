import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Box,Center,Image} from '@chakra-ui/react';

function Medicine() {


  const banner = [
    { url:"https://onemg.gumlet.io/346f28fa-1c58-480f-af5b-9568ba2d0dae_1670317321.jpg?w=1013&h=250&format=auto" },
    {url:"https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/49a3b635-a507-45a4-a54b-0b791e19e536.png"},
    {url:"https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/290b5970-99ed-4022-b29e-095ad9b40199.png"},
    {url:"https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/912f861c-6250-47b6-b643-92e3b5e1fce0.png"},
    {url:"https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/714d5586-328e-4ca0-a4f7-8dd465ab308e.png"}

   
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };

  return (

 <Box mt={40}>

  <Center>
     <Box  w={{ base: "90%", md:"80%",lg:"80%"}}  >
    <Slider {...settings}>
         {banner.map((el)=>{
          return(
            <>
                   <Box>
                    <Image height={{base:100,md:200,lg:300}}  src={el.url} alt="sliders" />
                   </Box>
            </>
          )
         })}
    </Slider>
     </Box>
    </Center>


 </Box>
  );
}

export default Medicine;

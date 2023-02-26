import React from 'react'
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
const Covid19Footer = () => {
  return (
    <>
      <Box>
         <Box display={'flex'} gap={'65px'} w={'60%'} m={'auto'} >
                <Text>Business Partnership</Text>
                <Text>About Us</Text>
                <Text>Contact Us</Text>
                <Text>Terms</Text>
                <Text>Privacy Policy</Text>
                <Text>Jobs</Text>
         </Box>
         <Box display={'flex'} gap={'35px'} w={'60%'} m={'auto'} mb={'1rem'}>
                <Box>
                    <img  src={'https://static.legitscript.com/seals/729605.png'}/>
                    <Text>LegitScript is a verification and monitoring service </Text>
                </Box>

                <Box>
                    <img  src={'https://img.1mg.com/images/footer/trust-stamp-2-20mil.svg'}/>
                    <Text>Trusted by more than 20 million people</Text>
                </Box>

                <Box>
                    <img  src={'https://onemg.gumlet.io/ii0pnk2hugxxv9lu3v5e.svg'}/>
                    <Text>All content is authored by Tata 1mg Editorial Team</Text>
                </Box>

                <Box>
                    <img  src={'https://onemg.gumlet.io/URS_ebgmxc.png'}/>
                    <Text>We are certified
                    "ISO/IEC 27001:2013"</Text>
                </Box>

         </Box>

         <Box display={'flex'} w={'10%'} m={'auto'}   mb={'1rem'}>
            <img  src={'https://www.shutterstock.com/image-photo/kiev-ukraine-november-26-2016-260nw-535901242.jpg' } />
            </Box>
            <Text>© 2023 Tata 1mg. All rights reserved.</Text>
            <Box  w={'10%'} m={'auto'}  mt={'1rem'}>
               
            <img  src={'https://www.1mg.com/images/tata_1mg_custom_footer.svg' } />
            </Box>


      </Box>
    
    </>
  )
}

export default Covid19Footer
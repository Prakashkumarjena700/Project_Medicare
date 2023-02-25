import React from 'react'
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import Covid19Banner from './Covid19Banner'
import Covid19Essential from './Covid19Essentials'
import Covid19HelpNumber from './Covid19HelpNumber'
import Covid19Management from './Covid19Management'
import Covid19EndBanner from './Covid19EndBanner'
import Covid19Footer from './Covid19Footer'


const Covid19Main = () => {
    const BannerData = [
        {
          headerText: "COVID-19 & latest treatment modalities",
          Paragraph:
            "To prepare for the imminent threats of this virus, scientists and researchers are constantly developing newer treatment strategies. One such new treatment option includes monoclonal antibodies. Want to know more about these available treatments and how they work against COVID variants, including Delta and Omicron?",
          btnText: "READ THIS ARTICLE",
          ImgSrc:
            "https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/hand.png",
          fontSize: "2.2vw",
          paraFontSize: "1.25vw",
        },
        {
          headerText: "Has your doctor prescribed COVID treatment based on monoclonal antibodies?",
          Paragraph:
            "",
          btnText: "FIND IT HERE",
          ImgSrc:
            "https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/monoclonal_dweb.png",
          fontSize: "2.2vw",
          paraFontSize: "1.8vw",
        },
        {
          headerText: "Think you may have COVID-19?",
          Paragraph:
            "Talk to a qualified doctor online for FREE & get expert guidance",
          btnText: "CALL NOW",
          ImgSrc:
            "https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/talk-now.png",
          fontSize: "2.2vw",
          paraFontSize: "1.8vw",
        },
        
      ];

    return (
      <>
        <Box bgColor={'#FDF0DF'}>
          <HStack p="2rem"  w='90%' m={'auto'} >
            <VStack w="40%" px="2" p={'2rem'}>
              <Text
                textAlign={'left'}
                fontSize={'35px'}
                color="#3b3b3b"
                fontWeight={'600'}
              >
                Combating Coronavirus in India
              </Text>
              <Text fontSize={'20px'} color="#767676" textAlign={'left'}>
                As we are staring at a potential rise of coronavirus in India,
                testing, tracing and treating is the ideal way of curbing this
                spread. Testing on time helps provide early treatment which, in
                turn, prevents the spread to your loved ones and others around
                you.
              </Text>
              <Box p="0.1rem" my="1" bgColor={'#212529'} w="100%"></Box>
              <Box>
                 <Text
                  fontSize={'20px'}
                  fontWeight="500"
                  lineHeight={'23px'}
                  color="#767676"
                  textAlign={'left'}
                >
                  Experiencing COVID-like symptoms? To book a COVID-19 test at
                  home, call on
                  </Text>
                  <Text  textAlign={'left'} fontSize={'35px'} color="#3b3b3b" fontWeight={'600'} mt={'1rem'}>1800-212-2353 </Text>
                </Box>
               
            </VStack>
            <VStack w="60%">
              <Image
                src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/img-head.png"
                
              />
            </VStack>
          </HStack>
        </Box>
        <Box display={'flex'} flexDir="column" my="2rem" mx="5rem">
          <Covid19Banner />
  
          <Covid19Essential />
          <Covid19Management />


          <Box>
            {BannerData.map((el, i) => {
              return (
                <Covid19EndBanner
                  key={i}
                  ImgSrc={el.ImgSrc}
                  headerText={el.headerText}
                  Paragraph={el.Paragraph}
                  btnText={el.btnText}
                  fontSize={el.fontSize}
                  paraFontSize={el.paraFontSize}
                />
              )
            })}
          </Box>
          <Covid19HelpNumber />
          <Box>
            <Covid19EndBanner
              ImgSrc={
                'https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/consult-doc.png'
              }
              headerText={'Think you have fever, cold or cough?'}
              Paragraph={'Talk to our experts online'}
              btnText={'CONSULT NOW'}
              fontSize={'2.2vw'}
              paraFontSize={'1.8vw'}
            />
          </Box>
          <Covid19Footer/>
        </Box>
        
      </>
    )
  }
  
  export default Covid19Main
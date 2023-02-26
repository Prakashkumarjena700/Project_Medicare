import React from 'react'
import { Box,Button,Text, Center,Divider } from '@chakra-ui/react'
import ConsultDoctorCarousel from "./ConsultDoctorCarousel"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar";
const ConsultDoctor = () => {
  return (
   <>
      <Navbar/>
        <Box  bgColor={'#fef7ef'}>
            <Box display={'flex'} ml={'20%'} padding={'1.5rem'} gap={'1rem'}>
                <Box>
                    <img src="http://onemg.gumlet.io/marketing/5e7341e1-0637-4703-a7dc-aa8ea920769b.png" />
                </Box>
                <Box mt={'10px'}>
                    <Text fontSize={"14.5px"}>  Free consultation and more benefits with Care Plan membership.</Text>
                    <Box  display={'flex'} mt={'10px'}>
                        <Box mr={'10px'} >
                        <img src="https://onemg.gumlet.io/marketing/b9af5a3d-cfb3-43c3-a37f-d5b982882a51.svg" />
                        </Box>
                        <Text fontSize={'12.5px'} color={'#8A2422'} >Join now !</Text>
                    </Box>
                </Box>

            </Box>

        </Box>
   
          <Box display={'flex'} w={'60%'} m={'auto'} gap={'40px'} p={'3rem'} >
                <Box textAlign={'left'} mb={'30px'}>
                    <Text fontSize={'31px'}>Online doctor consultation with qualified doctors</Text>
                    <Text fontSize={'20px'} color={'#767676'}>Starting at ₹199</Text>

                    <Box display={'flex'} mt={'20px'} mb={'20px'}>
                        <Box display={'flex'}>
                            <img src="https://onemg.gumlet.io/marketing/e7391473-ce45-403b-ae9e-04f25674874c.svg" />
                            <Text>Talk within 30 min</Text>
                        </Box>
                        <Box display={'flex'}>
                            <img src="https://onemg.gumlet.io/marketing/7df1fb1e-dc1e-4d1d-9031-bb05955710fa.svg" />
                            <Text>Free follow up for 3 days</Text>
                        </Box>
                        <Box display={'flex'}>
                            <img src="https://onemg.gumlet.io/marketing/a420ec3a-01da-40f8-95f2-db07e89c1421.svg" />
                            <Text>Get a valid prescription</Text>
                        </Box>

                    </Box>
                    <Button bgColor={"#FF6F61"} color={'white'}>Consult Now</Button>
                </Box>
                <Box>
                    <img src="https://onemg.gumlet.io/marketing/793368e4-7232-45b3-9690-2fc81da12287.svg" />
                </Box>

           </Box>


            <Box display={'flex'} h={'200px'} w={'60%'} m={'auto'}  border={'2px solid black'} gap={'5rem'} borderRadius={"4px"}>
                    <Box p={'2rem'}>
                        <Center><Text fontSize={"36px"} color={'#FF6F61'} fontWeight={'bold'}>30L+</Text></Center>
                        <Center><Text fontSize={"16px"} color={'#616161'} fontWeight={'bold'}>Total Consultations</Text></Center>
                    </Box>

                    <Divider orientation='vertical'  />

                    <Box p={'2rem'}>
                        <Center><Text fontSize={"36px"} color={'#FF6F61'} fontWeight={'bold'}>3k+</Text></Center>
                        <Center><Text fontSize={"16px"} color={'#616161'} fontWeight={'bold'}>Daily Consultations</Text></Center>
                    </Box>

                    <Divider orientation='vertical'  />

                    <Box p={'2rem'}>
                        <Center><Text fontSize={"36px"} color={'#FF6F61'} fontWeight={'bold'}>22+</Text></Center>
                        <Center><Text fontSize={"16px"} color={'#616161'} fontWeight={'bold'}>Specialities</Text></Center>
                    </Box>

                    

            </Box>

            <Box mt="2rem" bgColor={"#F8F8F8F8"}>
         
               <ConsultDoctorCarousel something={doctorCon} />
            </Box>


           <Box>
               <Box display={'flex'} w={'90%'} m={'auto'}>
                   <Box >
                    <Center mb={'1rem'}>
                    <img src="https://www.1mg.com/images/confidential.svg" />
                    </Center>
                    <Center  mb={'1rem'}>
                    <Text>100% Confidential</Text>
                    </Center>
                    <Center  mb={'1rem'}>
                    <Text>All advice & consultations are completely confidential. You can also delete chats whenever you want.</Text>
                    </Center>
                   </Box>

                   <Box>
                    <Center  mb={'1rem'}>
                    <img src="https://www.1mg.com/images/certified.svg" />
                    </Center>
                    <Center  mb={'1rem'}>
                    <Text>Certified Doctors</Text>
                    </Center>
                    <Center  mb={'1rem'}>
                    <Text>We offer quality healthcare through our network of certified and experienced doctors.</Text>
                    </Center>
                   </Box>

                   <Box>
                    <Center  mb={'1rem'}>
                    <img src="https://www.1mg.com/images/convenience.svg" />
                    </Center>
                    <Center  mb={'1rem'}>
                    <Text>Convenience</Text>
                    </Center>
                    <Center  mb={'1rem'}>
                    <Text>Forget the hassle of long queues and rush hour. Seek expert opinion anytime, anywhere.</Text>
                    </Center>
                   </Box>

                   <Box>
                    <Center  mb={'1rem'}>
                    <img src="https://www.1mg.com/images/costEffective.svg" />
                    </Center>
                    <Center  mb={'1rem'}>
                    <Text>Cost Effective</Text>
                    </Center>
                    <Center  mb={'1rem'}>
                    <Text>We provide medical assistance on non urgent queries for free. Fee starting at ₹50 for faster response to queries.</Text>
                    </Center>
                   </Box>
               </Box>
           </Box>


           <Box>
               <Center color={'#9e9e9e'} fontSize={'30px'} my={'40px'} fontWeight={'bold'}>Frequently Asked Questions</Center>

                <Box w={'70%'} m={'auto'} textAlign={'left'} >
                    <Text mb={'10px'}>When will I get an answer to my query? What happens if I don’t get a response?</Text>
                    <Text mb={'10px'} color={'#9e9e9e'}>If you opt for a free consult, then we make sure the doctor replies within 24 to 48 hours. In case of a paid consult, you will receive a reply within 2-4 business hours. However, if you do not get any response within the stipulated time, we will refund your money back into your account.</Text>

                    <Divider orientation='horizontal' color={'red'} />

                    <Text mb={'10px'}>Who are the consulting doctors?</Text>
                    <Text mb={'10px'} color={'#9e9e9e'}>All the doctors are registered medical practitioners. Along with qualifying degrees - experience, research and track-record of practice are taken into account before a doctor is credentialed with Tata 1mg and is given access to answer patient queries.</Text>

                    <Divider orientation='horizontal' color={'red'} />

                    <Text mb={'10px'}>Will the doctor be able to resolve my issue?</Text>
                    <Text mb={'10px'} color={'#9e9e9e'}>Our doctors will give you expert advice on your problem and help you identify next steps which may include further tests, medicine recommendation or lifestyle tips. Few cases require face-to-face examination and we do ask patients to share pictures or reports if they can, for a conclusive diagnosis.
                    </Text>

                    <Divider orientation='horizontal' color={'red'} />

                    <Text mb={'10px'}>Is my consultation private with my doctor?</Text>
                    <Text mb={'10px'} color={'#9e9e9e'}>Privacy of data is one of the fundamental human rights and we at Tata 1mg understand that. All your medical history and online consultation with us are completely private and confidential. We are compliant with industry standards to ensure your consultations are securely stored.</Text>

                    <Divider orientation='horizontal' color={'red'} />

                    <Text mb={'10px'}>For how long is the consultation valid?</Text>
                    <Text mb={'10px'} color={'#9e9e9e'}>In the case of a paid consult, you can follow-up with your doctor for up to 3 days. In case you opt for a free consult, follow-up questions are valid for one day only.</Text>

                    <Divider orientation='horizontal' color={'red'} />

                    <Text mb={'10px'}>Do you have a refund policy?</Text>
                    <Text mb={'10px'} color={'#9e9e9e'}>We have a “take-it-easy” policy. If for any reason you’re not convinced with your online consultation, you can write to us at contact@1mgdoctors.com and we will review the consult with the doctor - seeking clarifications on your queries that were answered. 100% refund will be given in genuine cases.</Text>

                </Box>


           </Box>


           <Box mt={'8rem'}>
               <Box  w="50%" m={'auto'} display={'flex'} gap={'4rem'}>
                    <Box>
                        <img src="https://www.1mg.com/images/oc_doctor.svg"/>
                    </Box>
                    <Box mt={'2rem'} textAlign={'left'}>
                        <Text fontSize={"20px"} color={'#212121'} mb={'20px'} fontWeight={'bold'}> Are you a doctor ?</Text>
                        <Text fontSize={"14px"} color={'#9E9E9E'} mb={'20px'} fontWeight={'bold'}> Be a part of our panel of specialists and connect with your patients from anywhere.</Text>
                        <Button bgColor={'#FF6F61'} color={'white'} p={'1rem'} >JOIN US</Button>
                    </Box>
               </Box>
           </Box>

           <Footer/>
   
   </>
  )
}

export default ConsultDoctor


const doctorCon = [
    {
      title: "Our Happy Customers",
      desc:"All the doctors are registered medical practitioners. Along with qualifying degrees - experience, research and track-record of practice are taken into account before a doctor is credentialed with Tata 1mg and is given access to answer patient queries.",
    },
    {
        title: "Our Happy Customers",
        desc:"All the doctors are registered medical practitioners. Along with qualifying degrees - experience, research and track-record of practice are taken into account before a doctor is credentialed with Tata 1mg and is given access to answer patient queries.",
      },
      {
        title: "Our Happy Customers",
        desc:"All the doctors are registered medical practitioners. Along with qualifying degrees - experience, research and track-record of practice are taken into account before a doctor is credentialed with Tata 1mg and is given access to answer patient queries.",
      },
      {
        title: "Our Happy Customers",
        desc:"All the doctors are registered medical practitioners. Along with qualifying degrees - experience, research and track-record of practice are taken into account before a doctor is credentialed with Tata 1mg and is given access to answer patient queries.",
      },
         
   
  ];

import React from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    useToast,
  } from '@chakra-ui/react';

  import { useState} from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

  import { useNavigate } from "react-router-dom";



  const  Signup= () => {

    const navigate = useNavigate();

    const navigateToLogin = () => {

      navigate('/login');
    };

   const [registerdetails,setregisterdetails] =useState({})
    const toast=useToast()
  
     const [showPassword, setShowPassword] = useState(false);

const handleChange=(e)=>{
  const {name, value} = e.target;setregisterdetails({ ...registerdetails, [name] : value})
  console.log("check",registerdetails)
}


const handleSubmit = async()=>{
   try { 
          let res= await fetch("https://glamorous-jumpsuit.cyclic.app/users/register",
        { 
             method:"POST", 
             body:JSON.stringify(registerdetails), 
             headers:{"Content-Type": "application/json"}
    }) 
    let data=await res.json() 
    console.log("data",data)
       toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          variant: "solid",
          isClosable: true,
          position: "top",
        })

        setTimeout(() => {
            navigate("/login");
          },2000)
        
     }
       catch (error) {
   console.log("can not create");
 }

  console.log(registerdetails)

   }

   

    return (
      <Flex
      color="black"
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'} >
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            >
            <Stack spacing={4}>
            <FormControl id="user" isRequired>
             
              </FormControl>
               
                  <FormControl id="username" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text"  name="username" onChange={handleChange}/>
                  </FormControl>

                  <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email"  name="email" onChange={handleChange}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Text fontSize={10} color={"red"}>Password must be of atleast 8 characters and must contain atleast one alphabet,one number and one symbol</Text>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  name="password" onChange={handleChange} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
                
                  <FormControl id="gender" isRequired>
                    <FormLabel>Gender</FormLabel>
                    <Input type="text"  name="gender" onChange={handleChange}/>
                  </FormControl>
              
              <FormControl id="number" isRequired>
                <FormLabel>Phone No</FormLabel>
                <Input type="number"  name="number" onChange={handleChange}/>
              </FormControl>
             
              
              <Stack spacing={10} pt={2}>
                <Button
                 isDisabled={registerdetails.password?.length<8||!/[!@#$%^&*(),.?":{}|<>]/.test(registerdetails.password)||!/[a-zA-Z]/.test(registerdetails.password)||!/\d/.test(registerdetails.password ||registerdetails.number?.length<10||/[a-zA-Z]/.test(registerdetails.number)||!/@/.test(registerdetails.email))}
                  loadingText="Submitting"
                  size="lg"
                  bg={'tomato'}
                  color={'white'}
                  _hover={{
                    bg: 'tomato',
                  }}
                  onClick={handleSubmit}
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}
               onClick={navigateToLogin}
                >
                 Have an account? <Link color={'tomato'} >Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  export default Signup
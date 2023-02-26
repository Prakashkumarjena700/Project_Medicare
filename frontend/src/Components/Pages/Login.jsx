import React, { useState } from "react";
import {
  Flex,
  Link,
  Text,
  Stack,
  Heading,
  Checkbox,
  FormControl,
  InputGroup,
  InputRightElement,
  Input,
  Box,
  Button,
  FormLabel,
  useColorModeValue,
  useToast
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toast=useToast()
  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };

    fetch("https://glamorous-jumpsuit.cyclic.app/users/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);

        toast({
          title: 'Account created.',
          description: "You are Successfully Login.",
          status: "success",
          duration: 3000,
          variant: "solid",
          isClosable: true,
          position: "top",
        })

        setTimeout(() => {
          navigate("/");
        },2000)

      })
      .catch((err) => console.log(err));
  };
  return (
    <Flex
      color="black"
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        textAlign={"center"}
        padding={{ base: "35px", md: "50px" }}
        maxW={{ base:"100%", md: "70%" }}
        minW="30%"
        shadow={{ base:"none", md: "xs" }}
      >
        <Heading fontSize="30px">Login Form</Heading>
        <Text
          color={"grey"}
          fontSize="14px"
          paddingBottom={{ base: 5, md: 10 }}
        >
          Please fill your registered email id and password.
        </Text>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                isRequired
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"#ff6f61"}>Forgot password?</Link>
              </Stack>
              <Button
                loadingText="Please Wait"
                variant="outline"
                spinnerPlacement="start"
                bg={"#ff6f61"}
                color={"white"}
                _hover={{
                  bg: "#ff4f61",
                }}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;

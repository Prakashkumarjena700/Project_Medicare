import React  from 'react';
import './styles/AdminNavSideBar.css'
import Dashboard from './Dashboard';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  useColorMode,
  Image,
  Center
} from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {FiMenu,} from 'react-icons/fi';
import {RxDashboard} from 'react-icons/rx'
import {MdInventory ,MdAddBox} from 'react-icons/md'
import {RiShoppingCartFill} from 'react-icons/ri'
import {FaUserFriends} from 'react-icons/fa'
import {FiChevronDown} from 'react-icons/fi'



const LinkItems= [
  { name: 'DashBoard', icon: RxDashboard},
  { name: 'Inventory', icon: MdInventory },
  { name: 'Orders', icon: RiShoppingCartFill },
  { name: 'Customers', icon: FaUserFriends },
  { name: 'Add Products', icon: MdAddBox},
];

export default function AdminNavSideBar() {

    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')} >
{/* <Box>hello</Box> */}
      <SidebarContent
      top={0}
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
       
      </Box>
     <Dashboard />
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
    top={0}
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
    //   border={"1px solid red"}
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
         <Image src='https://i.postimg.cc/MGxTs7Sz/medicare.png' w={300}/>
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} >
      <Flex
        align="center"
        p="4"
        mx="4"
      //  border={"1px solid red"}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _groupHover={{
          color: 'black',
          border:"0px solid red"
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
          
        )}
        {children}
      </Flex>
      
    </Link>
    
  );
};


const MobileNav = ({ onOpen, ...rest }) => {

    const { colorMode, toggleColorMode } = useColorMode();
  return (
  
        <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
       bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      
      // border={"1px solid red"}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
          {/* <Text alignItems={"center"} justifyContent={"center"}>ADMIN PANEL</Text>  */}
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
          
      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
           
       {/* <Image className='logosmall'  src='https://i.postimg.cc/MGxTs7Sz/medicare.png'/> */}
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
       {/* <Text>ADMIN PANEL</Text> */}
        <Button onClick={toggleColorMode}
        
        
        >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon  
                
                />}
               
              </Button>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
            
             >
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                   'https://i.postimg.cc/B6g5MTwF/janu.jpg'
                }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Janani</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList alignItems={'center'}>
  <br />
  <Center>
    <Avatar
      size={'2xl'}
      src={'https://i.postimg.cc/B6g5MTwF/janu.jpg'}
    />
  </Center>
  <br />
  <Center>
    <p>Janani</p>
  </Center>
  <br />
  <MenuDivider />
  <MenuItem> email: Janani@gmail.com</MenuItem>
  <MenuItem> Ph: 9874561230</MenuItem>
  <MenuItem>Gender: Female</MenuItem>
  <MenuItem  backgroundColor={"#fe0039"} color={"white"}>Logout</MenuItem>
</MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex> 

    
   
  );
};


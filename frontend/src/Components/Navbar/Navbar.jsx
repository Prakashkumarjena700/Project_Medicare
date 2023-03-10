import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../Logo/logo-color.png"
import SearchBar from './SearchBar';

const NAV_ITEMS = [
  {
    label: "MEDICINE",
    href: "/",
  },
  {
    label: "LAB TESTS",
    href: "/labtests",
  },
  {
    label: "CONSULT DOCTORS",
    href: "/consultdoctor",
  },
  {
    label: "COVID-19",
    href: "/covid19",
  },
  {
    label: "AYURVEDA",
    href: "/ayurveda",
  },
  {
    label: "CARE PLAN",
    href: "/careplan",
  },
];


const AUTH_ITEMS = [
  {
    label: "Login",
    href: "/login",
  },
  {
    label: "Signup",
    href: "/signup",
  },
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate()

  return (
    <>
    <button onClick={()=> navigate("/adminsignin") } className="adminbtnformidandms" >Admin</button>
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} >
            <Image onClick={() => navigate("/")} height={10} width={"140px"} src={Logo}>

            </Image>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={2}
            display={{ base: "none", md: "none", lg: "flex" }}
          >
            <NavLink to="/login">
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                borderRight={"1px solid"}
                borderRadius="none"
                pr={"10px"}
              >
                Login
              </Button>
            </NavLink>

            <NavLink to="/signup">
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
              >
                Sign Up
              </Button>
            </NavLink>
          </Stack>

          <Flex justify="space-around" m={"0 20px"} gap={"20px"} align="center">
            <Text
              as="p"
              cursor={"pointer"}
              display={{ base: "none", md: "none", lg: "flex" }}
            >
              Offer
            </Text>
            <NavLink to="/cart">
              <FaShoppingCart
                color={"#000"}
                fontSize={"20px"}
                cursor="pointer"
              />
            </NavLink>
            <Text
              as="p"
              cursor="pointer"
              display={{ base: "none", md: "none", lg: "flex" }}
              fontSize={"14px"}
            >
              Need Help?
            </Text>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>

        {/* HERE SEARCH BAR  */}

        <SearchBar />
      </Box>
    </>

  );
}

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} border={"0px solid red"} padding={2}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={{ md: "sm", lg: "md" }}
                width={{ md: "40%" }}
                fontWeight={600}

                color={"black"}
                _hover={{
                  textDecoration: 'none',
                  color: "tomato",
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('tomato.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}

          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}

    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

      {AUTH_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
          color: "tomato"
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href} >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

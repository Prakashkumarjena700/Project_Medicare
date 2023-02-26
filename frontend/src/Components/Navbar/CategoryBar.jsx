import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    SimpleGrid
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
  } from '@chakra-ui/icons';
  
  export default function CategoryBar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
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
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start', lg:"none"}}>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={20}>
              <DesktopNav />
            </Flex>
          </Flex>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue("tomato", 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={1}>
        {CAT_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}

                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
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
                  minW={'2xl'}
                  
                  >
                  <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }}>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </SimpleGrid>
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
        _hover={{ color:"" }}>
            {/* //bg: useColorModeValue('tomato', 'gray.900') */}
        <Stack direction={'row'} align={'center'} >
          <Box >
            <Text
              transition={'all .3s ease'}
              _hover={{ color: 'tomato' }}
              fontWeight={500}
              fontSize='sm'
              >
              {label}
            </Text>
            <Text fontSize={'sm'} lineHeight={"10"} _hover={{color: ''}}>{subLabel}</Text> 
          </Box>
       
        </Stack>
      </Link>

    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        
        p={4}
        display={{ md: 'none' }}>
        {CAT_ITEMS.map((navItem) => (
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
            color:"tomato"
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
            >
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
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
 
  
  const CAT_ITEMS = [
    {
      label: "Health Resources Center",
      children: [
        {
          label: "All disease",
          href: "/allProducts",
        },
        {
          label: "All Medicines",
          href: "/allProducts",
        },
        {
          label: "Medicines by Therapeutic Class",
          href: "/allProducts",
        },
      ],
    },
    {
      label: "Vitamin & Nutrition",
      children: [
        {
          label: "Vitamins & Supplements",
          subLabel: [
            "Multi Vitamins",
            "Vitamins A-Z",
            "Minerals-Supplement",
            "Vitamin B-12 & B-Complex",
          ],
          href: "/allProducts",
        },
        {
          label: "Nutritional Drinks",
          subLabel: [
            "Adult Daily Nutrition",
            "Kids Nutrition(2-15yrs",
            "Women Nutrition",
          ],
          href: "/allProducts",
        },
        {
          label: "Health Snacks & Drinks",
          subLabel:[
            "Green Tea & Herbal Tea",
            "Apple Cider Vinegar",
            "Energy Foods",
          ],
          href: "/allProducts",
        },
        {
            label: "Protein & Supplements",
            subLabel:[
              "Whey Protein",
              "Amino Acids",
              "Mass Gainers",
              "Workout Essential",
              "Fat Burners"
            ],
            href: "/allProducts",
          },
          
          {
             label:"Weight Management",
             subLabel:[
              " Weight Management Herbs",
              "Meal Replacements",
              "Weight Gain"
             ],
             href: "/allProducts",
          }
      ],
    },
    {
      label: "Diabetes",
      children: [

        {
          label: "Diabetes & Monitoring",
          subLabel:[
            "Blood Glucose Monitors",
           " Test Strips & Lancets",
            "Syringes & Pens",
            "Continuous glucose monitors"
          ],
          href: "/allProducts",
        },
        {
          label: "Sugar Free",
          subLabel:[
            "Juices & Vinegars",
            "Diabetic Nutrition Supplements"
          ],
          href: "/allProducts",
        },
        {
          label: "Diabetic Medicines",
          subLabel:[
            "Vitamins, Minerals & Antioxidants",
            "Homeopathy Medicines"
          ],
          href: "/allProducts",
        },
        {
            label: "Diabetic Footwear",
            subLabel:[],
            href: "/allProducts",
          },
       
      ],
    },
    {
         label:"HealthCare Devices",
      children: [
        {
          label: "Top Brands in Healthcare Devices",
          subLabel:[
            "Neck & Shoulder Support",
            "Knee & Leg Support",
            "Back & Abdomen Support",
            "Ankle & Foot Support",
            
          ],
          href: "/allProducts",
        },
        {
          label: "BP Monitors",
          subLabel:[
            "Juices & Vinegars",
            "Diabetic Nutrition Supplements"
          ],
          href: "/allProducts",
        },
        {
          label: "Oxygen Concentrators & Cans",
          subLabel:["Hand & Wrist Braces",
          "Arm & Elbow Support",
          "Cervical Pillows",
          "Compression support & sleeves",
          "Heel support",
          "Crepe Bandage"],
          href: "/allProducts",
        },
        {
            label: "Thermometers",
            href: "/allProducts",
          },
          {
            label: "Weighing Scales",
            href: "/allProducts",
          },
         
          {
            label: "Masks (N95, Surgical and more)",
            href: "/allProducts",
          },
          
          {
            label: "Nebulizers & Vaporizers",
           
            href: "/allProducts",
          },
      ],
    },
    {
    
    label: "Personal Care",
      children: [
        {
          label: "Skin Care",
          subLabel:[
          
            "Mosquito Repellents",
            
            "Bath Essentials",
            "Facewash",
            "Sanitizers & Handwash",
            "Sunscreen"
          ],
          href: "/allProducts",
        },
        {
          label: "Baby Care",
          subLabel:[
            "Baby & Infant Food",
           " Baby Diapers, wipes & more",
            "Nursing & Feeding",
            "Baby Bath Essentials",
            "Baby Skin Care",
            "Baby Healthcare",
            "Baby Oral Health"
          ],
          href: "/allProducts",
        },
        {
          label: "Hair Care",
          subLabel:[
          "Hair Conditioners Products natural",
          "Hair Growth Supplements",
          "Hair Growth Products"
          ],
          href: "/allProducts",
        },
        {
            label: "Men Care",
            href: "/allProducts",
          },
          {
            label: "Elderly Care",
            subLabel:[
              "Adult Diapers",
              "Bone & Joint Health",
              "Living & Safety Aids",
              "Orthopaedic Supports"
            ],
            href: "/allProducts",
          },
         
          {
            label: "Women care",
            subLabel:[
                "Feminine Hygiene",
                "Women Care Supplements",
                "Polycystic Ovary Syndrome"
            ],
            href: "/allProducts",
          },
          
          {
            label: "Nebulizers & Vaporizers",
            href: "/allProducts",
          },
      
      ],
    },
    {
    
     label: "Health Conditions",
      children: [
       
        {
            label: "Vitamins & Supplements",
            subLabel: [
              "Multi Vitamins",
              "Vitamins A-Z",
              "Minerals-Supplement",
              "Vitamin B-12 & B-Complex",
            ],
            href: "/allProducts",
          
        },
        {
          label: "Heart Care",
          href: "/allProducts",
        },
        {
          label: "Bone, Joint & Muscle Care",
          href: "/allProducts",
        },
        {
            label: "Pain Relief",
            href: "/allProducts",
          },
          {
            label: "Eye Care",
              href: "/allProducts",
          },
         
          {
            label: "Ear Care",
              href: "/allProducts",
          },
          
          {
            label: "First Aid",
              href: "/allProducts",
          },
      ],
    },
    {
   
      label: "Ayurveda Products",
      children: [
             
        {
          label: "Ayurveda Top Brands",
          subLabel:[
            "Herbal Juice",
            "Ayurvedic Immunity Boosters",
            "Explore Popular Herbs",
            "Herbal Supplements"
          ],
            href: "/allProducts",
        },
        {
          label: "Chyawanparash",
          subLabel:[
            "Hamdard Unani",
            "AMU Dawakhana",
            "Rex Remedies",
            "Dehlvi Remedies"
          ],
            href: "/allProducts",
        },
        {
          label: "Popular categories",
          subLabel:[
           " Ayurvedic Respiratory care",
            "Cough, Cold & Fever",
            "Sexual Wellness",
            "Bone, Joint and Muscle Care",
            "Stomach Care"
          ],
            href: "/allProducts",
        },
        {
            label: "Top Health Concerns",
              href: "/allProducts",
          },
          {
            label: "Unani Medicines",
              href: "/allProducts",
          },
         
          {
            label: "Ayurvedic Medicine",
              href: "/allProducts",
          }
      ],
    },
  
    {
    
       label: "Homeopathy",
       
      children: [
        {
          label: "Homeopathy Top Brands",
          subLabel:[
            'Homeopathic Care for Cold & Cough',
            'Homeopathic Respiratory Care',
           " Homeopathy Covid Essentials"
          ],

            href: "/allProducts",
        },
        {
          label: "Homeopathy Wellness Combos",
          subLabel:[

              "Homeopathic Drops",
              "Dilutions",
              "Mother Tinctures",
              "Triturations",
              "Bio Combinations",
             " Millesimal LM Potencies",
              "Biochemics",
              "Bach Flower Remedies"
          ],

            href: "/allProducts",
        },
        {
          label: "Homeopathy Popular Categories",
            href: "/allProducts",
        },
        {
            label: "Homeopathy Medicines",
              href: "/allProducts",
          }
      ],
    },
    {
      label: "Featured",
      children: [
        {
          label: "Winter Care",
          subLabel:[
            "Body & Skin Care",
            "Winter Hair & Scalp Care",
            "Cough & Cold",
            "Fever & Headache",
           " Vaporizers & Nebulizers",
            'Heating Aid',
            "Winter Combos"
          ],
            href: "/allProducts",
        },
        {
          label: "TATA 1mg Health Products",
          subLabel:[
           " New Arrivals on TATA 1MG",
            "Buy More, Save More",
            "Minimum 33% Off"
          ],
            href: "/allProducts",
        },
        {
          label: "New Arrivals on TATA 1MG",
            href: "/allProducts",
        },
        {
            label: "Popular Combo Deals",
              href: "/allProducts",
          }
      ],
    },

    {
        label: "Covid Essentials",
        
        children: [
          {
            label: "Covid-19 Self test kits",
              href: "/allProducts",
          },
          {
            label: "Oxygen Cans & Concentrators",
              href: "/allProducts",
          },
          {
            label: "Masks",
              href: "/allProducts",
          },
          {
              label: "Sanitizers & Handwash Products",
                href: "/allProducts",
            }
            ,
          {
              label: " Support Your Immunity",
                href: "/allProducts",
            }
           
        ],
      },
  ];
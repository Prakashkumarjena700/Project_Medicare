import { Box, Button, FormControl, Input, Select,Flex,useToast } from "@chakra-ui/react";

import "./styles/Inventory.css";
import axios from "axios";
import { useState } from "react";

export default function AddProduct() {


const [name,setname]=useState('')
const [highlights,sethighlights]=useState('')
const [sortdesc,setsortdesc]=useState('')
const [longdesc,setlongdesc]=useState('')
const [price,setprice]=useState('')
const [discount,setdiscount]=useState('')
const [brand,setBrand]=useState('')
const [uses,setuses]=useState('')
const [rating,setrating]=useState('')
const [form,setform]=useState('')
const [img1,setimg1]=useState('')
const [img2,setimg2]=useState('')
const [img3,setimg3]=useState('')
const [img4,setimg4]=useState('')
const [img5,setimg5]=useState('')

const Toast = useToast()

  const adddata = async () => {

  const payload={
    img1,
    img2,
    img3,
    img4,
    img5,
    form,
    rating:Number(rating),
    name,
    highlights,
    sortdesc,
    longdesc,
    price:Number(price),
    discount:Number(discount),
    uses,
    brand,
    form
  }
console.log(payload)

    let res = await axios.post(
      `https://glamorous-jumpsuit.cyclic.app/products/create`,payload
    );
    console.log(res);
  };


  return (
    <Box pb={6} className="abc">
     
<FormControl borderRadius={"10px"} border={"1px solid #f8447a"} mt={"-10px"}>
        <Input placeholder="Product Name"  onChange={(e)=>setname(e.target.value)} />
      </FormControl> 


      <Flex gap={"20px"}>
      <FormControl borderRadius={"10px"} border={"1px solid #f8447a"} mt={2}>
        <Input placeholder="Product Image1" type='url'  onChange={(e)=>setimg1(e.target.value)} />
      </FormControl> 

      </Flex>


<Flex gap={"20px"}>
      <FormControl borderRadius={"10px"} border={"1px solid #f8447a"} mt={4}>
        <Input placeholder="Product Image2" type='url' onChange={(e)=>setimg2(e.target.value)} />
      </FormControl>

      <FormControl borderRadius={"10px"} border={"1px solid #f8447a"} mt={4}>
        <Input placeholder="Product Image3"  type='url' onChange={(e)=>setimg3(e.target.value)}/>
      </FormControl>

      </Flex>

      <Flex gap={"20px"}>
      <FormControl borderRadius={"10px"} border={"1px solid #f8447a"} mt={4}>
        <Input placeholder="Product Image4" type='url' onChange={(e)=>setimg4(e.target.value)} />
      </FormControl>

      <FormControl borderRadius={"10px"} border={"1px solid #f8447a"} mt={4}>
        <Input placeholder="Product Image5" type='url'  onChange={(e)=>setimg5(e.target.value)}/>
      </FormControl>
      </Flex>

      <Flex gap={"20px"}>
      <FormControl borderRadius={"10px"} border={"2px solid #f8447a"} mt={4}>
        <Select name="" id="" onChange={(e)=>setBrand(e.target.value)}>
          <option value="">Product Brand</option>
          <option value="Tata 1mg">Tata 1mg</option>
          <option value="Sugar Free">Sugar Free</option>
          <option value="Protinex">Protinex</option>
          <option value="Cetaphil">Cetaphil</option>
          <option value="Oziva">Oziva</option>
          <option value="Dr Morepen">Dr Morepen</option>
          <option value="Dr Reddy's">Dr Reddy's</option>
          <option value="Dabur">Dabur</option>
          <option value="Baidyanath">Baidyanath</option>
          <option value="Himalaya">Himalaya</option>
          <option value="Zandu">Zandu</option>
          <option value="Hamdard">Hamdard</option>
          <option value="Wow">Wow</option>
          <option value="Patanjali">Patanjali</option>
        </Select>
      </FormControl>

      <FormControl borderRadius={"10px"} border={"2px solid #f8447a"} mt={4}>
        <Select onChange={(e)=>setuses(e.target.value)}>
          <option> Uses</option>
          <option value="Diabetes Care"> Diabetes Care</option>
          <option value="Cardiac Care">Cardiac Care</option>
          <option value="Stomach Care">Stomach Care</option>
          <option value="Liver Care">Liver Care</option>
          <option value="Bone, Joint and Muscle Care">
            Bone, Joint and Muscle Care
          </option>
          <option value="Kidney Care">Kidney Care</option>
          <option value="Derma Care">Derma Care</option>
          <option value="Respiratory Care">Respiratory Care</option>
          <option value="Eye Care">Eye Care</option>
        </Select>
      </FormControl>
      </Flex>

      <Flex gap={"20px"}>
      <FormControl borderRadius={"10px"} border={"1px solid #f8447a"} mt={4}>
        <Input placeholder="Product Price" type='Number' onChange={(e)=>setprice(e.target.value)} />
      </FormControl>

      <FormControl borderRadius={"10px"} border={"1px solid #f8447a"} mt={4}>
        <Input placeholder="Product short Description"  onChange={(e)=>setsortdesc(e.target.value)} />
      </FormControl>
      </Flex>

      <Flex gap={"20px"}>

      <FormControl borderRadius={"10px"} border={"1px solid #f8447a"} mt={4}>
        <Input placeholder="Product Long Description" onChange={(e)=>setlongdesc(e.target.value)} />
      </FormControl>

      <FormControl borderRadius={"10px"} border={"1px solid #f8447a"} mt={4}>
        <Input placeholder="Product HighLights" onChange={(e)=>sethighlights(e.target.value)} />
      </FormControl>
      </Flex >

      <FormControl borderRadius={"10px"} border={"1px solid #f8447a"} mt={4}>
        <Input placeholder="Product Rating" type='Number' onChange={(e)=>setrating(e.target.value)} />
      </FormControl>

      <FormControl borderRadius={"10px"} border={"1px solid #f8447a"} mt={4}>
        <Input placeholder="Product Discount" type='Number' onChange={(e)=>setdiscount(e.target.value)} />
      </FormControl>


      <FormControl borderRadius={"10px"} border={"1px solid #f8447a"} mt={4}>
        <Input placeholder="Product Form" onChange={(e)=>setform(e.target.value)} />
      </FormControl>
        
      <Button  onClick={() => {
                adddata();
                Toast({
                  title: " Product Added ",
                  position: 'top',
                  status: "success",
                  duration: 4000,
                  isClosable: true,
                });
              }}
              id="button">Add Data</Button>
    </Box>
  );
}

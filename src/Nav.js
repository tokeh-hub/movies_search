import React from 'react'
import {Box, Flex, Text} from "@chakra-ui/react"
import image from './images/gaara.png'

const Nav = () => {
  return (
      <>
    <Flex 
    w="100%"
    h="100px" 
    bg='#292929' 
    alignItems="center" 
    justifyContent={{
      base: 'center',
      md: 'flex-start',
    }} > 
        <Box border='1px' borderColor='white' color="white" w="100px"  ml={[0, 0, 0, 5]} >
            MyTestApp
        </Box>
    </Flex>
    <Flex  bgImage={image}
  bgPosition="center"
  bgRepeat="no-repeat"
  bgSize="cover"
  h="550px"
  position="relative"
  justifyContent={{
      base:"center",
      md:"flex-start"
  }}
  alignItems={{
    base:"center",
    md:"flex-start"
}}
  >
      <Text 
        lineHeight={{
            base:"50px",
            md:"93.74px"}}
        color="white"
        fontWeight="bold"
        w={{
            base:"300px",
            md:"490px"}}
        h="282px"
        position="absolute"
        top="147px"
        left= {{
            base: '30px', // 48em-80em,
            md: '77px', // 80em+
          }} 
        fontSize={{
            base:"50px",
            md:"72px"
        }}
        textAlign={{
            base:"center",
            md:"justify"}}
       
        >
            Watch something Incredible
      </Text>
           
    </Flex>
    </>
  )
}

export default Nav
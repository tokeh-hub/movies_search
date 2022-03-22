import React from 'react'
import { Box, Input, Text, Grid, GridItem , Center} from '@chakra-ui/react'

const Main = ({value, setValue, data}) => {
    console.log(data)
  return (
    <Box bg="white" w="100%" color="black" textAlign="justify" > 
        <Box px={{base:"5",
               md:"10px"}} py={5}>
             <Text mb='8px' fontSize="24px" fontWeight="400px" lineHeigh="31.25px">Search</Text>
             <Input size={{base:"md",sm:"sm"}} value={value} onChange={e=>setValue(e.target.value)}/>
        </Box>
        <Box w="100%">
        <Box overflow="hidden">
        <Text mb='8px' fontSize="24px" fontWeight="400px" lineHeight="31.25px" >{data?.data?.Genre}</Text>
        <Grid templateColumns='repeat(5, 300px)' gap={6} overflow= "scroll" whiteSpace="nowrap" >
            <GridItem maxW="100%" color="white" bg='black' borderRadius="5px">
                <Center h='300px' >{data?.data?.Title}</Center>
            </GridItem>
            <GridItem maxW="100%" h='300px' color="white" bg='black' borderRadius="5px">
                <Center h='300px' >{data?.data?.Title}</Center>
            </GridItem>
            <GridItem maxW="100%" h='300px' color="white" bg='black' borderRadius="5px">
                <Center h='300px' >{data?.data?.Title}</Center>
            </GridItem>
            <GridItem maxW="100%" h='300px' color="white" bg='black' borderRadius="5px">
                <Center h='300px' >{data?.data?.Title}</Center>
            </GridItem>
            <GridItem maxW="100%" h='300px' color="white" bg='black' borderRadius="5px">
                <Center h='300px' >{data?.data?.Title}</Center>
            </GridItem>
            </Grid>
        </Box>
        <Box overflow="hidden">
        <Text mb='8px' fontSize="24px" fontWeight="400px" lineHeight="31.25px">{data?.data?.Genre}</Text>
        <Grid templateColumns='repeat(5, 300px)' gap={6} overflow= "scroll" whiteSpace="nowrap">
        <GridItem maxW="100%" h='300px' color="white" bg='black' borderRadius="5px">
                <Center h='300px' >{data?.data?.Title}</Center>
            </GridItem>
            <GridItem maxW="100%" h='300px' color="white" bg='black' borderRadius="5px">
                <Center h='300px' >{data?.data?.Title}</Center>
            </GridItem>
            <GridItem maxW="100%" h='300px' color="white" bg='black' borderRadius="5px">
                <Center h='300px' >{data?.data?.Title}</Center>
            </GridItem>
            <GridItem maxW="100%" h='300px' color="white" bg='black' borderRadius="5px">
                <Center h='300px' >{data?.data?.Title}</Center>
            </GridItem>
            <GridItem maxW="100%" h='300px' color="white" bg='black' borderRadius="5px">
                <Center >{data?.data?.Title}</Center>
            </GridItem>
            </Grid>
        </Box>
        </Box>
        
       
    </Box>
  )
}

export default Main
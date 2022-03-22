import React, {useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import { Box } from '@chakra-ui/react'
import Nav from './Nav';
import Main from './Main';
function App() {
  const[value, setValue] = useState('')
  const[data,setData] = useState([])
  const getResponse = async () =>{
    const response = await axios.get(`http://www.omdbapi.com/?apikey=42029095&t=fast&type=movie`)
    setData(response)
  }
 /* eslint-disable */ 
  useEffect(()=>{
    getResponse()
  },[])
  return (
    <Box className="App" w="100vw" p={5}>
        <Nav/>
        <Main value={value} setValue={setValue} data={data}/>

    </Box> 
  );
}

export default App;

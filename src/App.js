import React, {useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import { Box } from '@chakra-ui/react'
import Nav from './Nav';
import Main from './images/Main';
function App() {
  const[value, setValue] = useState('fast')
  const[data,setData] = useState([])
  const getResponse = async () =>{
    const response = await axios.get(`http://www.omdbapi.com/?apikey=42029095&t=${value}&type=movie`)
    setData(response)
  }
  useEffect(()=>{
    getResponse()
  },[value])
  return (
    <Box className="App" w="100vw" p={5}>
        <Nav/>
        <Main value={value} setValue={setValue} data={data}/>

    </Box> 
  );
}

export default App;

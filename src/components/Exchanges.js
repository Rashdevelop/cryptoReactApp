import React, { useEffect,useState  } from 'react'
import {server} from '../index'
import axios from 'axios'
import Loader from '../../src/loader/Loader.js'
import { Container,  Box, wrap } from '@chakra-ui/react'
import ExchangeCard from './ExchangeCard.js'

const Exchanges = () => {
  //states
  const[exchange , setExchange]=useState([])
  const[loading , setloading]=useState(true)
  
  //functioning
   useEffect(()=>{
    const fetchExchanges=async()=>{
      const {data}= await axios.get(`${server}/exchanges`)
      setExchange(data)
      console.log(data)
      setloading(false)
    }
     fetchExchanges()
   },[])

    return (
     <Container>{loading?(<Loader/>):(
     <Box wrap={'wrap'} borderRadius={"base"}>
      {exchange.map((element)=>(
           <ExchangeCard id={element.id} name={element.name} url={element.url} image={element.image}></ExchangeCard>
      ))}</Box>
     )
     }</Container>
   
  )
}

export default Exchanges

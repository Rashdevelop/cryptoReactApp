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
      try{
      const {data}= await axios.get(`${server}/exchanges`)
      setExchange(data)
      setloading(false)
      }catch(error){
        document.write('error ocuured'+error)
      }
    }
     fetchExchanges()
   },[])

    return (
     <Container>{loading?(<Loader/>):(
     <Container wrap={'wrap'} borderRadius={"base"}>
      {exchange.map((element)=>(
           <ExchangeCard id={element.id} name={element.name} url={element.url} image={element.image}></ExchangeCard>
      ))}</Container>
     )
     }</Container>
   
  )
}

export default Exchanges

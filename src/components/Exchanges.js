import React, { useEffect,useState  } from 'react'
import {server} from '../index'
import axios from 'axios'
import Loader from '../../src/loader/Loader.js'
import { Container, HStack } from '@chakra-ui/react'
import ExchangeCard from './ExchangeCard.js'

const Exchanges = () => {
  //states
  const[Exchange , setExchange]=useState([])
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
     <Container>{loading?<Loader/>:
     <HStack>{
      Exchange.map((element)=>(
           <ExchangeCard id={element.id} name={element.name} year={element.year_established} description ={element.description}></ExchangeCard>
      ))}</HStack>
     }</Container>
   
  )
}

export default Exchanges

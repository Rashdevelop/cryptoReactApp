import React, { useEffect } from 'react'
import {server} from '../index'
import axios from 'axios'
const Exchanges = () => {
 
     const fetchExchanges=async()=>{
      const {data}= await axios.get(`${server}/exchanges`)
      }
     fetchExchanges()
     
  return (
   console.log(data)
  )
}

export default Exchanges

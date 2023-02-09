import React, { useEffect, useState } from 'react'
import {server} from '../index'
import axios from 'axios'
import CoinCard from './CoinCard.js'
import Loader from '../loader/Loader'
const Coins = () => {
  //states
  const[coins ,setCoins]=useState([])
  const[loading ,setLoading]=useState(true)
  useEffect(()=>{
    const fetchCoins=async()=>{
      
      const {data}= await axios.get(`${server}/coins/list`)
      setCoins(data)
      setLoading(false)
    
      fetchCoins()
  }})

    //return function
  return ( 
     <>
     <div className="container">
      {coins.map((element)=>(
        <CoinCard id={element.id} name={element.name} symbol={element.symbol}></CoinCard>
      ))}
     </div>
     </>
      )
}

export default Coins

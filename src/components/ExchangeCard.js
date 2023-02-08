import { Box ,Center,flexbox,Image} from '@chakra-ui/react'
import React from 'react'

const ExchangeCard = ({id , name,url,image}) => {
  return (
    <>
    <Box shadow={'lg'} p={'8'} >
    <a href={url} target='blank'>
    <img src={image} alt="" />
    <span>{name}</span>
   </a>
   </Box>
  </>
  )
}

export default ExchangeCard

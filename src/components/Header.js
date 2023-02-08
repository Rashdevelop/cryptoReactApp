import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <HStack p={'1'} shadow={'base'} bgColor={'blackAlpha.900'}>
    <Button variant={"unstyled"} color={"white"}><Link to='/'>HOME</Link></Button>
    <Button variant={"unstyled"} color={"white"}><Link to='/coins'>COIN</Link></Button>
    <Button variant={"unstyled"} color={"white"}><Link to='/coinDetails'>COINDETAILS</Link></Button>
    <Button variant={"unstyled"} color={"white"}><Link to='/exchanges'>EXCHANGEs</Link></Button>
   </HStack>
  )
}

export default Header

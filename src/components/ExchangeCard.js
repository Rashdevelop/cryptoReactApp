import React from 'react'

const ExchangeCard = ({id, name,year,country,description}) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{year}</p>
      <p>{country}</p>
      <p>{description}</p>
    </div>
  )
}

export default ExchangeCard

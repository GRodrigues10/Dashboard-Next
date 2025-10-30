import React from 'react'
import { VipCardContainer } from './VipCard.styled'
import {ChevronUp } from 'lucide-react'

function VipCard() {
  return (
    <VipCardContainer>
        <h1>Clientes VIP</h1>
        <h2>92</h2>
        <p><ChevronUp/>1,5%</p>
    </VipCardContainer>
  )
}

export default VipCard
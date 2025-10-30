import React from 'react'
import { NewClientCardContainer} from './NewClientCard.styled'
import { ChevronUp } from 'lucide-react'

function NewClientCard() {
  return (
    <NewClientCardContainer>
     
            <h1>Novos Clientes</h1>
            <h2>138</h2>
            <p><ChevronUp/> 14,2%</p>
  
    </NewClientCardContainer>
  )
}

export default NewClientCard
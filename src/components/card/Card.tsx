'use client'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { CardContainer } from './Card.styled'

export interface CardContent{
    title:string,
    price:string,
    percent:string
}

function Card({title, price, percent}:CardContent) {
      const numericPercent = parseFloat(percent.replace(',', '.'))
      const isPositive = numericPercent >= 2
  return (
    <CardContainer>
        <h1>{title}</h1>
        <h2>{price}</h2>
        <p style={{ color: isPositive ? '#94a3b8' : 'red', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        {isPositive ? <ChevronUp /> : <ChevronDown />}
        {percent}
      </p>
    </CardContainer>
  )
}

export default Card
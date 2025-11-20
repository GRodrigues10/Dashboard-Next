'use client'
import { NotFoundContainer } from './not-found.styled'
import Link from 'next/link'

function NotFound() {
  return (
    <NotFoundContainer>
        <h1>Essa página não existe!</h1>
        <Link href='/'><button>Voltar</button></Link>
    </NotFoundContainer>
  )
}

export default NotFound
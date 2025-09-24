import React from 'react'
import { Wrapper, Container, Content } from './styles'

type Props = {
  id: string
  theme: 'light'|'dark'
  children: React.ReactNode
  bg?: string 
}

export default function Section({ id, theme, children, bg }:Props){
  return (
    <Wrapper id={id} data-theme={theme} $bg={bg}>   
      <Container>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  )
}

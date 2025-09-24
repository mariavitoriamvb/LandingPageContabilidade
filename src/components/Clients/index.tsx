import React from 'react'
import { Wrap, Logo, Grid, Container, Lead } from './styles'
import TestimonialCard from '../TestimonialCard'
import c1 from '../../assets/client1.png'
import c2 from '../../assets/client2.png'
import c3 from '../../assets/client3.png'



export default function Clients(){
  return (
    <Container>
      <h3 style={{fontSize:'clamp(24px,3.5vw,36px)'}}><mark>Clients & Awards</mark></h3>
      <Lead className="rose-gradient">O que dizem meus clientes</Lead>
        <Grid>
          <TestimonialCard avatar={c1} name="Mariana S." role="CEO — Studio de Moda" quote="Com a Helena, passei a entender meus números e tomar decisões com segurança. O visual dos relatórios é impecável." />
          <TestimonialCard avatar={c2} name="Bruno T." role="Sócio — Escritório de Advocacia" quote="A organização do BPO e o planejamento fiscal reduziram custos sem dor de cabeça." />
          <TestimonialCard avatar={c3} name="Renata P." role="Médica Dermatologista" quote="Profissional discreta, pontual e extremamente detalhista." />
        </Grid>
    </Container>
  )
}

import React from 'react'
import { Header, Grid, Card } from './styles'
import ServiceCard from '../ServiceCard'

const items = [
  { title:'Casa Aroeira', img:'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop' },
  { title:'Pavilhão do Parque', img:'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop' },
  { title:'Loft Horizonte', img:'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop' },
  { title:'Galeria Leste', img:'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop' },
]

export default function Services(){
  return (
    <div>
      <Header>
        <h2>Soluções sob <mark>medida</mark></h2>
        <p>Estruturadas para empresas e profissionais liberais que buscam sofisticação aliada a rigor técnico.</p>
      </Header>
        <Grid>
          <ServiceCard icon="chart" title="Planejamento Tributário" desc="Estratégias lícitas para reduzir carga fiscal e maximizar resultados." />
          <ServiceCard icon="scale" title="Compliance & Governança" desc="Conformidade total com normas, relatórios e auditorias." />
          <ServiceCard icon="shield" title="BPO Financeiro Premium" desc="Gestão de contas, fluxo de caixa e relatórios de performance." />
        </Grid>
    </div>
  )
}

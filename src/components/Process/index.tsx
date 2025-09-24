import React from 'react'
import { ProcessGrid, Illustration, Timeline, Step, Container } from './styles'
import art from '../../assets/process-illustration3.png'   // <—
import FAQ from '../FAQ'

const steps = [
  { title:'Discovery', desc:'Briefing, site study, constraints, budget.' },
  { title:'Concept', desc:'Spatial strategy, massing, materials, light.' },
  { title:'Development', desc:'BIM, systems coordination, detailing.' },
  { title:'Permitting', desc:'Authorities approvals and documentation.' },
  { title:'Construction', desc:'Site visits, RFIs, quality control.' },
]

export default function Process(){
  return (
    <Container>
      <h3>
        <mark>Dúvidas frequentes</mark>
      </h3>
      <div style={{ background: '#0b0b0d', borderRadius: '16px', padding: '24px' }}>
        <FAQ q="Atende empresas de quais segmentos?" a="Saúde, moda, tecnologia, jurídico e serviços premium em geral." />
        <FAQ q="Como funciona o início do trabalho?" a="Briefing inicial, mapeamento financeiro e definição de entregas. Depois, acompanhamento mensal com rituais executivos." />
        <FAQ q="Assina NDA?" a="Sim, acordo de confidencialidade faz parte do onboarding." />
      </div>

      
    </Container>
  )
}

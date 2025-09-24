import React from 'react'
import { Wrap, Col, List, Bullet, KPIGrid, Stat, Image } from './styles'
import about from '../../assets/about-me.png'  // importa a imagem
export default function Studio(){
  return (
    <Wrap>
      <Col>
        <h3><mark>Sobre mim</mark></h3>
        <p>Sou Helena Campos, contadora há mais de 12 anos com foco em planejamento tributário, governança e BPO financeiro. Atendo uma carteira selecionada de clientes que valorizam discrição, eficiência e estética impecável na apresentação de números.</p>
        <p>CRC ativo, MBA em Finanças e especialização em Governança Corporativa.</p>


        <List>
          <Bullet>Residential · Multi-family</Bullet>
          <Bullet>Retail & Hospitality</Bullet>
          <Bullet>Interior Architecture</Bullet>
          <Bullet>Permitting & BIM</Bullet>
        </List>
      </Col>

      <Col>
        <KPIGrid>
          <Stat><strong>12+</strong><span>Years</span></Stat>
          <Stat><strong>80+</strong><span>Projects</span></Stat>
          <Stat><strong>16</strong><span>Awards</span></Stat>
        </KPIGrid>

        <Image src={about} alt="sobre mim" />
      </Col>
    </Wrap>
  )
}

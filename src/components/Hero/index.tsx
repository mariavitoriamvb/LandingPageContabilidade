import React from 'react'
import { Grid, Title, Lead, Actions, ImgCard, Ring } from './styles'

export default function Hero(){
  return (
    <Grid>
      <div>
        <Title><mark>Helena Campos</mark> Consultoria & Planejamento Fiscal</Title>
        <Lead>Assessoria contábil sob medida para negócios que exigem precisão, confidencialidade e uma apresentação impecável.</Lead>
        <Actions>
          <a className="primary" href="#projects">Agendar consultoria</a>
        </Actions>
      </div>
      <ImgCard>
       
        <Ring />
      </ImgCard>
    </Grid>
  )
}

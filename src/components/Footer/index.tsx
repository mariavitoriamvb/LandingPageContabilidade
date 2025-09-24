import React from 'react'
import { Bar } from './styles'

export default function Footer(){
  return (
    <Bar role="contentinfo">
      <span>© {new Date().getFullYear()} Helena Campos — Contabilidade</span>
      <nav>
        <a href="#" onClick={(e)=>{e.preventDefault(); /* contatos/whatsapp aqui */}}>WhatsApp</a>
        <a href="mailto:contato@helenacampos.com">E-mail</a>
        <a href="#" onClick={(e)=>{e.preventDefault(); if((window as any).fullpage_api) (window as any).fullpage_api.moveTo('contato')}}>Agendar</a>
      </nav>
    </Bar>
  )
}

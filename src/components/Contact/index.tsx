import React, { useState } from 'react'
import { Form, Grid, Title, Lead } from './styles'

export default function ContactForm(){
  const [state, setState] = useState({name:'', email:'', message:''})

  function submit(e:React.FormEvent){
    e.preventDefault()
    alert('Mensagem enviada! (mock)')
  }

  return (
<>
        <Title><mark>Contato</mark> </Title>
        <Lead>Envie uma mensagem e retornarei em até 1 dia útil.</Lead>


    <Grid>
        <Form onSubmit={submit}>
              <div className="row">
                <input placeholder="Seu nome" value={state.name} onChange={e=>setState(s=>({...s,name:e.target.value}))} required />
                <input type="email" placeholder="Seu e-mail" value={state.email} onChange={e=>setState(s=>({...s,email:e.target.value}))} required />
              </div>
              <textarea placeholder="Como posso ajudar?" rows={5} value={state.message} onChange={e=>setState(s=>({...s,message:e.target.value}))} />
              <button type="submit">Enviar</button>
        </Form>


       <div className="card">
            <strong>Atendimento</strong>
            <p>Seg — Sex, 9h às 18h</p>
            <strong>E-mail</strong>
            <p>contato@helenacampos.com</p>
      </div>
    </Grid>

</>
    
   
  )
}

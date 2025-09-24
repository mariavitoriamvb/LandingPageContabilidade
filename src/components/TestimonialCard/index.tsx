import React from 'react'
import { Card } from './styles'

export default function TestimonialCard({quote, name, role, avatar}:{quote:string, name:string, role:string, avatar:string}){
  return (
    <Card>
      <div className="head">
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong> <br />
          <span>{role}</span>
        </div>
      </div>
      <p>“{quote}”</p>
    </Card>
  )
}

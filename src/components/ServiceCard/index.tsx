import React from 'react'
import { Card } from './styles'
import { FaBalanceScale, FaChartLine, FaShieldAlt } from 'react-icons/fa'

type Service = {
  icon: 'scale'|'chart'|'shield',
  title: string,
  desc: string
}

const icons = {
  scale: <FaBalanceScale />,
  chart: <FaChartLine />,
  shield: <FaShieldAlt />
}

export default function ServiceCard({icon, title, desc}: Service){
  return (
    <Card>
      <div className="icon">{icons[icon]}</div>
      <strong>{title}</strong>
      <p>{desc}</p>
    </Card>
  )
}

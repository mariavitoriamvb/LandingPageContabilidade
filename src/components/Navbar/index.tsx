// components/Navbar/index.tsx
import React from 'react'
import { Container, Nav, NavLink, Logo, ProgressBarContainer, ProgressBar } from './styles'
import type { SectionMeta, SectionId } from '../../types/types'

type Props = {
  sections: SectionMeta[]
  active: SectionId
  theme: 'light'|'dark'
  progress: number      // 0..1
  onChange: (id: SectionId)=>void
}

export default function Navbar({ sections, active, theme, progress, onChange }: Props){
  const go = (e: React.MouseEvent, id: SectionId) => {
    e.preventDefault()
    onChange(id) // usa fullpage_api.moveTo vindo do App
  }

  return (
    <>
      <ProgressBarContainer>
        <ProgressBar style={{ width: `${Math.round(progress*100)}%` }} />
      </ProgressBarContainer>

      <Container data-theme={theme}>
        <Logo href="#" onClick={(e)=>go(e, sections[0].id)}>
          <span>Helena</span><em>Campos</em>
        </Logo>
        <Nav>
          {sections.map(s=>(
            <NavLink
              key={s.id}
              href={`#${s.id}`}
              data-active={active===s.id}
              onClick={(e)=>go(e, s.id)}
            >
              {s.label}
            </NavLink>
          ))}
        </Nav>
      </Container>
    </>
  )
}

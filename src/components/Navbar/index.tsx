import React, { useEffect, useRef } from 'react'
import { Container, Logo, Nav, NavLink, MobileToggle, MobilePanel, ProgressBarContainer, ProgressBar } from './styles'
import type { SectionId, SectionMeta } from '../../types'

type Props = {
  sections: SectionMeta[]
  active: SectionId
  theme: 'light'|'dark'
  onChange: (id:SectionId)=>void
}

export default function Navbar({ sections, active, theme }: Props){
  const [open, setOpen] = React.useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const onScroll = () => {
      const h = document.documentElement
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      if(progressRef.current) progressRef.current.style.width = pct + '%'
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <>
      <ProgressBarContainer><ProgressBar ref={progressRef} /></ProgressBarContainer>
      <Container data-theme={theme}>
        <Logo href="#home"><span>Helena</span><em>Campos</em></Logo>
        <Nav>
          {sections.map(s=> (
            <NavLink key={s.id} href={`#${s.id}`} data-active={active===s.id}>{s.label}</NavLink>
          ))}
        </Nav>
        <MobileToggle onClick={()=>setOpen(v=>!v)} aria-label="Toggle navigation">
          <span/><span/><span/>
        </MobileToggle>
      </Container>

      <MobilePanel data-open={open}>
        {sections.map(s=> (
          <a key={s.id} href={`#${s.id}`} onClick={()=>setOpen(false)} data-active={active===s.id}>{s.label}</a>
        ))}
      </MobilePanel>
    </>
  )
}

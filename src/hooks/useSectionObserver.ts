import { useEffect } from 'react'
import type { SectionId } from '../types'

export function useSectionObserver(setActive:(id:SectionId)=>void) {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id as SectionId)
      })
    }, { threshold: 0.6 })
    const ids: SectionId[] = ['home','projects','studio','process','clients','contact']
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [setActive])
}

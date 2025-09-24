import styled, { css } from 'styled-components'

export const ProgressBarContainer = styled.div`
  position: fixed;
  inset: 0 0 auto 0;
  height: 4px;
  background: rgba(0,0,0,.06);
  z-index: 1000;
`
export const ProgressBar = styled.div`
  height: 100%;
  width: 0%;
  background: var(--pink);
  transition: width .15s ease;
`

export const Container = styled.header`
  position: fixed;
  inset: 8px 12px auto 12px;
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  backdrop-filter: blur(6px);
  border-radius: 16px;
  border: 1px solid rgba(0,0,0,.08);
  background: rgba(255,255,255,.75);
  transition: color .3s ease, background .3s ease, mix-blend-mode .3s ease;
  &[data-theme="dark"]{
    mix-blend-mode: difference;
    color: #fff;
    background: rgba(0,0,0,.0);
    border-color: rgba(255,255,255,.2);
  }
`

export const Logo = styled.a`
  font-weight: 600;
  letter-spacing: .18em;
  font-size: 14px;
  font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  span{ padding-right: 6px; }
  em{ color: var(--rose1); font-style: normal; }
`

export const Nav = styled.nav`
  display: none;
  gap: 24px;
  align-items: center;
  @media (min-width: 768px){ display: flex; }
`

export const NavLink = styled.a`
  position: relative;
  font-size: 14px;
  font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  font-weight: 400;
  letter-spacing: .18em;
  opacity: .9;
  &:hover{ opacity: 1; }
  &::after{
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: -6px;
    height: 2px;
    background: var(--pink);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .25s ease;
  }
  &:hover::after{ transform: scaleX(1); }
  &[data-active="true"]::after{ transform: scaleX(1); }
`

export const MobileToggle = styled.button`
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: 0;
  padding: 4px;
  @media (min-width: 768px){ display: none; }
  span{ width: 22px; height: 2px; background: currentColor; display: block; }
`

export const MobilePanel = styled.nav`
  position: fixed;
  top: 64px; left: 12px; right: 12px;
  background: rgba(0,0,0,.9);
  color: #fff;
  border-radius: 14px;
  padding: 12px;
  display: grid;
  gap: 6px;
  z-index: 800;
  backdrop-filter: blur(6px);
  transform: translateY(-12px);
  opacity: 0;
  pointer-events: none;
  transition: opacity .2s ease, transform .2s ease;
  &[data-open="true"]{ opacity: 1; transform: translateY(0); pointer-events: auto; }
  a{
    padding: 10px 12px;
    border-radius: 10px;
    &[data-active="true"]{ color: var(--pink); }
    &:hover{ background: rgba(255,255,255,.06); }
  }
`

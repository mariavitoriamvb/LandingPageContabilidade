// components/Navbar/styles.ts (principais partes)
import styled from 'styled-components'

export const ProgressBarContainer = styled.div`
  position: fixed; top: 0; left: 0; right: 0; height: 4px;
  background: rgba(255,255,255,.06); z-index: 9999;
`
export const ProgressBar = styled.div`
  height: 100%; width: 0%;
  background: linear-gradient(90deg, var(--rose1), var(--rose2));
  transition: width .25s ease;
`

export const Container = styled.header`
  position: fixed; inset: 12px 12px auto;
  height: 60px; display: grid; grid-template-columns: auto 1fr auto;
  align-items: center; gap: 16px; padding: 0 16px;
  background: rgba(0,0,0,.6); color:#fff;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 16px; z-index: 9998;

  &[data-theme="light"]{ background: rgba(255,255,255,.7); color:#111; }
  &[data-theme="dark"] { background: rgba(0,0,0,.6);    color:#fff;  }
`
export const Logo = styled.a`
  display:flex; align-items:baseline; gap:6px;
  span{ font-weight:700; }
  em{ font-style:normal; background:linear-gradient(135deg,var(--rose1),var(--rose2));
      -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
`
export const Nav = styled.nav`
  display:flex; gap:18px; justify-content:center;
`
export const NavLink = styled.a`
  font-size:14px; letter-spacing:.06em; color:#eaeaea; padding:8px 6px; border-radius:8px; position:relative;
  &[data-active="true"]{ color:#fff; font-weight:600; }
  &[data-active="true"]::after{
    content:""; position:absolute; left:6px; right:6px; bottom:-6px; height:3px; border-radius:999px;
    background: linear-gradient(90deg, var(--rose1), var(--rose2));
  }
`

export const MobileToggle = styled.button`
  display: none;
  @media (max-width: 900px){ display: inline-grid; gap: 4px; }
  background: none; border: 0; cursor: pointer;
  span{ width: 22px; height: 2px; background: #fff; display: block; }
`

export const MobilePanel = styled.div`
  position: fixed; top: 76px; left: 12px; right: 12px;
  background: rgba(0,0,0,.85);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 12px; padding: 12px;
  display: none; flex-direction: column; gap: 8px; z-index: 9997;
  &[data-open="true"]{ display: flex; }
  a{ color: #fff; padding: 10px 12px; border-radius: 10px; }
  a[data-active="true"]{ background: rgba(255,255,255,.08); }
`

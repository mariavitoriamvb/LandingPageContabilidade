import styled, { keyframes } from 'styled-components'

export const Wrap = styled.div`
  /* Painel central com glass e sombra suave */
  display: grid;
  gap: 28px;
  background: rgba(0,0,0,0.36);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 18px;
  padding: 28px;
  box-shadow: 0 20px 80px rgba(0,0,0,0.35);
  height:100%;
  @media (min-width: 900px){
    grid-template-columns: 1.15fr .85fr;
    gap: 40px;
    padding: 36px 40px;
  }

`

export const Col = styled.div`
  h3{
  font-family: 'Playfair Display', serif;
    font-size: 56px;
    line-height: .01;
    font-size: 44px;
  -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
    letter-spacing: -0.02em;
    font-weight: 700;
    color: #fff;
    mark{   background: linear-gradient(135deg, var(--rose1), var(--rose2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; }
  }
  p{
    color: rgba(255,255,255,.85);
    max-width: 62ch;
      font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      font-weight: 200;
      letter-spacing: .08em;
  }
`

export const List = styled.ul`
  margin-top: 14px;
  display: grid;
  gap: 8px;
  
`

export const Bullet = styled.li`
  list-style: none;
  color: rgba(255,255,255,.85);
  display: grid;
  grid-template-columns: 14px 1fr;
  align-items: start;
  font-weight: 200;
  letter-spacing: .08em;
  gap: 8px;

  &::before{
    content: "";
    margin-top: 6px;
    width: 8px; height: 8px;
    border-radius: 999px;
    background: var(--rose1);
    box-shadow: 0 0 0 4px rgba(236,72,153,.18);
  }
`

/* KPIs com “chips” glass e micro-interação */
const pop = keyframes`from{transform:translateY(2px);opacity:.6}to{transform:translateY(0);opacity:1}`
export const KPIGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 12px;
  margin-bottom: 10px;
  @media (max-width: 520px){
    grid-template-columns: repeat(3, minmax(0,1fr));
  }
`

export const Stat = styled.div`
  position: relative;
  padding: 16px 14px;
  border-radius: 14px;
  background: rgba(255,255,255,.06);
  border: 2px solid rgba(241, 145, 141, 0.34);
  text-align: center;
  animation: ${pop} .5s ease both;

  strong{
    display:block;
    color: #fff;
    font-weight: 800;
    font-size: clamp(22px,4vw,34px);
    line-height: 1;
    letter-spacing: -0.01em;
    text-shadow: 0 1px 12px rgba(0,0,0,.35);
  }
  span{
    display:block;
    margin-top: 4px;
    color: rgba(255,255,255,.75);
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .06em;
  }

  &:hover{
    background: rgba(255,255,255,.10);
    transform: translateY(-2px);
    transition: transform .2s ease, background .2s ease;
  }
`
export const Image = styled.img`
  width: 100%;
  border-radius: 20px;
`
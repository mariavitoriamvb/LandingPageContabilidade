import styled from 'styled-components'

export const Header = styled.header`
  display: grid; gap: 10px; margin-bottom: 18px;
  h2{
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
  p{ color: #cfcfd2; }
`

export const Grid = styled.div`
  display: grid; gap: 32px;
  padding: 10px;
  grid-template-columns: 1fr;
  @media (min-width: 700px){ grid-template-columns: repeat(2, minmax(0,1fr)); gap: 16px; }
  @media (min-width: 1060px){ grid-template-columns: repeat(3, minmax(0,1fr)); gap: 18px; }
`

export const Card = styled.a`
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  background: #101014;
  display: grid;
  isolation: isolate;
  img{ width: 100%; height: 260px; object-fit: cover; opacity: .88; transition: transform .5s ease; }
  &:hover img{ transform: scale(1.04); }
  .info{
    position: absolute; inset: auto 12px 12px 12px;
    display: flex; align-items: center; justify-content: space-between;
    color: #fff; background: rgba(0,0,0,.36); padding: 10px 12px; border-radius: 12px;
    strong{ font-weight: 700; }
    span{ opacity: .9; font-size: 14px; }
  }
`

import styled from 'styled-components'

export const Container = styled.div`
   h3{
   font-family: 'Playfair Display', serif;
    font-size: 56px;
    line-height: 1.05;
    font-size: clamp(32px, 5vw, 72px);
    -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
      letter-spacing: -0.02em;
      font-weight: 700;
      color: #fff;
      mark{   background: linear-gradient(135deg, var(--rose1), var(--rose2));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; }  
  }
        
`

export const Lead = styled.p`
  margin-top: 8px;
  max-width: 56ch;
  line-height: 1.05;
  letter-spacing: -0.02em;
  font-weight: 400;
  font-size: clamp(16px, 2.2vw, 20px);
  color: #cfcfcf;;
`

export const Wrap = styled.div`
  display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 10px; margin-top: 16px;
  @media (min-width: 700px){ grid-template-columns: repeat(3, minmax(0,1fr)); }
  @media (min-width: 1000px){ grid-template-columns: repeat(6, minmax(0,1fr)); }
`
export const Logo = styled.div`
  height: 72px; border: 1px dashed rgba(0,0,0,.15);
  display: grid; place-items:center; border-radius: 12px; color: #6d6d72;
`
export const Grid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
  @media (max-width: 980px){ grid-template-columns: 1fr; }
`
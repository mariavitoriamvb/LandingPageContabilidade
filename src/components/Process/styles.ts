import styled from 'styled-components'

export const Container = styled.div`
  padding: 5px;

  h3{
  font-family: 'Playfair Display', serif;
  font-size: 34px;
  line-height: 1.05;
  
  -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
    letter-spacing: -0.02em;
    font-weight: 700;
    color: #fff;
    mark{   background: linear-gradient(135deg, var(--rose1), var(--rose2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; }
    margin-bottom: 10px;
  
  }
`
export const Timeline = styled.div`
  display: grid;
  gap: 14px;
  margin-top: 10px;
`

export const Step = styled.li`
  display: grid; grid-template-columns: 28px 1fr; gap: 12px; align-items: start; 
  .dot{ width: 12px; height: 12px; border-radius: 999px; background: var(--pink); margin-top: 6px; }
  strong{ display:block; font-weight: 700; }
  p{ margin: 6px 0 0; color: var(--muted); }
`

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;  /* 👈 garante alinhamento vertical */
  min-height: 300px;    /* 👈 opcional: força uma altura mínima para centralizar melhor */

  @media (max-width: 960px){
    grid-template-columns: 1fr;
    gap: 20px;
    min-height: auto;
  }
`
export const Illustration = styled.figure<{ $src: string }>`
  margin: 0;
  width: 100%;
  min-height: 480px; /* aumentei */
  border-radius: 18px;
  background:
    radial-gradient(60% 60% at 70% 30%, rgba(236,72,153,.15), transparent 100%),
    url(${p => p.$src}) right/contain no-repeat;
  background-color: rgba(0, 0, 0, 0.02);
  box-shadow: 0 20px 80px rgba(0,0,0,.45);

  @media (min-width: 1200px){
    min-height: 340px; /* maior em telas grandes */
  }
  @media (min-width: 1600px){
    min-height: 500px; /* ainda maior em monitores grandes */
  }
`


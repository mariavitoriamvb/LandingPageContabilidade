import styled from 'styled-components'


export const Title = styled.h1`
font-family: 'Playfair Display', serif;
font-size: 46px;
line-height: 1.05;

 -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: #fff;
  mark{   background: linear-gradient(135deg, var(--rose1), var(--rose2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; }  
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


export const Form = styled.form`
  display: grid; gap: 12px;
  padding: 10px;
  .row{ display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  input, textarea{
    background: rgba(255,255,255,.04);
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 12px;
    padding: 14px 16px;
    color: #fff; font-size: 15px;
  }
  button{
    justify-self: start;
    padding: 12px 18px;
    border-radius: 14px;
    background: linear-gradient(135deg, var(--rose1), var(--rose2));
    color: #111; font-weight: 600; letter-spacing: .05em;
    border: none; cursor: pointer;
    box-shadow: 0 10px 30px rgba(226,179,107,.2);
  }
`
export const Grid= styled.div`
  display: grid; grid-template-columns: 1.1fr .9fr; gap: 20px; align-items: center;
  .card{
    align-self: stretch;
    background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02));
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 20px; padding: 24px;
    display: grid; align-content: start; gap: 6px;
  }
  @media (max-width: 980px){ grid-template-columns: 1fr; }
`
import styled from 'styled-components'

export const Card = styled.article`
  background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 20px;
  padding: 24px;
  display: grid; 
  gap: 12px;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
  text-align: center;
  justify-items: center;   
  align-items: center;     
  
  /* sombra base elegante (sempre visível) */
  box-shadow: 
    0 4px 12px rgba(121, 119, 119, 0.25),     /* sombra suave preta */
    0 2px 30px rgba(226, 178, 107, 0.18); /* toque dourado bem sutil */

  .icon{
    width: 52px; 
    height: 52px; 
    border-radius: 14px;
    background: linear-gradient(135deg, var(--rose1), var(--rose2));
    display: grid; 
    place-items: center;   
  }

  .icon svg{ 
    width: 24px; 
    height: 24px; 
    color: #111;  
  }

  strong{ 
    font-family: 'Playfair Display', serif; 
    font-size: 22px; 
    letter-spacing: .04em; 
    font-weight: 400;
     
  }

  p{ 
    color: #cfcfcf; 
    line-height: 1.6; 
    letter-spacing: .03em;
    font-weight: 200;

  }

  &:hover{
    transform: translateY(-2px);
    border: 2px solid rgba(241, 145, 141, 0.34);
  }
`

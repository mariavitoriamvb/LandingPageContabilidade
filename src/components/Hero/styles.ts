import styled, { keyframes } from 'styled-components'
import heroBg from '../../assets/person.png'  // importa a imagem

export const Grid = styled.div`
  display: grid;
  gap: 28px;
  align-items: center;
  @media (min-width: 900px){ 
    grid-template-columns: 1.1fr .9fr; 
    gap: 40px; 
  }
`

export const Title = styled.h1`
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

export const Actions = styled.div`
  margin-top: 22px;
  display: flex; 
  gap: 12px; 
  flex-wrap: wrap;
  a{ padding: 12px 16px; border-radius: 14px; font-weight: 00; font-size: 18px;   line-height: 1.05;
  letter-spacing: -0.02em; }
  .primary{ background: linear-gradient(135deg, var(--rose1), var(--rose2)); color: #000000ff; }
  .ghost{ border: 1px solid rgba(255, 255, 255, 1); color: #fff; }
`

const float = keyframes` 
  from{ transform: translateY(6px); } 
  to{ transform: translateY(-6px);} 
`

export const ImgCard = styled.figure`
  position: relative;
  aspect-ratio: 4/5;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 70px rgba(0,0,0,.15);
   width: 60%;
  /* aqui entra a imagem como background */
  background: url(${heroBg}) center/cover no-repeat;
`

export const Ring = styled.span`
  position: absolute;
  inset: auto auto 18px 18px;
  width: 120px; height: 100px;
  border-radius: 999px;
  border: 2px dashed rgba(255,255,255,.8);
  animation: ${float} 2.4s ease-in-out infinite alternate;
`

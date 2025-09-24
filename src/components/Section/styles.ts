
import styled, { css } from 'styled-components'

export const Wrapper = styled.section<{ $bg?: string }>`
width: 100%;
  height: 100%;
  max-height: 90vh  ;
  position: relative;
  color: var(--ink);

  /* cores base por tema */
  &[data-theme="dark"]{
    color: #fff;
    background-color: #0b0b0d;
  }
  &[data-theme="light"]{
    background-color: #ffffff; /* apenas cor de fallback */
  }

  /* se veio imagem de fundo, aplica full-bleed */
  ${({ $bg }) => $bg && css`
  
    background-image: url(${$bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    /* overlay sutil p/ contraste do texto */
    &::before{
      content: "";
      position: absolute; inset: 0;
     background: linear-gradient(
    90deg,
    rgba(0,0,0,0.55) 20%,
    rgba(0,0,0,0.35) 40%,
    rgba(0,0,0,0.05) 80%
      );
      pointer-events: none;
    }
  `}
`

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 120px 20px;
  @media (min-width: 768px){ padding: 160px 24px; }
  position: relative;  /* fica acima do overlay */
  z-index: 1;
`

export const Content = styled.div`
  display: grid;
  gap: 28px;
`

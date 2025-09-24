import { createGlobalStyle } from 'styled-components'
import heroBg from './assets/background.jpg'
import studioBg from './assets/studio-bg.png'

export const GlobalStyles = createGlobalStyle`
  :root{
    --ink:#0e0e10;
    --bg:#ffffff;
    --muted:#6b7280;
    --surface:#f5f5f7;
    --pink:#ec4899;
    --text: #f5f5f5;
    --muted:#b8b8b8:
    --white: #ffffff;
    --black: #000000;
    --rose1: #B76E79; // deep rose gold
    --rose2: #E6C7C2; // light rose gold
    --gold: #E2B36B;
    
  }
  *{ box-sizing: border-box; }
  html, body, #root{ height: 100%; }
  body{
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';
    color: var(--ink);
    background: var(--bg);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a { color: inherit; text-decoration: none; }
  ::selection{ background: rgba(236,72,153,.25); }

 /* temas */
  .theme-light {
    background-color: #ffffff;
    color: #0f1e21;
  }
  .theme-dark {
    background-color: #0b0b0d;
    color: #ffffff;
  }
  /* fullpage sections */
  .section{
    position: relative;
    height: 100vh;
    overflow: hidden; /* evita “scroll interno” */
    z-index: 0;
    padding: 100px;
  }

  .section--home{
    background-image: url(${heroBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .section--studio{
    background-image: url(${studioBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* overlay p/ legibilidade do texto */
  .section--home::before,
  .section--studio::before{
    content: "";
    position: absolute; inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.74) 0%, rgba(70, 28, 3, 0.66) 40%, rgba(0, 0, 0, 0.83) 70%);
    z-index: 0;
  }
    /* tudo que está dentro da section fica ACIMA do overlay */
.section--home > *,
.section--studio > *{
  position: relative;
  z-index: 1;            /* 👈 garante o texto por cima */
}
`

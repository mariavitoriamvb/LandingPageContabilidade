import styled from 'styled-components'

export const Bar = styled.footer`
  position: fixed;
  left: 0; right: 0; bottom: 0;
  height: var(--footer-h);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 0 20px;
  background: rgba(0,0,0,.6);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(255,255,255,.08);
  z-index: 18; /* Navbar pode ficar 20 */

  span{
    font-size: 12px; color: #d7d7d7;
  }
  nav{
    display: flex; gap: 14px;
  }
  nav a{
    font-size: 12px; letter-spacing: .08em; text-transform: uppercase;
    color: #ddd;
  }
  @media (max-width: 768px){
    grid-template-columns: 1fr;
    height: calc(var(--footer-h) + env(safe-area-inset-bottom, 0px));
    padding-bottom: env(safe-area-inset-bottom, 0px);
    nav{ justify-content: center; flex-wrap: wrap; }
    span{ text-align: center; }
  }
`

import styled from 'styled-components'

export const Item = styled.div`
  padding: 16px 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.23);
  color: #fff;

  .question{
    width: 100%;
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    gap: 16px;
    padding: 0;
    background: none;
    border: 0;
    cursor: pointer;

      font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
    font-weight: 200;
    letter-spacing: .10em;
    font-size: clamp(18px, 2.2vw, 22px);
    color: #fff;
  }

  .icon{
    flex-shrink: 0;
    font-size: 16px;
    color: var(--rose1);
    transition: transform .28s ease;
  }

  &[data-open='true'] .icon{
    transform: rotate(180deg);
  }

  .answer{
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height .10s ease, opacity .24s ease;
  }

  .answer.open{
    max-height: 260px;     /* ajuste se precisar de respostas maiores */
    opacity: 1;
    margin-top: 10px;
  }

  .answer p{
    margin: 0;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.56);
  }
`

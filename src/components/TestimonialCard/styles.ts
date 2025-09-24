import styled from 'styled-components'

export const Card = styled.article`
  background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02));
  border: 2px solid rgba(241, 145, 141, 0.34);
  border-radius: 20px;
  padding: 24px;
  display: grid; gap: 14px;
  .head{ display: grid; grid-template-columns: 56px 1fr; gap: 12px; align-items: center; }
  img{ width: 56px; height: 56px; border-radius: 14px; object-fit: cover; border: 1px solid rgba(255,255,255,.08); }
  strong{ font-weight: 600; }
  span{ color: #bbb; font-size: 13px; }
  p{ color: #eaeaea; line-height: 1.7; font-size: 15px; }
`

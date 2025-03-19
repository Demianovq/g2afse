import styled from 'styled-components';

export const ContactsMobList = styled('ul')`
  list-style: none;
  display: flex;
  flex-wrap: wrap; /* Позволяет переносить элементы */
  justify-content: center;
  padding: 0;
  gap: 30px 21px;
`;

export const MobListItem = styled('li')`
  display: flex;
  flex-direction: column;
`;

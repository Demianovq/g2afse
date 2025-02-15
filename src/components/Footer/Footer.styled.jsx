import styled from 'styled-components';

export const FooterLogo = styled('img')`
  display: block;
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    width: 167px;
  }
  @media screen and (min-width: 1600px) {
    width: 357px;
  }
`;

export const FooterNavlist = styled('ul')`
  display: flex;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 30px;
`;

export const FooterNavlistBtn = styled('button')`
  border: none;
  background-color: inherit;
  font-family: Montserrat;
  font-weight: 300;
  font-size: 15px;
  line-height: 18.29px;
  letter-spacing: 0%;
  color: #f0f8ff;
`;

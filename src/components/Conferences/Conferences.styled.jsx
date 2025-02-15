import styled from 'styled-components';

export const ConferencesSection = styled('div')`
  padding-bottom: 80px;
  max-width: 1200px;
  display: block;

  margin: 0 auto;
  position: relative;
  @media screen and (min-width: 1600px) {
    max-width: 1450px;
  }
`;

export const ConferencesTitle = styled('h3')`
  font-family: Lacquer;
  font-size: 90px;
  font-weight: 400;
  line-height: 108px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #f0f8ff;
  text-transform: uppercase;
  margin-top: 100px;
  @media screen and (min-width: 1600px) {
    font-size: 120px;
  }
`;

export const ConfBox = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15.73px;
`;

export const ConfBoxImg = styled('img')`
  display: block;
  border-radius: 15.73px;
`;

import styled from 'styled-components';

import cursorR from 'images/BackGrounds/cursorR.png';

export const ConferencesSection = styled('div')`
  padding-bottom: 80px;
  max-width: 1200px;
  display: block;

  margin: 0 auto;
  position: relative;
  &:hover {
    cursor: url(${cursorR}), e-resize;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 0px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    padding-bottom: 0px;
  }
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

  @media screen and (max-width: 767px) {
    font-size: 40px;
    line-height: 48px;
    margin-top: 30px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 60px;
    line-height: 72px;
    margin-top: 50px;
  }
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

  @media screen and (max-width: 767px) {
    width: 225px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 206px;
  }
`;

export const ConfBgImg1 = styled('img')`
  position: absolute;
  top: 45px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ConfBgImg2 = styled('img')`
  position: absolute;
  top: 60px;
  right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

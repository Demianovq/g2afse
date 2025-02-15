import styled from 'styled-components';

export const BannerSection = styled('div')`
  position: relative;
`;

export const BannerImg = styled('img')`
  display: block;
  width: 100%;

  height: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const BannerTextStyle = styled('span')`
  font-family: Russo One;
  font-weight: 400;
  font-size: 50px;
  line-height: 60.25px;
  letter-spacing: 0%;
  color: #fcf9e1;
  -webkit-text-stroke: 0.5px #015396;
  white-space: pre;
  text-transform: uppercase;
  @media screen and (min-width: 1600px) {
    font-size: 75px;
  }
`;

export const BannerTextBlock = styled('div')`
  position: absolute;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 99%; /* Растягиваем текст на всю ширину */
`;

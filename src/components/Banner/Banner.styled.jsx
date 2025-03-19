import styled from 'styled-components';

export const BannerSection = styled('div')`
  position: relative;
  overflow: hidden;
`;

export const BannerImg = styled('img')`
  display: block;
  width: 100%;

  height: auto;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const BannerImgMob = styled('img')`
  display: block;
  width: 100%; /* Полная ширина экрана */

  object-fit: cover;
  @media screen and (min-width: 768px) {
    display: none;
  }
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
  @media screen and (max-width: 767px) {
    font-size: 23px;
    line-height: 27px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 30px;
    line-height: 36px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 75px;
  }
`;

export const BannerTextBlock = styled('div')`
  position: absolute;
  width: 100%; /* Добавь, если он сдвигает страницу */

  white-space: nowrap; /* Если текст уходит за границы */
  overflow: hidden;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 99%; /* Растягиваем текст на всю ширину */
  @media screen and (max-width: 767px) {
    top: 20%;
  }
`;

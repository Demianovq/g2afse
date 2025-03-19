import styled from 'styled-components';

import HeroBtnBgWhite from 'images/BackGrounds/HeroBtnBgWhite.svg';
import HeroBtnBgHover1 from 'images/BackGrounds/HeroBtnBgHover1.svg';

export const GeosSection = styled('div')`
  margin-top: 90px;
  position: relative;
  @media screen and (max-width: 767px) {
    margin-top: 50px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 30px;
  }
`;

export const GeosTitle = styled('h3')`
  font-family: Lacquer;
  font-size: 90px;
  font-weight: 400;
  line-height: 108px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #f0f8ff;
  margin: 0;

  position: relative;
  z-index: 2;
  @media screen and (max-width: 767px) {
    font-size: 40px;
    line-height: 48px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 60px;
    line-height: 72px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 120px;
  }
`;

export const GeosTitleStyled = styled('p')`
  display: inline;
  margin: 0;

  @media screen and (max-width: 767px) {
    display: block;
    font-size: 15px;
    line-height: 18px;
  }
`;

export const GeosImg = styled('img')`
  @media screen and (max-width: 767px) {
    min-width: 300px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 562px;
  }
  @media screen and (min-width: 1600px) {
    width: 1156px;
  }
`;

export const GeosImgStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 1600px) {
    margin-top: 100px;
  }
`;

export const GeosList = styled('ul')`
  list-style: none;
  display: flex;
  gap: 90px;
  justify-content: center;
  margin: 0;
  margin-top: 50px;
  padding: 0;
  @media screen and (max-width: 767px) {
    gap: 0px;
    flex-wrap: wrap;
    gap: 19px 65px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 40px;
    gap: 55px;
  }
  @media screen and (min-width: 1600px) {
    gap: 150px;
  }
`;

export const GeosListItem = styled('li')`
  position: relative;
  z-index: 2;
`;

export const GeosListItemText = styled('span')`
  //styleName: 720/H4;
  font-family: Russo One;
  font-size: 22px;
  font-weight: 400;
  line-height: 26.51px;

  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #57c3ff;
  position: relative;
  z-index: 2;
`;

export const GeosListItemSource = styled('span')`
  margin-top: 25px;
  display: block;
  //styleName: 1200/H4;
  font-family: Russo One;
  font-size: 30px;
  font-weight: 400;
  line-height: 36.15px;
  text-align: center;

  text-decoration-skip-ink: none;
  color: #57c3ff;
  text-shadow: 0px 6px 4px rgba(0, 0, 0, 0.4), 0px 0px 30px #00a3ff,
    0px 0px 40px #0394eb;
`;

export const GeosBtnBlock = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  position: relative;
  @media screen and (max-width: 767px) {
    margin-top: 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 40px;
  }
`;

export const GeosBtn = styled('a')`
  all: unset;
  text-decoration: none; /* Убираем подчеркивание */
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-image: url('${HeroBtnBgWhite}');
  background-position: center;
  background-repeat: no-repeat;
  text-transform: lowercase;
  text-align: center;
  align-items: center;
  width: 280px;
  height: 100px;
  font-family: Lacquer;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  text-decoration-skip-ink: none;
  color: #333333;

  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-image: url('${HeroBtnBgHover1}');
    color: white;
  }

  @media screen and (max-width: 767px) {
    width: 157px;
    height: 57px;
    font-size: 25px;
    line-height: 30px;
    background-size: cover;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 153px;
    height: 56px;
    background-size: cover;
    font-size: 27px;
    line-height: 32px;
  }

  @media screen and (min-width: 1600px) {
    font-size: 50px;
    line-height: 60px;
  }
`;

export const GeosBtnImg = styled('img')`
  position: absolute;

  z-index: 1;
`;

export const GeosBgStyle1 = styled('img')`
  z-index: -500;
  position: absolute;
  top: 8%;
  right: -10%;
  @media screen and (max-width: 767px) {
    width: 82px;
    top: 5%;
    right: 8%;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 175px;
    top: 13%;
    right: 5%;
  }
  @media screen and (min-width: 1600px) {
    right: -7%;
  }
`;

export const GeosBgStyle2 = styled('img')`
  z-index: -500;
  position: absolute;
  top: 28%;
  left: -14%;
  @media screen and (max-width: 767px) {
    width: 80px;
    top: 14%;
    left: 14px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 175px;
    left: 0%;
  }
`;

export const GeosBgStyle3 = styled('img')`
  z-index: -500;
  position: absolute;
  bottom: -1.5%;
  left: -7.5%;
  z-index: 1;
  @media screen and (max-width: 767px) {
    width: 80px;
    bottom: 0;
    top: 30%;
    left: 6%;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 175px;
  }
`;

export const GeosBgStyle4 = styled('img')`
  z-index: -500;
  position: absolute;
  bottom: 10%;
  right: 2%;
  z-index: -500;
  @media screen and (max-width: 767px) {
    width: 80px;
    bottom: 0;
    top: 28%;
    right: 13%;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 175px;
  }
  @media screen and (min-width: 1600px) {
    right: 0%;
  }
`;

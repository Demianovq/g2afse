import styled from 'styled-components';

import HeroBtnBgWhite from 'images/BackGrounds/HeroBtnBgWhite.svg';
import HeroBtnBgHover1 from 'images/BackGrounds/HeroBtnBgHover1.svg';

export const GeosSection = styled('div')`
  margin-top: 90px;
  position: relative;
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
  @media screen and (min-width: 1600px) {
    font-size: 120px;
  }
`;

export const GeosImg = styled('img')`
  @media screen and (min-width: 1600px) {
    width: 1156px;
  }
`;

export const GeosImgStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
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
  text-shadow: 1px 1px 3.5px #00a3ff, 1px 1px 25px #0394eb, 1px 1px 50px #0394eb;
`;

export const GeosBtnBlock = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  position: relative;
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
  position: absolute;
  top: 8%;
  right: -10%;
  @media screen and (min-width: 1600px) {
    right: -7%;
  }
`;

export const GeosBgStyle2 = styled('img')`
  position: absolute;
  top: 28%;
  left: -14%;
`;

export const GeosBgStyle3 = styled('img')`
  position: absolute;
  bottom: -1.5%;
  left: -7.5%;
  z-index: 1;
`;

export const GeosBgStyle4 = styled('img')`
  position: absolute;
  bottom: 10%;
  right: 2%;
  z-index: 1;
  @media screen and (min-width: 1600px) {
    right: 0%;
  }
`;

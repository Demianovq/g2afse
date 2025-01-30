import styled from 'styled-components';

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
`;

export const GeosImgStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const GeosList = styled('ul')`
  list-style: none;
  display: flex;
  gap: 90px;
  justify-content: center;
  margin: 0;
  margin-top: 50px;
  padding: 0;
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
  display: block;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  text-decoration: none;
  //styleName: 1200/B2;
  font-family: Lacquer;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  text-decoration-skip-ink: none;
  color: #333333;
  position: relative;
  z-index: 2;
  padding: 12px 45px;
  text-transform: lowercase;
`;

export const GeosBtnImg = styled('img')`
  position: absolute;

  z-index: 1;
`;

export const GeosBgStyle1 = styled('img')`
  position: absolute;
  top: 8%;
  right: -10%;
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
`;

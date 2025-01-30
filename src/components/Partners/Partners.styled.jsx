import styled from 'styled-components';

export const PartnersSection = styled('div')`
  margin-top: 90px;

  position: relative;
`;

export const PartnersImgBox = styled('div')`
  width: 200px;
  height: 150px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-right: 50px;
`;

export const PartnersImgGlobal = styled('img')`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  align-items: center;
  text-align: center;
`;

export const PartnersListInfo = styled('ul')`
  display: flex;
  list-style: none;
  gap: 130px;
  justify-content: center;
  border: 1.5px solid #57c3ff;
  width: 740px;
  padding: 0;
  margin: 0 auto;

  border-radius: 10px;
  box-shadow: 0px 0px 1px 0px #00a3ff;

  box-shadow: 0px 0px 1px 0px #0394eb;

  box-shadow: 0px 0px 2px 0px #0394eb;

  box-shadow: 0px 0px 10px 0px #0394eb;
`;

export const PartnersListInfoTitle = styled('p')`
  display: block;
  //styleName: 1200/P4;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 600;
  line-height: 18.29px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #57c3ff;
  margin: 0;
  margin-top: 20px;
  text-shadow: 1px 1px 3.5px #00a3ff, 1px 1px 25px #0394eb, 1px 1px 50px #0394eb;
  position: relative;
  z-index: 2;
`;

export const PartnersListInfoText = styled('p')`
  //styleName: 1200/H4;
  font-family: Russo One;
  font-size: 30px;
  font-weight: 400;
  line-height: 36.15px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #f0f8ff;
  margin-top: 8px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 3.5px #00a3ff, 1px 1px 25px #0394eb, 1px 1px 50px #0394eb;
  position: relative;
  z-index: 2;
`;

export const PartnersBgImg = styled('img')`
  position: absolute;
  top: 45%;
  left: 13.5%;
  z-index: 1;
`;

import styled from 'styled-components';

export const ContactsSection = styled('div')`
  margin-top: 90px;
  position: relative;
`;

export const ContactsTitle = styled('h3')`
  font-family: Lacquer;
  font-size: 90px;
  font-weight: 400;
  line-height: 108px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  text-transform: uppercase;
  color: #f0f8ff;
  margin: 0;
  padding: 0;
  margin-bottom: 50px;
  @media screen and (min-width: 1600px) {
    font-size: 120px;
  }
`;

export const ContactsList = styled('ul')`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 0;
  margin-top: 30px;

  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    gap: 10px;
    margin-top: 80px;
  }

  @media screen and (min-width: 1600px) {
    margin-top: 60px;
  }
`;

export const ContactsListItem = styled('li')`
  list-style: none;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    padding-top: 250px;
  }

  @media screen and (min-width: 1600px) {
    padding-top: 350px;
  }
`;

export const ItemName = styled('span')`
  //styleName: 1200/H3;
  font-family: Russo One;
  font-size: 40px;
  font-weight: 400;
  line-height: 48.2px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #0394eb;
  position: relative;
  z-index: 50;
  @media screen and (min-width: 1600px) {
    font-size: 50px;
  }
`;

export const ItemPosition = styled('span')`
  //styleName: 1200/P8;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.63px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #f0f8ff;
  margin-top: 5px;
  position: relative;
  z-index: 50;
  @media screen and (min-width: 1600px) {
    font-size: 15px;
    margin-top: 10px;
  }
`;

export const SocialList = styled('ul')`
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 8.4px;
  margin-top: 16px;
  padding: 0;
  position: relative;
  z-index: 5;

  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    flex-wrap: wrap;
    gap: 10.4px;
  }
`;

export const ContactsImg = styled('img')`
  display: block;
  z-index: 50;

  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    width: 300px;
  }

  @media screen and (min-width: 1600px) {
    width: 270px;
  }
`;

export const Bg1 = styled('img')`
  position: absolute;
  right: 50px;
  top: -50px;
`;

export const Bg2 = styled('img')`
  position: absolute;
  bottom: 50px;
  left: 550px;
  z-index: -10;
`;

export const Bg3 = styled('img')`
  position: absolute;
  top: 520px;
  right: 380px;
  z-index: -10;
`;

export const SmokeBg = styled('img')`
  position: absolute;
  top: 12%;
  left: -120px;
  z-index: -20;

  @media screen and (min-width: 1600px) {
    width: 1126px;
  }
`;

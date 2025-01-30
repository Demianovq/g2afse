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
`;

export const ContactsList = styled('ul')`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 0;
`;

export const ContactsListItem = styled('li')`
  list-style: none;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 350px;
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
`;

export const ContactsImg = styled('img')`
  position: absolute;
  top: 0;
  left: -50px;
  z-index: 50;
`;

export const Bg1 = styled('img')`
  position: absolute;
  top: -200px;
  right: -35%;
`;

export const Bg2 = styled('img')`
  position: absolute;
  top: 340px;
  left: -65px;
  z-index: 1;
`;

export const Bg3 = styled('img')`
  position: absolute;
  top: 180px;
  left: -80px;
  z-index: 1;
`;

export const SmokeBg = styled('img')`
  position: absolute;
  top: 12%;
  left: -120px;
  z-index: 2;
`;

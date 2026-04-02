import styled from 'styled-components';

import cursorR from 'images/BackGrounds/cursorR.png';

import LinkedInMob from 'images/Contacts/LinkedInMob.png';
import MailMob from 'images/Contacts/MailMob.png';
import TelegramMob from 'images/Contacts/TelegramMob.png';
import Mail from 'images/Contacts/Mail.png';
import Telegram from 'images/Contacts/Telegram.png';
import LinkedIn from 'images/Contacts/LinkedIn.png';
import Teams from 'images/Contacts/Teams.png';

export const ContactsSection = styled('div')`
  margin-top: 90px;
  position: relative;
  &:hover {
    cursor: url(${cursorR}), e-resize;
  }
  @media screen and (max-width: 767px) {
    margin-top: 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 50px;
  }
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
  @media screen and (max-width: 767px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 60px;
    line-height: 72px;
    margin-bottom: 0px;
  }
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
  @media screen and (max-width: 767px) {
    font-size: 23px;

    line-height: 27px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 25px;

    line-height: 30px;
  }
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
  @media screen and (max-width: 767px) {
    font-size: 9px;
    line-height: 11px;
    margin-top: 3px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 9px;
    line-height: 10px;
  }
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
  @media screen and (max-width: 767px) {
    margin-top: 9px;
  }

  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    flex-wrap: wrap;
    gap: 10.4px;
  }
`;

export const SocialListItemImg = styled('img')`
  @media screen and (max-width: 767px) {
    width: 26px;
    &[alt='LinkedIn'] {
      content: url(${LinkedInMob});
    }
    &[alt='Telegram'] {
      content: url(${TelegramMob});
    }
    &[alt='Mail'] {
      content: url(${MailMob});
    }
    &[alt='Teams'] {
      content: url(${Teams});
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 21px;
    &[alt='LinkedIn'] {
      content: url(${LinkedIn});
    }
    &[alt='Telegram'] {
      content: url(${Telegram});
    }
    &[alt='Instagram'] {
      content: url(${Mail});
    }
    &[alt='Teams'] {
      content: url(${Teams});
    }
  }

  @media screen and (min-width: 1200px) {
    &[alt='Teams'] {
      content: url(${Teams});
      width: 40px;
    }
  }
`;

export const ContactsImg = styled('img')`
  display: block;
  z-index: 50;
  @media screen and (max-width: 767px) {
    width: 125px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 220px;
  }
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
  @media screen and (max-width: 767px) {
    z-index: 2;
    width: 80px;
    top: -80px;
    right: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 180px;
    top: -90px;
    right: 50px;
  }
`;

export const Bg2 = styled('img')`
  position: absolute;
  bottom: 50px;
  left: 550px;
  z-index: -10;
  @media screen and (max-width: 767px) {
    width: 82px;
    left: 0px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    left: 50px;
  }
`;

export const Bg3 = styled('img')`
  position: absolute;
  top: 520px;
  right: 380px;
  z-index: -10;
  @media screen and (max-width: 767px) {
    width: 82px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    right: 360px;
    top: 530px;
  }
`;

export const SmokeBg = styled('img')`
  position: absolute;
  top: 12%;
  left: -120px;
  z-index: -20;
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 676px;
  }
  @media screen and (min-width: 1600px) {
    width: 1126px;
  }
`;

export const ContactsMob = styled('div')`
  position: relative;
  width: 100%;
  height: auto;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const SmokeMobBg1 = styled('img')`
  position: absolute;
  top: 39%;
  transform: translateX(-44%) rotate(180deg);
  left: 50%;
  z-index: -20;
`;

export const SmokeMobBg2 = styled('img')`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-53%);
  z-index: -21;
`;

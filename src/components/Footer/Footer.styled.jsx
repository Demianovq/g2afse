import styled from 'styled-components';

import HeroBtnBgWhite from 'images/BackGrounds/HeroBtnBgWhite.svg';
import HeroBtnBgHover1 from 'images/BackGrounds/HeroBtnBgHover1.svg';
import HeroBtnBg from 'images/BackGrounds/HeroBtnBg.png';

import BgBtnBlue from 'images/BackGrounds/BgBtnBlue.png';
import BgBtnWhite from 'images/BackGrounds/BgBtnWhite.png';

import Instagram from 'images/Footer/Instagram.svg';
import LinkedIn from 'images/Footer/LinkedIn.svg';
import Telegram from 'images/Footer/Telegram.svg';

export const FooterSection = styled('div')`
  position: relative;
  margin-top: 120px;
  padding-bottom: 60px;
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-top: 30px;
    padding-bottom: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 50px;
    padding-bottom: 18px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    margin-top: 120px;
  }
`;

export const FooterLogo = styled('img')`
  display: block;
  @media screen and (max-width: 767px) {
    width: 176px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 200px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    width: 257px;
  }
  @media screen and (min-width: 1600px) {
    width: 357px;
  }
`;

export const FooterNavlist = styled('ul')`
  display: flex;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 30px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 23px;
    align-items: center;
    margin-top: 21px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 13px;
    gap: 0px;
  }
`;

export const FooterStyledBlock = styled('div')``;

export const FooterNavlistBtn = styled('button')`
  border: none;
  background-color: inherit;
  font-family: Montserrat;
  font-weight: 300;
  font-size: 15px;
  line-height: 18.29px;
  letter-spacing: 0%;
  color: #f0f8ff;
  display: inline-block;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 6px;
    bottom: -5px;
    width: 0;
    height: 2px;
    background-color: #f0f8ff;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 85%;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 9px;
    line-height: 11px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    font-size: 11px;
    line-height: 13.41px;
  }
`;

export const FooterTextCopy = styled('span')`
  display: block;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 13px;
  line-height: 15.85px;
  letter-spacing: 0%;
  color: #f0f8ff;
  margin-top: 105px;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 7px;
    line-height: 9px;
    margin-top: 50px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    font-size: 10px;
    line-height: 12.19px;
    margin-top: 74px;
  }
`;

export const FooterTextLink = styled('a')`
  display: inline-block;

  text-decoration: none;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 10px;
  line-height: 12.19px;
  letter-spacing: 0%;
  color: #383838;
  margin-top: 10px;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 5px;
    line-height: 6px;
    margin-top: 4px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    font-size: 7px;
  }
`;

export const FooterBtnJoinUs = styled('a')`
  all: unset;
  text-decoration: none; /* Убираем подчеркивание */
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-image: url('${HeroBtnBgWhite}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-transform: lowercase;
  text-align: center;
  align-items: center;
  width: 221px;
  height: 80px;
  font-family: Lacquer;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  text-decoration-skip-ink: none;
  color: #333333;

  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-image: url('${HeroBtnBg}');
    color: white;
  }
  @media screen and (max-width: 767px) {
    background-image: url('${BgBtnWhite}');
    width: 121px;
    height: 44px;
    font-size: 22px;
    line-height: 26px;
    margin-left: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 115px;
    height: 41px;
    font-size: 22px;
    line-height: 26px;
  }

  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    width: 151px;
    height: 54px;
    font-size: 28px;
    line-height: 33.6px;
  }
`;

export const FooterBtnSignIn = styled('a')`
  all: unset;
  text-decoration: none; /* Убираем подчеркивание */
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-image: url('${HeroBtnBgHover1}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-transform: lowercase;
  text-align: center;
  align-items: center;
  width: 221px;
  height: 80px;
  font-family: Lacquer;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  text-decoration-skip-ink: none;
  color: #f0f8ff;

  &:hover {
    background-image: url('${HeroBtnBg}');
  }

  @media screen and (max-width: 767px) {
    background-image: url('${BgBtnBlue}');
    width: 121px;
    height: 44px;
    font-size: 22px;
    line-height: 26px;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 115px;
    height: 41px;
    font-size: 22px;
    line-height: 26px;
    margin-right: 0px;
  }

  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    width: 151px;
    height: 54px;

    font-size: 28px;
    line-height: 33.6px;
  }
`;

export const FooterSocialList = styled('ul')`
  list-style: none;
  display: flex;
  gap: 32px;
  margin-left: auto;
  margin-top: 30px;
  @media screen and (max-width: 767px) {
    margin-right: auto;

    padding: 0;
    order: 1;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    gap: 15px;
    margin-top: 12px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    margin-top: 20px;
  }
`;

export const FooterBtnStyled = styled('div')`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 767px) {
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    order: 2;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    gap: 1px;
  }
`;

export const FooterSocialBlock = styled('div')`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  justify-content: flex-end;
  margin-bottom: auto;
  @media screen and (max-width: 767px) {
    flex-direction: column; /* Элементы идут сверху вниз */

    margin-left: 0;
  }
`;

export const FooterTermsLink = styled('a')`
  text-decoration: none;
  display: inline-block;
  margin-left: auto;
  margin-top: 40px;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 13px;
  line-height: 15.85px;
  letter-spacing: 0%;
  color: #f0f8ff;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 7px;
    line-height: 9px;
    margin-top: 0px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    font-size: 10px;
    line-height: 12.2px;
  }
`;

export const SocialItemImg = styled('img')`
  display: block;
  &[alt='LinkedIn Logo'] {
    content: url(${LinkedIn});
  }
  &[alt='Telegram Logo'] {
    content: url(${Telegram});
  }
  &[alt='Instagram Logo'] {
    content: url(${Instagram});
  }
  @media screen and (max-width: 767px) {
    width: 33px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 32px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    width: 43px;
  }
`;

export const FooterBg = styled('img')`
  position: absolute;
  top: -20%;
  left: 27%;
  z-index: -40;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 281px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    top: -50%;
    left: 10%;
  }
`;

export const FooterTextCopyMob = styled('span')`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0%;
  color: #f0f8ff;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const FooterTermsLinkMob = styled('a')`
  text-decoration: none;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0%;
  color: #f0f8ff;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const FooterTextLinkMob = styled('a')`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 5px;
  line-height: 6px;
  letter-spacing: 0%;
  color: #383838;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

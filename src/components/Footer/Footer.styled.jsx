import styled from 'styled-components';

import HeroBtnBgWhite from 'images/BackGrounds/HeroBtnBgWhite.svg';
import HeroBtnBgHover1 from 'images/BackGrounds/HeroBtnBgHover1.svg';

export const FooterSection = styled('div')`
  position: relative;
  margin-top: 120px;
  padding-bottom: 60px;
  display: flex;
`;

export const FooterLogo = styled('img')`
  display: block;
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
`;

export const FooterNavlistBtn = styled('button')`
  border: none;
  background-color: inherit;
  font-family: Montserrat;
  font-weight: 300;
  font-size: 15px;
  line-height: 18.29px;
  letter-spacing: 0%;
  color: #f0f8ff;
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
    background-image: url('${HeroBtnBgHover1}');
    color: white;
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

  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-image: url('${HeroBtnBgWhite}');

    color: #333333;
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
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    margin-top: 20px;
  }
`;

export const FooterBtnStyled = styled('div')`
  display: flex;
  gap: 20px;
`;

export const FooterSocialBlock = styled('div')`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  justify-content: flex-end;
  margin-bottom: auto;
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
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    font-size: 10px;
    line-height: 12.2px;
  }
`;

export const SocialItemImg = styled('img')`
  display: block;
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    width: 43px;
  }
`;

export const FooterBg = styled('img')`
  position: absolute;
  top: -20%;
  left: 27%;
  z-index: -40;
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    top: -50%;
    left: 10%;
  }
`;

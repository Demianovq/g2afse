import styled from 'styled-components';
import HeroBg from 'images/BackGrounds/HeroBg.svg';
import HeroBg1600 from 'images/BackGrounds/HeroBg1600.svg';
import HeroBtnBg from 'images/BackGrounds/HeroBtnBg.png';

import HeroBtnBgHover from 'images/BackGrounds/HeroBtnBgHover.svg';

export const HeroSection = styled('div')`
  @media screen and (min-width: 1600px) {
    padding-top: 33px;
  }
`;

export const HeroFirstText = styled('p')`
  margin: 0px;
  font-family: Lacquer;
  font-size: 75px;
  font-weight: 400;
  line-height: 90px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #0394eb;
  margin-top: 150px;
  @media screen and (max-width: 767px) {
    margin-top: 90px;
    font-size: 25px;
    line-height: 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 55px;
    font-size: 45px;
    line-height: 54px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 100px;
  }
`;

export const HeroNameText = styled('h1')`
  margin: 0;
  font-family: Lacquer;
  font-size: 75px;
  font-weight: 400;
  line-height: 90px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
`;

export const HeroSecondText = styled('h2')`
  font-family: Lacquer;
  font-size: 75px;
  font-weight: 400;
  line-height: 90px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #0394eb;
  margin: 10px;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    font-size: 25px;
    line-height: 30px;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin: 0;
    font-size: 45px;
    line-height: 54px;
  }
  @media screen and (min-width: 1600px) {
    margin-bottom: 30px;
    font-size: 100px;
  }
`;

export const HeroContent = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: url('${HeroBg}');
  background-position: center;

  background-repeat: no-repeat;
  height: 550px;
  @media screen and (max-width: 767px) {
    background-size: auto 174px;
    height: auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) and (orientation: landscape) {
    background-size: auto 283px;
    background-position: 50% 15%;
    height: auto;
  }
  @media screen and (min-width: 1600px) {
    background-image: url('${HeroBg1600}');
    height: 633px;
  }
`;

export const HeroBtn = styled('p')`
  color: #ffffff;
  font-family: Lacquer;
  font-size: 40px;
  font-weight: 400;
  line-height: 54px;
  @media screen and (max-width: 767px) {
    font-size: 25px;

    line-height: 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 27px;

    line-height: 32px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 50px;
    line-height: 60px;
  }
`;

export const HeroBtnStyle = styled('a')`
  all: unset;
  text-decoration: none; /* Убираем подчеркивание */
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-image: url('${HeroBtnBg}');
  background-position: center;
  background-repeat: no-repeat;
  text-transform: lowercase;
  width: 280px;

  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-image: url('${HeroBtnBgHover}');
  }

  @media screen and (max-width: 767px) {
    background-size: 156px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    background-size: 173px;
    margin-top: 30px;
  }
`;

import styled from 'styled-components';
import HeroBg from 'images/BackGrounds/HeroBg.png';
import HeroBtnBg from 'images/BackGrounds/HeroBtnBg.png';

export const HeroSection = styled('div')`
  padding-top: 33px;
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
`;

// export const HeroNameText = styled('ul')`
//   list-style: none;
//   display: flex;
//   margin-left: auto;
//   margin-right: auto;
// `;

// export const HeroNameTextItem = styled('li')``;

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
  margin: 0;
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
`;

export const HeroContent = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: url('${HeroBg}');
  background-position: center;
  background-repeat: no-repeat;
  height: 450px;
`;

export const HeroBtn = styled('p')`
  color: #ffffff;
  font-family: Lacquer;
  font-size: 45px;
  font-weight: 400;
  line-height: 54px;
`;

export const HeroBtnStyle = styled('div')`
  display: flex;
  justify-content: center;
  background-image: url('${HeroBtnBg}');
  background-position: center;
  background-repeat: no-repeat;
  text-transform: lowercase;
`;

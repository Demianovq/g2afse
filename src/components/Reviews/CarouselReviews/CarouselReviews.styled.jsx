import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
  @media screen and (min-width: 1600px) {
    max-width: 1360px;
  }
`;

export const CardTitle = styled('p')`
  //styleName: 1200/H4;
  font-family: Russo One;
  font-size: 25px;
  font-weight: 400;
  line-height: 36.15px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #f0f8ff;
  margin: 0;
  margin-bottom: 20px;
  @media screen and (min-width: 1600px) {
    font-size: 32px;
    margin-bottom: 50px;
  }
`;

export const CardTitleText = styled('p')`
  font-family: Montserrat;

  font-size: 10.56px;
  font-weight: 400;
  line-height: 16.08px;
  letter-spacing: 0.01em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #f0f8ff;

  @media screen and (min-width: 1600px) {
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.03em;
  }
`;

export const CardTitlePosition = styled('p')`
  position: absolute;
  bottom: 20px;
  display: block;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.01em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #57c3ff;
  margin-bottom: 0;
  margin-top: 30px;
  @media screen and (min-width: 1600px) {
    font-size: 15px;
    bottom: 40px;
  }
`;

export const Card = styled('div')`
  align-items: center;
  justify-content: center;

  display: flex;
`;

export const CardBox = styled('div')`
  width: 210px;
  height: 280px;

  position: relative;

  border-radius: 15.73px;
  backdrop-filter: blur(8.277144432067871px);

  box-shadow: 0px 2.82px 2.82px 0px #00000040;
  padding: 30px 23px;
  background: #fffefe0d;
  @media screen and (min-width: 1600px) {
    width: 300px;
    height: 430px;
    padding: 50px 40px;
  }
`;

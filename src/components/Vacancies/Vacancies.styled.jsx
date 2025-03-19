import styled from 'styled-components';

export const VacanciesSection = styled('div')`
  position: relative;

  position: relative;

  margin-bottom: 50px;
`;

export const VacanciesTitle = styled('h3')`
  font-family: Lacquer;
  font-size: 90px;
  font-weight: 400;
  line-height: 108px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #f0f8ff;
  text-transform: uppercase;
  @media screen and (max-width: 767px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 20px;
    margin-top: 30px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 60px;
    line-height: 72px;
    margin-top: 50px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 120px;
  }
`;

export const AffiliateBlock = styled('div')`
  display: flex;
  flex-direction: column;
  border-radius: 15.73px;

  backdrop-filter: blur(8.277144432067871px);
  box-shadow: 0px 2.82px 2.82px 0px #00000040;
  background: #fffefe0d;

  position: relative;
  z-index: 2;
  @media screen and (max-width: 767px) {
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;

    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    max-width: 513px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    padding-left: 25px;
  }
  @media screen and (min-width: 1600px) {
    max-width: 1250px;
    margin: 0;

    margin-left: auto;
    margin-right: auto;
  }
`;

export const AffiliateStyledBlock = styled('div')`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-left: 15px;
  }
  @media screen and (min-width: 1600px) {
    margin-left: 50px;
  }
`;

export const ManagerTitle = styled('p')`
  //styleName: 1200/H4;
  font-family: Russo One;
  font-size: 30px;
  font-weight: 400;
  line-height: 36.15px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #f0f8ff;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    font-size: 15px;
    line-height: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 15px;
    margin-top: 10px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 40px;
    margin-top: 30px;
    margin-bottom: 32px;
  }
`;

export const ManagerText = styled('span')`
  //styleName: 1200/P3;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.94px;
  letter-spacing: 0.01em;
  text-align: justified;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #f0f8ff;
  max-width: 466px;

  @media screen and (max-width: 767px) {
    font-size: 10px;
    line-height: 12px;
    max-width: 260px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 11px;
    line-height: 13px;
    max-width: 264px;
  }

  @media screen and (min-width: 1600px) {
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.03em;

    max-width: 588px;
  }
`;

export const AffiliateGif = styled('div')`
  position: absolute;
  top: 20px;
  right: -20px;
  border-radius: 30px;
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    right: -14px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    top: 25px;
  }
  @media screen and (min-width: 1600px) {
    top: 30px;
  }
`;

export const GifVideo = styled('video')`
  width: 418px;
  box-shadow: 4px 7px 16px 5px #000000a6;
  z-index: 20;
  position: relative;

  border-radius: 20px;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 232px;
  }
  @media screen and (min-width: 1600px) {
    width: 585px;
  }
`;

export const AccountBlock = styled('div')`
  position: relative;
  border-radius: 15.73px;
  backdrop-filter: blur(8.277144432067871px);
  box-shadow: 0px 2.82px 2.82px 0px #00000040;
  background: #fffefe0d;
  margin-top: 50px;
  @media screen and (max-width: 767px) {
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;

    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    max-width: 513px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1200px) and (max-width: 1599px) {
  }
  @media screen and (min-width: 1600px) {
    max-width: 1250px;

    margin-left: auto;
    margin-right: auto;
  }
`;

export const AccountStyledBlock = styled('div')`
  display: flex;
  flex-direction: column;
  margin-left: 420px;
  @media screen and (max-width: 767px) {
    margin-left: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-left: 240px;
  }
  @media screen and (min-width: 1600px) {
    margin-left: 610px;
  }
`;

export const AccountGif = styled('div')`
  position: absolute;
  top: 18px;
  left: -20px;
  border-radius: 30px;
  z-index: 200;
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    left: -14px;
  }

  @media screen and (min-width: 1600px) {
    top: 25px;
  }
`;

export const VacanciesBgStyled1 = styled('img')`
  position: absolute;
  top: -25px;
  left: 30px;
  z-index: 2;
  pointer-events: none;
  @media screen and (max-width: 767px) {
    width: 80px;
    top: 20px;
    left: 50px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 180px;
    left: 100px;
  }
`;

export const VacanciesBgStyled2 = styled('img')`
  position: absolute;
  top: 100px;
  right: 30px;
  pointer-events: none;
  z-index: -500;
  @media screen and (max-width: 767px) {
    width: 80px;
    top: 60px;
    right: 35px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 180px;
    top: 45px;
  }
`;

export const VacanciesBgStyled3 = styled('img')`
  position: absolute;
  top: 40px;
  left: -110px;
  z-index: -550;
  pointer-events: none;
  @media screen and (max-width: 767px) {
    width: 80px;
    top: -50px;
    left: 0px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 180px;
    top: -10px;
    left: -80px;
  }
`;

export const VacanciesBgStyled4 = styled('img')``;

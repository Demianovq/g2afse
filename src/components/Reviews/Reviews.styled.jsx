import styled from 'styled-components';

export const ReviewsTitle = styled('h3')`
  //styleName: 1200/H1;
  font-family: Lacquer;
  font-size: 90px;
  font-weight: 400;
  text-align: center;
  text-decoration-skip-ink: none;
  color: #f0f8ff;
  margin: 0;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 60px;
    line-height: 72px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 120px;
    margin-bottom: 100px;
  }
`;

export const ReviewsSection = styled('div')`
  padding-top: 60px;
  @media screen and (max-width: 767px) {
    padding-top: 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    padding-top: 50px;
  }
`;

export const ReviewsBgStyled = styled('img')`
  position: absolute;
  bottom: -30px;
  left: 42.75px;
  @media screen and (max-width: 767px) {
    width: 90px;
    bottom: -14px;
    left: 58px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 175px;
    bottom: 110px;
    left: -10px;
  }
`;

export const ReviewsBgStyled1 = styled('img')`
  position: absolute;
  top: 40px;
  right: 30px;
  @media screen and (max-width: 767px) {
    width: 90px;
    right: 180px;
    top: 85px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 175px;
    top: 70px;
  }
`;

export const ReviewsBgStyled2 = styled('img')`
  position: absolute;
  top: 35%;
  left: 30%;
  @media screen and (max-width: 767px) {
    left: 10%;
    width: 90px;
    left: 55%;
    top: 73%;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 175px;
  }
`;

export const ReviewsBgStyled3 = styled('img')`
  position: absolute;
  bottom: -170px;
  right: 20px;
  @media screen and (max-width: 767px) {
    width: 80px;
    bottom: 0;
    top: 60%;
    right: -0px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 175px;
    top: 60%;
    right: 0px;
  }
  @media screen and (min-width: 1600px) {
    right: 10px;
    width: 80px;
  }
`;

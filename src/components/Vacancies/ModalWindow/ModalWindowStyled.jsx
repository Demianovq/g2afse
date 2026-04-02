import styled from 'styled-components';

import BtnCvHover from 'images/VacanciesGif/BtnCvHover.svg';
import SendHover from 'images/Modal/SendHover.svg';

import PdfImageMob from 'images/Modal/pdfImageMob1.svg';

export const ButtonCv = styled('button')`
  all: unset;
  position: relative;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 10px;

  width: 100px;

  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1600px) {
    margin-top: 32px;
    margin-bottom: 38px;
  }
`;

export const ButtonImg = styled('img')`
  filter: drop-shadow(1px 1px 3.5px #00a3ff);
  &:hover {
    content: url(${BtnCvHover});
    filter: drop-shadow(1px 1px 3.5px #f0f8ff);
  }
  @media screen and (max-width: 767px) {
    width: 92px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 68px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    width: 120px;
  }
`;

export const ModalBlock = styled('div')`
  background-color: #333333;
  border-radius: 19px;
  border: 4px solid #2d2d2d;
  padding: 60px 60px 120px 60px;
  position: relative;
  @media screen and (max-width: 767px) {
    padding: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    padding: 30px;
    padding-bottom: 100px;
  }
`;

export const StyledForm = styled('form')`
  display: flex;
  gap: 40px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const ModalTitle = styled('h3')`
  font-family: Russo One;
  font-weight: 400;
  font-size: 40px;
  line-height: 48.2px;
  letter-spacing: 0%;
  color: #f0f8ff;
  margin: 0;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 767px) {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`;

export const ModalMsgBtn = styled('button')`
  border: none;
  background-color: transparent;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const ModalMsgBtnImg = styled('img')`
  @media screen and (max-width: 767px) {
    width: 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 32px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    width: 52px;
  }
  @media screen and (min-width: 1600px) {
    width: 56px;
  }
`;

export const ModalInputName = styled('input')`
  padding: 10px 0px;
  border: 1px solid #0394eb;
  border-radius: 10px;
  background: transparent;
  color: #f0f8ff;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  width: 320px;
  padding-left: 20px;
  font-family: Montserrat;
  font-weight: 300;
  line-height: 19.5px;
  letter-spacing: 0%;
  margin-bottom: 20px;
  border-radius: 15px;
  @media screen and (max-width: 767px) {
    width: 240px;
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 191px;
    font-size: 8px;
    line-height: 10px;
    margin-bottom: 11px;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.5); /* Полупрозрачный текст */
  }

  &:focus {
    box-shadow: 0 0 8px rgba(0, 170, 255, 0.8);
  }
`;

export const ModalTextInput = styled('textarea')`
  border: 1px solid #0394eb;
  border-radius: 10px;
  background: transparent;
  color: #f0f8ff;
  padding-left: 20px;
  padding-top: 5px;

  outline: none;
  transition: all 0.3s ease;
  resize: none;
  outline: none;
  width: 320px;
  height: 161px;
  font-family: Montserrat;
  font-weight: 300;
  font-size: 16px;
  line-height: 19.5px;
  letter-spacing: 0%;
  border-radius: 15px;

  @media screen and (max-width: 767px) {
    width: 240px;
    height: 95px;
    font-size: 10px;
    line-height: 12px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 191px;
    height: 93px;
    font-size: 10px;
    line-height: 12px;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.5); /* Полупрозрачный текст */
  }

  &:focus {
    box-shadow: 0 0 8px rgba(0, 170, 255, 0.8);
  }
`;

export const ModalLabel = styled('label')`
  display: block;
  margin-bottom: 5px;
  margin-left: 20px;
  color: #f0f8ff;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.5px;
  letter-spacing: 0%;
  @media screen and (max-width: 767px) {
    font-size: 10px;
    line-height: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 8px;
    line-height: 10px;
  }
`;

export const FileBlock = styled('div')``;

export const FileImg = styled('img')`
  @media screen and (max-width: 767px) {
    content: url(${PdfImageMob});
  }
`;

export const ModalStyledBlock = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const ModalSendBtn = styled('button')`
  border: none;
  background-color: inherit;
  cursor: pointer;
  margin-top: 20px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    left: 39%;
    bottom: 30px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0;
    display: block;
    width: 120px;
    position: absolute;
    bottom: 50px;
    left: 43%;
  }
`;

export const ModalSendBtnImg = styled('img')`
  filter: drop-shadow(1px 1px 3.5px #00a3ff);
  &:hover {
    content: url(${SendHover});
    filter: drop-shadow(1px 1px 3.5px #f0f8ff);
  }
`;

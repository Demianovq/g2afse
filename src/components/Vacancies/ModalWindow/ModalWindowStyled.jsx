import styled from 'styled-components';

export const ButtonCv = styled('button')`
  all: unset;
  position: relative;
  border: none;
  cursor: pointer;

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
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    width: 120px;
  }
`;

export const ModalBlock = styled('div')`
  background-color: #333333;
  border-radius: 19px;
  border: 2px solid #2d2d2d;
  padding: 60px 60px 120px 60px;
  position: relative;
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
`;

export const ModalMsgBtn = styled('button')`
  border: none;
  background-color: transparent;
  margin-bottom: 20px;
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
`;

export const ModalStyledBlock = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const ModalSendBtn = styled('button')`
  border: none;
  background-color: inherit;
  cursor: pointer;
  padding: 0;
  display: block;
  width: 120px;
  position: absolute;
  bottom: 50px;
  left: 43%;
`;

import React, { useState, useRef } from 'react';
import Modal from 'react-modal';

import emailjs from '@emailjs/browser';

import BtnCv from 'images/VacanciesGif/BtnCv.svg';

import teams from 'images/Modal/teams.svg';
import Telegram from 'images/Modal/telegram2.svg';
import PdfImage from 'images/Modal/PdfImage.svg';
import Done from 'images/Modal/Done.png';
import Send from 'images/Modal/Send.svg';

import sucsessGif from 'images/VacanciesGif/sucsessGif.gif.gif';

import {
  ButtonCv,
  ButtonImg,
  ModalBlock,
  ModalTitle,
  ModalMsgBtn,
  ModalInputName,
  ModalLabel,
  ModalTextInput,
  ModalStyledBlock,
  ModalSendBtn,
  StyledForm,
  ModalMsgBtnImg,
  FileBlock,
  FileImg,
  ModalSendBtnImg,
} from './ModalWindowStyled';

import styled from 'styled-components';

Modal.setAppElement('#root');

const CustomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;

  .ReactModal__Overlay {
    background: rgba(0, 0, 0, 0.5) !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ReactModal__Content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 50vw;
    max-width: 500px;
    height: auto;
    max-height: 80vh;
    overflow-y: auto;
    transition: all 0.3s ease-in-out;

    @media (max-width: 768px) {
      width: 90vw;
      max-width: 90%;
      padding: 15px;
    }

    @media (max-width: 480px) {
      width: 95vw;
      padding: 10px;
    }
  }
`;

const ModalWindow = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState(' ');

  const formRef = useRef(null);

  const [messenger, setMessenger] = useState('');

  const handleMessengerSelect = selectedMessenger => {
    setMessenger(selectedMessenger);
  };

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Логируем все поля формы
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    // Используем emailjs.sendForm
    emailjs
      .sendForm(
        'service_9cdqj26',
        'template_xdzbixu',
        event.target,
        'bMWzc-fLPNGBBrzXG'
      )
      .then(response => {
        console.log('Email successfully sent!', response.status, response.text);
        setIsSubmitted(true);
      })
      .catch(err => {
        console.log('Failed to send email:', err);
      });
  };

  return (
    <div>
      <ButtonCv onClick={() => setModalIsOpen(true)}>
        <ButtonImg src={BtnCv} alt="Send Cv" />
      </ButtonCv>

      <CustomModal
        isOpen={modalIsOpen}
        bodyOpenClassName="modal-open"
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',

            borderRadius: '10px',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',

            zIndex: 9999, // Поднимаем модалку выше всех!
          },
        }}
      >
        <ModalBlock>
          {isSubmitted ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                gap: '60px',
              }}
            >
              <img
                src={Done} // Путь к изображению успешной отправки
                alt="Done"
                style={{
                  width: '100%',
                  maxWidth: '90px',
                  margin: '0',
                }}
              />
              <img
                src={sucsessGif} // Путь к изображению успешной отправки
                alt="Success"
                style={{
                  width: '100%',
                  maxWidth: '287px',
                  margin: '0',
                  borderRadius: '15px',
                }}
              />
            </div>
          ) : (
            <div>
              <ModalTitle>Join our team</ModalTitle>
              <StyledForm ref={formRef} onSubmit={handleSubmit}>
                <div>
                  <ModalLabel>Name *</ModalLabel>
                  <ModalInputName
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />

                  <ModalLabel>Choose your contact messenger *</ModalLabel>

                  <ModalMsgBtn
                    type="button"
                    onClick={() => handleMessengerSelect('teams')}
                  >
                    <ModalMsgBtnImg
                      src={teams}
                      alt="teams"
                      style={{
                        backgroundColor:
                          messenger === 'teams' ? 'white' : 'transparent',

                        cursor: 'pointer',
                        borderRadius: '100px',
                        overflow: 'hidden',
                      }}
                    />
                  </ModalMsgBtn>
                  <ModalMsgBtn
                    type="button"
                    onClick={() => handleMessengerSelect('telegram')}
                  >
                    <ModalMsgBtnImg
                      src={Telegram}
                      alt="Telegram"
                      style={{
                        backgroundColor:
                          messenger === 'telegram' ? 'white' : 'transparent',
                        borderRadius: '100px',
                        overflow: 'hidden',

                        cursor: 'pointer',
                      }}
                    />
                  </ModalMsgBtn>

                  <input type="hidden" name="messenger" value={messenger} />
                  <ModalLabel>Messenger Username *</ModalLabel>
                  <ModalInputName
                    type="text"
                    name="message"
                    placeholder="Your username in the messenger"
                    required
                  />
                </div>
                <ModalStyledBlock>
                  <ModalLabel>More information</ModalLabel>
                  <ModalTextInput
                    name="more"
                    placeholder="Any other details you'd like to share"
                  ></ModalTextInput>
                  <FileBlock
                    style={{
                      position: 'relative',
                    }}
                  >
                    <label
                      className="custom-file-upload"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '10px',
                      }}
                    >
                      <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                      />
                      Your CV
                      <FileImg src={PdfImage} alt="Pdf Icon" />
                    </label>
                    <span className="file-name">{fileName}</span>
                  </FileBlock>

                  <ModalSendBtn type="submit">
                    <ModalSendBtnImg src={Send} alt="Send Button" />
                  </ModalSendBtn>
                </ModalStyledBlock>
              </StyledForm>
            </div>
          )}
        </ModalBlock>
      </CustomModal>
    </div>
  );
};

export default ModalWindow;

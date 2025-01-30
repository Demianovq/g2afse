import {
  VacanciesTitle,
  VacanciesSection,
  AffiliateBlock,
  ManagerTitle,
  ManagerText,
  ButtonCv,
  ButtonImg,
  AffiliateGif,
  AccountGif,
  AccountBlock,
  AccountStyledBlock,
  VacanciesBgStyled1,
  VacanciesBgStyled2,
  VacanciesBgStyled3,
  VacanciesBgStyled4,
} from './Vacancies.styled';

import { Container } from 'components/Container/Container.styled';

import VacanciesFirst from 'images/VacanciesGif/VacanciesFirst.gif.mp4';
import VacanciesSecond from 'images/VacanciesGif/VacanciesSecond.gif.mp4';
import VacanciesBg from 'images/BackGrounds/VacanciesBg.svg';
import VacanciesBg1 from 'images/BackGrounds/VacanciesBg1.svg';
import VacanciesBg2 from 'images/BackGrounds/VacanciesBg2.svg';

import BtnCv from 'images/VacanciesGif/BtnCv.png';

export const Vacancies = () => {
  return (
    <>
      <Container>
        <VacanciesSection>
          <VacanciesTitle>Vacancies</VacanciesTitle>
          <AffiliateBlock>
            <ManagerTitle>Affiliate Manager</ManagerTitle>
            <ManagerText>
              If you want to attend conferences, enjoy your work and team with
              real iGaming experts, this offer is for you.
            </ManagerText>
            <ManagerText
              style={{
                marginTop: '15px',
              }}
            >
              Your main tasks will be to communicate with partners and help
              drive high quality traffic!
            </ManagerText>
            <AffiliateGif>
              <video
                style={{
                  width: '418px',
                  zIndex: '20',
                  position: 'relative',
                  boxShadow: '3px 5px 16px 5px #000000a6',

                  borderRadius: '20px',
                }}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={VacanciesFirst} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <VacanciesBgStyled2 src={VacanciesBg1} alt="" />
            </AffiliateGif>
            <ButtonCv target="_blank" href="https://www.facebook.com">
              <ButtonImg src={BtnCv} alt="" />
            </ButtonCv>
          </AffiliateBlock>
          <AccountBlock>
            <AccountStyledBlock>
              <ManagerTitle>Account Manager</ManagerTitle>
              <ManagerText>
                If you know how to make profitable deals and solve conflict
                situations, this job is for you!{' '}
              </ManagerText>
              <ManagerText
                style={{
                  marginTop: '15px',
                }}
              >
                You will attend the largest conferences, work with professionals
                and enjoy what you do!
              </ManagerText>
              <AccountGif>
                <video
                  style={{
                    width: '418px',
                    boxShadow: '3px 5px 16px 5px #000000a6',
                    zIndex: '20',
                    position: 'relative',

                    borderRadius: '20px',
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={VacanciesSecond} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <VacanciesBgStyled3 src={VacanciesBg2} alt="" />
              </AccountGif>
              <ButtonCv target="_blank" href="https://www.facebook.com">
                <ButtonImg src={BtnCv} alt="" />
              </ButtonCv>
            </AccountStyledBlock>
          </AccountBlock>
          <VacanciesBgStyled1 src={VacanciesBg} alt="" />

          {/* <VacanciesBgStyled4 src={ReviewsBg3} alt="" /> */}
        </VacanciesSection>
      </Container>
    </>
  );
};

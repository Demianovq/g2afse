import {
  VacanciesTitle,
  VacanciesSection,
  AffiliateBlock,
  AffiliateStyledBlock,
  ManagerTitle,
  ManagerText,
  AffiliateGif,
  AccountGif,
  AccountBlock,
  AccountStyledBlock,
  VacanciesBgStyled1,
  VacanciesBgStyled2,
  VacanciesBgStyled3,
  GifVideo,
} from './Vacancies.styled';

import { Container } from 'components/Container/Container.styled';

import VacanciesFirst from 'images/VacanciesGif/VacanciesFirst.gif.mp4';
import VacanciesSecond from 'images/VacanciesGif/VacanciesSecond.gif.mp4';
import VacanciesBg from 'images/BackGrounds/VacanciesBg.svg';
import VacanciesBg1 from 'images/BackGrounds/VacanciesBg1.svg';
import VacanciesBg2 from 'images/BackGrounds/VacanciesBg2.svg';

import ModalWindow from './ModalWindow/ModalWindow';

export const Vacancies = () => {
  return (
    <>
      <Container>
        <VacanciesSection id="section3">
          <VacanciesTitle>Vacancies</VacanciesTitle>
          <AffiliateBlock>
            <AffiliateStyledBlock>
              <ManagerTitle>Affiliate Manager</ManagerTitle>
              <ManagerText>
                If you want to attend conferences, enjoy your work and team with
                real iGaming experts, this offer is for you.
              </ManagerText>
              <ManagerText className="ManagerText">
                Your main tasks will be to communicate with partners and help
                drive high quality traffic!
              </ManagerText>
              <AffiliateGif>
                <GifVideo autoPlay loop muted playsInline>
                  <source src={VacanciesFirst} type="video/mp4" />
                  Your browser does not support the video tag.
                </GifVideo>
                <VacanciesBgStyled2 src={VacanciesBg1} alt="" />
              </AffiliateGif>

              <ModalWindow />
            </AffiliateStyledBlock>
          </AffiliateBlock>
          <AccountBlock>
            <AccountStyledBlock>
              <ManagerTitle>Account Manager</ManagerTitle>
              <ManagerText>
                If you know how to make profitable deals and solve conflict
                situations, this job is for you!{' '}
              </ManagerText>
              <ManagerText className="ManagerText">
                You will attend the largest conferences, work with professionals
                and enjoy what you do!
              </ManagerText>
              <AccountGif>
                <GifVideo autoPlay loop muted playsInline>
                  <source src={VacanciesSecond} type="video/mp4" />
                  Your browser does not support the video tag.
                </GifVideo>
                <VacanciesBgStyled3 src={VacanciesBg2} alt="" />
              </AccountGif>

              <ModalWindow />
            </AccountStyledBlock>
          </AccountBlock>
          <VacanciesBgStyled1 src={VacanciesBg} alt="" />

          {/* <VacanciesBgStyled4 src={ReviewsBg3} alt="" /> */}
        </VacanciesSection>
      </Container>
    </>
  );
};

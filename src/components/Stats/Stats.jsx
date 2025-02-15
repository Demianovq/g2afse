import {
  StatsTextFirst,
  StatsTextFirstStyled,
  StatsSection,
  StatsTextSecond,
  StatsTextSecondStyled,
  StatsTextp,
  StatsTextf,
  StatsTextMission,
  StatsList,
  StatsListItem,
  StatsListItemText,
  StatsImg,
} from './Stats.styled';

import PockerChips from 'images/Stats/PockerChips.png';

import { Container } from 'components/Container/Container.styled';
export const Stats = () => {
  return (
    <>
      <StatsSection id="section1">
        <Container>
          <StatsTextFirst>
            <StatsTextf>More</StatsTextf>
            <StatsTextFirstStyled>than just</StatsTextFirstStyled>
            <StatsTextf>affiliate network.</StatsTextf>
          </StatsTextFirst>
          <StatsTextSecond>
            <StatsTextp>We really</StatsTextp>

            <StatsTextSecondStyled>care</StatsTextSecondStyled>
            <StatsTextp>about</StatsTextp>
            <StatsTextSecondStyled>your result.</StatsTextSecondStyled>
          </StatsTextSecond>
          <StatsTextMission>
            Click2Dep has been a reliable partner in the gambling and betting
            verticals since 2023. The mission of the network is high profit for
            each partner.{' '}
          </StatsTextMission>

          <StatsImg src={PockerChips} alt="Pocker Chips" />

          <StatsList>
            <StatsListItem>
              <span>600+</span> <StatsListItemText>offers</StatsListItemText>
            </StatsListItem>
            <StatsListItem>
              <span>200+</span>
              <StatsListItemText>Major Teams</StatsListItemText>
            </StatsListItem>
            <StatsListItem>
              <span>24/7</span>
              <StatsListItemText>Professional support</StatsListItemText>
            </StatsListItem>
            <StatsListItem>
              <span>2%</span>
              <StatsListItemText>Referral program</StatsListItemText>
            </StatsListItem>
          </StatsList>
        </Container>
      </StatsSection>
    </>
  );
};

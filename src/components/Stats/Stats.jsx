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
      <StatsSection>
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
              600+ <StatsListItemText>offers</StatsListItemText>
            </StatsListItem>
            <StatsListItem>
              200+ <StatsListItemText>Major Teams</StatsListItemText>
            </StatsListItem>
            <StatsListItem>
              24/7 <StatsListItemText>Professional support</StatsListItemText>
            </StatsListItem>
            <StatsListItem>
              2% <StatsListItemText>Referral program</StatsListItemText>
            </StatsListItem>
          </StatsList>
        </Container>
      </StatsSection>
    </>
  );
};

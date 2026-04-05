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
  StatsImgMob,
  StatsTextMissionStyled,
  StatsMobBg1,
  StatsMobBg2,
  StatsMobBg3,
  StatsMobBg4,
} from './Stats.styled';

import PockerChips from 'images/Stats/PockerChips.png';
import PockerChipsMob from 'images/Stats/PockerChipsMob.png';

import StatsMob1 from 'images/BackGrounds/StatsMob1.png';
import StatsMob2 from 'images/BackGrounds/StatsMob2.png';
import StatsMob3 from 'images/BackGrounds/StatsMob3.png';
import StatsMob4 from 'images/BackGrounds/StatsMob4.png';

import { Container } from 'components/Container/Container.styled';
export const Stats = () => {
  return (
    <>
      <StatsSection id="section1">
        <Container>
          <StatsTextFirst>
            <StatsTextf>More</StatsTextf>
            <StatsTextFirstStyled>than just</StatsTextFirstStyled>
            <StatsTextf>affiliate network</StatsTextf>
          </StatsTextFirst>
          <StatsTextSecond>
            <StatsTextp>We really</StatsTextp>

            <StatsTextSecondStyled>care</StatsTextSecondStyled>
            <StatsTextp>about</StatsTextp>
            <StatsTextSecondStyled>your result</StatsTextSecondStyled>
          </StatsTextSecond>

          <StatsTextMission>
            Click2Dep has been a reliable partner in the gambling and betting
            verticals since 2023.
            <StatsTextMissionStyled>
              The mission of the network is high profit for each partner
            </StatsTextMissionStyled>
          </StatsTextMission>

          <StatsImg src={PockerChips} alt="Pocker Chips" />
          <StatsImgMob src={PockerChipsMob} alt="Pocker Chips" />

          <StatsList>
            <StatsListItem>
              <span>2000+</span> <StatsListItemText>Offers</StatsListItemText>
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
          <StatsMobBg1 src={StatsMob1} alt="Splatter" />
          <StatsMobBg2 src={StatsMob2} alt="Splatter" />
          <StatsMobBg3 src={StatsMob3} alt="Splatter" />
          <StatsMobBg4 src={StatsMob4} alt="Splatter" />
        </Container>
      </StatsSection>
    </>
  );
};

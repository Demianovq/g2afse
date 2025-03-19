import styled from 'styled-components';

export const MobNavSection = styled('div')`
  padding-top: 20px;
  display: flex;
  @media screen and (max-width: 767px) {
    padding-top: 10px;
    padding-right: 10px;
  }
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const MobNavLogo = styled('img')`
  display: block;
  width: 195px;
  margin-left: 113px;
  @media screen and (max-width: 767px) {
    width: 115px;
    margin-left: 70px;
  }
`;

export const MobNavLogIn = styled('img')`
  display: block;
  margin-left: auto;
  filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.4))
    drop-shadow(0px 0px 5px #00a3ff) drop-shadow(0px 0px 10px #0394eb);
  @media screen and (max-width: 767px) {
    width: 32px;
  }
`;

import styled from 'styled-components';

import ButtonLogInHover from 'images/Nav/ButtonLogIn/ButtonLogInHover.svg';

export const NavSection = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 0;
  position: relative;
  align-items: center;

  padding-top: 15px;

  @media screen and (min-width: 1600px) {
  }
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const NavLogo = styled('img')`
  display: block;
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    width: 167px;
  }
  @media screen and (min-width: 1600px) {
    width: 234px;
  }
`;

export const NavBtn = styled('a')`
  all: unset;
  color: #57c3ff;

  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  width: 100px;
  margin-left: auto;
  text-transform: uppercase;
  @media screen and (max-width: 767px) {
    margin-right: 10px;
  }

  @media screen and (min-width: 1600px) {
  }
`;

export const NavBtnText = styled('p')`
  font-family: Montserrat;
  font-size: 25px;
  font-weight: 200;
  line-height: 30.48px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  white-space: nowrap;
  align-items: baseline;
  margin-left: 10px;
  text-shadow: 0px 6px 4px rgba(0, 0, 0, 0.4), 0px 0px 30px #00a3ff,
    0px 0px 40px #0394eb;
  ${NavBtn}:hover & {
    text-shadow: 0px 6px 4px rgba(0, 0, 0, 0.4), 0px 0px 30px #f0f8ff,
      0px 0px 40px #f0f8ff;
    color: #f0f8ff;
  }
`;

export const NavBtnImg = styled('img')`
  display: block;
  width: 38px;
  gap: 0px;
  filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.4))
    drop-shadow(0px 0px 20px #00a3ff) drop-shadow(0px 0px 20px #0394eb);

  text-shadow: 1px 1px 3.5px #00a3ff;
  border-radius: 8px;

  ${NavBtn}:hover & {
    content: url(${ButtonLogInHover});
    filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.4))
      drop-shadow(0px 0px 20px #f0f8ff) drop-shadow(0px 0px 20px #f0f8ff);
  }
`;

export const NavList = styled('ul')`
  list-style: none;
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  gap: 28px;
  padding: 0;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1600px) {
    gap: 50px;
  }
`;

export const NavListItem = styled('li')`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.63px;
  color: #f0f8ff;
  white-space: nowrap;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px;
    background-color: #f0f8ff;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media screen and (min-width: 1600px) {
    font-size: 20px;
  }
`;

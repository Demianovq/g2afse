import styled from 'styled-components';

export const NavSection = styled('div')`
  display: flex;

  align-items: center;
  margin: 0;
  position: relative;
  align-items: center;
  gap: 161px;

  @media screen and (min-width: 1600px) {
    gap: 331px;
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

  text-shadow: 0 0 15px rgba(0, 163, 255, 0.8);
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
  text-shadow: 1px 1px 3.5px #00a3ff, 1px 1px 25px #0394eb, 1px 1px 50px #0394eb;
`;

export const NavBtnImg = styled('img')`
  display: block;
  width: 38px;
  gap: 0px;
  filter: drop-shadow(1px 1px 3.5px #00a3ff);

  text-shadow: 1px 1px 3.5px #00a3ff;
  border-radius: 8px;
`;

export const NavList = styled('ul')`
  list-style: none;
  display: flex;
  gap: 28px;
  padding: 0;
  align-items: center;
  justify-content: center;
`;

export const NavListItem = styled('li')`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.63px;
  color: #f0f8ff;
  white-space: nowrap;

  @media screen and (min-width: 1600px) {
    font-size: 20px;
  }
`;

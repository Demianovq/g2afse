import styled from 'styled-components';
export const NavSection = styled('div')`
  display: flex;
  gap: 164px;
`;

export const NavLogo = styled('img')`
  max-width: 100%;
  display: block;
`;

export const NavBtn = styled('button')`
  all: unset;
  color: #57c3ff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  text-shadow: 0 0 15px rgba(0, 163, 255, 0.8);
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
`;

export const NavBtnImg = styled('img')`
  display: block;
  width: 38px;
  gap: 0px;
  filter: drop-shadow(0 0 10px rgba(0, 163, 255, 0.8));
  border-radius: 8px;
`;

export const NavList = styled('ul')`
  list-style: none;
  display: flex;
  gap: 28px;
  padding: 0;
  align-items: center;
`;

export const NavListItem = styled('li')`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.63px;
  color: #f0f8ff;
  white-space: nowrap;
`;

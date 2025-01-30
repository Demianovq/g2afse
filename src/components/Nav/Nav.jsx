import { useRef } from 'react';
import {
  NavSection,
  NavBtn,
  NavList,
  NavListItem,
  NavBtnText,
  NavBtnImg,
  NavLogo,
} from './Nav.styled';
import logo from 'images/LogoGlobal/Logo.svg';
import ButtonLogIn from 'images/Nav/ButtonLogIn/ButtonLogIn.svg';

export const Nav = () => {
  const ref = useRef(null);
  return (
    <>
      <NavSection>
        <NavLogo src={logo} alt="Logo" />
        <NavList>
          <NavListItem>About us</NavListItem>
          <NavListItem>Reviews</NavListItem>
          <NavListItem>Vacansy</NavListItem>
          <NavListItem>Contacts</NavListItem>
        </NavList>
        <NavBtn>
          <NavBtnImg src={ButtonLogIn} alt="LogIn icon" />
          <NavBtnText>Log In</NavBtnText>
        </NavBtn>
      </NavSection>
    </>
  );
};

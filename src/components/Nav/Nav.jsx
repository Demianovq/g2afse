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
  const scrollToSection = id => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <NavSection>
        <NavLogo src={logo} alt="Logo" />
        <NavList>
          <NavListItem>
            <button
              style={{ all: 'unset', cursor: 'pointer' }}
              onClick={() => scrollToSection('section1')}
            >
              About us
            </button>
          </NavListItem>
          <NavListItem>
            <button
              style={{ all: 'unset', cursor: 'pointer' }}
              onClick={() => scrollToSection('section2')}
            >
              Reviews
            </button>
          </NavListItem>
          <NavListItem>
            <button
              style={{ all: 'unset', cursor: 'pointer' }}
              onClick={() => scrollToSection('section3')}
            >
              Vacancy
            </button>
          </NavListItem>
          <NavListItem>
            <button
              style={{ all: 'unset', cursor: 'pointer' }}
              onClick={() => scrollToSection('section4')}
            >
              Contacts
            </button>
          </NavListItem>
        </NavList>

        <NavBtn
          target="_blank"
          rel="noreferrer"
          href="https://click2dep.affise.com/v2/sign/in"
        >
          <NavBtnImg src={ButtonLogIn} alt="LogIn icon" />
          <NavBtnText>Log In</NavBtnText>
        </NavBtn>
      </NavSection>
    </>
  );
};

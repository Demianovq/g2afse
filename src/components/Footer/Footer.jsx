import logo from 'images/LogoGlobal/Logo.svg';
import { FooterLogo, FooterNavlist, FooterNavlistBtn } from './Footer.styled';

export const Footer = () => {
  return (
    <>
      <FooterLogo src={logo} alt="logo" />
      <FooterNavlist>
        <li>
          <FooterNavlistBtn>About us</FooterNavlistBtn>
        </li>
        <li>
          <FooterNavlistBtn>Reviews</FooterNavlistBtn>
        </li>
        <li>
          <FooterNavlistBtn>Vacancy</FooterNavlistBtn>
        </li>
        <li>
          <FooterNavlistBtn>Contacts</FooterNavlistBtn>
        </li>
      </FooterNavlist>
    </>
  );
};

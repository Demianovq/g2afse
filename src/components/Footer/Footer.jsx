import logo from 'images/LogoGlobal/Logo.svg';
import {
  FooterLogo,
  FooterNavlist,
  FooterNavlistBtn,
  FooterTextCopy,
  FooterTextLink,
  FooterSection,
  FooterBtnSignIn,
  FooterSocialList,
  FooterBtnStyled,
  FooterSocialBlock,
  FooterTermsLink,
  FooterBg,
  FooterBtnJoinUs,
  SocialItemImg,
  FooterStyledBlock,
  FooterTextCopyMob,
  FooterTermsLinkMob,
  FooterTextLinkMob,
} from './Footer.styled';

import FooterBg1 from 'images/BackGrounds/FooterBg1.png';

export const Footer = () => {
  const scrollToSection = id => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <FooterSection>
        <FooterStyledBlock>
          <FooterLogo
            src={logo}
            alt="Our Logo Click2dep"
            onClick={scrollToTop}
            style={{ cursor: 'pointer' }}
          />
          <FooterNavlist>
            <li>
              <FooterNavlistBtn>
                <button
                  style={{ all: 'unset', cursor: 'pointer' }}
                  onClick={() => scrollToSection('section1')}
                >
                  About us
                </button>
              </FooterNavlistBtn>
            </li>
            <li>
              <FooterNavlistBtn>
                <button
                  style={{ all: 'unset', cursor: 'pointer' }}
                  onClick={() => scrollToSection('section2')}
                >
                  Reviews
                </button>
              </FooterNavlistBtn>
            </li>
            <li>
              <FooterNavlistBtn>
                <button
                  style={{ all: 'unset', cursor: 'pointer' }}
                  onClick={() => scrollToSection('section3')}
                >
                  Vacancy
                </button>
              </FooterNavlistBtn>
            </li>
            <li>
              <FooterNavlistBtn>
                <button
                  style={{ all: 'unset', cursor: 'pointer' }}
                  onClick={() => scrollToSection('section4')}
                >
                  Contacts
                </button>
              </FooterNavlistBtn>
            </li>
          </FooterNavlist>
          <FooterTextCopy>Copyright © 2025 Click2Dep</FooterTextCopy>
          <FooterTextLink
            href="//www.vecteezy.com/free-png"
            rel="noreferrer"
            target="_blank"
          >
            Spray Paint PNGs by Vecteezy
          </FooterTextLink>
        </FooterStyledBlock>
        <FooterSocialBlock>
          <FooterBtnStyled>
            <FooterBtnSignIn
              target="_blank"
              href="//click2dep.affise.com/v2/sign/up"
              rel="noreferrer"
            >
              Sign In
            </FooterBtnSignIn>
            <FooterBtnJoinUs
              target="_blank"
              href="//click2dep.affise.com/v2/sign/up"
              rel="noreferrer"
            >
              Join us
            </FooterBtnJoinUs>
          </FooterBtnStyled>
          <FooterSocialList>
            <li>
              <a
                target="_blank"
                href="//www.linkedin.com/company/click2dep/"
                rel="noreferrer"
              >
                <SocialItemImg alt="LinkedIn Logo" />
              </a>
            </li>
            <li>
              <a target="_blank" href="//t.me/click2dep" rel="noreferrer">
                <SocialItemImg alt="Telegram Logo" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="//www.instagram.com/click2dep"
                rel="noreferrer"
              >
                <SocialItemImg alt="Instagram Logo" />
              </a>
            </li>
          </FooterSocialList>
          <FooterTermsLink
            target="_blank"
            href="//drive.google.com/drive/folders/1jfOhUT6afbLKlyaWQ978VTxPqegFeL1_?usp=sharing"
          >
            Terms & conditions
          </FooterTermsLink>
        </FooterSocialBlock>
        <FooterBg src={FooterBg1} alt="Background footer" />
        <FooterTextCopyMob>Copyright © 2025 Click2Dep</FooterTextCopyMob>
        <FooterTermsLinkMob
          target="_blank"
          href="//drive.google.com/drive/folders/1jfOhUT6afbLKlyaWQ978VTxPqegFeL1_?usp=sharing"
        >
          Terms & conditions
        </FooterTermsLinkMob>
        <FooterTextLinkMob
          href="//www.vecteezy.com/free-png"
          rel="noreferrer"
          target="_blank"
        >
          Spray Paint PNGs by Vecteezy
        </FooterTextLinkMob>
      </FooterSection>
    </>
  );
};

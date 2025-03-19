import { slide as Menu } from 'react-burger-menu';
import { useState, useEffect, useRef } from 'react';

import NavBurger from 'images/Nav/NavBurger.svg';

import { ModalNav } from './BurgerMenu.styled';

import {
  FooterBtnJoinUs,
  FooterBtnSignIn,
} from 'components/Footer/Footer.styled';

const getMenuStyles = width => ({
  bmBurgerButton: {
    position: 'absolute',
    width: width < 768 ? '35px' : '50px',
    height: '37px',
    left: width < 768 ? '10px' : '20px',
    top: width < 768 ? '8px' : '30px',
  },
  bmMenuWrap: {
    position: 'fixed',
    width: '95%',
    height: 'auto',
    top: width < 768 ? 50 : 90,
    left: 10,
  },
  bmMenu: {
    background: '#373737',
    padding: width < 768 ? '30px 25px' : '30px 25px 100px 25px',
    borderRadius: '10px',
    color: '#fff',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: width < 768 ? '14px' : '20px',
    lineHeight: '18.29px',
    letterSpacing: '0%',
    textDecoration: 'none',
    backdropFilter: 'blur(50px)',
    boxShadow: '0px 0.89px 0.89px 0px rgba(0, 0, 0, 0.25)',
  },
  bmItemList: {
    display: 'flex',
    flexDirection: width < 768 ? 'column' : 'row',
    justifyContent: 'center',
    gap: width < 768 ? '15px' : '40px',
    height: '100%',
    alignItems: 'center',
  },
  bmOverlay: { display: 'none' },
  bmItem: {
    display: 'flex',
    gap: '10px',
  },
});

export const BurgerMenu = () => {
  const [seeTheMenu, seeTheMenuToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = id => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOnClose = () => {
    seeTheMenuToggle(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        seeTheMenuToggle(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <ModalNav ref={menuRef}>
      <Menu
        right={false}
        isOpen={seeTheMenu}
        onStateChange={state => seeTheMenuToggle(state.isOpen)}
        customBurgerIcon={<img src={NavBurger} alt="burger icon" />}
        styles={getMenuStyles(windowWidth)}
      >
        <button
          style={{ all: 'unset', cursor: 'pointer' }}
          onClick={() => {
            scrollToSection('section1');
            handleOnClose();
          }}
        >
          About us
        </button>

        <button
          style={{ all: 'unset', cursor: 'pointer' }}
          onClick={() => {
            scrollToSection('section2');
            handleOnClose();
          }}
        >
          Reviews
        </button>

        <button
          style={{ all: 'unset', cursor: 'pointer' }}
          onClick={() => {
            scrollToSection('section3');
            handleOnClose();
          }}
        >
          Vacancy
        </button>

        <button
          style={{ all: 'unset', cursor: 'pointer' }}
          onClick={() => {
            scrollToSection('section4');
            handleOnClose();
          }}
        >
          Contacts
        </button>

        <div className="ModalStyledBlock">
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
        </div>
      </Menu>
    </ModalNav>
  );
};

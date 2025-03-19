import logo from 'images/LogoGlobal/Logo.svg';
import ButtonLogIn from 'images/Nav/ButtonLogIn/ButtonLogIn.svg';

import { MobNavSection, MobNavLogo, MobNavLogIn } from './MobNav.styled';
import { NavBtn } from './Nav.styled';

export const MobNav = () => {
  return (
    <>
      <>
        <MobNavSection>
          <MobNavLogo src={logo} alt="Logo" />
          <NavBtn
            target="_blank"
            rel="noreferrer"
            href="//click2dep.affise.com/v2/sign/in"
          >
            <MobNavLogIn src={ButtonLogIn} alt="Log in image" />
          </NavBtn>
        </MobNavSection>
      </>
    </>
  );
};

import {
  ContactsTitle,
  ContactsSection,
  ContactsList,
  ContactsListItem,
  ItemName,
  ItemPosition,
  SocialList,
  ContactsImg,
  Bg1,
  Bg2,
  Bg3,
  SmokeBg,
} from './Contacts.styled';

import { Container } from 'components/Container/Container.styled';

import Mail from 'images/Contacts/Mail.png';
import Telegram from 'images/Contacts/Telegram.png';
import LinkedIn from 'images/Contacts/LinkedIn.png';
import Skype from 'images/Contacts/Skype.png';

import Serhii from 'images/Contacts/Serhii.png';
import Artem from 'images/Contacts/Artem.png';
import Eva from 'images/Contacts/Eva.png';
import Kiril from 'images/Contacts/Kiril.png';
import Anton from 'images/Contacts/Anton.png';

import ContactsBg from 'images/BackGrounds/ContactsBg.svg';
import ContactsBg1 from 'images/BackGrounds/ContactsBg1.svg';
import ContactsBg2 from 'images/BackGrounds/ContactsBg2.svg';
import Smoke from 'images/BackGrounds/Smoke.svg';

export const Contacts = () => {
  return (
    <>
      <Container>
        <ContactsSection>
          <ContactsTitle>Contacts</ContactsTitle>
          <ContactsList>
            <ContactsListItem>
              <ContactsImg src={Serhii} alt="employee" />
              <ItemName>Serhii</ItemName>
              <ItemPosition>CBDO</ItemPosition>
              <SocialList>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={Skype} alt="Skype" />
                  </a>
                </li>
              </SocialList>
            </ContactsListItem>
            <ContactsListItem>
              <ContactsImg src={Artem} alt="employee" />
              <ItemName>Artem</ItemName>
              <ItemPosition>Co-Founder&CEO</ItemPosition>
              <Bg2 src={ContactsBg1} alt="" />
              <SocialList>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={Skype} alt="Skype" />
                  </a>
                </li>
              </SocialList>
            </ContactsListItem>
            <ContactsListItem>
              <ContactsImg src={Eva} alt="employee" />
              <ItemName>Eva</ItemName>
              <ItemPosition>Co-Founder&CEO</ItemPosition>
              <SocialList>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={Skype} alt="Skype" />
                  </a>
                </li>
              </SocialList>
            </ContactsListItem>
            <ContactsListItem>
              <ContactsImg src={Anton} alt="employee" />
              <ItemName>Anton</ItemName>
              <ItemPosition>Affiliate</ItemPosition>
              <Bg3 src={ContactsBg2} alt="BackGround" />
              <SocialList>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={Skype} alt="Skype" />
                  </a>
                </li>
              </SocialList>
            </ContactsListItem>
            <ContactsListItem>
              <Bg1 src={ContactsBg} alt="Background" />
              <ContactsImg src={Kiril} alt="employee" />
              <ItemName>Kiril</ItemName>
              <ItemPosition>Affiliate Manager</ItemPosition>
              <SocialList>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                  >
                    <img src={Skype} alt="Skype" />
                  </a>
                </li>
              </SocialList>
            </ContactsListItem>
          </ContactsList>
          <SmokeBg src={Smoke} alt="" />
        </ContactsSection>
      </Container>
    </>
  );
};

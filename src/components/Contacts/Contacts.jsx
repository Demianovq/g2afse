import {
  ContactsTitle,
  ContactsSection,
  Bg1,
  Bg2,
  Bg3,
  SmokeBg,
} from './Contacts.styled';

import { Container } from 'components/Container/Container.styled';

import ContactsBg from 'images/BackGrounds/ContactsBg.svg';
import ContactsBg1 from 'images/BackGrounds/ContactsBg1.svg';
import ContactsBg2 from 'images/BackGrounds/ContactsBg2.svg';
import Smoke from 'images/BackGrounds/Smoke.svg';

import { CarouselContacts } from './CarouselContacts/CarouselContacts';

export const Contacts = () => {
  return (
    <>
      <Container>
        <ContactsSection id="section4">
          <ContactsTitle>Contacts</ContactsTitle>
          <CarouselContacts />
          <Bg1 src={ContactsBg} alt="ContactsBg" />
          <Bg2 src={ContactsBg1} alt="ContactsBg" />
          <Bg3 src={ContactsBg2} alt="ContactsBg" />

          <SmokeBg src={Smoke} alt="" />
        </ContactsSection>
      </Container>
    </>
  );
};

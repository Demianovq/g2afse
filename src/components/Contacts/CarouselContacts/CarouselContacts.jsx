import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Mail from 'images/Contacts/Mail.png';
import Telegram from 'images/Contacts/Telegram.png';
import LinkedIn from 'images/Contacts/LinkedIn.png';
import Teams from 'images/Contacts/Teams.png';

import Serhii from 'images/Contacts/Serhii.png';
import Artem from 'images/Contacts/Artem.png';
import Eva from 'images/Contacts/Eva.png';
import Nikita from 'images/Contacts/Nikita.png';
import Kiril from 'images/Contacts/Kiril.png';
import Anton from 'images/Contacts/Anton.png';
import Olga from 'images/Contacts/Olga.png';

import {
  ContactsImg,
  ItemName,
  ItemPosition,
  SocialList,
  SocialListItemImg,
} from '../Contacts.styled';

import { SwiperCard, CarouselContactsBlock } from './CarouselContacts.styled';

export const CarouselContacts = () => {
  return (
    <CarouselContactsBlock>
      <Swiper
        className="third-swiper"
        modules={[Pagination]}
        breakpoints={{
          320: { slidesPerView: 2 }, // Для мобилок
          768: { slidesPerView: 3 }, // Для планшетов
          1200: { slidesPerView: 3 }, // Для больших экранов
          1600: { slidesPerView: 5 }, // Например, для 1600px и выше
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SwiperCard className="slide">
              <ContactsImg src={Artem} alt="employee" />
              <ItemName>Artem</ItemName>
              <ItemPosition>Co-Founder&CEO</ItemPosition>

              <SocialList>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//t.me/artem_click2dep"
                  >
                    <SocialListItemImg src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:artem.click2dep@gmail.com"
                  >
                    <SocialListItemImg src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//www.linkedin.com/in/artem-click2dep-456240276/"
                  >
                    <SocialListItemImg src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//teams.live.com/l/invite/FEALTx-jQAgHR9uOQE"
                  >
                    <SocialListItemImg src={Teams} alt="Teams" />
                  </a>
                </li>
              </SocialList>
            </SwiperCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SwiperCard className="slide">
              <ContactsImg src={Eva} alt="employee" />
              <ItemName>Eva</ItemName>
              <ItemPosition>Co-Founder&CEO</ItemPosition>
              <SocialList>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//t.me/eva_click2dep"
                  >
                    <SocialListItemImg src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:click2dep@gmail.com"
                  >
                    <SocialListItemImg src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//www.linkedin.com/in/eva-bazan-7905b9248"
                  >
                    <SocialListItemImg src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//teams.live.com/l/invite/FEAG3gh1y__GiFBEgE"
                  >
                    <SocialListItemImg src={Teams} alt="Teams" />
                  </a>
                </li>
              </SocialList>
            </SwiperCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SwiperCard className="slide">
              <ContactsImg src={Serhii} alt="employee" />
              <ItemName>Vitaliy</ItemName>
              <ItemPosition>Advertisers Manager</ItemPosition>
              <SocialList>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//t.me/vitaliy_click2dep"
                  >
                    <SocialListItemImg src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:vitaliy.click2dep@gmail.com"
                  >
                    <SocialListItemImg src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//ua.linkedin.com/in/vitaliy-click2dep-76392a365"
                  >
                    <SocialListItemImg src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//teams.live.com/l/invite/FEAO3m8EbdSvEQ-MQE"
                  >
                    <SocialListItemImg src={Teams} alt="Teams" />
                  </a>
                </li>
              </SocialList>
            </SwiperCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SwiperCard className="slide">
              <ContactsImg src={Olga} alt="employee" />
              <ItemName>Olga</ItemName>
              <ItemPosition>Advertisers Manager</ItemPosition>
              <SocialList>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//t.me/Olga_click2dep"
                  >
                    <SocialListItemImg src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:olha.click2dep@gmail.com"
                  >
                    <SocialListItemImg src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//linkedin.com/in/olha-click2dep-120a52365"
                  >
                    <SocialListItemImg src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//teams.live.com/l/invite/FEAt5Jv1LXGVGOo9QE"
                  >
                    <SocialListItemImg src={Teams} alt="Teams" />
                  </a>
                </li>
              </SocialList>
            </SwiperCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SwiperCard className="slide">
              <ContactsImg src={Nikita} alt="employee" />
              <ItemName>Nikita</ItemName>
              <ItemPosition>Team Leader</ItemPosition>
              <SocialList>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//t.me/click2depp_nikita"
                  >
                    <SocialListItemImg src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:nikita.click2dep@gmail.com"
                  >
                    <SocialListItemImg src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//www.linkedin.com/in/nikita-mosenz-2bb6482b3/"
                  >
                    <SocialListItemImg src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//teams.live.com/l/invite/FEAHRV-jHwHQreftgI"
                  >
                    <SocialListItemImg src={Teams} alt="Teams" />
                  </a>
                </li>
              </SocialList>
            </SwiperCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SwiperCard className="slide">
              <ContactsImg src={Anton} alt="employee" />
              <ItemName>Andrew</ItemName>
              <ItemPosition>Affiliate Manager</ItemPosition>

              <SocialList>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//t.me/Click2Dep_andrey"
                  >
                    <SocialListItemImg src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:andrey.click2dep@gmail.com"
                  >
                    <SocialListItemImg src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//www.linkedin.com/in/андрій-шакун-93611a284/"
                  >
                    <SocialListItemImg src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                {/*<li>*/}
                {/*  <a*/}
                {/*    target="_blank"*/}
                {/*    rel="noreferrer"*/}
                {/*    href="//teams.live.com/l/invite/FEACTo3LdE0RUHNKQE"*/}
                {/*  >*/}
                {/*    <SocialListItemImg src={Teams} alt="Teams" />*/}
                {/*  </a>*/}
                {/*</li>*/}
              </SocialList>
            </SwiperCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SwiperCard className="slide">
              <ContactsImg src={Kiril} alt="employee" />
              <ItemName>Helper</ItemName>
              <ItemPosition>Affiliate Manager</ItemPosition>
              <SocialList>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//t.me/Click2Dep_aff"
                  >
                    <SocialListItemImg src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:official@click2dep.net"
                  >
                    <SocialListItemImg src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="//www.linkedin.com/company/click2dep/"
                  >
                    <SocialListItemImg src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                {/*<li>*/}
                {/*  <a*/}
                {/*    target="_blank"*/}
                {/*    rel="noreferrer"*/}
                {/*    href="//teams.live.com/l/invite/FEAqsOLglN7dT7S9AI"*/}
                {/*  >*/}
                {/*    <SocialListItemImg src={Teams} alt="Teams" />*/}
                {/*  </a>*/}
                {/*</li>*/}
              </SocialList>
            </SwiperCard>
          </div>
        </SwiperSlide>
      </Swiper>
    </CarouselContactsBlock>
  );
};

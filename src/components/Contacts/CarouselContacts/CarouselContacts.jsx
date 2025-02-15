import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import React, { useRef, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Mail from 'images/Contacts/Mail.png';
import Telegram from 'images/Contacts/Telegram.png';
import LinkedIn from 'images/Contacts/LinkedIn.png';
import Skype from 'images/Contacts/Skype.png';

import Serhii from 'images/Contacts/Serhii.png';
import Artem from 'images/Contacts/Artem.png';
import Eva from 'images/Contacts/Eva.png';
import Nikita from 'images/Contacts/Nikita.png';
import Kiril from 'images/Contacts/Kiril.png';
import Anton from 'images/Contacts/Anton.png';

import {
  ContactsImg,
  ItemName,
  ItemPosition,
  SocialList,
} from '../Contacts.styled';

import { SwiperCard } from './CarouselContacts.styled';

export const CarouselContacts = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Swiper
        className="third-swiper"
        modules={[Pagination]}
        breakpoints={{
          320: { slidesPerView: 1 }, // Для мобилок
          768: { slidesPerView: 2 }, // Для планшетов
          1200: { slidesPerView: 3 }, // Для больших экранов
          1600: { slidesPerView: 5 }, // Например, для 1600px и выше
        }}
        pagination={{ clickable: true }}
        loop={true}
        onSlideChange={() => console.log('slide change')}
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
                    href="https://t.me/artem_click2dep"
                  >
                    <img src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="artem.click2dep@gmail.com"
                  >
                    <img src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/artem-click2dep-456240276/"
                  >
                    <img src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://join.skype.com/invite/CVBtw6m6bU2z"
                  >
                    <img src={Skype} alt="Skype" />
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
                    href="https://t.me/eva_click2dep"
                  >
                    <img src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="click2dep@gmail.com"
                  >
                    <img src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/eva-bazan-7905b9248"
                  >
                    <img src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://join.skype.com/invite/LKpoW1O76w1d"
                  >
                    <img src={Skype} alt="Skype" />
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
              <ItemName>Serhii</ItemName>
              <ItemPosition>CBDO</ItemPosition>
              <SocialList>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://t.me/serhii_click2dep"
                  >
                    <img src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="serhiy.click2dep@gmail.com"
                  >
                    <img src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="www.linkedin.com/in/serhii-tsyhanenko-62b56b2b1"
                  >
                    <img src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://join.skype.com/invite/JqsqBiwnOhBC"
                  >
                    <img src={Skype} alt="Skype" />
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
              <ItemPosition>Affiliate Manager</ItemPosition>
              <SocialList>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://t.me/click2depp_nikita"
                  >
                    <img src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="nikita.click2dep@gmail.com"
                  >
                    <img src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/nikita-mosenz-2bb6482b3/"
                  >
                    <img src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://join.skype.com/invite/IdR6HBKEMrYb"
                  >
                    <img src={Skype} alt="Skype" />
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
              <ItemName>Anton</ItemName>
              <ItemPosition>Affiliate Manager</ItemPosition>

              <SocialList>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://t.me/antonclick2dep"
                  >
                    <img src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="anton.click2dep@gmail.com"
                  >
                    <img src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/anton-shmakov-72a099322/"
                  >
                    <img src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://join.skype.com/invite/LJNoTuvngI1c"
                  >
                    <img src={Skype} alt="Skype" />
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
              <ContactsImg src={Kiril} alt="employee" />
              <ItemName>Kiril</ItemName>
              <ItemPosition>Affiliate Manager</ItemPosition>
              <SocialList>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://t.me/kiril_click2dep"
                  >
                    <img src={Telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="kiril.click2dep@gmail.com"
                  >
                    <img src={Mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/kiril-click2dep-122a31299/"
                  >
                    <img src={LinkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://join.skype.com/invite/Ms9vkkl4Zdrk"
                  >
                    <img src={Skype} alt="Skype" />
                  </a>
                </li>
              </SocialList>
            </SwiperCard>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

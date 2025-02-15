import {
  ConferencesSection,
  ConferencesTitle,
  ConfBox,
  ConfBoxImg,
} from './Conferences.styled';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Malta from 'images/Conferences/Malta.png';
import Kyiv from 'images/Conferences/Kyiv.png';
import Amsterdam from 'images/Conferences/Amsterdam.png';
import Warsaw from 'images/Conferences/Warsaw.png';
import Barcelona from 'images/Conferences/Barcelona.png';
import KyivConv from 'images/Conferences/KyivConv.png';

export const Conferences = () => {
  return (
    <>
      <ConferencesSection>
        <ConferencesTitle>Conferences</ConferencesTitle>
        <Swiper
          className="second-swiper"
          modules={[Navigation, Scrollbar, Pagination]}
          spaceBetween={0}
          breakpoints={{
            320: { slidesPerView: 1 }, // Для мобилок
            768: { slidesPerView: 2 }, // Для планшетов
            1200: { slidesPerView: 2.5 }, // Для больших экранов
            1600: { slidesPerView: 3 }, // Например, для 1600px и выше
          }} // Позволит слайдам занимать свою естественную ширину
          centeredSlides={true} // Центральный слайд будет находиться в центре
          loop={true} // Бесконечный цикл
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <ConfBox>
              <ConfBoxImg
                className="slide"
                src={Malta}
                alt="Picture of Malta"
              />
            </ConfBox>
          </SwiperSlide>
          <SwiperSlide>
            <ConfBox>
              <ConfBoxImg className="slide" src={Kyiv} alt="Picture of Kyiv" />
            </ConfBox>
          </SwiperSlide>
          <SwiperSlide>
            <ConfBox>
              <ConfBoxImg
                className="slide"
                src={Barcelona}
                alt="Picture of Barcelona"
              />
            </ConfBox>
          </SwiperSlide>
          <SwiperSlide>
            <ConfBox>
              <ConfBoxImg
                className="slide"
                src={KyivConv}
                alt="Picture of Kyiv"
              />
            </ConfBox>
          </SwiperSlide>
          <SwiperSlide>
            <ConfBox>
              <ConfBoxImg
                className="slide"
                src={Amsterdam}
                alt="Picture of Amsterdam"
              />
            </ConfBox>
          </SwiperSlide>
          <SwiperSlide>
            <ConfBox>
              <ConfBoxImg
                className="slide"
                src={Warsaw}
                alt="Picture of Warsaw"
              />
            </ConfBox>
          </SwiperSlide>
        </Swiper>
      </ConferencesSection>
    </>
  );
};

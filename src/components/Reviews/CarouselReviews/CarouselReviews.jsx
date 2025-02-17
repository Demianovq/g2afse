import { SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';

import {
  CardTitle,
  CardTitleText,
  CardTitlePosition,
  Card,
  CardBox,
  StyledSwiper,
} from './CarouselReviews.styled';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const CarouselReviews = () => {
  return (
    <StyledSwiper
      className="first-swiper"
      modules={[Navigation, A11y]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      loop={true}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Card>
          <CardBox className="slide">
            <CardTitle className="slide-title">Anna</CardTitle>
            <CardTitleText className="slide-text">
              Click2Dep is one of the best affiliate networks I've worked with.
              The professionalism of their team is matched only by their
              enthusiasm and approachability. Payouts are prompt, and the range
              of high-quality offers available has really helped boost our
              campaign performance. Their willingness to collaborate and adapt
              to our needs makes the entire experience seamless.
            </CardTitleText>
            <CardTitlePosition className="slide-position">
              Affiliate Manager
            </CardTitlePosition>
          </CardBox>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <CardBox className="slide">
            <CardTitle className="slide-title">Jan</CardTitle>
            <CardTitleText className="slide-text">
              Click2Dep stands out in the crowded affiliate network landscape.
              Their impressive range of offers, combined with high commission
              rates, has allowed us to drive significant revenue growth. The
              team is not only professional but also genuinely enjoyable to work
              with. They are always open to new ideas and collaborations, making
              our partnership smooth and productive. Highly recommend!
            </CardTitleText>
            <CardTitlePosition className="slide-position">
              BizDev
            </CardTitlePosition>
          </CardBox>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <CardBox className="slide">
            <CardTitle className="slide-title">Andrew</CardTitle>
            <CardTitleText className="slide-text">
              As a media buyer, finding the right affiliate network is crucial,
              and Click2Dep has exceeded my expectations. The offers are diverse
              with high converting rates, and the team's expertise shines
              through in every interaction. They are responsive, friendly,
              answer inquiries even at 2:00 a.m. and always willing to
              brainstorm new strategies together. It feels great to be part of
              such a vibrant community!
            </CardTitleText>
            <CardTitlePosition className="slide-position">
              MediaBuyer
            </CardTitlePosition>
          </CardBox>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <CardBox className="slide">
            <CardTitle className="slide-title">Alex</CardTitle>
            <CardTitleText className="slide-text">
              Click2Dep team is incredibly professional and always available to
              support us. The payouts are quick and reliable, which helps us
              plan our campaigns more effectively. Plus, their offers are
              top-notch and come with competitive rates. It’s truly a pleasure
              to collaborate with such a dedicated and fun team
            </CardTitleText>
            <CardTitlePosition className="slide-position">
              Affiliate Manager
            </CardTitlePosition>
          </CardBox>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <CardBox className="slide">
            <CardTitle className="slide-title">Helen</CardTitle>
            <CardTitleText className="slide-text">
              Partnering with Click2Dep has been a great decision. They deliver
              high-quality traffic quickly from a variety of sources and work
              with all GEOs. The team is professional and easy to communicate
              with, always ready to assist. Our campaigns see rapid returns on
              investment thanks to their effective traffic. Highly recommend!
            </CardTitleText>
            <CardTitlePosition className="slide-position">
              MediaBuyer
            </CardTitlePosition>
          </CardBox>
        </Card>
      </SwiperSlide>
    </StyledSwiper>
  );
};

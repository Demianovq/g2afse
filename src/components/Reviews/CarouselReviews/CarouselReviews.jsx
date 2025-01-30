import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import {
  CardTitle,
  CardTitleText,
  CardTitlePosition,
  Card,
  CardBox,
} from './CarouselReviews.styled';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const CarouselReviews = () => {
  return (
    <Swiper
      className="first-swiper"
      modules={[Navigation, A11y]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Card>
          <CardBox className="slide">
            <CardTitle>Anna</CardTitle>
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
            <CardTitle>Jan</CardTitle>
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
            <CardTitle>Andrew</CardTitle>
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
            <CardTitle>Denys</CardTitle>
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
    </Swiper>
  );
};

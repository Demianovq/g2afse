import BannerFooter from 'images/BackGrounds/BannerFooter.png';
import BannerMob from 'images/BackGrounds/BannerMob1.png';

import { BannerImg, BannerSection, BannerImgMob } from './Banner.styled';
import MovingText from './BannerText';

export const Banner = () => {
  return (
    <>
      <BannerSection>
        <MovingText />
        <BannerImg src={BannerFooter} alt="Banner of Conference" />
        <BannerImgMob src={BannerMob} alt="Banner of Conference" />
      </BannerSection>
    </>
  );
};

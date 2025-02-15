import BannerFooter from 'images/BackGrounds/BannerFooter.png';

import { BannerImg, BannerSection } from './Banner.styled';
import MovingText from './BannerText';

export const Banner = () => {
  return (
    <>
      <BannerSection>
        <MovingText />
        <BannerImg src={BannerFooter} alt="Banner of Conference" />
      </BannerSection>
    </>
  );
};

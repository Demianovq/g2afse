import {
  PartnersImgGlobal,
  PartnersImgBox,
  PartnersSection,
  PartnersListInfo,
  PartnersListInfoTitle,
  PartnersListInfoText,
  PartnersBgImg,
} from './Partners.styled';

import { PureContainer } from 'components/Container/Container.styled';

import Chilli from 'images/Partners/Chilli.svg';
import Wow from 'images/Partners/Wow.svg';
import MioMedia from 'images/Partners/MioMedia.svg';
import Gypsy from 'images/Partners/Gypsy.svg';
import Stars7 from 'images/Partners/Stars7.svg';
import Boomerang from 'images/Partners/Boomerang.svg';
import Bit7 from 'images/Partners/Bit7.svg';
import Partners247 from 'images/Partners/Partners247.svg';

import PartnersBg from 'images/BackGrounds/PartnersBg.svg';

import Marquee from 'react-marquee-slider';

export const Partners = () => {
  const images = [
    Chilli,
    Wow,
    MioMedia,
    Gypsy,
    Stars7,
    Boomerang,
    Bit7,
    Partners247,
  ];

  return (
    <PureContainer>
      <PartnersSection>
        <div style={{ height: '200px' }}>
          <Marquee velocity={50} minScale={0.7} resetAfterTries={100}>
            {images.map((src, index) => (
              <PartnersImgBox key={index}>
                <PartnersImgGlobal src={src} alt={`Image ${index + 1}`} />
              </PartnersImgBox>
            ))}
          </Marquee>
        </div>
        <PartnersListInfo>
          <li>
            <PartnersListInfoTitle>Types</PartnersListInfoTitle>
            <PartnersListInfoText>Casino</PartnersListInfoText>
          </li>
          <li>
            <PartnersListInfoTitle>Top Geo</PartnersListInfoTitle>
            <PartnersListInfoText>Fr, De</PartnersListInfoText>
          </li>
          <li>
            <PartnersListInfoTitle>Top Source</PartnersListInfoTitle>
            <PartnersListInfoText>Fb, Ppc</PartnersListInfoText>
          </li>
        </PartnersListInfo>
        <PartnersBgImg src={PartnersBg} alt="" />
      </PartnersSection>
    </PureContainer>
  );
};

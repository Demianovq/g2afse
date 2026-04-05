import {
  PartnersImgGlobal,
  PartnersImgBox,
  PartnersSection,
  PartnersBgImg,
  MarqueeBox,
} from './Partners.styled';

import { PureContainer } from 'components/Container/Container.styled';

import MioMedia from 'images/Partners/MioMedia.svg';
import Gypsy from 'images/Partners/Gypsy.svg';
import Stars7 from 'images/Partners/Stars7.svg';
import Boomerang from 'images/Partners/Boomerang.svg';
import Bit7 from 'images/Partners/Bit7.svg';
import Affcomunity from 'images/Partners/Affcomunity.svg'
import PayHouse from 'images/Partners/Payhouse.svg'
import Cloacking from 'images/Partners/Cloacking.svg'
import OutCore from 'images/Partners/Outcore.svg'
import Money from 'images/Partners/Money.svg'

import PartnersBg from 'images/BackGrounds/PartnersBg.svg';

import Marquee from 'react-marquee-slider';

export const Partners = () => {
  const images = [
    MioMedia,
    Gypsy,
    Bit7,
    PayHouse,
    Cloacking,
    OutCore,
    Money,
    Stars7,
    Affcomunity,
    Boomerang,
  ];

  return (
    <PureContainer>
      <PartnersSection>
        <MarqueeBox>
          <Marquee velocity={50} minScale={0.7} resetAfterTries={100}>
            {images.map((src, index) => (
              <PartnersImgBox key={index}>
                <PartnersImgGlobal src={src} alt={`Image ${index + 1}`} />
              </PartnersImgBox>
            ))}
          </Marquee>
        </MarqueeBox>

        <PartnersBgImg src={PartnersBg} alt="PartnersBg" />
      </PartnersSection>
    </PureContainer>
  )
}

import {
  GeosSection,
  GeosTitle,
  GeosImgStyled,
  GeosList,
  GeosListItem,
  GeosListItemSource,
  GeosBtn,
  GeosBtnBlock,
  GeosImg,
  GeosBgStyle1,
  GeosBgStyle2,
  GeosBgStyle3,
  GeosBgStyle4,
} from './Geos.styled';

import GeosMap from 'images/Geos/GeosMap.svg';
import GeosBg1 from 'images/BackGrounds/GeosBg1.svg';
import GeosBg2 from 'images/BackGrounds/GeosBg2.svg';
import GeosBg3 from 'images/BackGrounds/GeosBg3.svg';
import GeosBg4 from 'images/BackGrounds/GeosBg4.svg';

import { Container } from 'components/Container/Container.styled';

import ProgressCircle from './GeosCircle';

export const Geos = () => {
  return (
    <>
      <Container>
        <GeosSection>
          <GeosTitle>MAIN SOURCES&GEOS</GeosTitle>
          <GeosImgStyled>
            <GeosImg src={GeosMap} alt="Geos Map" />
          </GeosImgStyled>
          <GeosList>
            <GeosListItem>
              <ProgressCircle percentage={60} />

              <GeosListItemSource>FB</GeosListItemSource>
            </GeosListItem>
            <li>
              <ProgressCircle percentage={15} />

              <GeosListItemSource>ASO</GeosListItemSource>
            </li>
            <li>
              <ProgressCircle percentage={15} />

              <GeosListItemSource>PPC</GeosListItemSource>
            </li>
            <li>
              <ProgressCircle percentage={10} />

              <GeosListItemSource>Other</GeosListItemSource>
            </li>
          </GeosList>

          <GeosBtnBlock>
            <GeosBtn
              target="_blank"
              href="https://click2dep.affise.com/v2/sign/up"
            >
              Join us
            </GeosBtn>
          </GeosBtnBlock>
          <GeosBgStyle1 src={GeosBg1} alt="Geos Section Background" />
          <GeosBgStyle2 src={GeosBg2} alt="Geos Section Background" />
          <GeosBgStyle3 src={GeosBg3} alt="Geos Section Background" />
          <GeosBgStyle4 src={GeosBg4} alt="Geos Section Background" />
        </GeosSection>
      </Container>
    </>
  );
};

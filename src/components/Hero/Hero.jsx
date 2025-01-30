import {
  HeroSection,
  HeroFirstText,
  HeroNameText,
  HeroSecondText,
  HeroContent,
  HeroBtn,
  HeroBtnStyle,
} from './Hero.styled';
import { AnimationComponent } from './HeroAnimation';

import svg1 from 'images/Lightempty/LC.svg';
import svg2 from 'images/Darkempty/DC.svg';
import svg3 from 'images/Lightempty/LL.svg';
import svg4 from 'images/Darkempty/DL.svg';
import svg5 from 'images/Lightempty/LI.svg';
import svg6 from 'images/Darkempty/DI.svg';
import svg7 from 'images/Lightempty/LC2.svg';
import svg8 from 'images/Darkempty/DC2.svg';
import svg9 from 'images/Lightempty/LK.svg';
import svg10 from 'images/Darkempty/DK.svg';
import svg11 from 'images/Lightempty/L2.svg';
import svg12 from 'images/Darkempty/D2.svg';
import svg13 from 'images/Lightempty/LD.svg';
import svg14 from 'images/Darkempty/DD.svg';
import svg15 from 'images/Lightempty/LE.svg';
import svg16 from 'images/Darkempty/DE.svg';
import svg17 from 'images/Lightempty/LP.svg';
import svg18 from 'images/Darkempty/DP.svg';
export const Hero = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroFirstText>DIGITAL PERFORMANCE</HeroFirstText>
          <div class="neon-sign">
            <div class="letter c">
              <img class="light" src={svg1} alt="C" />
              <img class="black" src={svg2} alt="C" />
            </div>

            <div class="letter l">
              <img class="light" src={svg3} alt="L" />
              <img class="black" src={svg4} alt="L" />
            </div>

            <div class="letter i">
              <img class="light" src={svg5} alt="I" />
              <img class="black" src={svg6} alt="I" />
            </div>

            <div class="letter C2">
              <img class="light" src={svg7} alt="C2" />
              <img class="black" src={svg8} alt="C2" />
            </div>

            <div class="letter K">
              <img class="light" src={svg9} alt="K" />
              <img class="black" src={svg10} alt="K" />
            </div>

            <div class="letter num2">
              <img class="light" src={svg11} alt="2" />
              <img class="black" src={svg12} alt="2" />
            </div>

            <div class="letter D">
              <img class="light" src={svg13} alt="D" />
              <img class="black" src={svg14} alt="D" />
            </div>

            <div class="letter E">
              <img class="light" src={svg15} alt="E" />
              <img class="black" src={svg16} alt="E" />
            </div>

            <div class="letter P">
              <img class="light" src={svg17} alt="P" />
              <img class="black" src={svg18} alt="P" />
            </div>
          </div>

          {/* <AnimationComponent /> */}
          {/* <HeroNameText>Click2dep</HeroNameText> */}
          {/* <HeroNameText>Click2dep</HeroNameText> */}
          <HeroSecondText>CPA Agency</HeroSecondText>
          <HeroBtnStyle>
            <HeroBtn>Join Us</HeroBtn>
          </HeroBtnStyle>
        </HeroContent>
      </HeroSection>
    </>
  );
};

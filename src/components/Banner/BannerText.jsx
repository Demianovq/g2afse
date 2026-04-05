import Marquee from 'react-marquee-slider';

import { BannerTextStyle, BannerTextBlock } from './Banner.styled';

const MarqueeText = ({ text, velocity = 20 }) => {
  return (
    <Marquee velocity={velocity}>
      {[...text].map((char, index) => (
        <BannerTextStyle
          key={index}
          className="text-2xl font-bold whitespace-nowrap"
          style={{
            color: index === 10 ? ' #0086D6' : ' #fcf9e1',
          }}
        >
          {char}
        </BannerTextStyle>
      ))}
    </Marquee>
  );
};

const MovingText = () => {
  return (
    <BannerTextBlock className="w-full bg-gray-100 p-4 space-y-4">
      <MarqueeText
        text="Meet Click2Dep at SBC SUMMIT | The Greatest Show in Gaming | LISBON, 29 SEPTEMBER – 1 OCTOBER 2026   "
        velocity={40}
      />
    </BannerTextBlock>
  );
};

export default MovingText;

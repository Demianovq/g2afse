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
            color: index === 23 ? ' #E21369' : ' #fcf9e1;',
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
        text="Meet Click2Dep at iGB L!VE | Innovating the Future of Affiliates | London, July 2-3, 2025   "
        velocity={50}
      />
    </BannerTextBlock>
  );
};

export default MovingText;

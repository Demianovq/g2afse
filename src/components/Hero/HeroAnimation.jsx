import { useEffect } from 'react';

const FlickeringNumber = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        const num2Black = document.querySelector('.letter.num2 .black');
        const num2Light = document.querySelector('.letter.num2 .light');

        if (num2Black && num2Light) {
          num2Black.classList.add('flicker');
          num2Light.classList.add('flicker');

          setTimeout(() => {
            num2Black.classList.remove('flicker');
            num2Light.classList.remove('flicker');
          }, 1000);
        }
      }, 4000);

      return () => clearInterval(interval);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return null;
};

export default FlickeringNumber;

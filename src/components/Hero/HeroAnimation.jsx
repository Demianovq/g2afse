import { useEffect, useState } from 'react';

const FlickeringNumber = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Проверка на мобильную версию
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Порог для мобильных устройств
    };

    checkMobile(); // Проверка при монтировании
    window.addEventListener('resize', checkMobile); // Добавляем слушатель на изменение размера окна

    return () => {
      window.removeEventListener('resize', checkMobile); // Очистка слушателя при размонтировании
    };
  }, []);

  // Логика для фликера, которая будет выполняться только если не мобильное устройство
  useEffect(() => {
    if (isMobile) return; // Не выполняем эффект, если это мобильное устройство

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
  }, [isMobile]); // Добавляем зависимость от isMobile

  return null;
};

export default FlickeringNumber;

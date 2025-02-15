import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const ProgressCircle = ({ percentage = 15 }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const [displayValue, setDisplayValue] = useState('1%');
  const count = useMotionValue(1);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    const unsubscribe = rounded.on('change', value => {
      setDisplayValue(`${value}%`); // Добавляем % корректно
    });

    return () => unsubscribe(); // Чистим подписку
  }, [rounded]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      animate(count, percentage, { duration: 1.5, ease: 'easeInOut' });
    }
  }, [inView, count, percentage]);

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      ref={ref}
      style={{
        width: '126px',
        height: '126px',
        position: 'relative',
      }}
    >
      <svg
        style={{
          width: '100%',
          height: '100%',
          transform: 'rotate(-90deg)',
          overflow: 'visible',
        }}
        viewBox="0 0 44 44" // Обновлено
      >
        <circle
          cx="22" // Центр соответствует половине viewBox
          cy="22"
          r="20" // Радиус уменьшается с учётом stroke-width
          stroke="#383838"
          strokeWidth="1.15"
          fill="none" // Заполнение фона отключено
        />
        <circle
          cx="22"
          cy="22"
          r="20"
          stroke="#57c3ff"
          strokeWidth="3.15"
          fill="none"
          strokeDasharray={circumference} // Длина обруча
          strokeDashoffset={offset} // Заполнение на 60%
          strokeLinecap="round"
          style={{
            filter: 'blur(4px)', // Размытие для эффекта подсветки
            opacity: 0.6, // Уменьшение яркости подсветки
          }}
        />

        <motion.circle
          cx="22"
          cy="22"
          r="20"
          fill="none"
          stroke="#57c3ff"
          strokeWidth="1.15"
          strokeDasharray="125.6"
          strokeDashoffset="106.76"
          strokeLinecap="round"
          animate={{ strokeDashoffset: inView ? offset : circumference }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Russo One',
          fontSize: '26px',
          fontWeight: '400',

          color: '#57c3ff',

          zIndex: '2',
        }}
      >
        <motion.text x="50" y="55" textAnchor="middle" fill="#57c3ff">
          {displayValue}
        </motion.text>
      </div>
    </div>
  );
};

export default ProgressCircle;

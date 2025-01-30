import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../Animations/Animation.json';

export const AnimationComponent = () => {
  return (
    <div style={{ width: '500px', height: '500px' }}>
      {' '}
      {/* Задаем размер */}
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

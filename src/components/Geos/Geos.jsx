import {
  GeosSection,
  GeosTitle,
  GeosImgStyled,
  GeosListItemText,
  GeosList,
  GeosListItem,
  GeosListItemSource,
  GeosBtn,
  GeosBtnBlock,
  GeosBtnImg,
  GeosBgStyle1,
  GeosBgStyle2,
  GeosBgStyle3,
  GeosBgStyle4,
} from './Geos.styled';

import GeosMap from 'images/Geos/GeosMap.svg';
import GeosBtnBg from 'images/BackGrounds/GeosBtnBg.png';
import GeosBg1 from 'images/BackGrounds/GeosBg1.svg';
import GeosBg2 from 'images/BackGrounds/GeosBg2.svg';
import GeosBg3 from 'images/BackGrounds/GeosBg3.svg';
import GeosBg4 from 'images/BackGrounds/GeosBg4.svg';

import { Container } from 'components/Container/Container.styled';

export const Geos = () => {
  return (
    <>
      <Container>
        <GeosSection>
          <GeosTitle>MAIN SOURCES&GEOS</GeosTitle>
          <GeosImgStyled>
            <img src={GeosMap} alt="Geos Map" />
          </GeosImgStyled>
          <GeosList>
            <GeosListItem>
              <div
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
                  viewBox="0 0 44 44" // Учитываем размер для strokeWidth
                >
                  <circle
                    cx="22"
                    cy="22"
                    r="20"
                    stroke="#383838"
                    strokeWidth="1.15" // Толщина обруча
                    fill="none"
                  />
                  <circle
                    cx="22"
                    cy="22"
                    r="20"
                    stroke="#57c3ff"
                    strokeWidth="3.15"
                    fill="none"
                    strokeDasharray="125.6" // Длина обруча
                    strokeDashoffset="50.24" // Заполнение на 60%
                    strokeLinecap="round"
                    style={{
                      filter: 'blur(4px)', // Размытие для эффекта подсветки
                      opacity: 0.6, // Уменьшение яркости подсветки
                    }}
                  />
                  <circle
                    cx="22"
                    cy="22"
                    r="20"
                    stroke="#57c3ff"
                    strokeWidth="1.15" // Толщина обруча
                    fill="none"
                    strokeDasharray="125.6" // Общая длина окружности
                    strokeDashoffset="50.24" // Для 60% (125.6 * (1 - 0.6))
                    strokeLinecap="round"
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
                    fontSize: '18px',
                    color: '#57c3ff',
                  }}
                >
                  <GeosListItemText>60%</GeosListItemText>
                </div>
                <GeosListItemSource>FB</GeosListItemSource>
              </div>
            </GeosListItem>
            <li>
              <div
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
                    strokeDasharray="125.6" // Длина обруча
                    strokeDashoffset="106.76" // Заполнение на 60%
                    strokeLinecap="round"
                    style={{
                      filter: 'blur(4px)', // Размытие для эффекта подсветки
                      opacity: 0.6, // Уменьшение яркости подсветки
                    }}
                  />
                  <circle
                    cx="22"
                    cy="22"
                    r="20"
                    stroke="#57c3ff"
                    strokeWidth="1.15"
                    fill="none"
                    strokeDasharray="125.6" // Общая длина окружности (2 * π * 20)
                    strokeDashoffset="106.76" // Для 15% (125.6 * (1 - 0.15))
                    strokeLinecap="round" // Скругление концов
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
                    fontSize: '18px',
                    color: '#57c3ff',
                  }}
                >
                  <GeosListItemText>15%</GeosListItemText>
                </div>
                <GeosListItemSource>ASO</GeosListItemSource>
              </div>
            </li>
            <li>
              <div
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
                    strokeDasharray="125.6" // Длина обруча
                    strokeDashoffset="106.76" // Заполнение на 60%
                    strokeLinecap="round"
                    style={{
                      filter: 'blur(4px)', // Размытие для эффекта подсветки
                      opacity: 0.6, // Уменьшение яркости подсветки
                    }}
                  />
                  <circle
                    cx="22"
                    cy="22"
                    r="20"
                    stroke="#57c3ff"
                    strokeWidth="1.15"
                    fill="none"
                    strokeDasharray="125.6" // Общая длина окружности (2 * π * 20)
                    strokeDashoffset="106.76" // Для 15% (125.6 * (1 - 0.15))
                    strokeLinecap="round" // Скругление концов
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
                    fontSize: '18px',
                    color: '#57c3ff',
                  }}
                >
                  <GeosListItemText>15%</GeosListItemText>
                </div>
                <GeosListItemSource>PPC</GeosListItemSource>
              </div>
            </li>
            <li>
              <div
                style={{
                  width: '126px',
                  height: '126px',
                  position: 'relative',
                  zIndex: '2',
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
                    strokeDasharray="125.6" // Длина обруча
                    strokeDashoffset="108.76" // Заполнение на 60%
                    strokeLinecap="round"
                    style={{
                      filter: 'blur(4px)', // Размытие для эффекта подсветки
                      opacity: 0.6, // Уменьшение яркости подсветки
                    }}
                  />
                  <circle
                    cx="22"
                    cy="22"
                    r="20"
                    stroke="#57c3ff"
                    strokeWidth="1.15"
                    fill="none"
                    strokeDasharray="125.6" // Общая длина окружности (2 * π * 20)
                    strokeDashoffset="108.76" // Для 15% (125.6 * (1 - 0.15))
                    strokeLinecap="round" // Скругление концов
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
                    fontSize: '18px',
                    color: '#57c3ff',
                  }}
                >
                  <GeosListItemText>10%</GeosListItemText>
                </div>
                <GeosListItemSource>Other</GeosListItemSource>
              </div>
            </li>
          </GeosList>

          <GeosBtnBlock>
            <GeosBtn target="_blank" href="https://www.facebook.com">
              Join us
            </GeosBtn>
            <GeosBtnImg src={GeosBtnBg} alt="Button background" />
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

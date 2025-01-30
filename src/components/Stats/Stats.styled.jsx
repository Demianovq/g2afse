import styled from 'styled-components';
import SmokeBg from 'images/BackGrounds/SmokeBg.png';

export const StatsSection = styled('div')`
  padding-top: 120px;
  background-image: url('${SmokeBg}');
  background-position: 50% 80%;
  background-repeat: no-repeat;
`;

export const StatsTextFirst = styled('div')`
  //styleName: 1200/H2;
  font-family: Lacquer;
  font-size: 50px;
  font-weight: 400;
  line-height: 60px;
  text-align: left;

  color: #f0f8ff;
  display: flex;
  justify-content: flex-start;
  gap: 12px;
`;

export const StatsTextFirstStyled = styled('p')`
  //styleName: 1200/P2;
  font-family: Lacquer;
  font-size: 20px;
  font-weight: 400;
  padding-top: 11px;

  margin: 0;

  color: #0394eb;
`;

export const StatsTextSecond = styled('div')`
  //styleName: 1200/P2;
  font-family: Lacquer;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #0394eb;
  display: flex;
  justify-content: end;
  gap: 12px;
`;

export const StatsTextSecondStyled = styled('p')`
  display: inline-block;
  //styleName: 1200/H2;
  font-family: Lacquer;
  font-size: 50px;
  font-weight: 400;
  line-height: 60px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin: 0;

  color: #f0f8ff;
`;

export const StatsTextp = styled('p')`
  padding-top: 10px;
`;

export const StatsTextf = styled('p')`
  margin: 0;
`;

export const StatsTextMission = styled('p')`
  margin: 0;
  //styleName: 1200/P1;
  font-family: Montserrat;
  font-size: 21px;
  font-weight: 500;
  line-height: 35px;
  text-align: justified;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #f0f8ff;
`;

export const StatsList = styled('ul')`
  list-style: none;
  display: flex;
  justify-content: center;
  margin-right: 45px;
  margin-left: 45px;
  gap: 100px;
  border: 1.5px solid #57c3ff;
  border-radius: 10px;
  box-shadow: 0px 0px 1px 0px #00a3ff;

  box-shadow: 0px 0px 1px 0px #0394eb;

  box-shadow: 0px 0px 2px 0px #0394eb;

  box-shadow: 0px 0px 10px 0px #0394eb;
`;

export const StatsListItem = styled('li')`
  //styleName: 1200/H4;
  font-family: Russo One;
  font-size: 30px;
  font-weight: 400;
  line-height: 15px;
  text-align: left;

  text-decoration-skip-ink: none;
  color: #f0f8ff;
  display: flex;

  flex-direction: column;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 15px;
  text-shadow: 1px 1px 3.5px #00a3ff, 1px 1px 25px #0394eb, 1px 1px 50px #0394eb;
`;

export const StatsListItemText = styled('p')`
  //styleName: 1200/P4;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 600;

  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #57c3ff;
  text-shadow: 1px 1px 3.5px #00a3ff, 1px 1px 25px #0394eb, 1px 1px 50px #0394eb;
`;

export const StatsImg = styled('img')`
  display: block;
  width: 960px;
`;

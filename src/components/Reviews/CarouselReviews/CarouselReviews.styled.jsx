import styled from 'styled-components';

export const CardTitle = styled('p')`
  //styleName: 1200/H4;
  font-family: Russo One;
  font-size: 25px;
  font-weight: 400;
  line-height: 36.15px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #f0f8ff;
  margin: 0;
  margin-bottom: 20px;
`;

export const CardTitleText = styled('p')`
  font-family: Montserrat;
  font-size: 10.56px;
  font-weight: 400;
  line-height: 16.08px;
  letter-spacing: 0.01em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #f0f8ff;
`;

export const CardTitlePosition = styled('p')`
  display: block;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.01em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #57c3ff;
  margin-bottom: 0;
  margin-top: 30px;
`;

export const Card = styled('div')`
  align-items: center;
  justify-content: center;

  display: flex;
`;

export const CardBox = styled('div')`
  width: 210px;
  height: 280px;

  border-radius: 15.73px;
  backdrop-filter: blur(8.277144432067871px);

  box-shadow: 0px 2.82px 2.82px 0px #00000040;
  padding: 35px 28px;
  background: #fffefe0d;
`;

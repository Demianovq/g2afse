import styled from 'styled-components';

export const Container = styled('div')`
  @media screen and (max-width: 767px) {
    max-width: 480px;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 738px;
  }

  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    width: 960px;
    padding-left: 120px;
    padding-right: 120px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1600px) {
    padding-left: 120px;
    padding-right: 120px;
  }
`;

export const PureContainer = styled('div')`
  margin: 0 auto;

  @media screen and (min-width: 1600px) {
    max-width: auto;
  }
`;

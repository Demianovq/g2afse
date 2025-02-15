import {
  ReviewsTitle,
  ReviewsSection,
  ReviewsBgStyled,
  ReviewsBgStyled1,
  ReviewsBgStyled2,
  ReviewsBgStyled3,
} from './Reviews.styled';
import { CarouselReviews } from './CarouselReviews/CarouselReviews';
import { Container } from 'components/Container/Container.styled';
import ReviewsBg from 'images/BackGrounds/ReviewsBg.svg';
import ReviewsBg1 from 'images/BackGrounds/ReviewsBg1.svg';
import ReviewsBg2 from 'images/BackGrounds/ReviewsBg2.svg';
import ReviewsBg3 from 'images/BackGrounds/ReviewsBg3.svg';

export const Reviews = () => {
  return (
    <>
      <Container style={{ position: 'relative' }}>
        <ReviewsSection id="section2">
          <ReviewsTitle>REVIEWS</ReviewsTitle>
        </ReviewsSection>
        <CarouselReviews />

        <ReviewsBgStyled src={ReviewsBg} alt="" />
        <ReviewsBgStyled1 src={ReviewsBg1} alt="" />
        <ReviewsBgStyled2 src={ReviewsBg2} alt="" />
        <ReviewsBgStyled3 src={ReviewsBg3} alt="" />
      </Container>
    </>
  );
};

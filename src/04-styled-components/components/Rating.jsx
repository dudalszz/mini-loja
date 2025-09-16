import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const Stars = styled.div`
  display: flex;
  margin-right: ${(props) => props.theme.spacing.xs};
  font-size: 1rem;
`;

const Star = styled.span`
  color: ${(props) =>
    props.filled ? props.theme.colors.rating : props.theme.colors.border};
  margin-right: 0.125rem;
`;

const RatingText = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const Rating = ({ value }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value - fullStars >= 0.5;

  return (
    <Container>
      <Stars>
        {[...Array(5)].map((_, i) => (
          <Star key={i} filled={i < fullStars}>
            ★
          </Star>
        ))}
      </Stars>
      <RatingText>({value.toFixed(1)})</RatingText>
    </Container>
  );
};

export default Rating;

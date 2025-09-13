import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const Stars = styled.div`
  color: ${(props) => props.theme.colors.rating || "#fd7e14"};
`;

const Value = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const Rating = ({ value }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <Container>
      <Stars>
        {"★".repeat(fullStars)}
        {hasHalfStar ? "⭐" : ""}
        {"☆".repeat(emptyStars)}
      </Stars>
      <Value>({value.toFixed(1)})</Value>
    </Container>
  );
};

export default Rating;

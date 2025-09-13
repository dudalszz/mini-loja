import React from "react";
import styled from "styled-components";

const SkeletonBase = styled.div`
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.border} 25%,
    #e9ecef 50%,
    ${(props) => props.theme.colors.border} 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: ${(props) => props.theme.borderRadius.default};

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const Skeleton = ({ type = "text", width, height }) => {
  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return <SkeletonBase style={style} />;
};

export default Skeleton;

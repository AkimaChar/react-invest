import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
`;
const LoaderSpan = styled.span`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 5px solid;
  border-color: #00a3ff transparent;
  border-radius: 50%;
  display: inline-block;
  animation: ${rotate} 1s linear infinite;
`;

export default function Loader({ size = 50 }) {
  return (
    <LoaderContainer>
      <LoaderSpan size={size} />
    </LoaderContainer>
  );
}

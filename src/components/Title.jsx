import React from "react";
import styled from "styled-components";

const Conatiner = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: ${({ mb }) => mb}px;
`;
const Line = styled.hr`
  background: rgba(255, 255, 255, 0.07);
  flex-grow: 1;
  height: 1px;
`;
const Text = styled.h1`
  font-weight: 300;
  font-size: 50px;
  line-height: 170%;
  letter-spacing: 0.05em;
  color: #ffffff;
  margin: 0;
  font-family: "Rany";
  @media (max-width: 1420px) {
    font-size: 40px;
  }
  @media (max-width: 680px) {
    font-size: 8.7vw;
  }
`;

export default function Title({ children, mb = 0 }) {
  return (
    <Conatiner mb={mb}>
      <Line />
      <Text>{children}</Text>
      <Line />
    </Conatiner>
  );
}

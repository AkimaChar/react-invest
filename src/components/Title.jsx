import React from "react";
import styled from "styled-components";

const Conatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: ${({ mb }) => mb}px;
`;
const Line = styled.hr`
  background: rgba(255, 255, 255, 0.07);
  flex-grow: 1;
  height: 1px;
`;
const Text = styled.h1`
  font-weight: ${({ small }) => (small ? 200 : 300)};
  font-size: ${({ small }) => (small ? "25px" : "50px")};
  line-height: ${({ small }) => (small ? "120%" : "170%")};
  letter-spacing: 0.05em;
  color: #ffffff;
  margin: 0;
  font-family: ${({ small }) => (small ? "Montserrat" : "Rany")};
  opacity: ${({ small }) => (small ? "0.4" : "1")};
  @media (max-width: 1420px) {
    font-size: 40px;
  }
  @media (max-width: 680px) {
    font-size: 8.7vw;
  }
`;

export default function Title({
  children,
  mb = 0,
  lines = true,
  small = false,
}) {
  return (
    <Conatiner mb={mb}>
      {lines && <Line />}
      <Text small={small}>{children}</Text>
      {lines && <Line />}
    </Conatiner>
  );
}

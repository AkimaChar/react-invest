import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: auto 1fr;
  > * {
    height: 100vh;
  }
  > div {
    overflow-y: auto;
    padding: 20px 40px;
  }
`;

export const Line = styled.hr`
  background: rgba(255, 255, 255, 0.07);
  flex-grow: 1;
  height: 1px;
  margin: ${({ mv }) => mv || 0}px ${({ mh }) => mh || 0}px;
  display: block;
`;

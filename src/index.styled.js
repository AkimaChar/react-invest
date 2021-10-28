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
    overflow-x: hidden;
    padding: 20px 40px;
  }
  @media (max-width: 768px) {
    height: auto;
    display: block;
    > * {
      height: auto;
    }
    > div {
      padding: 20px 17px;
    }
  }
`;

export const Line = styled.hr`
  background: rgba(255, 255, 255, 0.07);
  flex-grow: 1;
  height: 1px;
  margin: ${({ mv }) => mv || 0}px ${({ mh }) => mh || 0}px;
  display: block;
`;

export const Container = styled.div`
  ${({ pl }) => pl && `padding-left: ${pl}px;`}
`;

export const GrayBlock = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  border-radius: 30px;
`;

export const CoinBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row !important;
  justify-content: flex-start;
  @media (max-width: 680px) {
    gap: 2.2vw;
  }
`;

export const CoinBlock_Logo = styled.div`
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background: ${({ coin }) =>
    coin ? "transparent" : "rgba(255, 255, 255, 0.04)"};
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1420px) {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 1420px) {
    width: 47px;
    height: 47px;
  }
  @media (max-width: 680px) {
    width: 10.2vw;
    height: 10.2vw;
  }
`;

export const CoinBlock_Name = styled.span`
  font-size: 20px;
  line-height: 120%;
  color: #ffffff;
  opacity: 0.5;
  text-transform: uppercase;
  @media (max-width: 1420px) {
    font-size: 16px;
  }
  @media (max-width: 1420px) {
    font-size: 20px;
  }
  @media (max-width: 680px) {
    font-size: 4.4vw;
  }
`;

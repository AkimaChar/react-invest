import styled from "styled-components";
import { GrayBlock } from "../../index.styled";

export const Filters = styled(GrayBlock)`
  display: flex;
  padding: 20px 45px;
  margin: 0 auto;
  gap: 70px;
  width: fit-content;
  transform: translateY(22px);
  position: relative;
  z-index: 5;
`;

export const Filter = styled.button`
  font-size: 17px;
  line-height: 147%;
  transition: 300ms;
  ${({ active }) => active && "color: rgb(0, 163, 255);"}
  text-transform: capitalize;
  &:hover {
    ${({ active }) => !active && "color: rgba(0, 163, 255, 0.6);"}
  }
`;

export const RatingContainer = styled(GrayBlock)`
  padding: 17px;
  padding-top: 40px;
`;

export const RatingHeader = styled.div`
  padding: 0 40px;
  margin-bottom: 25px;
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 1fr 2fr 2fr;
  gap: 10px;
`;

export const RatingHeaderText = styled.span`
  font-size: 15px;
  line-height: 18px;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.4);
  ${({ center }) => center && "text-align: center;"}
`;

export const CoinsRatingContainer = styled.div`
  display: grid;
  gap: 13px;
`;

export const CoinContainer = styled(GrayBlock)`
  padding: 25px 40px;
  transition: 300ms;
  gap: 10px;
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 1fr 2fr 2fr;
  position: relative;
  &:hover {
    transform: scale(1.02);
    > *:first-child {
      color: #00a3ff;
      font-weight: 500;
    }
  }
`;

export const CoinRatingNumber = styled(GrayBlock)`
  position: absolute;
  padding: 25px 20px;
  right: calc(100% - 30px);
  top: 50%;
  transform: translateY(-50%);
  font-size: 17px;
  line-height: 21px;
  color: rgba(255, 255, 255, 0.3);
`;

export const DealsBlock = styled.div``;
export const DealCount = styled.span`
  font-size: 17px;
  line-height: 25px;
  color: ${({ minus }) => (minus ? "#FF4E4E" : "#00a3ff")};
  margin-right: 2px;
`;
export const DealText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 25px;
`;

export const Action = styled.span`
  font-size: 17px;
  line-height: 147%;
  color: ${({ buy }) => (buy ? "#00a3ff" : "#FF4E4E")};
  text-align: center;
`;

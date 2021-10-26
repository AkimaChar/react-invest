import styled from "styled-components";
import { GrayBlock } from "../../index.styled";

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 25px;
`;

export const ShortInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  color: #ffffff;
  text-transform: uppercase;
`;

export const PriceInfo = styled.span`
  font-weight: normal;
  font-size: 15px;
  line-height: 153%;
  color: #ffffff;
  opacity: 0.4;
`;

export const Price = styled.span`
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
  margin-left: 10px;
`;

export const Updated = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  opacity: 0.2;
  margin-top: 5px;
`;

export const ForecastBlock = styled(GrayBlock)`
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

export const ForecastColumn = styled.div``;

export const ForecastValue = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  color: ${({ value }) =>
    (value > 0 && "#56cf12") ||
    (value < 0 && "#FF4E4E") ||
    (value === 0 && "#fff")};
  margin-bottom: 7px;
  text-align: center;
`;

export const ForecastText = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 15px;
  line-height: 153%;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
`;

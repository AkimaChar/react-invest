import styled from "styled-components";
import { GrayBlock } from "../../index.styled";

// header

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 35px;
  margin-bottom: 23px;
  @media (max-width: 1250px) {
    grid-template-columns: auto 1fr;
    margin: 0 auto;
    margin-bottom: 23px;
    width: fit-content;
  }
  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

export const PortfolioStatisticContainer = styled(GrayBlock)`
  border-radius: 30px 30px 0px 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  width: fit-content;
  margin: 0 auto;
  grid-column: 2;
  display: grid;
  grid-template-columns: auto auto auto;
  max-width: 580px;
  align-items: center;
  align-self: flex-end;
  height: fit-content;
  @media (max-width: 1250px) {
    grid-column: 1;
  }
  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    overflow: hidden;
    align-items: stretch;
    border: none;
  }
`;

export const PortfolioStatisticColumn = styled.div`
  padding: 20px 30px;
  &:nth-of-type(2) {
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    border-left: 1px solid rgba(255, 255, 255, 0.05);
  }
  font-weight: 400;
  font-size: 17px;
  line-height: 147%;
  color: #fff;
  @media (max-width: 1420px) {
    font-size: 14px;
    padding: 25px 20px;
  }
  @media (max-width: 680px) {
    display: inline-block;
    text-align: center;
    padding: 20px;
    font-size: 17px;
    line-height: 147%;
    &:nth-of-type(2) {
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      border-left: none;
      border-right: none;
    }
  }
`;

export const PercentStats = styled.span`
  color: #00a3ff;
  font-weight: 500;
`;

export const CoinsList = styled(GrayBlock)`
  grid-column: 3;
  grid-row: 1 / 3;
  max-width: 210px;
  min-width: 170px;
  @media (max-width: 1250px) {
    grid-column: 2;
  }
  height: 255px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0;
  }
  @media (max-width: 1420px) {
    height: 225px;
  }
  @media (max-width: 680px) {
    order: 5;
    height: 255px;
    max-width: 100%;
    min-width: 250px;
  }
`;

export const CoinItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  background-color: ${({ active }) =>
    active ? "rgba(255, 255, 255, 0.3)" : "transparent"};
  &:last-of-type {
    border: none;
  }
  cursor: default;
  transition: 300ms;
  &:hover {
    background-color: ${({ active }) =>
      active ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.15)"};
  }
  @media (max-width: 1420px) {
    padding: 15px 10px;
  }
  @media (max-width: 680px) {
    padding: 20px;
  }
`;

export const CoinItemLogo = styled.img`
  width: 45px;
  height: 45px;
`;

export const CoinName = styled.span`
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  text-transform: uppercase;
  @media (max-width: 1420px) {
    font-size: 16px;
  }
  @media (max-width: 680px) {
    font-size: 20px;
  }
`;

export const SearchContainer = styled.div`
  grid-column: 2;
  @media (max-width: 1250px) {
    grid-column: 1;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  @media (max-width: 1420px) {
    gap: 30px;
  }
  @media (max-width: 680px) {
    flex-direction: column;
    gap: 23px;
  }
`;

export const SearchTitle = styled.span`
  font-weight: normal;
  font-size: 30px;
  line-height: 123%;
  color: #ffffff;
  @media (max-width: 1420px) {
    font-size: 24px;
  }
  @media (max-width: 680px) {
    font-size: 35px;
  }
  @media (max-width: 680px) {
    font-size: 8vw;
  }
`;

export const SearchInput = styled.input`
  display: block;
  max-width: 280px;
  min-width: 100px;
  opacity: 0.2;
  border: 1px solid #ffffff;
  border-radius: 30px;
  transition: 300ms;
  padding: 20px;
  padding-left: 50px;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  &:focus {
    opacity: 1;
  }
  background-repeat: no-repeat;
  background-size: 22px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEc0lEQVR4nO2aT2wVRRzHv0OhxWIjihUMWhQNqRoqTYxB5YAHEi0mmIJGT3jw6olgiB6MxhjjvyCoMTaevNcoysE/0fgnFYkGjIrthcRUQAMcLPS1UN/Hw876pi/t2/fm7cwrcT+X3Zfs+32/85vd2ZnfrFRQUFBQUPC/xYQWAK6UdJukmyWtlNQpaUbSpKQTksYkHTPGTIb2Eg1gA/AycAQok8008BWwB7i+1f69ABYBDwE/1NHgWvwDHAA2trpNdQPcbXvbZcb26jPA/cBNwOXOf5YDfTZprwO/zpGMYaCnlW2rCdAOvMrs2/xP4GlgtUe8fuBtYMqJNwHsDOG/KYBuYMQxeh54Crgsh9irgfeqEjsELM7De9MAPcCoY+474MYAOluAU47OAWBp3jqNmuquavwQsCSg3irgsKP3PtAWSi/LTHvVbf8SEGMu0QV86ejuDa05n5HXHBPvxGi8o30FlTdNGRiMpZ0auJPkHQ1wCGiPakD/jT1nrIfTwNWxhNuc7J8PMeA14OVR5y58K5bow47oniiitf18ar1cANbEEEyntyfJ4T2fg587nA7ZF1qsfyH1fgrwifV0BugIKfSKFZoBrg0m1CBVY8G2kEJHrcgXwUQ8ADqprBne8I2zKEPkKknr7c/PfUVCYAsoI/bnZt84NRMg6VZVqkbf+4oE5JA9rsNzOp6VgHXO+ZiPQGBG7XGJpLU+AbISsMI5P+kjEJhTzvmKea+qQVYC0grORWPMtI9AYP52zrt8AmQloFznda3CLZCU572qBlkNm7DHNqDTRyAwbq+f8wmQlQD3GQs/524ct2D6h0+ArAT85pz3+ggE5hZ7nJI07hMgKwHHJKWD3z0+AoHZZI8/GmPyHwOMMSVVJhtbfARCAayU1Gd/fu0bp57R/aA99gHra14Zl0dU8f9BMBXgOqcUtj+YUAOQbMP9bD0dJ3RtEvjQik0Cq4KK1edn0FkK744huNERfDe4YG0vHcCYUwxZHkt42IqWAe/lZw4+nnM6Y1dM4R7gnBUeB7qjiVc83GsrU5BUqeOW5oHHnOyPAMsiaveS7AUAlIDbY2lXGxlykvAZzp5/QM1e4HdHt3Xb5cBikl3alMME/KwF2Oz0PMBFYCCUXr2mlpLs0qacBrbnrNEBPOs882njISmGtjwJbcBeZnMQ2NBkXAM8yOwt+BKwExigUgmeArbm1Z5mDA8CfzlmyzYRO2jgYwbgGuAJ4KeqpB7BGfDyTkIuU0iS8vnzkh5XUqBMKUn6VklFeVTJd4ETSio5XZJuULLM3iSpX7PXJmclvSBpvzHmQpXegKRhSR1KVqvbjTEf59GWpgDWAPuAs/hzHNhNxgxvQT4OKSQD2DbgTeAXKoPXXJSAb4AXgbtoYGEzRxIeaNRrlC88SDYt1iopXS+ThJIa3glJ477FDBu7+nHYYYz5qGnTlxLAffZOguSz23CbpQuVIgkqkiBJArY6A+M0sBCLuWGpSsKTrfbTEuwrdRcRVqsFBQUFBQWXKP8CyVABbmXdbTAAAAAASUVORK5CYII=");
  background-position: 20px center;

  @media (max-width: 680px) {
    width: 282px;
    max-width: 100%;
    padding: 25px;
    padding-left: 60px;
    border-radius: 40px;
  }
`;

// new deal

export const NewDealContainer = styled(GrayBlock)`
  padding: 25px 20px;
  background: rgba(255, 255, 255, 0.02);
  margin-bottom: 60px;
  @media (max-width: 1420px) {
    padding: 20px;
  }
  @media (max-width: 1230px) {
    padding: 20px 10px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 680px) {
    padding: 4.4vw 2.2vw;
  }
`;

export const NewDealHeader = styled.div`
  display: grid;
  grid-template-columns: 120px 80px 55px 100px 390px 1fr;
  gap: 20px;
  margin-left: 20px;
  margin-bottom: 22px;
  @media (max-width: 1420px) {
    margin-bottom: 20px;
    grid-template-columns: 120px 80px 55px 80px 340px auto 1fr;
  }
  @media (max-width: 1230px) {
    margin: 0;
    margin-bottom: 20px;
    gap: 0;
    grid-template-columns: 3fr 2fr 2fr;
    > * {
      padding: 0 25px;
    }
  }
  @media (max-width: 680px) {
    margin-bottom: 4.4vw;
    > * {
      padding: 0 5.4vw;
    }
  }
`;

export const NewDealHeaderText = styled.span`
  font-weight: normal;
  font-size: 15px;
  line-height: 120%;
  color: rgba(255, 255, 255, 0.4);
  @media (max-width: 1420px) {
    font-size: 12px;
  }
  @media (max-width: 1230px) {
    &:nth-of-type(3),
    &:nth-of-type(5),
    &:nth-of-type(6) {
      display: none;
    }
  }
  @media (max-width: 680px) {
    font-size: 3.2vw;
  }
`;

export const NewDealTemplate = styled(GrayBlock)`
  padding: 20px;
  display: grid;
  grid-template-columns: 120px 80px 55px 100px 390px auto 1fr;
  gap: 20px;
  font-weight: normal;
  align-items: center;
  backdrop-filter: blur(0);
  @media (max-width: 1420px) {
    grid-template-columns: 120px 80px 50px 80px 340px auto 1fr;
  }
  @media (max-width: 1230px) {
    grid-template-columns: 3fr 2fr 2fr;
    gap: 0;
    padding: 0;
    align-items: stretch;
    > * {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 25px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    }
    position: relative;
  }
  @media (max-width: 680px) {
    > * {
      padding: 5.4vw;
    }
  }
`;

export const NewDeal_Coin = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row;
  justify-content: flex-start;
  @media (max-width: 680px) {
    gap: 2.2vw;
  }
`;

export const NewDeal_CoinLogo = styled.div`
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

export const NewDeal_CoinName = styled.span`
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

export const NewDeal_Price = styled.span`
  font-size: 17px;
  line-height: 147%;
  color: #ffffff;
  @media (max-width: 1420px) {
    font-size: 14px;
  }
  @media (max-width: 1230px) {
    font-size: 17px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  }
  @media (max-width: 680px) {
    font-size: 3.7vw;
  }
`;

export const NewDeal_Qty = styled.span`
  font-size: 17px;
  line-height: 118%;
  color: #00a3ff;
  cursor: pointer;
  @media (max-width: 1420px) {
    font-size: 14px;
  }
  @media (max-width: 1230px) {
    font-size: 17px;
    grid-column: 1 / span 3;
  }
  @media (max-width: 680px) {
    font-size: 3.7vw;
  }
`;

export const NewDeal_Value = styled(NewDeal_Qty)`
  color: #fff;
`;

export const NewDeal_Sum = styled(NewDeal_Price)`
  @media (max-width: 1420px) {
    grid-column: 3;
    grid-row: 1;
  }
`;

export const NewDeal_Forecast = styled(GrayBlock)`
  background: rgba(255, 255, 255, 0.06);
  padding: 19px 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 70px;
  gap: 15px;
  align-items: baseline;
  padding-left: 23px;
  backdrop-filter: blur(0);
  @media (max-width: 1420px) {
    grid-template-columns: 1fr 1fr 60px;
  }
`;

export const NewDeal_Time = styled(NewDeal_Value)``;

export const NewDeal_RadioGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  input {
    display: none;
  }
  input:checked ~ label {
    color: #00a3ff;
  }
`;

export const RadioGroupDivider = styled.span`
  font-size: 17px;
  line-height: 147%;
  margin: 0 5px;
  color: #fff;
  @media (max-width: 1420px) {
    font-size: 14px;
  }
  @media (max-width: 680px) {
    font-size: 3.7vw;
  }
`;

export const NewDeal_RadioButton = styled.label`
  font-size: 17px;
  line-height: 147%;
  color: #fff;
  cursor: pointer;
  text-transform: capitalize;
  transition: 300ms;
  &:hover {
    color: #00a3ff;
  }
  @media (max-width: 1420px) {
    font-size: 14px;
  }
  @media (max-width: 1230px) {
    font-size: 17px;
  }
  @media (max-width: 680px) {
    font-size: 3.7vw;
  }
`;

export const NewDeal_Action = styled(GrayBlock)`
  background: rgba(255, 255, 255, 0.015);
  padding: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1230px) {
    border: none;
    position: absolute;
    bottom: -47px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
    padding: 30px 40px;
    > * {
      font-weight: 500;
      font-size: 25px;
      line-height: 1;
    }
    span {
      margin: 0 1ch;
    }
  }
  @media (max-width: 680px) {
    bottom: -10.2vw;
    padding: 6.5vw 8.7vw;
    > * {
      font-size: 5.4vw;
    }
  }
`;

export const CommentButton = styled(GrayBlock)`
  cursor: pointer;
  background: rgba(255, 255, 255, 0.02);
  padding: 17px 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms;
  margin-right: 10px;
  svg {
    width: 30px;
    height: 30px;
    path {
      fill: #00a3ff;
    }
  }
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  @media (max-width: 1420px) {
    padding: 17px 20px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const CommentContainer = styled(GrayBlock)`
  padding: 10px 15px;
  border-radius: 16px;
  textarea {
    color: #fff;
  }
`;

export const NewDeal_TimeLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  svg {
    width: 12px;
    height: 8px;
  }
`;
export const NewDeal_TimeContainer = styled(CommentContainer)`
  padding: 0;
  overflow: hidden;
  backdrop-filter: blur(0);
  min-width: 120px;
  @media (max-width: 1230px) {
    background-color: #2e3238;
  }
`;
export const NewDeal_TimeItem = styled.p`
  width: 100%;
  font-size: 17px;
  line-height: 147%;
  color: #ffffff;
  transition: 300ms;
  margin: 0;
  padding: 5px 10px;
  cursor: pointer;
  ${({ active }) => active && "background-color: rgba(255, 255, 255, 0.1);"}
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

// history

export const HistoryHeader = styled.div`
  padding: 0 30px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 2fr auto;
  margin-bottom: 25px;
  @media (max-width: 1024px) {
    grid-template-columns: 2fr 1fr 2.5fr 4fr auto;
  }
  @media (max-width: 870px) {
    grid-template-columns: 2fr 1fr 2fr;
    gap: 0;
    padding: 0;
  }
  @media (max-width: 680px) {
    margin-bottom: 5.4vw;
  }
`;

export const HistoryText = styled(NewDealHeaderText)`
  &:last-of-type {
    text-align: right;
  }
  @media (max-width: 1230px) {
    & {
      display: block !important;
    }
  }
  @media (max-width: 870px) {
    &:nth-of-type(4),
    &:nth-of-type(5) {
      display: none !important;
    }
    padding: 0 30px;
  }
  @media (max-width: 680px) {
    font-size: 0 6.5vw;
    padding: 0;
    &:first-child {
      padding-left: 6.5vw;
    }
    &:nth-child(2) {
      padding: 0 2vw;
    }
    &:nth-child(3) {
      text-align: center;
      padding-right: 6.5vw;
    }
  }
`;

export const DealsList = styled.div`
  display: grid;
  gap: 18px;
  grid-auto-rows: 1fr;
`;

export const DealContainer = styled(GrayBlock)`
  padding: 30px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 2fr auto;
  align-items: center;
  @media (max-width: 1024px) {
    grid-template-columns: 2fr 1fr 2.5fr 4fr auto;
  }
  @media (max-width: 870px) {
    grid-template-columns: 2fr 1fr 2fr;
    gap: 0;
    padding: 0;
    align-items: stretch;
    > * {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 25px 30px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    }
  }
  @media (max-width: 680px) {
    > * {
      padding: 4.4vw 0;
      &:first-child {
        padding-left: 6.5vw;
      }
      &:nth-child(2) {
        padding: 0 2vw;
      }
    }
  }
`;

export const BlueText = styled.span`
  font-size: 20px;
  line-height: 125%;
  color: #00a3ff;
  @media (max-width: 1420px) {
    font-size: 16px;
  }
  @media (max-width: 680px) {
    font-size: 4.4vw;
  }
`;

export const Forecast = styled.div`
  span:last-of-type {
    color: #fff;
    font-size: 15px;
    margin-left: 1ch;
    @media (max-width: 1420px) {
      font-size: 13px;
    }
  }
  @media (max-width: 870px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 3.2vw;
    padding-right: 6.5vw;
    span:last-of-type {
      font-size: 3.2vw;
      line-height: 3.2vw;
      margin-left: 1.6vw;
    }
  }
`;

export const Comment = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 153%;
  color: #ffffff;
  opacity: 0.4;
  @media (max-width: 1420px) {
    font-size: 14px;
  }
  @media (max-width: 870px) {
    p {
      margin-bottom: 17px;
      font-weight: 400;
    }
    opacity: 1;
    grid-column: 1 / span 3;
    font-weight: 500;
    font-size: 20px;
    line-height: 115%;
    color: rgba(255, 255, 255, 0.4);
  }
  @media (max-width: 680px) {
    padding-left: 6.5vw;
    padding-right: 6.5vw;
    p {
      font-size: 3vw;
    }
    font-size: 4.4vw;
  }
`;

export const Action = styled.span`
  font-size: 20px;
  line-height: 125%;
  color: #ffffff;
  text-align: right;
  text-transform: capitalize;
  @media (max-width: 1420px) {
    font-size: 17px;
  }
  @media (max-width: 870px) {
    border: none;
    text-align: left;
    p {
      margin-bottom: 17px;
      font-weight: 400;
    }
    opacity: 1;
    grid-column: 1 / span 3;
    font-weight: normal;
    font-size: 20px;
    line-height: 125%;
    color: #ffffff;
  }
  @media (max-width: 680px) {
    padding-left: 6.5vw;
    padding-right: 6.5vw;
    p {
      font-size: 3vw;
    }
    font-size: 4.4vw;
  }
`;

// mobile

export const NewDeal_Title = styled.p`
  font-size: 13px;
  line-height: 1;
  color: #ffffff;
  margin-bottom: 10px;
`;

export const NewDeal_ForecastMobile = styled.div`
  font-size: 17px;
  grid-column: 1 / span 3;
`;

export const NewDeal_CommentRow = styled.div`
  grid-column: 1 / span 3;
  textarea {
    font-weight: 500;
    font-size: 20px;
    line-height: 115%;
    color: #ffffff;
    opacity: 0.4;
  }
  margin-bottom: 70px;
  @media (max-width: 680px) {
    textarea {
      font-size: 4.4vw;
    }
    margin-bottom: 12vw;
  }
`;

export const NewDeal_ForecastModal = styled(GrayBlock)`
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  > span {
    width: 80px;
    margin-left: 10px;
  }
`;

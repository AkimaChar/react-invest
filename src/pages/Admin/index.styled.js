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
`;

export const SearchTitle = styled.span`
  font-weight: normal;
  font-size: 30px;
  line-height: 37px;
  color: #ffffff;
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
  background-position: 20px center;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEc0lEQVR4nO2aT2wVRRzHv0OhxWIjihUMWhQNqRoqTYxB5YAHEi0mmIJGT3jw6olgiB6MxhjjvyCoMTaevNcoysE/0fgnFYkGjIrthcRUQAMcLPS1UN/Hw876pi/t2/fm7cwrcT+X3Zfs+32/85vd2ZnfrFRQUFBQUPC/xYQWAK6UdJukmyWtlNQpaUbSpKQTksYkHTPGTIb2Eg1gA/AycAQok8008BWwB7i+1f69ABYBDwE/1NHgWvwDHAA2trpNdQPcbXvbZcb26jPA/cBNwOXOf5YDfTZprwO/zpGMYaCnlW2rCdAOvMrs2/xP4GlgtUe8fuBtYMqJNwHsDOG/KYBuYMQxeh54Crgsh9irgfeqEjsELM7De9MAPcCoY+474MYAOluAU47OAWBp3jqNmuquavwQsCSg3irgsKP3PtAWSi/LTHvVbf8SEGMu0QV86ejuDa05n5HXHBPvxGi8o30FlTdNGRiMpZ0auJPkHQ1wCGiPakD/jT1nrIfTwNWxhNuc7J8PMeA14OVR5y58K5bow47oniiitf18ar1cANbEEEyntyfJ4T2fg587nA7ZF1qsfyH1fgrwifV0BugIKfSKFZoBrg0m1CBVY8G2kEJHrcgXwUQ8ADqprBne8I2zKEPkKknr7c/PfUVCYAsoI/bnZt84NRMg6VZVqkbf+4oE5JA9rsNzOp6VgHXO+ZiPQGBG7XGJpLU+AbISsMI5P+kjEJhTzvmKea+qQVYC0grORWPMtI9AYP52zrt8AmQloFznda3CLZCU572qBlkNm7DHNqDTRyAwbq+f8wmQlQD3GQs/524ct2D6h0+ArAT85pz3+ggE5hZ7nJI07hMgKwHHJKWD3z0+AoHZZI8/GmPyHwOMMSVVJhtbfARCAayU1Gd/fu0bp57R/aA99gHra14Zl0dU8f9BMBXgOqcUtj+YUAOQbMP9bD0dJ3RtEvjQik0Cq4KK1edn0FkK744huNERfDe4YG0vHcCYUwxZHkt42IqWAe/lZw4+nnM6Y1dM4R7gnBUeB7qjiVc83GsrU5BUqeOW5oHHnOyPAMsiaveS7AUAlIDbY2lXGxlykvAZzp5/QM1e4HdHt3Xb5cBikl3alMME/KwF2Oz0PMBFYCCUXr2mlpLs0qacBrbnrNEBPOs882njISmGtjwJbcBeZnMQ2NBkXAM8yOwt+BKwExigUgmeArbm1Z5mDA8CfzlmyzYRO2jgYwbgGuAJ4KeqpB7BGfDyTkIuU0iS8vnzkh5XUqBMKUn6VklFeVTJd4ETSio5XZJuULLM3iSpX7PXJmclvSBpvzHmQpXegKRhSR1KVqvbjTEf59GWpgDWAPuAs/hzHNhNxgxvQT4OKSQD2DbgTeAXKoPXXJSAb4AXgbtoYGEzRxIeaNRrlC88SDYt1iopXS+ThJIa3glJ477FDBu7+nHYYYz5qGnTlxLAffZOguSz23CbpQuVIgkqkiBJArY6A+M0sBCLuWGpSsKTrfbTEuwrdRcRVqsFBQUFBQWXKP8CyVABbmXdbTAAAAAASUVORK5CYII=");
`;

// new deal

export const NewDealContainer = styled(GrayBlock)`
  padding: 25px 20px;
  background: rgba(255, 255, 255, 0.02);
  margin-bottom: 60px;
`;

export const NewDealHeader = styled.div`
  display: grid;
  grid-template-columns: 120px 80px 55px 100px 410px 70px 180px;
  gap: 20px;
  margin-left: 20px;
  margin-bottom: 22px;
`;

export const NewDealHeaderText = styled.span`
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.4);
`;

export const NewDealTemplate = styled(GrayBlock)`
  padding: 20px;
  display: grid;
  grid-template-columns: 120px 80px 55px 100px 410px 70px 180px;
  gap: 20px;
  font-weight: normal;
  align-items: center;
`;

export const NewDeal_Coin = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
`;

export const NewDeal_CoinName = styled.span`
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  opacity: 0.5;
  text-transform: uppercase;
`;

export const NewDeal_Price = styled.span`
  font-size: 17px;
  line-height: 147%;
  color: #ffffff;
`;

export const NewDeal_Qty = styled.span`
  font-size: 17px;
  line-height: 118%;
  color: #00a3ff;
  cursor: poiner;
`;

export const NewDeal_Sum = styled(NewDeal_Price)``;

export const NewDeal_Forecast = styled(GrayBlock)`
  background: rgba(255, 255, 255, 0.015);
  padding: 19px 15px;
  display: grid;
  grid-template-columns: 100px 170px 80px;
  gap: 15px;
  align-items: baseline;
  width: fit-content;
`;

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
`;

export const NewDeal_Action = styled(GrayBlock)`
  background: rgba(255, 255, 255, 0.015);
  padding: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NewDeal_QtyDropdown = styled(GrayBlock)`
  padding: 10px 20px;
  border-radius: 12px;
`;

export const NewDeal_QtyInput = styled.input``;

export const CommentButton = styled(GrayBlock)`
  cursor: pointer;
  background: rgba(255, 255, 255, 0.02);
  padding: 17px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms;
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
`;

export const CommentContainer = styled(GrayBlock)`
  padding: 10px 15px;
  border-radius: 16px;
  textarea {
    color: #fff;
  }
`;

// history

export const HistoryHeader = styled.div`
  padding: 0 30px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-bottom: 25px;
`;

export const HistoryText = styled.span`
  font-size: 15px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.4);
  &:last-of-type {
    text-align: right;
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
`;

export const BlueText = styled.span`
  font-size: 20px;
  line-height: 125%;
  color: #00a3ff;
`;

export const Forecast = styled.div`
  span:last-of-type {
    color: #fff;
    font-size: 15px;
    margin-left: 1ch;
  }
`;

export const Comment = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 153%;
  color: #ffffff;
  opacity: 0.4;
`;

export const Action = styled.span`
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  text-align: right;
  text-transform: capitalize;
`;

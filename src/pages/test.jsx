import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import styled from "styled-components";

const CoinContainer = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 300px;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
    display: block;
  }
`;

const Name = styled.p`
  font-weight: 300;
  font-size: 30px;
  line-height: 37px;
  color: #ffffff;
  margin: 0;
  text-align: center;
  text-transform: capitalize;
`;

const Price = styled.span`
  font-weight: 400;
  font-size: 30px;
  line-height: 37px;
  color: #ffffff;
  text-align: right;
`;

export default function TestCoinsList() {
  const { coins } = useSelector(state => state.coins);
  console.log(coins);
  return (
    <div>
      <Title mb={30}>Coins</Title>
      {coins.map(coin => (
        <Link to={`/coins/${coin.name}`}>
          <CoinContainer>
            <img src={coin.logo} alt={coin.short_name} />
            <Name>{coin.name}</Name>
            <Price>${coin.price}</Price>
          </CoinContainer>
        </Link>
      ))}
    </div>
  );
}

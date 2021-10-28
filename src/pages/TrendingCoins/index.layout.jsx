import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import Title from "../../components/Title";
import {
  CoinBlock,
  CoinBlock_Logo,
  CoinBlock_Name,
  Container,
} from "../../index.styled";
import * as TC from "./index.styled";

export default function TrendingCoinsLayout({
  activeFilter,
  loading,
  coins,
  handleUpdateFilter,
}) {
  return (
    <Container pl={60}>
      <Title lines={false} mb={2}>
        Trending Coins
      </Title>
      <Title small>Uptaded 5th February</Title>
      <TC.Filters>
        <TC.Filter
          onClick={() => handleUpdateFilter("month")}
          active={activeFilter === "month"}
        >
          month
        </TC.Filter>
        <TC.Filter
          onClick={() => handleUpdateFilter("week")}
          active={activeFilter === "week"}
        >
          week
        </TC.Filter>
        <TC.Filter
          onClick={() => handleUpdateFilter("day")}
          active={activeFilter === "day"}
        >
          day
        </TC.Filter>
      </TC.Filters>
      <TC.RatingContainer>
        <TC.RatingHeader>
          <TC.RatingHeaderText>Coin</TC.RatingHeaderText>
          <TC.RatingHeaderText>Deals</TC.RatingHeaderText>
          <TC.RatingHeaderText center>What to do?</TC.RatingHeaderText>
          <TC.RatingHeaderText>Forecast</TC.RatingHeaderText>
          {/* <TC.RatingHeaderText>Will forecast work?</TC.RatingHeaderText> */}
        </TC.RatingHeader>
        {loading ? (
          <Loader />
        ) : (
          <TC.CoinsRatingContainer>
            {coins.map((el, id) => (
              <TC.CoinContainer key={el.coin._id}>
                <TC.CoinRatingNumber>#{id + 1}</TC.CoinRatingNumber>
                <Link to={`/coins/${el.coin.name}`}>
                  <CoinBlock>
                    <CoinBlock_Logo coin={el.coin.logo}>
                      <img src={el.coin.logo} alt={el.coin.name} />
                    </CoinBlock_Logo>
                    <CoinBlock_Name>{el.coin.short_name}</CoinBlock_Name>
                  </CoinBlock>
                </Link>
                <TC.DealsBlock>
                  <TC.DealText>
                    <TC.DealCount>{el.buy}</TC.DealCount> buy
                  </TC.DealText>
                  <TC.DealText>
                    <TC.DealCount>{el.sell}</TC.DealCount> sell
                  </TC.DealText>
                </TC.DealsBlock>
                <TC.Action buy={el.buy >= el.sell}>
                  {el.buy >= el.sell ? "Buy" : "Sell"}
                </TC.Action>
                <TC.DealsBlock>
                  <TC.DealCount minus={el.forecast.value < 0}>
                    {el.forecast.value > 0 && "+"}
                    {el.forecast.value}%
                  </TC.DealCount>{" "}
                  per {el.forecast.time}
                </TC.DealsBlock>
              </TC.CoinContainer>
            ))}
          </TC.CoinsRatingContainer>
        )}
      </TC.RatingContainer>
      <Footer />
    </Container>
  );
}

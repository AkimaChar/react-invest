import { format } from "date-fns";
import React from "react";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import { Container } from "../../index.styled";
import * as C from "./index.styled";

export default function CoinLayout({ coin }) {
  return (
    <Container>
      <Title mb={35}>{coin.short_name.toUpperCase()} Page / Forecast</Title>
      <C.HeaderInfo>
        <C.ShortInfo>
          <C.Logo src={coin.logo} alt={coin.short_name} />
          <C.Name>{coin.short_name}</C.Name>
        </C.ShortInfo>
        <C.Updated>
          Updated {format(new Date(coin.updated), "do MMMM")}
        </C.Updated>
        <div>
          <C.PriceInfo>Current price:</C.PriceInfo>
          <C.Price>{coin.price} USD</C.Price>
        </div>
      </C.HeaderInfo>
      <C.ForecastBlock>
        {Object.keys(coin.forecast).map(type => (
          <C.ForecastColumn>
            {renderForecast(coin.forecast, type)}
            <C.ForecastText>Forecast for the {type}</C.ForecastText>
          </C.ForecastColumn>
        ))}
      </C.ForecastBlock>
      <Footer />
    </Container>
  );
}

const renderForecast = (forecast, type) => {
  return (
    <C.ForecastValue value={forecast[type]}>
      {forecast[type] > 0 && "+"}
      {forecast[type]}%
    </C.ForecastValue>
  );
};

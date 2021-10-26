import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Loader from "../../components/Loader";
import CoinLayout from "./index.layout";

export default function Coin() {
  const params = useParams();
  const coin = useSelector(state => state.coins.coins).find(
    c => c.name === params.coin
  );

  console.log(coin);

  return !!coin ? <CoinLayout coin={coin} /> : <Loader />;
}

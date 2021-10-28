import React, { useEffect, useState } from "react";
import "../../style/desktop/coins_rating.css";
import TrendingCoinsLayout from "./index.layout";
import { getTrendingCoinsService } from "../../services/coins";

export default function TrendingCoins() {
  const [activeFilter, setActiveFilter] = useState("month");
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const handleUpdateFilter = filter => {
    setActiveFilter(filter);
  };

  const fetchTrendingCoins = async () => {
    const { data } = await getTrendingCoinsService(activeFilter);
    setCoins(data);
    console.log(data);
    setLoading(false);
  };

  useEffect(() => {
    if (activeFilter) {
      setLoading(true);
      fetchTrendingCoins();
    }
  }, [activeFilter]);
  return (
    <TrendingCoinsLayout
      activeFilter={activeFilter}
      loading={loading}
      coins={coins}
      handleUpdateFilter={handleUpdateFilter}
    />
  );
}

import React, { useState } from "react";
import "../../style/desktop/coins_rating.css";
import "../../style/desktop/account.css";
import TrendingCoinsLayout from "./index.layout";

export default function TrendingCoins() {
  const [activeFilter, setActiveFilter] = useState("week");
  const handleUpdateFilter = e => {
    setActiveFilter(e.target.id);
  };
  return (
    <TrendingCoinsLayout
      activeFilter={activeFilter}
      handleUpdateFilter={handleUpdateFilter}
    />
  );
}

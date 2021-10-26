import React from "react";

export default function TrendingCoinsLayout({
  activeFilter,
  handleUpdateFilter,
}) {
  return (
    <div>
      <header className="header wrap_container">
        <h1>Trending Coins</h1>
      </header>
      <div className="wrap_container last-deals_container coins_rating_container">
        <div className="last_deal-title">
          <hr className="_hr" />
          <h3>Uptaded 5th February</h3>
          <hr className="_hr" />
        </div>
        <div className="filter">
          <button
            className={activeFilter === "month" && "active-filter"}
            onClick={handleUpdateFilter}
            id="month"
          >
            За месяц
          </button>
          <button
            className={activeFilter === "week" && "active-filter"}
            onClick={handleUpdateFilter}
            id="week"
          >
            За неделю
          </button>
          <button
            className={activeFilter === "day" && "active-filter"}
            onClick={handleUpdateFilter}
            id="day"
          >
            За день
          </button>
        </div>
        <div className="last_deals-body">
          <div className="investors_container deals">
            <div className="columns_names">
              <span className="last-deal_name coin_name">Coin</span>
              <span className="last-deal_type coin_deals">Сделки</span>
              <span className="last-deal_type coin_deal-type">Что делать?</span>
              <span className="last-deal_pred coin_pred">Прогноз</span>
              <span className="last-deal_poll coin_poll">Проноз сыграет?</span>
            </div>
            <div className="_container">
              <div className="deal_link">
                <a className="security_container" href="coin_page.html">
                  <img src="../../style/img/btc.png" alt="#" />
                  <span>BTC</span>
                </a>
                <div className="coin-deals">
                  <span>10</span>
                  Buy
                  <br />
                  <span>164</span>Sell
                </div>
                <div className="deal_type">
                  <span className="buy">Покупать</span>
                </div>
                <div className="pred_container">
                  <span className="decrease">-16%</span>мес.
                </div>
                <form className="poll_container">
                  <button className="like" type="sumbit" value="agree"></button>
                  <a className="agree_">235</a>
                  <button
                    className="dislike"
                    type="sumbit"
                    value="disagree"
                  ></button>
                  <a className="disagree_">15</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Deal({ deal }) {
  return (
    <div className="deal_link">
      <a className="security_container" href="coin_page.html">
        <img src="../../style/img/btc.png" alt={deal.coin.name} />
        <span>{deal.coin.name}</span>
      </a>
      <div className="coin-deals">
        <span>
          {/* {deal.coin.deals?.filter(deal => deal.type === "buy").length || 0} */}
        </span>
        Buy
        <br />
        <span>
          {/* {coin.deals?.filter(deal => deal.type === "sell").length || 0} */}
        </span>
        Sell
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
        <button className="dislike" type="sumbit" value="disagree"></button>
        <a className="disagree_">15</a>
      </form>
    </div>
  );
}

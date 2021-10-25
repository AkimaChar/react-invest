import React from 'react'
import '../../style/desktop/css.css'
import '../../style/desktop/coins_rating.css'
import '../../style/desktop/account.css'



export default function TrendingCoins() {
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
				<div class="filter">
					<a class="active-filter" href="" onclick="toggleFilter(this)" id="month">За месяц</a>
					<a href="" onclick="toggleFilter(this)" id="week">За неделю</a>
					<a href="" onclick="toggleFilter(this)" id="dat">За день</a>
				</div>
				<div class="last_deals-body">
					<div class="investors_container deals">
						<div class="columns_names">
							<span class="last-deal_name coin_name">Coin</span>
							<span class="last-deal_type coin_deals">Сделки</span>
							<span class="last-deal_type coin_deal-type">Что делать?</span>
							<span class="last-deal_pred coin_pred">Прогноз
							</span>
							<span class="last-deal_poll coin_poll">Проноз сыграет?</span>
						</div>
						<div class="_container">
							<div class="investor_link deal_link">
								<div class="deal_link">
									<a class="security_container" href="coin_page.html">
										<img src="../../style/img/btc.png" alt="#" />
										<span>BTC</span>
									</a>
									<div class="coin-deals">
										<span>10</span>
										Buy<br />
										<span>164
										</span>Sell</div>
									<div class="deal_type">
										<span class="buy">Покупать</span>
									</div>
									<div class="pred_container">
										<span class="decrease">-16%</span>мес.</div>
									<form class="poll_container">
										<button class="like" type="sumbit" value="agree"></button>
										<a class="agree_">235</a>
										<button class="dislike" type="sumbit" value="disagree"></button>
										<a class="disagree_">15</a>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}